import React from 'react';
import Banner from './banner';
import Cards from './cards';
import HomeNav from './home_nav';
import Products from './products';
import HomeBlog from './blog';
import Pagenation from './pagenation';

const Home = () => {
  return (
    <>
    <Banner/>
    <Cards/>
    <HomeNav/>
    <Products/>
    <HomeBlog/>
    <Pagenation/>
    </>
  )
}

export default Home;