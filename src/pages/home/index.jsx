import React from 'react';
import Banner from './banner';
import Cards from './cards';
import HomeNav from './home_nav';
import Products from './products';
import HomeBlog from './blog';

const Home = () => {
  return (
    <>
    <Banner/>
    <Cards/>
    <HomeNav/>
    <Products/>
    <HomeBlog/>
    </>
  )
}

export default Home;