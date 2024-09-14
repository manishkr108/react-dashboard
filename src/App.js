import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';
import SideBar from './components/sidebarcomponent/SideBar';
import Main from './components/bodycomponent/Main';
import Footer from './components/footer/Footer';
import BackToTop from './components/scroll/BackToTop';
import LoginRegister from './components/authcomponent/LoginRegister';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in by checking the auth token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

 
  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('authToken'); // Remove the token from localStorage
    document.body.classList.add('login-background'); // Add background image class on logout
  };

  useEffect(() => {
    if (isLoggedIn) {
      document.body.classList.remove('login-background'); // Remove background image class if already logged in
    } else {
      document.body.classList.add('login-background'); // Add background image class if not logged in
    }
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn ? (
        <LoginRegister onLogin={handleLogin} />
      ) : (
        <>
          <Header onLogout={handleLogout} />
          <SideBar />
          <Main />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
