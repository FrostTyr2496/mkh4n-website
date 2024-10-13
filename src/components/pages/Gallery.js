import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import images from '../data/images';  // Assuming you have an images.js file that exports your image data

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);  // State for selected image
  const dialogRef = useRef(null);  // Use a ref for the dialog

  useEffect(() => {
    // Show the dialog when an image is selected
    if (selectedImage) {
      dialogRef.current.showModal();  // Show the modal
    }
  }, [selectedImage]);  // Trigger effect when selectedImage changes

  const handleClose = () => {
    dialogRef.current.close();  // Close the modal
    setSelectedImage(null);  // Clear the selected image state
  };

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
            className="overflow-hidden rounded-lg mb-4"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}  // Set the selected image on click
          >
            <img
              src={image.thumbnail}
              alt={image.alt}
              className="w-full cursor-pointer"
            />
          </motion.div>
        ))}
      </Masonry>

      {/* React Dialog for showing the full image */}
      <dialog ref={dialogRef} className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        {selectedImage && (
          <div className="relative p-4 bg-white rounded-lg">
            <img
              src={selectedImage.full}  // Full-size image
              alt={selectedImage.alt}
              className="w-full h-full max-w-[100vw] max-h-[100vh] object-contain"  // Fit image to screen while keeping aspect ratio
            />
            <div className="flex justify-center mt-4">
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-lg mr-2"
                onClick={handleClose}  // Close modal on click
              >
                Close
              </button>
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-lg"
                onClick={() =>
                  window.open(selectedImage.full, '_blank')  // Open full-size image in a new tab
                }
              >
                View Full Size
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default Gallery;