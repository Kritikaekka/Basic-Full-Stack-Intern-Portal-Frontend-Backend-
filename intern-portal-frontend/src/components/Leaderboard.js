import React, { useEffect, useState } from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://basic-full-stack-intern-portal-frontend.onrender.com/api/leaderboard')
      .then(res => res.json())
      .then(d => setLeaders(d))
      .catch(() => setLeaders([]));
  }, []);

   return (
    <div className="leaderboard-bg">
      <div className="leaderboard-card">
        <h2 className="leaderboard-title">LEADERBOARD</h2>
        <table className="styled-leaderboard">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={idx}>
                <td>{String(idx + 1).padStart(2, '0')}</td>
                <td>{leader.name}</td>
                <td>{leader.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Leaderboard;
