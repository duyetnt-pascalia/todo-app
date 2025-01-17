import React from 'react';
import { useAuth } from '../AuthContext';
import './Home.css';
const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <div className="content-card">
        {user ? (
          <div className="welcome-content">
            <h1>Welcome, {user.user.username}!</h1>
            <p>You're successfully logged in to your account.</p>
          </div>
        ) : (
          <div className="login-content">
            <h1>Welcome</h1>
            <p className="login-message">Please log in to track your task .</p>
            <div className="signup-prompt">
              <p>Don't have an account? Please sign up.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;