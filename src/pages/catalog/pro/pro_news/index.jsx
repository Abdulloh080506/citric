import React from 'react';
import '../pro_news/style.css';
import { IoClose } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import Product1 from '../../../../assets/img/product_2.png'


const ProNews = () => {
  return (
    <>
    <section className='pro_news'>
        <div className='top'>
            <div className='top-hed'>
                <h1>Mahsulot haqida ma’lumotlar</h1>
                <IoClose/>
            </div>
            <div className='top-foot'>
                <p>Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi.</p>
                <p>Bug'doy o'ti kukunini smetana yoki sharbatga qo'shish oson; Tez suratga olish uchun uni suv yoki sevimli suyuqlik bilan aralashtiring</p>
            </div>
        </div>

        <div className='top'>
            <div className='top-hed'>
                <h1>Mahsulot haqida ma’lumotlar</h1>
                <IoClose/>
            </div>
            <div className='top-foot'>
                <p>Bug'doy o'tida ovqat hazm qilish va immunitetni yaxshilashga yordam beradigan 70 dan ortiq turli xil fermentlar mavjud. Bug'doy o'ti tarkibidagi aminokislotalar charchoq bilan kurashishga yordam beradi, antioksidantlarning yuqori miqdori esa tanadagi erkin radikallarning shikastlanishini kamaytiradi.</p>
                <p>Bug'doy o'ti kukunini smetana yoki sharbatga qo'shish oson; Tez suratga olish uchun uni suv yoki sevimli suyuqlik bilan aralashtiring</p>
            </div>
        </div>
    </section>

    <section className='section-2'>
        <h1 className='h1'>O'xshash mahsulotlar</h1>
        <div className='pro-products'>
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
    </section>
    </>
  )
}

export default ProNews;