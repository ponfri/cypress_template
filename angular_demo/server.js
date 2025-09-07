const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3200;
const USERS_FILE = './src/assets/accounts.json';
const PRODUCTS_FILE = './src/assets/products.json';
const CONTACTS_FILE = './src/assets/contacts.json';
const LOG_FILE = './src/assets/audit.log';

// CORS middleware (must be first after app initialization)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(bodyParser.json());

// Update user
app.put('/api/users/:username', (req, res) => {
  let users = readJson(USERS_FILE, 'users');
  const idx = users.findIndex(u => u.username === req.params.username);
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[idx] = { ...users[idx], ...req.body };
  writeJson(USERS_FILE, 'users', users);
  logAction('update user', req.params.username);
  res.json({ success: true });
});

// Reset password
app.post('/api/reset-password', (req, res) => {
  let users = readJson(USERS_FILE, 'users');
  const idx = users.findIndex(u => u.username === req.body.username);
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[idx].password = 'newpassword123';
  writeJson(USERS_FILE, 'users', users);
  logAction('reset password', req.body.username);
  res.json({ success: true });
});

// Lock/unlock user
app.post('/api/toggle-lock', (req, res) => {
  let users = readJson(USERS_FILE, 'users');
  const idx = users.findIndex(u => u.username === req.body.username);
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[idx].locked = !users[idx].locked;
  writeJson(USERS_FILE, 'users', users);
  logAction(users[idx].locked ? 'lock user' : 'unlock user', req.body.username);
  res.json({ success: true });
});

// Get single user by username
app.get('/api/users/:username', (req, res) => {
  const users = readJson(USERS_FILE, 'users');
  const user = users.find(u => u.username === req.params.username);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
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
app.use(bodyParser.json());

// Helper: Read/Write JSON
function readJson(file, key) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'))[key] || [];
}
function writeJson(file, key, arr) {
  // Log every write for debugging
  console.log(`[WRITE JSON] file: ${file}, key: ${key}, length: ${Array.isArray(arr) ? arr.length : 'N/A'}`);
  // Prevent accidental overwrite with empty array unless explicitly deleting all users
  if (Array.isArray(arr) && arr.length === 0 && key === 'users') {
    console.warn('Attempted to write empty user list. Operation blocked for safety.');
    return;
  }
  fs.writeFileSync(file, JSON.stringify({ [key]: arr }, null, 2));
}

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = readJson(USERS_FILE, 'users');
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    console.log(`[LOGIN SUCCESS] User: ${username}`);
    logAction('login', username);
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
  logAction('register user', username);
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
  logAction('delete user', username);
  res.json({ success: true });
});

// List users
app.get('/api/users', (req, res) => {
  let users;
  try {
    users = readJson(USERS_FILE, 'users');
    if (!Array.isArray(users) || users.length === 0) {
      console.warn('[API USERS] No users found or file unreadable, returning fallback admin user.');
      users = [{ username: 'admin', password: 'admin123', role: 'admin', undeletable: true }];
    }
  } catch (err) {
    console.error('[API USERS] Error reading users:', err);
    users = [{ username: 'admin', password: 'admin123', role: 'admin', undeletable: true }];
  }
  res.json(users);
});

// Export users as JSON
app.get('/api/export', (req, res) => {
  const users = readJson(USERS_FILE, 'users');
  logAction('export users', 'admin');
  res.setHeader('Content-Disposition', 'attachment; filename=users.json');
  res.json(users);
});

// Import users from JSON
app.post('/api/import', (req, res) => {
  const { users } = req.body;
  if (!Array.isArray(users)) return res.status(400).json({ success: false, message: 'Invalid format' });
  writeJson(USERS_FILE, 'users', users);
  logAction('import users', 'admin');
  res.json({ success: true });
});

// Bulk delete users
app.post('/api/bulk-delete', (req, res) => {
  const { usernames } = req.body;
  let users = readJson(USERS_FILE, 'users');
  users = users.filter(u => !usernames.includes(u.username) || u.username === 'admin');
  writeJson(USERS_FILE, 'users', users);
  logAction('bulk delete', 'admin');
  res.json({ success: true });
});

// Bulk lock/unlock users
app.post('/api/bulk-lock', (req, res) => {
  const { usernames, lock } = req.body;
  let users = readJson(USERS_FILE, 'users');
  users = users.map(u => usernames.includes(u.username) ? { ...u, locked: !!lock } : u);
  writeJson(USERS_FILE, 'users', users);
  logAction(lock ? 'bulk lock' : 'bulk unlock', usernames.join(','));
  res.json({ success: true });
});

// Update user role
app.post('/api/update-role', (req, res) => {
  const { username, role } = req.body;
  let users = readJson(USERS_FILE, 'users');
  const idx = users.findIndex(u => u.username === username);
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[idx].role = role;
  writeJson(USERS_FILE, 'users', users);
  logAction('update role', username);
  res.json({ success: true });
});

// Toggle email verification
app.post('/api/toggle-verify', (req, res) => {
  const { username } = req.body;
  let users = readJson(USERS_FILE, 'users');
  const idx = users.findIndex(u => u.username === username);
  if (idx === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[idx].verified = !users[idx].verified;
  writeJson(USERS_FILE, 'users', users);
  logAction(users[idx].verified ? 'verify email' : 'unverify email', username);
  res.json({ success: true });
});

// Get audit log

app.get('/api/audit-log', (req, res) => {
  if (!fs.existsSync(LOG_FILE)) return res.json([]);
  const log = fs.readFileSync(LOG_FILE, 'utf8').split('\n').filter(Boolean);
  res.json(log);
});

// Clear audit log
app.post('/api/clear-audit-log', (req, res) => {
  try {
    fs.writeFileSync(LOG_FILE, '');
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to clear audit log.' });
  }
});

// Get user profile
app.get('/api/profile/:username', (req, res) => {
  const users = readJson(USERS_FILE, 'users');
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json(user);
});

// Log admin actions
function logAction(action, username) {
  const entry = `${new Date().toISOString()} | ${action} | ${username}`;
  fs.appendFileSync(LOG_FILE, entry + '\n');
}

// Products endpoint
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 }
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
