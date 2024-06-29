import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Artists from '../components/Artists';

const ArtistsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="heading-section">
          <h4><em>Recommended</em> Artists</h4>
        </div>
        <Artists />
        <div className="col-lg-12 d-flex justify-content-center">
          <a to="/artists" className="main-button">
            Load more
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistsPage;