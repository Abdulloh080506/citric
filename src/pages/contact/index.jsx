import React from 'react';
import '../contact/style.css';
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { RiTelegramLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
    <section className='contact'>
        <h1>Contact</h1>
        <div className='right'><div className='location'><a href="https://yandex.uz/maps/org/citric_uz/144953549297/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px'}}></a><a href="https://yandex.uz/maps/10335/tashkent/category/food_ingredients_and_spices/184106782/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px'}}></a><iframe src="https://yandex.uz/map-widget/v1/org/citric_uz/144953549297/?from=mapframe&ll=69.243529%2C41.402244&source=mapframe&utm_source=mapframe&z=12" frameborder="1" allowfullscreen="true"></iframe></div></div>
        <div className='phones'>
            <div className='contact-elements'>
                <p>Elektron pochta</p>
                <h2>sales@citric.uz</h2>
            </div>
            <div className='contact-elements'>
                <p>Savollar uchun</p>
                <h2>help@citric</h2>
            </div>
            <div className='contact-elements'>
                <p>Qo'ng'iroqlar markazi</p>
                <h2>(+998) 90 970-65-00</h2>
            </div>
            <div className='contact-elements'>
                <p>Ijtimoiy tarmoqlar</p>
                <div className='icons2'>
                    <FaInstagram/>
                    <LiaFacebook/>
                    <RiTelegramLine/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;