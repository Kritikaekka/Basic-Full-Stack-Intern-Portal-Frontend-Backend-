return (
  <div
    style={{
      minHeight: "100vh",
      backgroundImage: `linear-gradient(to right, rgba(117,47,38,1), rgba(117,47,38,0.9) 45%, rgba(117,47,38,0.7) 80%, rgba(117,47,38,0) 100%), url('/b358bfbf-426e-4c21-ae45-59d5aba885f5.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}
  >
    <div className="login-container">
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
      {error && <p style={{ color: '#ffcf87ff', marginTop: 10 }}>{error}</p>}
    </div>
  </div>
);


