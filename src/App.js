import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BrowsePage from './pages/BrowsePage';
import ArtistsPage from './pages/ArtistsPage';
import ProfilePage from './pages/ProfilePage';
import ArtworkDetailsPage from './pages/ArtworksDetailsPage';
import './vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/templatemo-cyborg-gaming.css';
import './assets/css/owl.css';
import './assets/css/animate.css';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/browse" exact="true" element={<BrowsePage />} />
        <Route path="/artists" exact="true" element={<ArtistsPage />} />
        <Route path="/profile" exact="true" element={<ProfilePage />} />
        <Route path="/login" exact="true" element={<LoginPage />} />
        <Route path="/artwork/:id" element={<ArtworkDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
