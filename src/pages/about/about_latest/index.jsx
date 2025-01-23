import React from 'react';
import '../about_latest/style.css';
import { Downloads } from './../../../assets/icons';
import AboutBG from '../../../assets/img/about_bg.png';
import AboutBGtwo from '../../../assets/img/about_bg2.png';

const AboutLatestElement = () => {
  return (
    <>
    <section className='latest'>
        <div className='about_images'>
          <img src={AboutBG} alt="" />
          <img src={AboutBGtwo} alt="" />
        </div>
        <div className='center'>
            <h1>Recvisits of Company</h1>
            <button>
                PDF shaklida yuklab olish
                <Downloads/>
            </button>
        </div>
    </section>
    </>
  )
}

export default AboutLatestElement;