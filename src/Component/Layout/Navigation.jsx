import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaArrowsRotate, FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router'

const Navigation = () => {
  return (
    <>
    <div>
       {/* header */}
       <div className='flex justify-between'>
        <div>
          <ul className='flex gap-5 text-secondary font-medium'>
            <li> About Us</li>
            <li>My Account</li>
            <li> Wishlist</li>
            <li> Order Tracking</li>
          </ul>
        </div>
        <div>
          <p className='text-secondary font-medium'>Supper Value Deals - Save more with coupons</p>
        </div>
        <div>
          <ul className='flex gap-5 text-secondary font-medium'>
            <li>Need help? Call Us: <span className='text-brand'>+ 1800 900</span></li>
            <li className='flex gap-1 items-center'>
              <button>English</button>
              <p><MdKeyboardArrowDown /></p>
            </li>
            <li className='flex gap-1 items-center'>
              <button>USD </button>
              <p><MdKeyboardArrowDown /></p>
            </li>
          </ul>
        </div>
       </div>
       {/* body */}
       <div className='flex justify-between items-center my-9'>
        <div>
          <Link to={"/#"}><img src="public/logo.png" alt="logo" /></Link>
        </div>
        <div className='flex py-4 pl-5 items-center gap-3.5 border-2 rounded-xs border-brand'>
          <div className=''>
            <select name="" id="" className='outline-0 cursor-pointer'>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            </select>
          </div>
          <div className='text-center'>
            <input type="text" placeholder='Search for items...' className='outline-0'/>
            <button className='cursor-pointer'><IoMdSearch /></button>
          </div>
        </div>
        <div>
          <ul className='flex gap-2.5'>
            <li className='flex text-end'>
               <Link><p className='text-primary'><FaArrowsRotate /></p></Link>
               <Link><p className='text-secondary'>Compare</p></Link>
            </li>
            <li className='flex text-end'>
              <Link><p className='text-primary'><FaRegHeart /></p></Link>
              <Link><p className='text-secondary'>Wishlist</p></Link>
            </li>
            <li className='flex text-end'>
              <Link><p className='text-primary'><CiShoppingCart /></p></Link>
              <Link><p className='text-secondary'>Cart</p></Link>
            </li>
            <li className='flex text-end'>
              <Link><p className='text-primary'><FaRegUser /></p></Link>
              <Link><p  className='text-secondary'>Account</p></Link>
            </li>
          </ul>
        </div>
       </div>
    </div>
    </>
  )
}

export default Navigation