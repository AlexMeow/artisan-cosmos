import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-cyborg-gaming.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';
import LOGO from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* LOGO */}
              <Link to="/" className="logo">
                <img src={LOGO} alt="Cyborg Template" />
              </Link>
              {/* NAVIGATION MENU */}
              <ul className="nav">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/browse-all-artworks" className="nav-link" activeClassName="active">
                    Browse All Artworks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/artists" className="nav-link" activeClassName="active">
                    Artists
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/member-center" className="nav-link" activeClassName="active">
                    Member Center
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" activeClassName="active">
                    Login
                  </NavLink>
                </li>
              </ul>
              {/* MENU TRIGGER */}
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;