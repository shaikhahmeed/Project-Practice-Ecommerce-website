import React from 'react'

const Comment = () => {
  return (
    <div className='container mt-5'>
       <div>
        <h2 className='text-lg font-bold text-brand'>Contact form</h2>
        <p className='font-bold text-4xl text-primary pt-2.5'>Drop Us a Line..</p>
        <p className='pt-2.5 mb-6 text-base font-medium text-[#B6B6B6]'>Your email address will not be published. Required fields are marked.</p>
       </div>
       <div>
        <form >
        <input type="text" placeholder='First Name'  className='p-2 border border-[#ECECEC] w-64 md:w-md outline-0 rounded-xs hover:border-brand'/> 
        <input type="email" placeholder='Your Email'  className='p-2 border border-[#ECECEC] w-64 md:w-md outline-0 rounded-xs hover:border-brand'/>
       </form>
       <form className='mt-2'>
        <input type="number" placeholder='Your Phone' className='p-2 border border-[#ECECEC] w-64 md:w-md outline-0 rounded-xs hover:border-brand'/>
        <input type="twxt" placeholder='Subject' className='p-2 border border-[#ECECEC] w-64 md:w-md outline-0 rounded-xs hover:border-brand'/>
       </form>
       <div>
        <input type="text" placeholder='Message' className='p-2 pb-40 mt-4 border border-[#ECECEC] w-72 md:w-4xl outline-0 rounded-xl hover:border-brand'/>
       </div>
       <button className='p-2 border border-brand bg-brand text-primary text-lg rounded-xl cursor-pointer mt-2'>Submit</button>
       </div>
    </div>
  )
}

export default Comment