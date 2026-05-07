import React from 'react'

const ServiceItem = ({children}) => {
  return (
     <div className='flex flex-col items-center text-center'>
        <img src="/servicesItem1.png" alt="servicesItem1.png"className='w-fit'/>
        <h3 className='font-bold text-2xl text-primary pt-9 pb-8 max-w-60'>{children}</h3>
        <p className='text-base font-medium text-[#7E7E7E] pb-8 max-w-80'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form
        </p>
        <button className='text-base font-medium text-brand cursor-pointer'>Read more</button>
    </div>
  )
}

export default ServiceItem