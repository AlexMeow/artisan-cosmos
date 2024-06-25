import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCenter from '../components/Settings';

const MemberCenterPage = () => {
  return (
    <div>
      <Navbar />
      <MemberCenter />
      <Footer />
    </div>
  );
};

export default MemberCenterPage;