
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import { createServer } from 'http';
import { Server } from 'socket.io';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '5mb' }));

const limiter = rateLimit({ windowMs: 60*1000, max: 120 });
app.use(limiter);

// simple file-based "db"
const DATA_DIR = path.join(process.cwd(), 'data');
const SEED_PATH = path.join(DATA_DIR, 'seed.json');
const db = JSON.parse(fs.readFileSync(SEED_PATH, 'utf-8'));

function saveDb() { fs.writeFileSync(SEED_PATH, JSON.stringify(db, null, 2)); }

// hash plaintext seeded passwords at startup (idempotent)
db.users.forEach(u => {
  if (!u.password.startsWith('$2a$')) {
    u.password = bcrypt.hashSync(u.password, 8);
  }
});
saveDb();

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Swagger
const openapiYaml = `openapi: 3.0.0
info:
  title: Streaming Test API
  version: 1.0.0
servers:
  - url: http://localhost:${PORT}/api
paths:
  /auth/login:
    post:
      summary: Login with email + password
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email: { type: string }
                password: { type: string }
      responses:
        "200":
          description: OK
  /auth/register:
    post:
      summary: Register user
      responses: { "201": { description: Created } }
  /profile:
    get:
      security: [ { bearerAuth: [] } ]
      summary: Get current profile
      responses: { "200": { description: OK } }
  /lanes:
    get:
      summary: Get swimlanes
      responses: { "200": { description: OK } }
  /titles:
    get:
      summary: List or search titles
      parameters:
        - in: query
          name: search
          schema: { type: string }
  /titles/{id}:
    get:
      summary: Get title by id
      parameters:
        - in: path
          name: id
          schema: { type: integer }
  /events:
    post:
      summary: Send analytics event
  /upload:
    post:
      summary: Upload a file
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
`;
const openapiDoc = YAML.parse(openapiYaml);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));

// Auth
app.post('/api/auth/register', (req, res) => {
  const { email, password, name } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });
  if (db.users.find(u => u.email === email)) return res.status(409).json({ error: 'email exists' });
  const id = db.users.reduce((m,u)=>Math.max(m,u.id),0) + 1;
  const user = { id, email, name: name || email.split('@')[0], role: 'user', password: bcrypt.hashSync(password, 8) };
  db.users.push(user); saveDb();
  res.status(201).json({ id, email, name: user.name });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const user = db.users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password || '', user.password)) {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});

app.get('/api/profile', authMiddleware, (req, res) => {
  const user = db.users.find(u => u.id === req.user.id);
  res.json({ id: user.id, email: user.email, name: user.name, role: user.role });
});

// Content
app.get('/api/lanes', (req, res) => {
  const lanes = db.lanes.map(l => ({
    id: l.id, title: l.title,
    items: l.items.map(id => db.titles.find(t => t.id === id))
  }));
  res.json(lanes);
});

app.get('/api/titles', (req, res) => {
  const { search = '', page = 1, pageSize = 20, sort = 'name' } = req.query;
  let items = db.titles.filter(t => t.name.toLowerCase().includes(String(search).toLowerCase()));
  items = items.sort((a,b) => (a[sort] > b[sort]) ? 1 : -1);
  const p = Number(page), ps = Number(pageSize);
  const total = items.length;
  const slice = items.slice((p-1)*ps, (p-1)*ps + ps);
  res.json({ total, page: p, pageSize: ps, items: slice });
});

app.get('/api/titles/:id', (req, res) => {
  const id = Number(req.params.id);
  const t = db.titles.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: 'not found' });
  res.json(t);
});

// playback endpoint (returns URLs; your player decides what to use)
app.get('/api/play/:id', (req, res) => {
  const id = Number(req.params.id);
  const t = db.titles.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: 'not found' });
  res.json({ id, media: t.media });
});

// analytics
app.post('/api/events', (req, res) => {
  const event = { ts: Date.now(), ...req.body };
  // In a real app we'd persist; here we broadcast for testing
  io.emit('analytics', event);
  res.status(202).json({ status: 'accepted' });
});

// uploads
const upload = multer({ dest: path.join(DATA_DIR, 'uploads') });
app.post('/api/upload', authMiddleware, upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename, originalname: req.file.originalname, size: req.file.size });
});

// socket events
io.on('connection', (socket) => {
  socket.emit('hello', { msg: 'Welcome to Streaming Test API' });
  // periodic "trending" shuffle
  const interval = setInterval(() => {
    const lane = db.lanes.find(l => l.id === 'trending');
    if (lane) {
      lane.items = lane.items.sort(() => Math.random() - 0.5);
      io.emit('trending', lane.items.map(id => db.titles.find(t => t.id === id)));
    }
  }, 10000);
  socket.on('disconnect', () => clearInterval(interval));
});

httpServer.listen(PORT, () => {
  console.log('API listening on', PORT);
});
