import React from 'react'
import SearchBar from '../Utility/SearchBar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';



const Banner = () => {


  return (
    <section>
      <div className="container">
        <Swiper slidesPerView={1} 
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}>
         <SwiperSlide>
          <div className='py-24 md:p-24 pl-24 bg-center bg-cover bg-no-repeat rounded-xl' style={{backgroundImage:"url('/banner.png')"}}>
          <h1 className='font-bold md:text-7xl text-7xl text-primary max-w-2xl'>Fresh Vegetables Big discount</h1>
          <p className='font-medium d:text-3xl text-3xl text-secondary mt-10 mb-16'>Save up to 50% off on your first order</p>
          <SearchBar/>
         </div>
         </SwiperSlide>
         <SwiperSlide>
          <div className='py-24 pl-24 bg-center bg-cover bg-no-repeat rounded-xl' style={{backgroundImage:"url('/banner.png')"}}>
          <h1 className='font-bold text-7xl text-primary max-w-2xl'>Fresh Vegetables Big discount</h1>
          <p className='font-medium text-3xl text-secondary mt-10 mb-16'>Save up to 50% off on your first order</p>
         <SearchBar/>
          </div>
         </SwiperSlide>
        </Swiper>
    </div>
    </section>
  )
}

export default Banner