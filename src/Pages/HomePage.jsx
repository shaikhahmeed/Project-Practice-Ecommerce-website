import React from 'react'
import Banner from '../Component/Home/Banner'
import Category from '../Component/Home/Category'
import PopularProducts from '../Component/Home/PopularProducts'
import BestSell from '../Component/Home/BestSell'
import StayHome from '../Component/Home/StayHome'
import ShopDeals from '../Component/Shop/ShopDeals'
import ContactFooter from '../Component/Contact/ContactFooter'
import Offering from '../Component/Contact/Offering'

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Category/>
    {/* <PopularProducts/> */}
    <BestSell/>
    <ShopDeals/>
    <StayHome/>
    <Offering/>
    <ContactFooter/>
    </>
  )
}

export default HomePage