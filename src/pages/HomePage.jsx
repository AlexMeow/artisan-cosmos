import React from 'react';
import Navbar from '../components/Navbar';
import HomePageBody from '../components/HomePageBody';
import Footer from '../components/Footer';

const HomePage = () => {
  console.log("hello");
  return (
    <div>
      <Navbar />
      <HomePageBody />
      <Footer />
    </div>
  );
};

export default HomePage;