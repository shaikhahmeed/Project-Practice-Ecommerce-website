import React from 'react'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
     <section>
        <div className="container mt-12">
            <h2 className='font-bold text-4xl text-primary md:text-center'>What We Provide?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-11'>
                <ServiceItem>Best Prices & Offers</ServiceItem>
                <ServiceItem>Wide Assortment</ServiceItem>
                <ServiceItem>Free Delivery</ServiceItem>
                <ServiceItem>Easy Returns</ServiceItem>
                <ServiceItem>100% Satisfaction</ServiceItem>
                <ServiceItem>Great Daily Deal</ServiceItem>
            </div>
        </div>
    </section>
  )
}

export default Services