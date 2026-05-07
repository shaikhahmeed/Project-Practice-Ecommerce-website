import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'

const ContactBanner = () => {
  return (
    <section className="container mt-8 mb-10">
        <div className='py-5 px-3 md:p-20 rounded-4xl bg-center bg-cover bg-no-repeat' style={{backgroundImage:"url('/Contact.png')"}}>
        <h2 className='font-bold text-xl md:text-4xl text-primary max-w-lg pb-5'>Stay home & get your daily
            needs from our shop</h2>
        <p className='font-medium text-sm md:text-lg text-[#7E7E7E] pb-11'>Start You'r Daily Shopping with <span className='text-brand'>Nest Mart</span></p>
          <div className='max-w-md flex items-center gap-1 rounded-full  bg-white cursor-pointer'>
                <FaRegPaperPlane className='text-3xl pl-1.5'/>
                <input type="e-mail" placeholder=' Your emaill address' className='outline-0 w-full rounded-full text-lg'/>
                <button className='px-8 md:px-10 py-4 md:y-5 bg-brand rounded-full cursor-pointer text-white'>Subscribe</button>  
          </div>
        </div>
    </section>
  )
}

export default ContactBanner