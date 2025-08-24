
const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, 'db.json');

let db = { users: [], titles: [], watchHistory: [] };

// Load existing data if exists
if (fs.existsSync(dbFile)) {
  db = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
}

// Default seed data
const defaultUsers = [
  { email: 'user@test.com', password: 'password123', role: 'user' },
  { email: 'admin@test.com', password: 'admin123', role: 'admin' }
];
const defaultTitles = [
  { id: 1, name: 'The Matrix', genre: 'Sci-Fi', year: 1999 },
  { id: 2, name: 'Breaking Bad', genre: 'Crime', year: 2008 },
  { id: 3, name: 'Frozen', genre: 'Animation', year: 2013 }
];
const defaultWatchHistory = [
  { user: 'user@test.com', titleId: 1, watchedAt: new Date().toISOString() }
];

// Helper to add if missing
function addIfMissing(arr, item, key='email') {
  if (!arr.find(x => x[key] === item[key])) {
    arr.push(item);
  }
}

// Seed idempotent
if (!process.argv.includes('--reset')) {
  defaultUsers.forEach(u => addIfMissing(db.users, u));
  defaultTitles.forEach(t => addIfMissing(db.titles, t, 'id'));
  defaultWatchHistory.forEach(h => addIfMissing(db.watchHistory, h, 'titleId'));
} else {
  // Reset mode
  db.users = defaultUsers;
  db.titles = defaultTitles;
  db.watchHistory = defaultWatchHistory;
}

// Write back to db.json
fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf-8');
console.log(process.argv.includes('--reset') ? 'Database reset and seeded.' : 'Database seeded (idempotent).');
