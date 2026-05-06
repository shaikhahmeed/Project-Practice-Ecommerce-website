import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

const ProductItem = () => {
  return (
    <div className='w-fit shadow-xl rounded-xl'>
      <div className='px-5 py-1.5 bg-[#F74B81] font-medium text-xs text-[#FFFFFF] max-w-fit rounded-tl-2xl rounded-br-2xl'>
        <p>Hot</p>
      </div>
      <img src="public/productItem.png" alt="" />
      <div className='px-5 pb-8'>
        <p className='font-medium text-xs text-[#ADADAD] mt-1.5'>Snack</p>
      <h3 className='font-bold text-base text-primary max-w-52 mt-2.5'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>
      <ul className='flex gap-7 items-center mt-2.5'>
        <li className='text-yellow-400'><FaStar /></li>
        <li className='text-sm font-medium text-[#B6B6B6]'>(4.0)</li>
      </ul>
      <p className='font-medium text-sm text-secondary mt-2.5'>By <span className='text-brand'>NestFood</span></p>
      <ul className='flex justify-between mt-6 items-center'>
        <li className='flex gap-2.5 items-end mt-6'>
          <p className='font-bold text-lg text-brand'>$28.85</p>
          <p className='font-bold text-sm text-secondary'>$32.8</p>
        </li>
        <li className='flex gap-1 py-2.5 px-5 text-brand items-center bg-green-300 rounded-xs'>
          <p className='cursor-pointer'><MdOutlineShoppingCart /></p>
          <button className='cursor-pointer'>Add</button>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default ProductItem