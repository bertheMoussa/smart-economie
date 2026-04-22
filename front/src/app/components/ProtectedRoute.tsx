import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredType?: 'particulier' | 'entreprise';
}

export function ProtectedRoute({ children, requiredType }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredType && user.type !== requiredType) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
