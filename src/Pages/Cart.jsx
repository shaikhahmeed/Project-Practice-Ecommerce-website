import React from 'react'
import Breadcamp from '../Component/Utility/Breadcamp'
import { MdOutlineDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
      const cartData = useSelector((state)=>state.cart.cart)
     let sum = 0;
     cartData.forEach((item)=>{
        sum = item.quantity * item.productData.price
     })
  return (
    <>
    <div className='mt-10 border border-r-0 border-l-0 py-4 border-t-[#ECECEC] border-b-[#ECECEC]'>
       <Breadcamp/>
    </div>
     <div className="container relative">
       <div>
            <div className='mt-12 w-2/3'>
            <h1 className='font-bold text-2xl md:text-5xl text-[#253D4E]'>Your Cart</h1>
            <div className='flex justify-between'>
                <p className='pt-2.5 font-bold text-xs md:text-base text-[#7E7E7E]'>There are 3 products in your cart</p>
                <p className='font-bold hidden lg:flex text-base text-[#7E7E7E] gap-2 items-center cursor-pointer'><MdOutlineDelete/>Clear cart</p>
            </div>
            </div>
        <div className='w-2/3'>
            <div className='py-6 px-2 md:bg-[#ECECEC] flex gap-8 md:justify-between mt-10'>
                <div>
                    <p className='font-bold text-xs md:text-base text-primary'>Product</p>
                </div>
                <div>
                    <ul className='font-bold text-xs md:text-base text-primary flex gap-2 md:gap-6'>
                        <li className='cursor-pointer w-12 md:w-fit'>UnitPrice</li>
                        <li className='cursor-pointer w-12 md:w-fit'>Quantity</li>
                        <li className='cursor-pointer w-12 md:w-fit'>Subtotal</li>
                        <li className='cursor-pointer w-12 md:w-fit'>Remove</li>
                    </ul>
                </div>
            </div>
            {
                cartData.map((item)=>(
                    <div key={item.productData.id} data={item}>
                     <div className='flex items-center gap-24 md:gap-96 pt-10'>
                        <div className='flex items-center gap-1 md:gap-3'>
                            <img src={item?.productData?.images} alt="productItem" className='w-15 md:w-28 h-15 md:h-28 '/>
                            <p className='max-w-40 text-xs md:text-base'>
                              {
                                item?.productData?.title
                              }
                            </p>
                        </div>
                        <div className='flex items-center gap-6 md:gap-10'>
                             <p className='font-bold text-xs md:text-lg text-[#7E7E7E]'>
                               $ {
                                     item?.productData?.price
                                }
                             </p>
                            <p  className='md:border-2 outline-0 text-center py-0.5 md:py-2 cursor-pointer border-brand w-10 md:w-20 rounded-xl'>
                                {
                                     item?.quantity
                                }
                            </p>
                             <p className='font-bold text-xs md:text-lg text-brand'>
                                ${
                                    item?.quantity*item?.productData?.price 
                                 }
                             </p>
                             <button className='cursor-pointer'><MdOutlineDelete/></button>
                        </div>
                     </div>
                    </div>
                ))
            }
        </div>
       </div>
       <div className='p-12 mt-16 hidden lg:block bg-[#CED4DA] rounded-xl w-fit h-fit absolute -top-24 right-40'>
         <h2 className='font-bold text-primary text-3xl pb-8'>Cart Totals</h2>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>${sum}</p>
         </div>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>${sum}</p>
         </div>
       </div>
        <div className='p-8 px-16 mt-16 block lg:hidden bg-[#CED4DA] rounded-xl w-fit h-fit'>
         <h2 className='font-bold text-primary text-3xl pb-8'>Cart Totals</h2>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>${sum}</p>
         </div>
         <div className='flex gap-7 pb-6'>
            <p className='text-base text-primary font-medium'>Subtotal</p>
            <p className='text-base text-primary font-medium'>${sum}</p>
         </div>
       </div>
    </div>
    </>
  )
}

export default Cart