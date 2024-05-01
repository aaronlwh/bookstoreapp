import React, { useState } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3000/search?q=${query}`);
    console.log(response)
    const data = await response.json();
    console.log(data)
    setBooks(data);
  };

  return (
    <div>
      <h1>Search for Books</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter book title or author"
      />
      <br></br>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
