import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'

const CartItem = () => {
  return (
    <div className='flex w-fit items-center gap-60 pt-10'>
                   <div className='flex items-center'>
                       <img src="/productItem.png" alt="productItem" className='w-28 h-28'/>
                       <p>Field Roast Chao Cheese Creamy Original</p>
                   </div>
                    <div className='flex items-center gap-6 '>
                        <p className='font-bold text-lg text-[#7E7E7E]'>$2.51</p>
                        <input type="number"  value={1} className='border-2 outline-0 text-center py-2 cursor-pointer border-brand w-20 rounded-xl'/>
                        <p className='font-bold text-lg text-brand'>$2.51</p>
                        <button className='cursor-pointer'><MdOutlineDelete/></button>
                    </div>
     </div>
  )
}

export default CartItem