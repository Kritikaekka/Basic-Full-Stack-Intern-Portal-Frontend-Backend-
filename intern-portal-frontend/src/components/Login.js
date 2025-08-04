import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';




function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://basic-full-stack-intern-portal-frontend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        // Server responded with error status
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        // Navigate to dashboard with user data passed as state
        navigate('/dashboard', { state: data });
      } else {
        setError(data.message || 'Data not available');
      }
    } catch (err) {
      setError(`Error connecting to backend: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
    <div>
      <h4 className='heading'>Welcome Back</h4>
      <h6 className='second'>Please enter your details.</h6>
      <form onSubmit={handleSubmit}>
        <div className='details'>
          <label>Username </label><br/>
          <input
            type="text"
            placeholder="Enter username" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className='details1'>
          <label>Password </label><br/>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button className='submit' type="submit" disabled={!name || !password || loading}>
          {loading ? 'Logging in...' : 'LOGIN'}
        </button>
      </form>
      {error && <p style={{ color: '#ffcf87ff', marginTop: 10 , marginLeft:40}}>{error}</p>}
    </div> </div>
  );
  
}

export default Login;

