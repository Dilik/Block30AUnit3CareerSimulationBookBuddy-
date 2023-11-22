import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../helper/api';
import './Books.css'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books when the component mounts
    const fetchBooksData = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };

    fetchBooksData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h2>Library Catalog</h2>
      {/* Display a list of books with links to their details */}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
