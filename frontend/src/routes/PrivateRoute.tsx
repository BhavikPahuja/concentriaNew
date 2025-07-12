import React from 'react'
import AuthPage from '../pages/AuthPage'
import DashboardPage from '../pages/DashboardPage'

type PrivateRouteProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return isLoggedIn
    ? <DashboardPage setIsLoggedIn={setIsLoggedIn} />
    : <AuthPage setIsLoggedIn={setIsLoggedIn} />;
};

export default PrivateRoute