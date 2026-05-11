import React from 'react'
import OfferingItem from './OfferingItem'

const Offering = () => {
  return (
    <div className='container mt-12 hidden md:block'>
        <div className='hidden md:flex gap-6'>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        </div>
        <div className='flex flex-col md:hidden gap-4'>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        <OfferingItem/>
        </div>
    </div>
  )
}

export default Offering