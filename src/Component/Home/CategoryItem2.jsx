import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CategoryItem2 = () => {
  return (
    <div className='py-20 pl-12 pr-64 max-w-fit bg-cover bg-center bg-no-repeat rounded-xl' style={{backgroundImage:"url('/onion.png')"}}>
        <h2 className='font-bold text-2xl text-primary max-w-48'>Everyday Fresh & Clean with Our Products</h2>
        <button className='flex gap-1 items-center mt-6 font-bold text-xs text-[#FFFFFF] bg-brand rounded-xs py-2 px-3 cursor-pointer'>
            <p>Shop now</p>
            <p><FaArrowRight /></p>
        </button>
    </div>
  )
}

export default CategoryItem2