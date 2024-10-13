import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/photos">Photography</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    );
  }
  
export default NavBar;