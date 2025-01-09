import React from 'react';
import '../pro_banner/style.css';
import { Link } from 'react-router-dom';
import ProducT from '../../../../assets/img/product_2.png';
import { useEffect } from 'react';

const ProBanner = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offset = 100; 
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth',
            });
          }
        }
      }, []);

  return (
    <>
    <section id='first' className='pro-banner'>
        <Link to="/catalog">Orqaga</Link>
        <div className='pro'>

            <div className='product'><img src={ProducT} alt="" /></div>

            <div className='prise'>
                <h1>Organik xlorella</h1>
                <div className='real-prise'>
                    <p>1 kg uchun</p>
                    <p><span>120 000</span> so'm</p>
                </div>
                <div className='about-pro'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, consequatur! Molestias dolorem qui pariatur veritatis. consequatur! Molestias dolorem qui pariatur veritatis.</p>
                </div>
                <button>Sotib olish</button>
            </div>

        </div>
    </section>
    </>
  )
}

export default ProBanner;