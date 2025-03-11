require('dotenv').config();                             // Load environment variables from .env file
const express = require('express');                     // Import express
const app = express();                                  // Create express app
const PORT = process.env.PORT || 3000;                  // Set port
const axios = require('axios');                         // Import axios
const pool = require('./db');                           // Import pool from db.js

// Define routes
app.get('/api/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://api.football-data.org/v4/teams/57/matches/', {
      headers: {
        'X-Auth-Token': process.env.API_KEY
      }
    });

    // Extract the data from the API response
    const fixtures = response.data.matches; 

    // Iterate over the fixtures and insert them into the database
    for (const match of fixtures) {
      // Destructure the match object
      const { id, utcDate, status, homeTeam, awayTeam, score, lastUpdated } = match;

      // Insert the match into the database\
      await pool.query(
        'INSERT INTO fixtures (match_id, utc_date, status, home_team, away_team, score, last_updated) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (match_id) DO UPDATE SET utc_date = EXCLUDED.utc_date, status = EXCLUDED.status, home_team = EXCLUDED.home_team, away_team = EXCLUDED.away_team, score = EXCLUDED.score, last_updated = EXCLUDED.last_updated',
        [id, utcDate, status, homeTeam.name, awayTeam.name, JSON.stringify(score), lastUpdated]
      );
    }

    const dbResponse = await pool.query('SELECT * FROM fixtures');
    res.json(dbResponse.rows);
  } catch (error) {
    console.error('Error fetching fixtures', error);
    res.status(500).json({ error: 'An error occurred while fetching fixtures' });
  }
});

// Create a test route to verify database connection
app.get('/api/testdb', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ currentTime: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error', error);
    res.status(500).json({ error: 'An error occurred while connecting to the database' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});