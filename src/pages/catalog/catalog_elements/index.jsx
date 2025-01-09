import React, { useState } from 'react';
import '../catalog_elements/style.css';
import Product1 from '../../../assets/img/product_2.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const CatalogProducts = () => {

    const [isOpen, setIsOpen] = useState(false)

    const state = () => {
        setIsOpen((open) => !open)
    }

    return (
    <>
    <section className='catalog_products'>

        <div id='top' className='top'>
            <div className='top_text'>
                <h1>All of them</h1>
                <button>Filter</button>
            </div>
            <div id='burger_2' className='burger_2'>  
                <p>Menu</p>
                <GiHamburgerMenu onClick={state} className='burger-menu'/>
            </div>
            <div id='top_nav' className={`links2 ${isOpen ? 'is-open' : ''}` }>
                <ul>
                    <li><a href="">Antioksidantlar</a></li>
                    <li><a href="">Xushbo'y moddalar</a></li>
                    <li><a href="">Konservalar</a></li>
                    <li><a href="">Shirinlashtiruvchilar</a></li>
                    <li><a href="">Oziq-ovqat qo'shimchalari</a></li>
                    <li><a href="">Stabilizatorlar</a></li>
                    <li><a href="">Ta'mni kuchaytiruvchi</a></li>
                </ul>
            </div>
        </div>

        <div className='center'>
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
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
            <div className='catalog_product'>
                <div className='top'>
                    <img src={Product1} alt="" />
                </div>
                <div className='bottom'>
                    <p>Organik Xlorella kukuni (250g)</p>
                    <p><span>120 000</span> so'm</p>
                </div>
            </div>
        </div>

        <div className='bottom2'>
            <button>See more</button>
        </div>

    </section>
    </>
  )
}

export default CatalogProducts;