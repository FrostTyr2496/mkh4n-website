import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    return (
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Mush Khan</h1>
        <div>
          <Link className="text-white px-4" to="/">Home</Link>
          <Link className="text-white px-4" to="/about">About</Link>
          <Link className="text-white px-4" to="/gallery">Photography Gallery</Link> 
        </div>
      </div>
    </nav>
    );
  }
  
export default NavBar;