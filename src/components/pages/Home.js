import React, { useState } from 'react';
import ImageSlider from '../common/ImageSlider';
import images from '../data/images';  // Import all images
import { Helmet } from 'react-helmet';
import BackgroundImage from '../common/BackgroundImage';  // Import the new background component

function Home() {
  const [textColor, setTextColor] = useState('text-white');  // Default to white text
  const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 4);

  const handleLuminanceChange = (luminance) => {
    // Set text color based on luminance
    if (luminance > 0.5) {
      setTextColor('text-black');  // Bright background, use black text
    } else {
      setTextColor('text-white');  // Dark background, use white text
    }
  };

  return (
    <div className="relative container mx-auto text-center mt-8">
      <Helmet>
        <title>Mush Khan</title>
      </Helmet>

      {/* Background Image */}
      <BackgroundImage onLuminanceChange={handleLuminanceChange} />

      {/* Main Content */}
      <div className={`relative z-10 ${textColor}`}>
        <h1 className="text-5xl font-bold mb-4">Mush Khan</h1>
        <p className="text-xl mb-8">Software engineering manager with a passion for solving complex problems in robotics and a drive for personal growth through creative pursuits like photography and music.</p>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300">Contact Me</button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 font-bold py-2 px-4 rounded hover:bg-yellow-300 hover:text-black">Learn More →</button>
        </div>
        <ImageSlider images={randomImages} />
      </div>
    </div>
  );
}

export default Home;