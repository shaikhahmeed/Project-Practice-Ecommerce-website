import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {

  const Navigate = useNavigate( );

  const [userData,setUserData]=useState({
    username:" ",
    email:"",
    password:" ",
  })

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(userData);
    
    const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/register',
  headers: 
  {
    accept: 'application/json', 'content-type': 'application/json'
  
  },
    data: userData,
};

try {
  const res  = await axios.request(options);
  toast.success(res.data.message);
  setTimeout(()=>{
    Navigate("/login");
  },
2000);
  
} catch (error) {
  toast.error(error.response.data.message);
}

  };

  return (

  <div className="w-full flex justify-center items-center max-w-full py-3 sm:max-w-xl sm:mx-auto shadow-2xl rounded-2xl mt-28 md:flex-0 shrink-0">
    <ToastContainer
position="top-right"
autoClose={5000}
rtl={false}
theme="dark"
/>
  <div className="relative z-0 flex flex-col min-w-0 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
    <div className="p-2 text-center">
      <img src="public/logo.png" alt="logo" className='ml-6'/>
      <h5 className="text-3xl mt-5 font-bold">Registration</h5>
    </div>
    <div>
    </div>
    <div className="flex-auto p-6">
      <form role="form text-left">
        <div className="mb-4">
          <input
          onChange={(e)=>
            setUserData((prev)=>({
              ...prev,
              username:e.target.value,
            }))
          }
          aria-describedby="email-addon" aria-label="Name" placeholder="Full Name " className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text" required/>
        </div>
        <div className="mb-4">
          <input
          onChange={(e)=>
            setUserData((prev=>({
              ...prev,
              email:e.target.value,
            })))
          }
          aria-describedby="email-addon" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email"/>
        </div>
        <div className="mb-4">
          <input
          onChange={(e)=>
            setUserData((prev)=>({
              ...prev,
              password:e.target.value,
            }))
          }
          aria-describedby="password-addon" aria-label="Password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password"/>
        </div>
        <div className="text-center">
            <button
            onClick={handleSubmit}
            className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button">Sign up</button>
        </div>
        <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <Link className="font-bold text-slate-700" to="/login">Sign in</Link></p>
     </form>
    </div>
  </div>
  </div>
  )
}

export default Registration