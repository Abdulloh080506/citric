import React from 'react';
import '../pro/style.css';
import ProBanner from './pro_banner';
import ProNews from './pro_news';

const Pro = () => {
  return (
    <>
    <section className='pro'>
      <ProBanner/>
      <ProNews/>
    </section>
    </>
  )
}

export default Pro;