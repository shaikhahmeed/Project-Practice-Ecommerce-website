import React from 'react'
import LocationItem from './LocationItem'

const Location = () => {
  return (
     <div className='container'>
        <div className="hidden md:flex justify-between mt-14 items-center">
            <LocationItem>Office</LocationItem>
            <LocationItem>Studio</LocationItem>
            <LocationItem>Shop</LocationItem>
            <LocationItem>Abroad-Outlet</LocationItem>
        </div>
         <div className="grid grid-cols-2 md:hidden justify-between mt-14 items-center">
            <LocationItem>Office</LocationItem>
            <LocationItem>Studio</LocationItem>
            <LocationItem>Shop</LocationItem>
            <LocationItem>Abroad</LocationItem>
        </div>
    </div>
  )
}

export default Location