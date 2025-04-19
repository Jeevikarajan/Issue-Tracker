// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: 'orange', padding: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Issue Tracker</Link>
      <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/create">Create Issue</Link>
    </nav>
  );
}
