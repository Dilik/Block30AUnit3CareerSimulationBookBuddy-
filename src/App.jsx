import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import BookList from './components/Books';
import BookDetails from './components/BookDetails';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import AccountPage from './components/AccountPage'; // You may need to create this component

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const PrivateRoute = ({ element, ...props }) => {
    return token ? (
      <>
        {element}
        <Authenticate token={token} />
      </>
    ) : (
      <Navigate to="/signup" />
    );
  };

  const PublicRoute = ({ element, ...props }) => {
    return (
      <>
        {element}
      </>
    )
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={<PublicRoute element={<SignUpForm />} />}
        />
        <Route
          path="/"
          element={<PublicRoute element={
            <div>
              <h1>Welcome to my App</h1>
                <div>
                  <Link to="/books">
                    <button>Browse All Books</button>
                  </Link>
                  <Link to="/signup">
                    <button>Sign Up</button>
                  </Link>
                  <Link to="/account">
                    <button>Account</button>
                  </Link>
                </div>
            </div>
          } />}
        />
        <Route
          path="/books"
          element={<PublicRoute element={<BookList />} />}
        />
        <Route
          path="/books/:id"
          element={<PublicRoute element={<BookDetails />} />}
        />
        <Route
          path="/account"
          element={<PrivateRoute element={<AccountPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
