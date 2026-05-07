import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaArrowsRotate, FaFire, FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { PiCirclesFourLight } from 'react-icons/pi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navigation = () => {
  return (
    <>
    <div className='container shadow-2xs pb-5'>
       {/* header */}
       <div className='flex justify-between border-b-2 border-b-[#ECECEC] pb-3'>
        <div>
          <ul className='flex gap-5 text-secondary font-medium'>
            <li className='hover:text-brand'> About Us</li>
            <li className='hover:text-brand'>My Account</li>
            <li className='hover:text-brand'> Wishlist</li>
            <li className='hover:text-brand'> Order Tracking</li>
          </ul>
        </div>
        <div>
          <p className='text-secondary font-medium hover:text-brand'>Supper Value Deals - Save more with coupons</p>
        </div>
        <div>
          <ul className='flex gap-5 text-secondary font-medium'>
            <li>Need help? Call Us: <span className='text-brand'>+ 1800 900</span></li>
            <li className='flex gap-1 items-center hover:text-brand'>
              <button className='cursor-pointer'>English</button>
              <p className='cursor-pointer'><MdKeyboardArrowDown /></p>
            </li>
            <li className='flex gap-1 items-center hover:text-brand'>
              <button className='cursor-pointer'>USD </button>
              <p className='cursor-pointer'><MdKeyboardArrowDown /></p>
            </li>
          </ul>
        </div>
       </div>
       {/* body */}
       <div className='flex justify-between items-center my-9 border-b-2 border-b-[#ECECEC] pb-8'>
        <div>
          <Link to={""}><img src="public/logo.png" alt="logo" /></Link>
        </div>
        <div className='flex py-4 pl-5 pr-1.5 items-center gap-3.5 border-2 rounded-xl border-brand'>
          <div>
            <select name="" id="" className='outline-0 cursor-pointer'>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            </select>
          </div>
          <div className='text-center flex gap-80'>
            <input type="text" placeholder='Search for items...' className='outline-0'/>
            <button className='cursor-pointer'><IoMdSearch /></button>
          </div>
        </div>
        <div>
          <ul className='flex gap-2.5'>
            <li className='flex text-end gap-1'>
               <Link><p className='text-primary'><FaArrowsRotate /></p></Link>
               <Link><p className='text-secondary'>Compare</p></Link>
            </li>
            <li className='flex text-end gap-1'>
              <Link><p className='text-primary'><FaRegHeart /></p></Link>
              <Link><p className='text-secondary'>Wishlist</p></Link>
            </li>
            <li className='flex text-end gap-1'>
              <Link to={"/cart"}><p className='text-primary'><FiShoppingCart /></p></Link>
              <Link to={"/cart"}><p className='text-secondary'>Cart</p></Link>
            </li>
            <li className='flex text-end gap-1'>
              <Link to={"/registration"}><p className='text-primary'><FaRegUser /></p></Link>
              <Link to={"/registration"} ><p  className='text-secondary'>Account</p></Link>
            </li>
          </ul>
        </div>
       </div>
       {/* footer */}
       <div className='flex justify-between items-center shadow-2xs pb-3.5'>
        <div className='flex gap-2 items-center py-3.5 px-5 text-base text-[#FFFFFF] bg-brand rounded-xl cursor-pointer'>
          <p><PiCirclesFourLight /></p>
          <p>Browse All Categories</p>
          <p><MdOutlineKeyboardArrowDown /></p>
        </div>
        <div>
          <ul className='flex gap-8 font-bold text-primary'>
            <li className='flex gap-2 items-center hover:text-brand cursor-pointer'>
              <p><FaFire /></p>
              <p>Deals</p>
            </li>
            <li className='flex gap-2 items-center hover:text-brand cursor-pointer'>
              <Link to={"/"}>Home </Link>
              <p><IoIosArrowDown /></p>
            </li>
            <Link to={"/About"}>About</Link>
            <li className='flex gap-2 items-center hover:text-brand cursor-pointer'>
              <Link to={"/shop"}>Shop</Link>
              <Link><IoIosArrowDown /></Link>
            </li>
            <li className='flex gap-2 items-center hover:text-brand cursor-pointer'>
              <p>Pages </p>
              <p><IoIosArrowDown /></p>
            </li>
            <Link className='hover:text-brand' to={"/contact"}>Contact</Link>
          </ul>
        </div>
        <div>
          <ul className='flex gap-3'>
            <li className='text-primary text-5xl'><TfiHeadphoneAlt /></li>
            <li>
              <p className='font-bold text-brand text-3xl'>1900 - 888</p>
              <p className='text-xs font-medium text-secondary'>24/7 Support Center</p>
            </li>
          </ul>
        </div>
       </div>
    </div>
    </>
  )
}

export default Navigation