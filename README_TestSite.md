# Streaming Test App

A feature-rich local app for testing automation. Includes a React UI with streaming-style swimlanes, an Express API with JWT authentication, Swagger docs, file uploads, analytics, and WebSocket updates, plus an Nginx CDN for static media assets.

---

## Features

### UI (React/Vite)
- Login & Register
- Protected profile pages
- Streaming-style swimlanes (Trending, Recommended, New)
- Search, pagination, sorting
- Detail view with "Play" action (simulated)
- Horizontal scrollable lanes (for automation testing)

### API (Node/Express)
- JWT authentication (login/register)
- User profile endpoint
- CRUD-like catalog endpoints
- File uploads (multipart)
- Analytics events (fire-and-forget)
- Real-time updates via WebSocket (Socket.IO)
- Swagger API docs at `/api/docs`
- Rate limiting (429 errors when exceeded)

### CDN (Nginx)
- Static poster images
- Placeholder media (MP4 and fake HLS manifests)

---

## Quick Start

1. Unzip the project.
2. In the project root, run:
   ```bash
   docker compose up --build
   ```

3. Open the following:
   - UI: [http://localhost:5173](http://localhost:5173)
   - API Swagger: [http://localhost:4000/api/docs](http://localhost:4000/api/docs)
   - CDN: [http://localhost:8080](http://localhost:8080)

---

## Test Accounts

- Email: `demo@local.test` — Password: `demo123`
- Email: `admin@local.test` — Password: `admin123`

---

## API Endpoints

### Auth
- `POST /api/auth/login` → returns JWT
- `POST /api/auth/register`

### User
- `GET /api/profile` (requires Bearer token)

### Catalog
- `GET /api/lanes` — swimlanes with items
- `GET /api/titles?search=&page=&pageSize=&sort=` — search + pagination
- `GET /api/titles/:id` — get detail by ID
- `GET /api/play/:id` — returns media URLs (HLS/MP4)

### Analytics & Uploads
- `POST /api/events` — analytics logging (also echoed via WebSocket)
- `POST /api/upload` — multipart file upload (auth required)

---

## WebSocket

- Connect to: `ws://localhost:4000`
- Events:
  - `hello` — on connect
  - `trending` — emitted every 10s (lane reshuffle)
  - `analytics` — echoed from `POST /api/events`

---

## Automation Scenarios

You can test all of the following automation flows:

### Authentication
- Positive and negative login attempts
- Expired tokens and 401/403 handling

### Protected Routes
- Validate `/api/profile` requires JWT

### Swimlanes
- Verify horizontal scroll works
- Validate card counts and lazy loading

### Search & Pagination
- `/api/titles?search=neon&page=2&pageSize=20`
- Validate pagination logic

### Sorting
- `/api/titles?sort=name`
- `/api/titles?sort=year`
- Assert order correctness

### File Uploads
- Test multipart uploads with `/api/upload`

### Media Endpoints
- Hit `/api/play/:id`
- Probe returned URLs with HEAD/GET

### Rate Limits
- Flood API endpoints to trigger 429 responses

### WebSockets
- Subscribe and validate `trending` updates refresh UI

### Swagger Contract
- Compare live responses against documented schema

---

## Future Enhancements

Planned features (optional extensions):
- Role-based access control (admin-only endpoints)
- Email verification flow (with Mailhog)
- GraphQL API variant (to compare with REST)
- Larger HLS samples for real player testing
- Watch history endpoint

---

## License
For local testing & learning only. Not for production use.
