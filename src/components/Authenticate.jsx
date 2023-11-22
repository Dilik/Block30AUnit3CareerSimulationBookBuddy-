import React, { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message);
        setUsername(result.username);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error('Authentication Error:', errorMessage);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
    </div>
  );
};

export default Authenticate;