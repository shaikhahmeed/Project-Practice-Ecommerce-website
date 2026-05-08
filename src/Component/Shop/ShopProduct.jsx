import React, { useEffect, useState } from 'react'
import ProductItem from '../Home/ProductItem'
import axios from 'axios';


const ShopProduct = () => {

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

    // setProductList(res.data.data.products);

  return (
    <section>
        <div className="container">
             <p className='text-primary text-lg mb-5'>We found <span className='text-brand'>{productList.length}</span> items for you!</p>
            <div className='grid grid-cols-5 gap-2.5'>
             {
              productList.map((item)=>(
                <ProductItem key={item.id}
                data={item}/>
              ))
             }
            </div>
        </div>
    </section>
  )
}

export default ShopProduct