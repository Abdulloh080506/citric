import React from 'react';
import '../about/style.css';
import AboutBanner from './about_banner';
import AboutBrands from './about_brands';
import AboutProducter from './about_producter';
import AboutLatestElement from './about_latest';
import Pagenation from '../home/pagenation';

const About = () => {
  return (
    <>
    <AboutBanner/>
    <AboutBrands/>
    <AboutProducter/>
    <AboutLatestElement/>
    <Pagenation/>
    </>
  )
}

export default About;