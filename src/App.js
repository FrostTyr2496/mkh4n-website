import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import ImageSlider from "./components/common/ImageSlider";
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Placeholder for future pages */}
        </Routes>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div className="container mx-auto text-center mt-8">
      <h1 className="text-5xl font-bold mb-4">Mush Khan</h1>
      <p className="text-xl mb-8">Software engineering manager with a passion for solving complex problems in robotics and a drive for personal growth through creative pursuits like photography and music.</p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300">Contact Me</button>
        <button className="bg-transparent border border-yellow-400 text-yellow-400 font-bold py-2 px-4 rounded hover:bg-yellow-300 hover:text-black">Learn More →</button>
      </div>
      <ImageSlider />
    </div>
  );
}


export default App;

