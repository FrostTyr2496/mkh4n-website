// src/components/Gallery.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

// Import Lightbox and desired plugins
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import images from '../data/images';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  console.log('Images:', images); // Add this line

  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({
    src: img.medium,
    alt: img.alt,
  }));

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, idx) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIndex(idx)}
          >
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="w-full cursor-pointer"
            />
          </motion.div>
        ))}
      </Masonry>

      {index >= 0 && (
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom]}
          render={{
            buttonPrev: () => null, // Hide prev button if desired
            buttonNext: () => null, // Hide next button if desired
            toolbar: ({ close }) => (
              <div className="flex justify-between items-center p-2">
                <button className="text-white" onClick={close}>
                  Close
                </button>
                <button
                  className="text-white"
                  onClick={() =>
                    window.open(images[index].full, '_blank')
                  }
                >
                  View Full Size
                </button>
              </div>
            ),
          }}
        />
      )}
    </div>
  );
};

export default Gallery;