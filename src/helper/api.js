// api.js

const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const result = await response.json();
    return result.books || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/books/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch book');
    }

    const result = await response.json();
    return result.book || {};
  } catch (error) {
    console.error('Error fetching book:', error);
    return {};
  }
}
