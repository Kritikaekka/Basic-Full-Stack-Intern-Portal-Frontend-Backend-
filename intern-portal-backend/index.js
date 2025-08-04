const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // for parsing JSON bodies

// Users array including dummy passwords
const users = [
  { name: "Diksha Yadav", password: "dikshayadav", referralCode: "diksha123", totalDonations: 6000 },
  { name: "Pooja Bhatia", password: "poojabhatia", referralCode: "pooja123", totalDonations: 3000 },
  { name: "Manas Kapoor", password: "manaskapoor", referralCode: "manas123", totalDonations: 5500 },
  { name: "Elaine Massey", password: "elainemassey", referralCode: "elaine123", totalDonations: 4000 },
];

// Leaderboard data derived from users
const leaderboard = users
  .map(u => ({ name: u.name, donations: u.totalDonations }))
  .sort((a, b) => b.donations - a.donations);

// ======== LOGIN ENDPOINT =========
app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ success: false, message: "Name and password are required." });
  }

  const user = users.find(u => u.name === name && u.password === password);

  if (user) {
    // Success: send user data (omit password)
    return res.json({
      success: true,
      internName: user.name,
      referralCode: user.referralCode,
      totalDonations: user.totalDonations,
    });
  } else {
    // Failure: user not found or wrong password
    return res.json({ success: false, message: "User not found or password incorrect." });
  }
});

// ======== LEADERBOARD ENDPOINT =========
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// ======== OPTIONAL: Get Individual Intern Data by Query Param =========
app.get('/api/intern-data', (req, res) => {
  const { name } = req.query;
  const user = users.find(u => u.name === name);

  if (user) {
    res.json({
      internName: user.name,
      referralCode: user.referralCode,
      totalDonations: user.totalDonations,
    });
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

// ======== NEW: Get All Interns Endpoint =========
app.get('/api/interns', (req, res) => {
  // Return all users without passwords
  const sanitizedUsers = users.map(({ password, ...rest }) => rest);
  res.json(sanitizedUsers);
});

// ======== SERVER LISTEN =========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

