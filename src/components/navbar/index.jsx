import React, { useState } from 'react';
import '../navbar/style.css';
import { Search } from '../../assets/icons';
import { Case } from '../../assets/icons';
import Logo from '../../assets/img/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const state = () => {
    setIsOpen((open) => !open)
  }

  return (
    <>
    <header id='navbar'>
        <figure className='nav_logos'>
          <div className='burger'>
            <GiHamburgerMenu onClick={state} className='burger-menu'/>
          </div>
          <Link to="/"><img src={Logo} alt="" /></Link>
        </figure>
        <nav className={`links ${isOpen ? 'is-open' : ''}` }>
            <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="">Vacancies</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
                <li className='nav_search'><a href=""><Search/></a></li>
            </ul>
            <figure className='nav_elements'>
              <details>
                <summary>English</summary>
                <div>
                  <a href="">O'zbekcha</a>
                  <a href="">Русский</a>
                  <a href="">English</a>
                  <a href=""></a>
                </div>
              </details>
              <div className='nav_case'><Case/></div>
            </figure>
            <div className='responsive-nav'></div>
              <li className='nav_search2'><a href=""><Search/></a></li>
            <IoClose onClick={state} className='burger-menu2'/>
        </nav>
    </header>
    </>
  )
}

export default Navbar;



