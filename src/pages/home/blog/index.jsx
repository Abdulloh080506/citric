import React from 'react';
import '../blog/style.css';
import { GrFormNextLink } from "react-icons/gr";
import { NextIcon } from '../../../assets/icons';

const HomeBlog = () => {
  return (
    <>
    <section id='blog' className='blog'>
        <h1>Blog <GrFormNextLink/></h1>
        <div className='blog-pro'>
            <div className='div'>
                <div></div>
                <div>
                    <h3>Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223</h3>
                    <p>Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil kimyoviy birikmaning ikkita nomi</p>
                    <button>Batafsil ko'rish <NextIcon/></button>
                </div>
            </div>
            <div className='div'>
                <div></div>
                <div>
                    <h3>Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223</h3>
                    <p>Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil kimyoviy birikmaning ikkita nomi</p>
                    <button>Batafsil ko'rish <NextIcon/></button>
                </div>
            </div>
            <div className='div'>
                <div></div>
                <div>
                    <h3>Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223</h3>
                    <p>Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil kimyoviy birikmaning ikkita nomi</p>
                    <button>Batafsil ko'rish <NextIcon/></button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeBlog;