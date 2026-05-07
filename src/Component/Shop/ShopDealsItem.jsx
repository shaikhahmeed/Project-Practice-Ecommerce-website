import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'

const ShopDealsItem = () => {
  return (
     <div className='relative group'>
        <div className='mt-4 md:mt-10 pb-36 pt-30 md:pt-40 px-3 md:px-12 bg-no-repeat bg-center rounded-4xl'style={{backgroundImage:"url('/deals.png')"}} >
            <ul className='flex gap-1 md:gap-3.5 cursor-pointer'>
                <li className='pt-4 px-5  bg-white border-secondary rounded-xs text-center'>
                    <p className='max-w-6 text-2xl text-brand font-light'>22 <span className='max-w-16 text-base font-medium text-secondary'>Days</span></p>
                </li>
                <li className='pt-4 px-5 pb-2.5 bg-white border-secondary rounded-xs text-center'>
                    <p className='max-w-6 text-2xl text-brand font-light'>24 <span className='max-w-16 text-base font-medium text-secondary'>Hrs</span></p>
                </li>
                <li className='pt-4 px-5 pb-2.5 bg-white border-secondary rounded-xs text-center'>
                    <p className='max-w-6 text-2xl text-brand font-light'>43 <span className='max-w-16 text-base font-medium text-secondary'>Min</span></p>
                </li>
                <li className='pt-4 px-5 pb-2.5 bg-white border-secondary rounded-xs text-center'>
                    <p className='max-w-6 text-2xl text-brand font-light'>55 <span className='max-w-16 text-base font-medium text-secondary'>Sec</span></p>
                </li>
            </ul>
        </div>
        <div className='absolute top-80 left-4 md:left-14 group-hover:translate-y-2 md:group-hover:translate-y-5 cursor-pointer'>
           <div className='p-7 bg-white rounded-xl'>
                   <p className='font-medium text-xs text-secondary'>Hodo Foods</p>
                   <h3 className='pt-2.5 font-bold text-base text-primary max-w-52'>Chobani Complete Vanilla Greek
                   Yogurt</h3>
                   <ul className='flex gap-12 items-center pt-2.5'>
                     <li>
                       <p className='text-amber-400 '><FaStar/></p>
                     </li>
                     <li>
                       <p>(4)</p>
                     </li>
                   </ul>
                   <p className='font-medium text-sm text-secondary'>By <span className='text-brand'>NestFood</span></p>
                   <div className='flex justify-between items-center'>
                     <div className='flex gap-2.5 items-end'>
                       <p className='font-bold text-lg text-brand'>$28.85</p>
                       <p className='font-bold text-sm text-secondary line-through'>$32.8</p>
                     </div>
                     <div>
                       <button className='px-5 py-2.5 flex items-center font-bold text-brand gap-1.5 rounded-sm bg-[#DEF9EC] cursor-pointer'>
                         <p className='text-2xl'><CiShoppingCart/></p>
                         <p className='text-sm'>Add</p>
                       </button>
                     </div>
                   </div>
           </div>
        </div>
     </div>
  )
}

export default ShopDealsItem