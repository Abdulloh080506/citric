import React, { useState } from 'react';
import '../navbar/style.css';
import { Search } from '../../assets/icons';
import { Case } from '../../assets/icons';
import Logo from '../../assets/img/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Product1 from '../../assets/img/product_2.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const state = () => {
    setIsOpen((open) => !open)
  }




  const [modalOpen, setOpen] = useState(false)

  const state2 = () => {
    setOpen((open) => !open)
  }




  const [shopOpen, setShopOpen] = useState(false)

  const state3 = () => {
    setShopOpen((open) => !open)
  }



  return (
    <>
    <header id='navbar'>
        <figure className='nav_logos'>
          <div className='nav_left'>
            <div className='nav_case'><GiHamburgerMenu onClick={state} className='burger-menu'/></div>
            <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
          <div className='nav_right'>
            <div className='nav_case' onClick={state2}><Search/></div>
            <div className='nav_case' onClick={state3}><Case/></div>
          </div>
        </figure>
        <Link className='logo_nav' to="/"><img src={Logo} alt="" /></Link>
        <nav className={`links ${isOpen ? 'is-open' : ''}` }>
            <div className='responsive-nav'>
                <IoClose onClick={state} className='burger-menu2'/>
                <details>
                <summary>EN <span></span></summary>
                <div>
                  <a href="">UZ</a>
                  <a href="">RU</a>
                  <a href="">EN</a> 
                </div>
              </details>
            </div>
            <ul>
                <li><Link onClick={state} to="/about">About us</Link></li>
                <li><Link onClick={state} to="/catalog">Catalog</Link></li>
                <li><Link onClick={state} to="/blog">Blog</Link></li>
                <li><Link onClick={state} to="">Vacancies</Link></li>
                <li><Link onClick={state} to="/contact">Contacts</Link></li>
                <button onClick={state2}><Search/></button>
            </ul>
            <figure className='nav_elements'>
              <details>
                <summary>EN <span></span></summary>
                <div>
                  <a href="">UZ</a>
                  <a href="">RU</a>
                  <a href="">EN</a> 
                </div>
              </details>
              <div className='nav_case' onClick={state3}><Case/></div>
            </figure>
        </nav>
    </header>

        <div className={`links_two ${modalOpen ? 'is-open-two' : ''}` }>
          <div className='search_modal'>
            <div><input type="text" placeholder='Search...'/> <button onClick={state2}><Search/></button></div>
          </div>
        </div>


        <div className={`shop_links ${shopOpen ? 'is-open-shop' : ''}` }>
          
          <div className='shop_products'>

            <div className='catalog_product'>
            <Link style={{textDecoration:'none', color:'black'}} to="/pro#first">
                    <div className='top'>
                        <img src={Product1} alt="" />
                    </div>
                    <div className='bottom'>
                        <p>Organik Xlorella kukuni (250g)</p>
                        <p><span>120 000</span> so'm</p>
                    </div>
                </Link>
            </div>

            <div className='catalog_product'>
            <Link style={{textDecoration:'none', color:'black'}} to="/pro#first">
                    <div className='top'>
                        <img src={Product1} alt="" />
                    </div>
                    <div className='bottom'>
                        <p>Organik Xlorella kukuni (250g)</p>
                        <p><span>120 000</span> so'm</p>
                    </div>
                </Link>
            </div>

            <div className='catalog_product'>
            <Link style={{textDecoration:'none', color:'black'}} to="/pro#first">
                    <div className='top'>
                        <img src={Product1} alt="" />
                    </div>
                    <div className='bottom'>
                        <p>Organik Xlorella kukuni (250g)</p>
                        <p><span>120 000</span> so'm</p>
                    </div>
                </Link>
            </div>


            <div className='catalog_product'>
            <Link style={{textDecoration:'none', color:'black'}} to="/pro#first">
                    <div className='top'>
                        <img src={Product1} alt="" />
                    </div>
                    <div className='bottom'>
                        <p>Organik Xlorella kukuni (250g)</p>
                        <p><span>120 000</span> so'm</p>
                    </div>
                </Link>
            </div>


            

          </div>
          <IoClose onClick={state3} className='shop_close'/>
        </div>
    </>
  )
}

export default Navbar;