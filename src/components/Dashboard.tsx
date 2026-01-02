import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your protected dashboard!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
