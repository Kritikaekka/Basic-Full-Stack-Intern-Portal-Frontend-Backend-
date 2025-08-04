import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import './App.css';


function App() {
  return (
    <div className='body'>
    <Router>
      <nav className="navbar">
  <Link to="/" className="nav-link login-link">LOGIN</Link>
  <Link to="/leaderboard" className="nav-link leaderboard-link">LEADERBOARD</Link>
</nav>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

