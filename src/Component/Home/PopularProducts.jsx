import React, { useEffect , useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios';
import { Link } from 'react-router';

const PopularProducts = () => {
    
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

        productList.length = 5;

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
            <div className='mt-11 grid grid-cols-5 gap-2.5'>
                {
                    productList.map((item)=>(
                        <ProductItem key={item.id}
                        data={item}
                        />
                    ))
                }
            </div>
            <div className='text-base text-primary font-bold mt-4 flex justify-end'>
                <Link to={"/shop"}>See more..</Link>
            </div>
        </div>
    </section>
  )
}

export default PopularProducts