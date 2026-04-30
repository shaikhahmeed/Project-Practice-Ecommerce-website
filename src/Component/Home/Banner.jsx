import React from 'react'
import SearchBar from '../Utility/SearchBar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <div className="container">
        <div className='py-24 pl-24 bg-center bg-cover bg-no-repeat rounded-xl' style={{backgroundImage:"url('/banner.png')"}}>
        <h1 className='font-bold text-7xl text-primary max-w-2xl'>Fresh Vegetables Big discount</h1>
        <p className='font-medium text-3xl text-secondary mt-10 mb-16'>Save up to 50% off on your first order</p>
        <SearchBar/>
        </div>
    </div>
    </section>
  )
}

export default Banner