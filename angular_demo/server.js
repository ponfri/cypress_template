const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3200;
const USERS_FILE = './src/assets/accounts.json';
const PRODUCTS_FILE = './src/assets/products.json';
const CONTACTS_FILE = './src/assets/contacts.json';
const LOG_FILE = './src/assets/audit.log';

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// --- CONTACTS ---
app.get('/api/contacts', (req, res) => {
  res.json(readJson(CONTACTS_FILE, 'contacts'));
});
app.post('/api/contacts', (req, res) => {
  const { name, email, token } = req.body;
  let contacts = readJson(CONTACTS_FILE, 'contacts');
  let users = readJson(USERS_FILE, 'users');
  const requestingUser = users.find(u => `${u.username}-token` === token);
  if (!requestingUser) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  const id = contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
  contacts.push({ id, name, email, owner: requestingUser.username });
  writeJson(CONTACTS_FILE, 'contacts', contacts);
  logAction('add contact', requestingUser.username);
  res.json({ success: true });
});
app.put('/api/contacts/:id', (req, res) => {
  const { name, email, token } = req.body;
  let contacts = readJson(CONTACTS_FILE, 'contacts');
  let users = readJson(USERS_FILE, 'users');
  const requestingUser = users.find(u => `${u.username}-token` === token);
  const contact = contacts.find(c => c.id == req.params.id);
  if (!requestingUser || (contact && contact.owner !== requestingUser.username && requestingUser.role !== 'admin')) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  contacts = contacts.map(c => c.id == req.params.id ? { ...c, name, email } : c);
  writeJson(CONTACTS_FILE, 'contacts', contacts);
  logAction('update contact', requestingUser.username);
  res.json({ success: true });
});
app.delete('/api/contacts/:id', (req, res) => {
  const { token } = req.body;
  let contacts = readJson(CONTACTS_FILE, 'contacts');
  let users = readJson(USERS_FILE, 'users');
  const requestingUser = users.find(u => `${u.username}-token` === token);
  const contact = contacts.find(c => c.id == req.params.id);
  if (!requestingUser || (contact && contact.owner !== requestingUser.username && requestingUser.role !== 'admin')) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  contacts = contacts.filter(c => c.id != req.params.id);
  writeJson(CONTACTS_FILE, 'contacts', contacts);
  logAction('delete contact', requestingUser.username);
  res.json({ success: true });
});
// ...existing code...

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Helper: Read/Write JSON
function readJson(file, key) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'))[key] || [];
}
function writeJson(file, key, arr) {
  fs.writeFileSync(file, JSON.stringify({ [key]: arr }, null, 2));
}

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = readJson(USERS_FILE, 'users');
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    console.log(`[LOGIN SUCCESS] User: ${username}`);
    return res.json({ success: true, user });
  }
  console.error(`[LOGIN FAIL] Username: ${username}, Password: ${password}`);
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Register
app.post('/api/register', (req, res) => {
  const { username, password, role = 'user' } = req.body;
  let users = readJson(USERS_FILE, 'users');
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ success: false, message: 'Username exists' });
  }
  users.push({ username, password, role });
  writeJson(USERS_FILE, 'users', users);
  res.json({ success: true });
});

// Delete
app.post('/api/delete', (req, res) => {
  const { username } = req.body;
  let users = readJson(USERS_FILE, 'users');
  // Prevent deleting master admin
  if (username === 'admin') {
    return res.status(403).json({ success: false, message: 'Cannot delete master admin.' });
  }
  users = users.filter(u => u.username !== username);
  writeJson(USERS_FILE, 'users', users);
  res.json({ success: true });
});

// List users
app.get('/api/users', (req, res) => {
  res.json(readJson(USERS_FILE, 'users'));
});

// Products endpoint
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 }
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
