import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import ImageSlider from '../common/ImageSlider';  // Import the ImageSlider component
import images from '../data/images';  // Import all images
import { Helmet } from 'react-helmet';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
};

const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);  // Track the selected image index
    const [isSliderOpen, setIsSliderOpen] = useState(false);  // Track if slider is open

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);  // Set the clicked image index
        setIsSliderOpen(true);  // Open the slider
    };

    const handleCloseSlider = () => {
        setIsSliderOpen(false);  // Close the slider
        setSelectedImageIndex(null);  // Clear the selected image index
    };

    const handleBackgroundClick = (e) => {
        // Close the slider when clicking on the background, not on the image itself
        if (e.target.classList.contains('slider-background')) {
            handleCloseSlider();
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen p-4 overflow-x-hidden">
            <Helmet>
                <title>MK's Photography Gallery</title>
            </Helmet>
            {/* Masonry Grid for the gallery */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className="overflow-hidden rounded-lg mb-4"
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1, x: 0 }}  // Fade-in from the right
                        initial={{ opacity: 0, x: 100 }}  // Initial state: transparent and to the right
                        transition={{ duration: 0.5 }}  // Transition duration
                    >
                        <img
                            src={image.thumbnail}
                            alt={image.alt}
                            className="w-full cursor-pointer"
                            onClick={() => handleImageClick(index)}  // Open slider with clicked image
                        />
                    </motion.div>
                ))}
            </Masonry>

            {/* Show the ImageSlider when an image is clicked */}
            {isSliderOpen && selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 slider-background"
                    onClick={handleBackgroundClick}  // Close slider on background click
                >
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
                        {/* Pass all images, the clicked image index, and the close function */}
                        <ImageSlider
                            images={images}
                            initialSlide={selectedImageIndex}
                            onClose={handleCloseSlider}  // Pass the close function here
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;