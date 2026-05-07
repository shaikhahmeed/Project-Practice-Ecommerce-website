import React from 'react'
import Breadcamp from '../Utility/Breadcamp'

const SectionOne = () => {
  return (
    <section className='mt-10'>
            <div className='border border-t-[#ECECEC] border-b-[#ECECEC] border-l-0 border-r-0 py-6'>
                <Breadcamp />
            </div>
        <div className="container mt-14 md:flex gap-2">
            <div>
                <p className='font-bold text-2xl text-brand'>How can help you ?</p>
                <h1 className='font-bold text-5xl text-primary max-w-96 pt-5'>Let us know how we can help you</h1>
                <p  className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
                <p className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                </p>
            </div>
            <div>
                <p className='font-bold text-lg text-primary mt-36'>01. Visit Feedback</p>
                <p  className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
                <p className='font-bold text-2xl text-brand mt-5'>03. Billing Inquiries</p>
                <p  className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
            </div>
             <div>
                <p className='font-bold text-lg text-primary mt-36'>02. Employer Services</p>
                <p  className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
                <p className='font-bold text-2xl text-primary mt-4'>04.General Inquiries</p>
                <p  className='font-medium text-base text-[#7E7E7E] pt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.</p>
            </div>
        </div>
    </section>
  )
}

export default SectionOne