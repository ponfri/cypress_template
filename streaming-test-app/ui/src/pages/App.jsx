
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import jwtDecode from 'jwt-decode';

const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';
const WS = import.meta.env.VITE_WS_BASE || 'ws://localhost:4000';

function useAuth() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const user = useMemo(() => {
    if (!token) return null;
    try { return jwtDecode(token); } catch { return null; }
  }, [token]);
  const login = async (email, password) => {
    const { data } = await axios.post(`${API}/auth/login`, { email, password });
    localStorage.setItem('token', data.token); setToken(data.token);
  };
  const logout = () => { localStorage.removeItem('token'); setToken(null); };
  return { token, user, login, logout };
}

function Header({ auth, onSearch }) {
  const [q, setQ] = useState('');
  return (
    <header>
      <strong>🎬 Streaming Test</strong>
      <input placeholder="Search titles..." value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter' && onSearch(q)} />
      <button onClick={()=>onSearch(q)}>Search</button>
      <div className="spacer" />
      {auth.user ? (
        <>
          <span>Hi, {auth.user.email}</span>
          <button onClick={auth.logout}>Logout</button>
        </>
      ) : <LoginForm onLogin={auth.login} />}
    </header>
  );
}

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('demo@local.test');
  const [password, setPassword] = useState('demo123');
  const [busy, setBusy] = useState(false);
  const submit = async () => { setBusy(true); try { await onLogin(email, password); } finally { setBusy(false); } };
  return (
    <div className="flex">
      <input value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button disabled={busy} onClick={submit}>Login</button>
    </div>
  );
}

function Swimlane({ lane, onOpen }) {
  return (
    <div className="lane">
      <div className="lane-title">{lane.title}</div>
      <div className="scroll">
        {lane.items.map(item => (
          <div key={item.id} className="card" onClick={()=>onOpen(item)}>
            <img src={`http://localhost:8080${item.poster}`} alt="" />
            <div className="meta">
              <div style={{fontWeight:600}}>{item.name}</div>
              <div>{item.year} • <span className="badge">{item.type}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Details({ item, onClose, onPlay }) {
  if (!item) return null;
  return (
    <div className="container">
      <div className="flex">
        <h2 style={{margin:0}}>{item.name}</h2>
        <div className="spacer" />
        <button onClick={onClose}>Close</button>
      </div>
      <p>{item.synopsis}</p>
      <div className="flex">
        {item.genres?.map(g=><span key={g} className="badge">{g}</span>)}
      </div>
      <p><span className="link" onClick={()=>onPlay(item.id)}>▶ Play (fake)</span></p>
      <img src={`http://localhost:8080${item.backdrop}`} alt="" style={{ width:'100%', borderRadius:12 }}/>
    </div>
  );
}

export default function App() {
  const auth = useAuth();
  const [lanes, setLanes] = useState([]);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get(`${API}/lanes`).then(r => setLanes(r.data));
  }, []);

  useEffect(() => {
    const s = io(WS);
    s.on('hello', () => {});
    s.on('trending', (items) => {
      setLanes(prev => prev.map(l => l.id==='trending' ? { ...l, items } : l));
    });
    s.on('analytics', (evt) => {
      console.log('analytics', evt);
    });
    return () => s.close();
  }, []);

  const doSearch = async (q) => {
    setSearch(q);
    const { data } = await axios.get(`${API}/titles`, { params: { search: q } });
    setResults(data.items);
  };

  const play = async (id) => {
    const { data } = await axios.get(`${API}/play/${id}`);
    console.log('playback:', data);
    await axios.post(`${API}/events`, { type:'play', id });
    alert('Playback simulated. Check /api/events websocket & network calls.');
  };

  return (
    <div>
      <Header auth={auth} onSearch={doSearch} />
      {!search ? (
        <div className="container">
          {lanes.map(l => <Swimlane key={l.id} lane={l} onOpen={setSelected} />)}
        </div>
      ) : (
        <div className="container">
          <h3>Results for “{search}”</h3>
          <div className="grid">
            {results.map(item => (
              <div key={item.id} className="card" onClick={()=>setSelected(item)}>
                <img src={`http://localhost:8080${item.poster}`} alt="" />
                <div className="meta">
                  <div style={{fontWeight:600}}>{item.name}</div>
                  <div>{item.year} • <span className="badge">{item.type}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Details item={selected} onClose={()=>setSelected(null)} onPlay={play} />
    </div>
  );
}
