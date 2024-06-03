import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ArtworkDetails from './ArtworkDetails';
// import MemberCenter from './MemberCenter';
import './vendor/bootstrap/css/bootstrap.min.css';
import './assets/css/templatemo-cyborg-gaming.css';
import './assets/css/owl.css';
import './assets/css/animate.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        {/* <Route path="/artwork/:id" component={ArtworkDetails} />
        <Route path="/member-center" component={MemberCenter} /> */}
      </Routes>
    </Router>
  );
};

export default App;
