const Books = require('./models/Books');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
// Load environment variables
require('dotenv').config();

//routes not added

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.get('/', async (req, res) => {
  try {
    const books = await Books.find();
    console.log("Fetched Books:", books)
    
    res.json(books)

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/search', async (req, res) => {
 
    try {
      const query = req.query.q;
      if (!query) {
        return res.status(400).send("Query parameter is missing.");
      }
      console.log("Search Query:", query);  // Log the search query to debug
      const books = await Books.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { author: { $regex: query, $options: 'i' } }
        ]
      });
      res.json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).send('Server error');
    }
});
  
app.get('/contact', (req, res) => {
    res.send('Contact us at example@bookstore.com');
});
  