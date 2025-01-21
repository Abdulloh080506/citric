import React from 'react';
import '../cards/style.css';
import BG from '../../../assets/img/product_1.webp';
import { MdNavigateNext } from "react-icons/md";
import WhiteLogo from '../../../assets/img/flower.png';

const Cards = () => {
  return (
    <>
    <section className='cards_container'>
        <main className='left-card'>
            <div className='z-index-1'>
                <img src={BG} alt="" />
            </div>
            <div className='bg-rounds'>
                <div>
                    <div>   
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
        <main className='right-card'>
            <div className='bg-rounds2'>
                <div>
                    <div>
                        <div><img src={WhiteLogo} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='text'>
                <h1>About us</h1>
                <p>CITRIC.UZ - THE BEST INGREDIENTS FOR A GOOD LIFE.</p>
                <p>Citric.uz is a global technological company that has been operating in the Uzbek market since 2013. The company represents world leaders in the production of food ingredients.</p>
                <p>A developed distribution network, well-functioning logistics, consolidation warehouses are located in Europe, China and the CIS countries, and their efforts are aimed at providing food manufacturers with high-quality ingredients and raw materials.</p>
                <button>Lean more <MdNavigateNext/></button>
            </div>
        </main>
    </section>
    </>
  )
}

export default Cards;