import React from 'react'
import SearchBar from '../Utility/SearchBar'
import { Link } from 'react-router'

const StayHome = () => {
  return (
    <section className='mt-8'>
        <div className="container">
            <div className='py-20 pl-16 rounded-xl' style={{backgroundImage:"url('/Offer.png')"}}>
            <h2 className='font-bold text-4xl text-primary max-w-lg'>Stay home & get your daily needs from our shop</h2>
            <p className='font-medium text-lg text-secondary mt-5'>Start You'r Daily Shopping with <Link to={"/shop"} className='text-brand'>Nest Mart</Link></p>
            <div className='mt-11'>
                <SearchBar/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default StayHome