import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import images from '../data/images';  // Your images array

const ImageSlider = () => {
  // Pick 4 random images from the array
  const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <Swiper
      modules={[Pagination, A11y]}  // Pagination and accessibility
      spaceBetween={10}  // Spacing between each slide
      slidesPerView={'auto'}  // Adjust for auto-resizing per image width
      pagination={{ clickable: true }}  // Enable clickable pagination
      className="mySwiper"
      loop={true}  // Enable infinite scrolling loop
      freeMode={true}  // Enable fluid, scrollable free mode
      freeModeMomentum={true}  // Smooth momentum scrolling
      direction="horizontal"  // Ensure horizontal scrolling (default)
    >
      {shuffledImages.map((img) => (
        <SwiperSlide key={img.id} style={{ width: '100%', height: '100%' }}>
          <img
            src={img.medium}
            alt={img.alt}
            className="w-full h-full object-contain"  // Ensure the entire image is visible
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;