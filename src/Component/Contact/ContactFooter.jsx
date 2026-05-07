import React from 'react'
import { CiHeadphones, CiLocationOn } from 'react-icons/ci'
import { PiRocketLaunchThin } from 'react-icons/pi'
import { Link } from 'react-router'

const ContactFooter = () => {
  return (
    <section className="container">
            <div className='mt-16 mb-12 hidden md:flex gap-13'>
                <div>
                <Link to={"/"}><img src="/logo.png" alt="logo" /></Link>
                <p className='font-medium text-base text-primary pt-4 pb-8'>Awesome grocery store website template</p>
                <div className='text-base font-medium text-primary flex flex-col gap-2.5'>
                    <p className='flex'><span className='text-brand'><CiLocationOn/></span>Address: 5171 W Campbell Ave</p>
                    <p>undefined Kent, Utah 53127 United States</p>
                    <p className='flex'><span className='text-brand'><CiHeadphones/></span>Call Us:(+91) - 540-025-124553</p>
                    <p className='flex'><span className='text-brand'><PiRocketLaunchThin/></span>Email:sale@Nest.com</p>
                </div>
                </div>
            <div>
                <p className='font-medium text-sm text-[#7E7E7E]'>Company</p>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>Support Center</p>
                    <p>Careers</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Account</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                    <p>Track My Order</p>
                    <p>Help Ticket</p>
                    <p>Shipping Details</p>
                    <p>Compare products</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Corporate</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                    <p>Track My Order</p>
                    <p>Help Ticket</p>
                    <p>Shipping Details</p>
                    <p>Compare products</p>
                </div>
            </div>
             <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Popular</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                    <p>Track My Order</p>
                    <p>Help Ticket</p>
                    <p>Shipping Details</p>
                    <p>Compare products</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Install App</h3>
                <p className='font-medium text-sm text-primary pb-4'>From App Store or Google Play</p>
                <p className='font-medium text-sm text-primary'>Secured Payment Gateways</p>
            </div>
            </div>
    
            <div className='mt-16 mb-12 flex flex-col md:hidden gap-4'>
            <div>
                <img className='cursor-pointer' src="/logo.png" alt="logo" />
                <p className='font-medium text-base text-primary pt-4 pb-8 hover:text-brand cursor-pointer'>Awesome grocery store website template</p>
                <div className='text-base font-medium text-primary flex flex-col gap-2.5'>
                    <p className='flex hover:text-brand cursor-pointer'><span className='text-brand'><CiLocationOn/></span>Address: 5171 W Campbell Ave</p>
                    <p className='hover:text-brand cursor-pointer'>undefined Kent, Utah 53127 United States</p>
                    <p className='flex hover:text-brand cursor-pointer'><span className='text-brand'><CiHeadphones/></span>Call Us:(+91) - 540-025-124553</p>
                    <p className='flex hover:text-brand cursor-pointer'><span className='text-brand'><PiRocketLaunchThin/></span>Email:sale@Nest.com</p>
                </div>
            </div>
            <div>
                <p className='font-medium hover:text-brand cursor-pointer text-sm text-[#7E7E7E]'>Company</p>
                <div className='font-medium text-sm text-primary flex flex-col gap-3 '>
                    <p className='hover:text-brand cursor-pointer'>About Us</p>
                    <p className='hover:text-brand cursor-pointer'>Delivery Information</p>
                    <p className='hover:text-brand cursor-pointer'>Privacy Policy</p>
                    <p className='hover:text-brand cursor-pointer'>Terms & Conditions</p>
                    <p className='hover:text-brand cursor-pointer'>Contact Us</p>
                    <p className='hover:text-brand cursor-pointer'>Support Center</p>
                    <p className='hover:text-brand cursor-pointer'>Careers</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Account</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p className='hover:text-brand cursor-pointer'>Sign In</p>
                    <p className='hover:text-brand cursor-pointer'>View Cart</p>
                    <p className='hover:text-brand cursor-pointer'>My Wishlist</p>
                    <p className='hover:text-brand cursor-pointer'>Track My Order</p>
                    <p className='hover:text-brand cursor-pointer'>Help Ticket</p>
                    <p className='hover:text-brand cursor-pointer'>Shipping Details</p>
                    <p className='hover:text-brand cursor-pointer'>Compare products</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Corporate</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p className='hover:text-brand cursor-pointer'>Sign In</p>
                    <p className='hover:text-brand cursor-pointer'>View Cart</p>
                    <p className='hover:text-brand cursor-pointer'>My Wishlist</p>
                    <p className='hover:text-brand cursor-pointer'>Track My Order</p>
                    <p className='hover:text-brand cursor-pointer'>Help Ticket</p>
                    <p className='hover:text-brand cursor-pointer'>Shipping Details</p>
                    <p className='hover:text-brand cursor-pointer'>Compare products</p>
                </div>
            </div>
             <div>
                <h3 className='font-bold text-2xl text-primary pb-5'>Popular</h3>
                <div className='font-medium text-sm text-primary flex flex-col gap-3'>
                    <p className='hover:text-brand cursor-pointer'>Sign In</p>
                    <p className='hover:text-brand cursor-pointer'>View Cart</p>
                    <p className='hover:text-brand cursor-pointer'>My Wishlist</p>
                    <p className='hover:text-brand cursor-pointer'>Track My Order</p>
                    <p className='hover:text-brand cursor-pointer'>Help Ticket</p>
                    <p className='hover:text-brand cursor-pointer'>Shipping Details</p>
                    <p className='hover:text-brand cursor-pointer'>Compare products</p>
                </div>
            </div>
            <div>
                <h3 className='font-bold text-2xl text-primary pb-5 '>Install App</h3>
                <p className='font-medium text-sm text-primary pb-4 hover:text-brand cursor-pointer'>From App Store or Google Play</p>
                <p className='font-medium text-sm text-primary hover:text-brand cursor-pointer'>Secured Payment Gateways</p>
            </div>
            </div>
        </section>
  )
}

export default ContactFooter