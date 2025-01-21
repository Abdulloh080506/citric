import React from 'react';
import '../banner/style.css';
import BannerImg from '../../../assets/img/banner_animation1.webp';
import BannerImage1 from '../../../assets/img/banner_animation2.png';
import BannerImage2 from '../../../assets/img/banner_animation3.png';
import BannerImage3 from '../../../assets/img/banner_animation4.png';

const Banner = () => {
  return (
    <>
    <section className='banner'>
      <div className='banner_product-circle-1'>
        <div>
          <div>
            <div>
              <div>
                <img className='img1' src={BannerImage2} alt="" />
                <img className='img' src={BannerImage1} alt="" />
                <img className='img' src={BannerImage3} alt="" />
                <img className='banner_position' src={BannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner;