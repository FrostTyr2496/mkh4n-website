import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import images from '../data/images';

const ImageSlider = () => {
  // Pick 4 random images from the array
  const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <Swiper spaceBetween={10} slidesPerView={1} className="mySwiper">
      {shuffledImages.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`Image ${idx}`} className="w-full h-auto object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;