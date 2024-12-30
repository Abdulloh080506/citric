import React from 'react';
import '../footer/style.css';
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { RiTelegramLine } from "react-icons/ri";
import FooterLogo from '../../assets/img/white_logo.png';

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className='left'>
            <div className='top'>
                <div>
                    <p>Elektron pochta</p>
                    <h2>sales@citric.uz</h2>
                </div>
                <div>
                    <p>Qo'ng'iroqlar markazi</p>
                    <h2>(+998) 90 970-65-00</h2>
                </div>
            </div>
            <div className='center'>
                <div className='second'>
                    <p>Savollar uchun</p>
                    <h2>help@citric.uz</h2>
                </div>
                <div className='second'>
                    <p>Ijtimoiy tarmoqlar</p>
                    <div className='icons'>
                        <FaInstagram/>
                        <LiaFacebook/>
                        <RiTelegramLine/>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <img src={FooterLogo} alt="" />
                <p>CITRIC.UZ - THE BEST INGREDIENTS FOR A GOOD LIFE.</p>
            </div>
        </div>
        <div className='right'><div className='location' style={{position:'relative',overflow:'hidden',border:'none'}}><a href="https://yandex.uz/maps/org/citric_uz/144953549297/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}>Citric. Uz</a><a href="https://yandex.uz/maps/10335/tashkent/category/food_ingredients_and_spices/184106782/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}}>Пищевые ингредиенты и специи в Ташкенте</a><iframe src="https://yandex.uz/map-widget/v1/org/citric_uz/144953549297/?from=mapframe&ll=69.243529%2C41.402244&source=mapframe&utm_source=mapframe&z=12" width="732" height="484" frameborder="1" allowfullscreen="true" style={{position:'relative'}}></iframe></div></div>
    </section>
    </>
  )
}

export default Footer;