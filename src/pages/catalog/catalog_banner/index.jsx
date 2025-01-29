import React, { useRef, useState } from 'react';
import '../catalog_banner/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const CatalogBanner = () => {
  return (
    <>
    <section className='catalog_banner'>
        <h1>Catalog</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slides'>Slide 1</SwiperSlide>
        <SwiperSlide className='slides'>Slide 2</SwiperSlide>
        <SwiperSlide className='slides'>Slide 3</SwiperSlide>
        <SwiperSlide className='slides'>Slide 4</SwiperSlide>
        <SwiperSlide className='slides'>Slide 5</SwiperSlide>
        <SwiperSlide className='slides'>Slide 6</SwiperSlide>
        <SwiperSlide className='slides'>Slide 7</SwiperSlide>
        <SwiperSlide className='slides'>Slide 8</SwiperSlide>
        <SwiperSlide className='slides'>Slide 9</SwiperSlide>
      </Swiper> 
    </section>
    </>
  )
}

export default CatalogBanner;