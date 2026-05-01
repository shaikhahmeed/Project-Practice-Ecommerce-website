import React from 'react'
import ProductItem from './ProductItem'

const PopularProducts = () => {
  return (
    <section>
        <div className="container mt-12">
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl text-primary'>Popular Products</h2>
                <ul className='font-light text-base flex gap-7 text-primary items-end'>
                    <li className='cursor-pointer hover:text-brand'>All</li>
                    <li className='cursor-pointer hover:text-brand'>Milks & Dairies</li>
                    <li className='cursor-pointer hover:text-brand'>Coffes & Teas</li>
                    <li className='cursor-pointer hover:text-brand'>Pet Foods</li>
                    <li className='cursor-pointer hover:text-brand'>Meats</li>
                    <li className='cursor-pointer hover:text-brand'>Vegetables</li>
                    <li className='cursor-pointer hover:text-brand'>Fruits</li>
                </ul>
            </div>
            <div className='mt-11 grid grid-cols-5'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </section>
  )
}

export default PopularProducts