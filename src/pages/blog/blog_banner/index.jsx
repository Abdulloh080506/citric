import React from 'react';
import '../blog_banner/style.css';
import { MdNavigateNext } from "react-icons/md";
import { NextIcon } from "../../../assets/icons";

const BlogBanner = () => {
  return (
    <>
        <section className='blog'>
      <h1>Blog</h1>
      <div className='blog-container'>

        <div className='blog-left'>
          <div className='img'></div>
          <div className='texts'>
            <h1>Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223</h1>
            <p>Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil kimyoviy birikmaning ikkita nomi</p>
            <button>See more <NextIcon/></button>
          </div>
        </div>

        <div className='blog-right'>
          <div className='img'></div>
          <div className='texts'>
            <h1>Natriy pirosulfit (Natriy metabisulfit) (Xitoy) E223</h1>
            <p>Bu oziq-ovqat sanoatida keng qo'llaniladigan konservant bo'lgan bir xil kimyoviy birikmaning ikkita nomi</p>
            <button>See more <NextIcon/></button>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default BlogBanner;