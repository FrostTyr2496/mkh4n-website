// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>
          <Link className="navbar-title" to="/">MUSH KHAN</Link>
        </h1>
        <div className="menu-icon-container" onClick={toggleMenu}>
          <motion.div
            className="menu-icon"
            animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="bar"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="bar"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="bar"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="nav-links"
        animate={menuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            x: 0,
            y: 0,
            display: 'block',
          },
          closed: {
            opacity: 0,
            x: '100%',
            y: 0,
            transitionEnd: {
              display: 'none',
            },
          },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <Link className="nav-link" to="/about">ABOUT</Link>
        <Link className="nav-link" to="/gallery">GALLERY</Link>
      </motion.div>
    </nav>
  );
}

export default NavBar;
