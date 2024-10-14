import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, A11y } from 'swiper/modules';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';  // FontAwesome Icons

const ImageSlider = ({ images, initialSlide = 0, onClose }) => {
    const [startIndex, setStartIndex] = useState(initialSlide);

    useEffect(() => {
        setStartIndex(initialSlide);  // Set the initial slide index when the component mounts
    }, [initialSlide]);

    const handleViewFullSize = (img) => {
        // Open full-size image in a new tab
        window.open(img.full, '_blank');
    };

    return (
        <div className="relative w-full">
            {/* Buttons placed absolutely above the frame */}
            <div className="absolute top-0 right-4 flex space-x-2 z-50 transform -translate-y-12">
                {/* Close Button */}
                {onClose && (
                    <button
                        className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 relative group"
                        onClick={onClose}  // Call onClose to close the slider
                        aria-label="Close"
                    >
                        <FaTimes size={16} />
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100">
                            Close
                        </span>
                    </button>
                )}

                {/* View Full Size Button */}
                <button
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 relative group"
                    onClick={() => handleViewFullSize(images[startIndex])}
                    aria-label="Full Size"
                >
                    <FaSearchPlus size={16} />
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100">
                        Full Size
                    </span>
                </button>
            </div>

            {/* Swiper Image Slider */}
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={'auto'}
                // pagination={{ clickable: true }}
                loop={true}
                initialSlide={startIndex}
                className="mySwiper h-auto"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={img.id} className="flex justify-center items-center">
                        <div className="relative p-2 pb-6 shadow-xl rounded-sm text-center">
                            <div className="inline-block bg-white p-2 sm:p-3 md:p-4 lg:p-6 rounded-sm">
                                <img
                                    src={img.medium}
                                    alt={img.alt}
                                    className="max-w-full max-h-[85vh] object-contain"
                                />
                                {/* Caption inside the white frame
                                <div className="bottom-2 text-center font-sans text-xs text-black">
                                    {img.alt}
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;