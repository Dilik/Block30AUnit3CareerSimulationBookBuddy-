import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../helper/api';
import './BookDetails.css';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch details for the specific book when the component mounts
    const fetchBookData = async () => {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    };

    fetchBookData();
  }, [id]); // Re-run effect when the 'id' parameter changes

  if (!book) {
    return <div>Loading...</div>; // Add a loading state or UI if needed
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;
