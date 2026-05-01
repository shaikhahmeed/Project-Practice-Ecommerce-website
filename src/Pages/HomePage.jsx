import React from 'react'
import Banner from '../Component/Home/Banner'
import Category from '../Component/Home/Category'
import PopularProducts from '../Component/Home/PopularProducts'
import BestSell from '../Component/Home/BestSell'

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Category/>
    <PopularProducts/>
    <BestSell/>
    </>
  )
}

export default HomePage