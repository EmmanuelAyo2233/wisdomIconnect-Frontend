const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('Welcome to the WisdomConnect backend!');
});

// Users route
app.get('/users', (req, res) => {
    const users = [
      { id: 1, name: 'John Doe', role: 'Mentor' },
      { id: 2, name: 'Jane Smith', role: 'Mentee' }
    ];
    res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
