import React, { useState, useEffect } from 'react';

const AccountPage = ({ token }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data or any other relevant information based on the token
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          const errorMessage = await response.text();
          setError(errorMessage);
          console.error('Error fetching user data:', errorMessage);
        }
      } catch (error) {
        setError(error.message);
        console.error('Error:', error.message);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <div>
      <h2>Account Page</h2>
      {error && <p>{error}</p>}
      {userData && (
        <>
          <p>Welcome, {userData.username}!</p>
          <h3>Currently Checked Out Books:</h3>
          {userData.checkedOutBooks.length > 0 ? (
            <ul>
              {userData.checkedOutBooks.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          ) : (
            <p>No books currently checked out.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AccountPage;
