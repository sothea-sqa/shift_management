const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Your Supabase URL and Bearer Token
const SUPABASE_URL = 'https://psyenyrznststylkxcbo.supabase.co/functions/v1/monthly_schedule';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.e30.Yh_KuIDYOgZnsGUJeJa5oHIeCxcQi_UKJLs3mQUNzC0'; // Replace with your token

app.get('/api/monthly_schedule', async (req, res) => {
  try {
    // Get query params (month and year)
    const { month, year } = req.query;

    // Send request to Supabase API
    const response = await axios.get(SUPABASE_URL, {
      params: { month, year },
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    // Return the data from Supabase to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data from Supabase');
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
