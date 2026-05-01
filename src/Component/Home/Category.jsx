import React from 'react'
import { CategoryItem } from './CategoryItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import CategoryItem2 from './CategoryItem2';


const Category = () => {

  return (
    <section className='mt-14'>
        <div className="container">
            <div className='flex gap-7'>
                <h2 className='font-bold text-3xl text-primary'>Featured Categories</h2>
                <ul className='font-light text-base flex gap-7 text-primary items-end'>
                    <li className='cursor-pointer hover:text-brand'>Cake & Milk</li>
                    <li className='cursor-pointer hover:text-brand'>Coffes & Teas</li>
                    <li className='cursor-pointer hover:text-brand'>Pet Foods</li>
                    <li className='cursor-pointer hover:text-brand'>Vegetables</li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </div>
            <div className='mt-6 flex gap-6'>
                <CategoryItem2/>
                <CategoryItem2/>
                <CategoryItem2/>
            </div>
        </div>
    </section>
  )
}

export default Category