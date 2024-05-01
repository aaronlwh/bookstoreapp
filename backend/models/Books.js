const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: { type: String, required: true }, 
  title: { type: String, required: true },
  author: {type: String, required: true }
});

module.exports = mongoose.model('Books', BookSchema);
