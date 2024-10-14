import React from 'react';
import ImageSlider from '../common/ImageSlider';
import images from '../data/images';  // Import all images
import { Helmet } from 'react-helmet';

function Home() {
  // Pick 4 random images
  const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="container mx-auto text-center mt-8">
      <Helmet>
        <title>Mush Khan</title>
      </Helmet>
      <h1 className="text-5xl font-bold mb-4">Mush Khan</h1>
      <p className="text-xl mb-8">Software engineering manager with a passion for solving complex problems in robotics and a drive for personal growth through creative pursuits like photography and music.</p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300">Contact Me</button>
        <button className="bg-transparent border border-yellow-400 text-yellow-400 font-bold py-2 px-4 rounded hover:bg-yellow-300 hover:text-black">Learn More →</button>
      </div>
      <ImageSlider images={randomImages} />
    </div>
  );
}

export default Home;