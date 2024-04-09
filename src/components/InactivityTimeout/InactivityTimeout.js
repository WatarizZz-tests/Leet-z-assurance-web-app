import React, { useState, useEffect, useContext } from 'react';


const InactivityTimeout = ({ children }) => {
  const TIMEOUT = 60 * 60 * 1000; 
  const [logoutTimer, setLogoutTimer] = useState(null);


  const resetTimeout = () => {
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    setLogoutTimer(setTimeout(logoutUser, TIMEOUT));
  };


  const logoutUser = () => {
    // Clear any existing timeout and perform logout
    clearTimeout(logoutTimer);
    localStorage.clear();
    window.location.reload();
  };

  const handleUserActivity = () => {
    resetTimeout();
  };

  useEffect(() => {
    resetTimeout(); // Initialize timeout on component mount

    // Listen for user activity events
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(logoutTimer);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  return <>{children}</>;
};

export default InactivityTimeout;