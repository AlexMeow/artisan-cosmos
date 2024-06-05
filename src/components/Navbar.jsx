import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../assets/css/templatemo-cyborg-gaming.css';
import '../assets/css/owl.css';
import '../assets/css/animate.css';
import LOGO from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      if (menuActive) {
        navRef.current.style.maxHeight = `${navRef.current.scrollHeight}px`;
      } else {
        navRef.current.style.maxHeight = '0';
      }
    }
  }, [menuActive]);

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
              {/* SEARCH BAR */}
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                    onKeyUp={(event) => {
                      // TBD
                    }}
                  />
                  <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                </form>
              </div>
              {/* NAVIGATION MENU */}
              <ul className={`nav ${menuActive ? 'show' : ''}`} ref={navRef}>
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/browse" className="nav-link" activeClassName="active">
                    Browse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/artists" className="nav-link" activeClassName="active">
                    Artists
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link" activeClassName="active">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" activeClassName="active">
                    Login
                  </NavLink>
                </li>
              </ul>
              {/* MENU TRIGGER */}
              <a className={`menu-trigger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
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