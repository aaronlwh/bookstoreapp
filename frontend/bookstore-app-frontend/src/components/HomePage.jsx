import React, { useEffect, useState } from 'react';


function HomePage() 

{
  {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/')
        .then(response => 
          {
            console.log(response) 
            return response.json()
          })
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div>
        <h1>Books</h1>
        <ul>
          {books.length > 0 ? (
        books.map(book => (
          <li key={book._id}>{book.title} by {book.author}</li>
          ))
        ) : (
          <li>No books found</li>  // Display when no books are available
        )}
        </ul>
      </div>
    );
  }
}
  
  export default HomePage;
  