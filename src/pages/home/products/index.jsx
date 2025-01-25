import React, { useRef, useState } from 'react';
import '../products/style.css';
import { Case } from '../../../assets/icons.js';
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Products = () => {

    const swiper = useSwiper();

  return (
    <>
    <section className='products-container'>
        <div className='product'>
            <div className='products-image'>
                <div className="container"> 
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Ascorbic acid 99% (ascorbic acid) e300</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Сitric acid monohydrate e330</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Citric acid anhydrous (citric acid anhydrous)</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>SOY LECITHIN E322</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Sodium citrate 99.9% e331</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>sodium pyrosulphite (sodium metabisulphite)</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Menthol</p>
                <Case/>
            </div>
        </div>
        <div className='product'>
            <div className='products-image'>
                <div className="container">
                    <div className="wrapper">
                    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_img1'></SwiperSlide>
        <SwiperSlide className='bg_img2'></SwiperSlide>
        <SwiperSlide className='bg_img3'></SwiperSlide>
        <SwiperSlide className='bg_img4'></SwiperSlide>
      </Swiper>
                    </div>
                </div>
            </div>
            <div className='products-about'>
                <p>Aluminum foil pharmacopoeia</p>
                <Case/>
            </div>
        </div>
    </section>
    <div className='nav_pro_button'>

    <button className='more'>Show more</button>
    </div>

    </>
  )
}

export default Products;