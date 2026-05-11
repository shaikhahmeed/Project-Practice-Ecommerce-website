import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CategoryItem2 from './CategoryItem2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';



const Category = () => {
    const[categoryList,setCategoryList]=useState([])

    useEffect(()=>{
       (async()=>{
         const options = {
  method: 'GET',
  url: 'https://api.freeapi.app/api/v1/ecommerce/categories',
  params: {page: '1', limit: '10'},
  headers: {accept: 'application/json'}
};

try {
  const { data } = await axios.request(options);
  setCategoryList(data.data.categories);
} catch (error) {
  console.error(error);
}
       })()
    },[])


  return (
    <>
    <section className='mt-14'>
        <div className="container">
            <div className='flex gap-7'>
                <h2 className='font-bold text-3xl text-primary'>Featured Categories</h2>
                <ul className='font-light text-base hidden md:flex gap-7 text-primary items-end'>
                    <li className='cursor-pointer hover:text-brand'>Cake & Milk</li>
                    <li className='cursor-pointer hover:text-brand'>Coffes & Teas</li>
                    <li className='cursor-pointer hover:text-brand'>Pet Foods</li>
                    <li className='cursor-pointer hover:text-brand'>Vegetables</li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <Swiper slidesPerView={5} loop={true}>
                     {
                    categoryList.map((item)=>(
                        <SwiperSlide><CategoryItem key={item._id} data={item}/></SwiperSlide>    
                    ))
                }        
                </Swiper>
            </div>
            <div className='mt-6 md:flex gap-6'>
                <CategoryItem2/>
                <CategoryItem2/>
                <CategoryItem2/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Category