import React, { useEffect, useState } from 'react'
import ProductItem from '../Home/ProductItem'
import axios from 'axios';


const ShopProduct = () => {

   const[productList,setProductList]=useState([]);
  
    useEffect(()=>{
      const shaikh = async()=>{
        const options = {
    method: 'GET',
    url: 'https://api.freeapi.app/api/v1/ecommerce/products',
    params: {page: '1', limit: '10'},
    headers: {accept: 'application/json'}
  };
  
  try {
    const  res  = await axios.request(options);
    setProductList(res.data.data.products);
  } catch (error) {
    console.error(error);
  }
      };
      shaikh();
    },[])

  return (
    <section>
        <div className="container">
            <h2 className='text-xl font-medium text-primary mb-8'>Search your desire products</h2>
            <div className='grid grid-cols-6'>
             {
              productList.map((item)=>(
                <ProductItem key={item._id}
                data={item}/>
              ))
             }
            </div>
        </div>
    </section>
  )
}

export default ShopProduct