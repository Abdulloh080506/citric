import React from 'react';
import '../about_brands/style.css';
import Draftbit from '../../../assets/img/draftbit.png';
import Bubble from '../../../assets/img/bubble.png';
import Blockwallet from '../../../assets/img/blockwallet.png';
import Fathom from '../../../assets/img/fathom.png';
import Atlassian from '../../../assets/img/attlassian.png';
import Butter from '../../../assets/img/butter.png';
import Flatfile from '../../../assets/img/flatfile.png';
import Contentful from '../../../assets/img/contentful.png';
import GetFeedBack from '../../../assets/img/getfeedback.png';
import Asana from '../../../assets/img/asana.png';
import Dynaboard from '../../../assets/img/dynaboard.png';
import Gumroad from '../../../assets/img/gumroad.png';

const AboutBrands = () => {
  return (
    <>
    <section className='aboutbrands'>
        <div className='text'>Our partners</div>
        <div className='brands'>
            <div className='one'>
                <div>
                    <img src={Draftbit} alt="" />
                </div>
                <div>
                    <img src={Bubble} alt="" />
                </div>
                <div>
                    <img src={Blockwallet} alt="" />
                </div>
                <div>
                    <img src={Fathom} alt="" />
                </div>
            </div>
            <div className='two'>
                <div>
                    <img src={Atlassian} alt="" />
                </div>
                <div>
                    <img src={Butter} alt="" />
                </div>
                <div>
                    <img src={Flatfile} alt="" />
                </div>
                <div>
                    <img src={Contentful} alt="" />
                </div>
            </div>
            <div className='three'>
                <div>
                    <img src={GetFeedBack} alt="" />
                </div>
                <div>
                    <img src={Asana} alt="" />
                </div>
                <div>
                    <img src={Dynaboard} alt="" />
                </div>
                <div>
                    <img src={Gumroad} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutBrands;