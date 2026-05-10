import React from 'react'

export const CategoryItem = ({data}) => {
  return (
    <div className='py-5 bg-[#F4F6FA] max-w-fit text-center mt-11 hover:shadow-2xl'>
        <img src="public/burger.png" alt="burger" className='mb-4 px-7'/>
        <h2 className='font-bold text-base text-primary mb-1 px-6'>{data?.name}</h2>
        <p className='font-medium text-sm text-secondary'>26 items</p>
    </div>
  )
}
