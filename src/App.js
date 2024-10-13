
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Photography from './components/pages/Photography';
import Blog from './components/pages/Blog';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/photos" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;