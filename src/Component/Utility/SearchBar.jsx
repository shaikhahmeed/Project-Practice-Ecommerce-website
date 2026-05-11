import React from 'react'
import { PiTelegramLogo } from 'react-icons/pi'

const SearchBar = () => {
  return (
    <div className='flex items-center bg-amber-50 w-fit rounded-4xl '>
        <p className='font-medium py-3 md:py-6 text-[#838383] text-lg pl-8 pr-2'><PiTelegramLogo/></p>
        <input type="e-mail" placeholder='Your emaill address' className='font-medium py-3 md:py-6 text-[#838383] text-base outline-0'/>
        <button className='cursor-pointer py-6 font-medium text-base text-[#FFFFFF] bg-brand rounded-4xl px-10'>Subscribe</button>
    </div>
  )
}

export default SearchBar