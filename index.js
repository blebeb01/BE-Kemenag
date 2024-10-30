const express = require('express')
const connectDB = require('./db/connectDB')
const kemenagProfile = require('./models/kemenagProfile.model')
const app = express()
const PORT = 3000

connectDB()
app.use(express.json())

app.get('/profile', async (req, res) => {
    try {
      const profile = await kemenagProfile.find(); // Fetch all profile from the database
      res.json(profile); // Send the data as JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server starts at http://localhost:${PORT}`);
})