import React from 'react';
import Navbar from '../components/Navbar';
import LoginPageBody from '../components/LoginPageBody';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <LoginPageBody />
      <Footer />
    </div>
  );
};

export default LoginPage;