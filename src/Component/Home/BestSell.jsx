import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ProductItem from './ProductItem'
import BestSellItem from './BestSellItem'

const BestSell = () => {
  return (
    <section>
        <div className="container mt-12">
             <div className='flex justify-between'>
                <h2 className='font-bold text-3xl text-primary'>Daily Best Sells</h2>
                <ul className='font-light text-base flex gap-7 text-primary items-end'>
                    <li className='cursor-pointer hover:text-brand'>Featured</li>
                    <li className='cursor-pointer hover:text-brand'>Popular</li>
                    <li className='cursor-pointer hover:text-brand'>New added</li>
                </ul>
            </div>
            <div className='flex mt-12 gap-8'>
                <div className='px-12 pt-12 w-fit pb-48 rounded-2xl bg-cover bg-no-repeat bg-center' style={{backgroundImage:"url('/bestSell.png')"}}>
                    <h3 className='font-bold text-4xl text-primary max-w-60'>Bring nature into your home</h3>
                    <button className='flex gap-1 items-center mt-24 font-bold text-xs text-[#FFFFFF] bg-brand rounded-xs py-2 px-3 cursor-pointer'>
                    <p>Shop now</p>
                    <p><FaArrowRight /></p>
                    </button>
                </div>
                <div className='flex gap-8'>
                    <BestSellItem/>
                    <BestSellItem/>
                    <BestSellItem/>
                    <BestSellItem/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestSell