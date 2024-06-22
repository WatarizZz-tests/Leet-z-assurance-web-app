import React, { useState, useEffect } from 'react';

const InactivityTimeout = ({ children }) => {
  const TIMEOUT = 60 * 60 * 1000; // 1 hour
  const [logoutTimer, setLogoutTimer] = useState(null);

  const resetTimeout = () => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    const expirationTime = new Date().getTime() + TIMEOUT;
    localStorage.setItem('expirationTime', expirationTime);
    setLogoutTimer(setTimeout(logoutUser, TIMEOUT));
  };

  const logoutUser = () => {
    clearTimeout(logoutTimer);
    localStorage.clear();
    window.location.reload();
  };

  const handleUserActivity = () => {
    resetTimeout();
  };

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime && new Date().getTime() > expirationTime) {
      logoutUser();
    } else {
      resetTimeout();
    }

    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    return () => {
      clearTimeout(logoutTimer);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  return <>{children}</>;
};

export default InactivityTimeout;
