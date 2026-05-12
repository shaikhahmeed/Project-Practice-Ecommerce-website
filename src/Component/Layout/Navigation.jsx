import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaCartArrowDown, FaSearch } from 'react-icons/fa'
import { FaArrowsRotate, FaBarsStaggered, FaFire, FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { IoIosArrowDown, IoIosLogOut, IoMdCloseCircleOutline, IoMdSearch } from 'react-icons/io'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { PiCirclesFourLight } from 'react-icons/pi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router'

const Navigation = () => {

  const[show,setShow]=useState(false);
  const[sideBar,setSideBar]=useState(false);
  //  const userData = useSelector((state)=>state.user.user)
  const cartData = useSelector((state)=>state.cart.cart)


  // for data catch
  const userData = useSelector((state)=>
     state.user.user
  )
  console.log(userData);
  

  return (
    <>
    <div className='container shadow-2xs pb-5'>
       {/* header */}
       <div className='hidden xl:flex justify-between border-b-2 border-b-[#ECECEC] pb-3'>
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
        <div className='flex gap-8'>
        <button onClick={()=>setSideBar(true)} className='block md:hidden cursor-pointer'>
          <FaBarsStaggered/>
        </button>
        <Link to={"/"}><img src="public/logo.png" alt="logo" className='w-34 md:w-auto'/></Link>
        </div>
        <div className='hidden lg:flex py-4 pl-5 pr-1.5 items-center gap-3.5 border-2 rounded-xl border-brand'>
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
          <div className='text-center flex lg:gap-60 xl:gap-96'>
            <input type="text" placeholder='Search for items...' className='outline-0'/>
            <button className='cursor-pointer'><IoMdSearch /></button>
          </div>
        </div>
        <div>
          <ul className='flex gap-1 md:gap-8 items-center'>
            <li className='hidden md:flex gap-1.5 items-center cursor-pointer p-3 border-b border-[#ececec] '>
                  {/* <p className='border border-brand rounded-full px-2 py-1 bg-brand text-xs absolute top-19 right-45'>
                  {
                   cartData.length
                  }
                 </p> */}
                  <p className='hover:text-brand transition text-2xl'><FaCartArrowDown /></p>
                  <Link to="/cart" className='hover:text-brand transition'>Your cart</Link>
                </li>
            <li>
              {
                userData
                ?
                <>
                <ul className='flex gap-1.5 items-center'>
                  <li className='flex items-center'>
                    <div className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full overflow-hidden'>
                     <img src={userData?.avatar?.url} alt="userPhoto"/>
                    </div>
                    <h2 className='text-xs md:text-sm text-secondary font-medium'>{userData?.username}</h2>
                  </li>
                  <li>
                    <Link className='text-medium text-lg' to={"/login"}><IoIosLogOut/></Link>
                  </li>
                </ul>
                </>
                :
                <Link to={"/login"}>Login</Link>
              }
            </li>     
          </ul>
        </div>
       </div>
       {/* footer */}
       {/* footer mobile view */}
       <nav className={`w-full h-screen bg-[#0000003c] absolute top-0 left-0 z-99 transition-all ${sideBar?"translate-x-0 ": "-translate-x-full "} `}>
    <div className="bg-white w-4/5 h-full overflow-y-auto">
    <div>
        <div className='flex justify-between items-center p-3 border-b border-[#ececec]'>
          <Link><img src="public/logo.png" alt="logo" className='w-30'/></Link>
          <button onClick={()=>setSideBar(false)} className='text-2xl text-brand cursor-pointer'><IoMdCloseCircleOutline/></button>
        </div> 
        <div className='m-4'>
           <div className='w-90% flex gap-6 justify-between border border-[#ececec] bg-[#ececec] rounded-xs'>
            <input type="text" placeholder='Search for items...' className='outline-0 p-3' />
            <button className='w-full p-3 cursor-pointer hover:bg-brand transition'><FaSearch /></button>
           </div>
           <div className='mt-6'>
              <ul className='flex flex-col text-base text-primary font-bold'>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition '>Deals</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/"  className='hover:text-brand transition'>Home </Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/about" className='hover:text-brand transition '>About</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/shop" className='hover:text-brand transition'>Shop</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Mega menu</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Blog</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link className='hover:text-brand transition'>Pages </Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex justify-between items-center cursor-pointer p-3 border-b border-[#ececec]'>
                  <Link to="/contact" className='hover:text-brand transition'>Contact</Link>
                  <p><MdKeyboardArrowDown/></p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer p-3 border-b border-[#ececec] '>
                  {/* <p className='border border-brand rounded-full px-2 py-1 bg-brand text-xs absolute bottom-45 right-28 lg:right-8'>
                  {
                   cartData.length
                  }
                 </p> */}
                  <p className='hover:text-brand transition'><FaCartArrowDown /></p>
                  <Link to="/cart" className='hover:text-brand transition'>Your cart</Link>
                </li>
              </ul>
           </div>
        </div>
    </div>
    </div>
    </nav>
       {/* footer mobile view */}
       <div className='flex justify-between items-center shadow-2xs pb-3.5'>
        <div className='hidden md:flex gap-2 items-center py-3.5 px-5 text-base text-[#FFFFFF] bg-brand rounded-xl cursor-pointer'>
          <p><PiCirclesFourLight /></p>
          <p>Browse All Categories</p>
          <p><MdOutlineKeyboardArrowDown /></p>
        </div>
        <div>
          <ul className='hidden md:flex gap-8 font-bold text-primary'>
            <li className='flex gap-2 items-center hover:text-brand cursor-pointer'>
              <p><FaFire /></p>
              <Link to={"/deals"}>Deals</Link>
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
          <ul className='hidden md:flex gap-3'>
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