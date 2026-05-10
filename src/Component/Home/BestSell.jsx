import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ProductItem from './ProductItem'
import BestSellItem from './BestSellItem'
import { Link } from 'react-router'
import axios from 'axios';


const BestSell = () => {

      const[productList,setProductList]=useState([]);
      
        useEffect(()=>{
          const shaikh = async()=>{
      const options = {
        method: 'GET',
        url: 'https://api.escuelajs.co/api/v1/products',
        params: {page: '1', limit: '10'},
        headers: {accept: 'application/json'},
    };
    
    try {
      const  res  = await axios.request(options);
      setProductList(res.data);
    } catch (error) {
      console.error(error);
    }
        };
        shaikh();
        },[])

        productList.length = 4;

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
            <div className='flex mt-10 items-center gap-5'>
                <div className='hidden lg:block py-26 p-12 bg-center bg-no-repeat w-1/4 rounded-xl' style={{backgroundImage:"url('/bestSell.png')"}}>
                    <h3 className='font-bold text-4xl text-primary max-w-60'>Bring nature into your home</h3>
                    <button className='flex gap-1 mb-10 items-center mt-24 font-bold text-xs text-[#FFFFFF] bg-brand rounded-xs py-2 px-3 cursor-pointer'>
                    <Link to={"/shop"}>Shop now</Link>
                    <p><FaArrowRight /></p>
                    </button>
                </div>
                <div className='hidden md:flex gap-6 w-3/4'>
                    {
                        productList.map((item)=>(
                            <ProductItem key={item.id} data={item}/>

                        ))
                    }
                </div>
            </div>
            <div className='text-base text-primary font-bold mt-4 flex justify-end'>
                <Link to={"/shop"}>See more..</Link>
            </div>
        </div>
    </section>
  )
}

export default BestSell