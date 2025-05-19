
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const NotFound = () => {
  const { isAuthenticated } = useAuth();
  const redirectPath = isAuthenticated ? '/dashboard' : '/login';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-muted-foreground mt-2 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to={redirectPath}
          className="btn-primary"
        >
          Go back to {isAuthenticated ? 'Dashboard' : 'Login'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
