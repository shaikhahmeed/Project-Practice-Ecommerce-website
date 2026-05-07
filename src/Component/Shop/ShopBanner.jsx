import React from 'react'
import Breadcamp from '../Utility/Breadcamp'

const ShopBanner = () => {
  return (
     <section className='pt-8 pb-14'>
        <div className="container hidden md:block">
            <div className="bg-[url(/shop_banner.png)] p-20 bg-center rounded-4xl">
                <Breadcamp/>
            </div>
        </div>
        <div className='block md:hidden'>
          <Breadcamp/>
        </div>
    </section>
  )
}

export default ShopBanner