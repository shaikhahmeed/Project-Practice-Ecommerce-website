import React from 'react'
import ShopBanner from '../Component/Shop/ShopBanner'
import ShopDeals from '../Component/Shop/ShopDeals'
import ShopProduct from '../Component/Shop/ShopProduct'
import StayHome from '../Component/Home/StayHome'
import ContactFooter from '../Component/Contact/ContactFooter'

const ShopPage = () => {
  return (
   <>
   <ShopBanner/>
   <ShopProduct/>
   <ShopDeals/>
   <StayHome/>
   <ContactFooter/>
   </>
  )
}

export default ShopPage