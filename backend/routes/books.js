const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// GET /api/books
router.get('/', booksController.listBooks);

// POST /api/books
router.post('/', booksController.createBook);

module.exports = router;
