import React from 'react';
import '../about_latest/style.css';
import { Downloads } from './../../../assets/icons';

const AboutLatestElement = () => {
  return (
    <>
    <section className='latest'>
        <div className='center'>
            <h1>Recvisits of Company</h1>
            <button>
                PDF shaklida yuklab olish
                <Downloads/>
            </button>
        </div>
    </section>
    </>
  )
}

export default AboutLatestElement;