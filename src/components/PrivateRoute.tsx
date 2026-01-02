import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login page
  // Otherwise, render the child routes
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
