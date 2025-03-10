require('dotenv').config();                             // Load environment variables from .env file
const express = require('express');                     // Import express
const app = express();                                  // Create express app
const PORT = process.env.PORT || 3000;                  // Set port
const axios = require('axios');                         // Import axios

// Define routes
app.get('/api/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://api.football-data.org/v4/teams/57/matches/', {
      headers: {
        'X-Auth-Token': process.env.API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching fixtures');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});