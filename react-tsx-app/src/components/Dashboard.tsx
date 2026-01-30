import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Dashboard</h1>
          <div className="user-info">
            <span className="user-name">Welcome, {user?.email || 'User'}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-card">
            <h2>Welcome to Your Dashboard</h2>
            <p>You have successfully authenticated!</p>
            {user && (
              <div className="user-details">
                <h3>User Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  {user.id && (
                    <div className="info-item">
                      <span className="info-label">User ID:</span>
                      <span className="info-value">{user.id}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Authentication</h3>
              <p>Your session is protected with JWT tokens</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Auto Token Refresh</h3>
              <p>Tokens are automatically refreshed when needed</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Protected Routes</h3>
              <p>Only authenticated users can access this page</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
