import React, { useState } from 'react';
import '../home_nav/style.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const HomeNav = () => {

    const [isOpen, setIsOpen] = useState(false)
  
    const state = () => {
      setIsOpen((open) => !open)
    }

  return (
    <>
    <section className='home_nav'>
        <h1>Catalog</h1>
        <div className='burger_2'>  
          <p>Menu</p>
          <GiHamburgerMenu onClick={state} className='burger-menu'/>
        </div>
        <nav className={`links2 ${isOpen ? 'is-open' : ''}` }>
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