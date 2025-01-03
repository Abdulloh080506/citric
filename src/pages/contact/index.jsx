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
                <div className='icons'>
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