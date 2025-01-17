import React from 'react';
import '../home_nav/style.css';
import { GrFormNextLink } from "react-icons/gr";

const HomeNav = () => {
  return (
    <>
    <section className='home_nav'>
        <h1>Catalog <GrFormNextLink/></h1>
        <nav>
            <ul>
                <li><a href="">Everything</a></li>
                <li><a href="">Flavors</a></li>
                <li><a href="">Stabilizers</a></li>
                <li><a href="">Preservatives</a></li>
                <li><a href="">Sweeteners</a></li>
                <li><a href="">Antioxidants</a></li>
                <li><a href="">Flavor enhancers</a></li>
                <li><a href="">Other additives</a></li>
            </ul>
        </nav>
    </section>
    </>
  )
}
export default HomeNav;