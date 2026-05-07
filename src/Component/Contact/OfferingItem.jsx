import React from 'react'

const OfferingItem = () => {
  return (
    <div className='flex gap-5 bg-[#F4F6FA] w-fit p-6 rounded-xl'>
        <div>
            <img src="/offering.png" alt="offering" />
        </div>
        <div>
            <p className='text-lg font-light text-[#242424]'>Best prices & offers</p>
            <p className='font-medium text-base text-[#ADADAD]'>Orders $50 or more</p>
        </div>
    </div>
  )
}

export default OfferingItem