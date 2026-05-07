import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { MdWifiCalling3 } from 'react-icons/md'
import { SiPicsart } from 'react-icons/si'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer>
        <div className="container flex justify-between mt-9">
            <div className='font-medium text-sm text-secondary'>
                <p>© 2024, <span className='text-brand'>Nest</span> - HTML Ecommerce Template All rights reserved</p>
                <p>All rights reserved</p>
            </div>
            <div className='flex gap-14'>
                <div>
                    <ul className='flex gap-4'>
                        <li className='text-5xl text-secondary'><MdWifiCalling3 /></li>
                        <li>
                            <p className='font-bold text-3xl text-brand'>1900 - 6666</p>
                            <p className='font-medium text-xs text-secondary'>Working 8:00 - 22:00</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li className='text-5xl text-secondary'><MdWifiCalling3 /></li>
                        <li>
                            <p className='font-bold text-3xl text-brand'>1900 - 8888</p>
                            <p className='font-medium text-xs text-secondary'>24/7 Support Center</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <ul className='flex gap-2.5 items-center'>
                        <li className='font-bold text-base text-primary'>Follow Us</li>
                        <li className='flex gap-1'>
                            <Link className='p-1.5 text-[#FFFFFF] bg-brand rounded-full hover:bg-[#1877F2]'><FaFacebookF /></Link>
                            <Link className='p-1.5 text-[#FFFFFF] bg-brand rounded-full hover:bg-[#1DA1F2]'><FaTwitter /></Link>
                            <Link className='p-1.5 text-[#FFFFFF] bg-brand rounded-full hover:bg-[#F56040]'><FaInstagram /></Link>
                            <Link className='p-1.5 text-[#FFFFFF] bg-brand rounded-full hover:bg-[#E0115F]'><SiPicsart /></Link>
                            <Link className='p-1.5 text-[#FFFFFF] bg-brand rounded-full hover:bg-[#FF0033]'><FaYoutube /></Link>
                        </li>
                    </ul>
                </div>
                <p className='font-medium text-sm text-secondary mt-1.5'>Up to 15% discount on your first subscribe</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer