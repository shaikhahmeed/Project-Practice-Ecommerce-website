import React, { Children } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { Link } from 'react-router'

const LocationItem = ({Children}) => {
  return (
    <div className='w-1/3'>
        <h2 className='font-bold text-2xl text-bold text-brand pt-4'>{Children}</h2>
        <p className='font--medium text-xs text-[#7E7E7E] pt-6 max-w-60 hidden md:block'>205 North Michigan Avenue, Suite 810
        Chicago, 60601, USA
        Phone: (123) 456-7890
        Email: contact@Evara.components
        </p>
        <Link className='w-fit text-xs md:text-base py-1.5 md:py-2 px-2 md:px-3 mt-2 md:mt-4 bg-brand text-white flex items-center rounded-sm gap-1 cursor-pointer'>
           <CiLocationOn />
           View Map
        </Link>
    </div>
  )
}

export default LocationItem