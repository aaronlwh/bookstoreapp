const Book = require('../models/Book');

exports.listBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl
    });

    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
