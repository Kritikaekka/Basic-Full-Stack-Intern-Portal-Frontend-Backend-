import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div
  style={{
  margin: 0,
  padding: 0,
  marginTop: -10,
  minHeight: "105vh",
  backgroundImage: `linear-gradient(to right, rgba(117,47,38,1), rgba(117,47,38,0.9) 45%, rgba(117,47,38,0.7) 80%, rgba(117,47,38,0) 100%), url('/b358bfbf-426e-4c21-ae45-59d5aba885f5.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  color: "azure",
}}
>
 
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
    </div> </div>
  );
}

export default App;

