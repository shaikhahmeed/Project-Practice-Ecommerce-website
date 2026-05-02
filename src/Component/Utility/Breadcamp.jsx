import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useLocation } from 'react-router'

const Breadcamp = () => {
    const location = useLocation().pathname.split("/")[1]
  return (
    <ul className='flex gap-4 text-secondary text-lg font-semibold'>
        <li className='flex items-center gap-2'>
            <Link className='flex items-center gap-1 text-brand' to="/">
            <FaHome/>
            <span>Home</span>
            </Link>
            <IoIosArrowForward/>
        </li>
        <li className='cursor-pointer'>
            <p>{location}</p>
        </li>
    </ul>
  )
}

export default Breadcamp