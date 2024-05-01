require('dotenv').config();
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Define a Mongoose schema and model
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Book = mongoose.model('Book', BookSchema);

// Data to be inserted
const books = [
  {"title": "The Mountain Trail", "author": "James Clark", "year": 1991},
  {"title": "River of Dreams", "author": "Elisabeth Moore", "year": 1985},
  {"title": "Silent Waters", "author": "Robert Frost", "year": 2010},
  {"title": "Shadows and Light", "author": "Maria Lopez", "year": 2003},
  {"title": "The Last Symphony", "author": "Chris Johnson", "year": 2015},
  {"title": "Beneath the Horizon", "author": "Lisa Ray", "year": 2000},
  {"title": "Twilight Whispers", "author": "Patricia Field", "year": 1995},
  {"title": "Echoes of Time", "author": "Samuel Parker", "year": 2018},
  {"title": "City of Flames", "author": "Angela Young", "year": 2011},
  {"title": "Forgotten Paths", "author": "Brian King", "year": 1990},
  {"title": "Winter's Heart", "author": "Nancy Peterson", "year": 1986},
  {"title": "Mystic Bridge", "author": "Howard Bell", "year": 2005},
  {"title": "Distant Thunder", "author": "Sandra Lee", "year": 2013},
  {"title": "Starlight Cruise", "author": "Frank Warren", "year": 1999},
  {"title": "Dreams of Tomorrow", "author": "Laura West", "year": 2007},
  {"title": "Sands of Time", "author": "Deborah Cox", "year": 1988},
  {"title": "Palace of Dawn", "author": "Michael Stone", "year": 2023},
  {"title": "Summer's Promise", "author": "Sophia Martin", "year": 2016},
  {"title": "The Arctic Trail", "author": "Clifford Rhodes", "year": 2002},
  {"title": "Journey to the East", "author": "Kevin Brooks", "year": 1997}
];

// Function to insert data into MongoDB
async function uploadData() {
  try {
    await Book.insertMany(books);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data', err);
  }
}

// Call the function
uploadData().then(() => {
  mongoose.connection.close();
});
