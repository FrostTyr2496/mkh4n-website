import React, { useEffect, useState } from 'react';
import images from '../data/images';  // Assuming your image data is in images.js

const BackgroundImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Randomly pick an image from the array
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setSelectedImage(randomImage);
    }, []);

    return (
        <div>
            {selectedImage && (
                <div
                    className="fixed inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${selectedImage.medium})`,
                        filter: 'blur(10px) brightness(20%)', // Blur and darken
                        zIndex: '-1',  // Behind all content
                    }}
                />
            )}
        </div>
    );
};

export default BackgroundImage;