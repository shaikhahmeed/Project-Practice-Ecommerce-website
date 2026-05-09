import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../Slices/counterSlice';

const Login = () => {
  const Navigate = useNavigate();

  const[userData,setUserData] = useState({
    username: "",
    password: "",
  })

  //  E jinshta banate hobena ,api through egulo emnitei ashbe.Amar api kaj korchena thikthak ty ami eta banaisi
  const userInfo = {
    userName: "Demo User",         
    usrPhoto: "data:image/jpeg;base64,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" ,
  }
  const dispatch = useDispatch();
  localStorage.setItem("userData",JSON.stringify(userInfo));
  const handleClick=async(e) =>{
    e.preventDefault();
     dispatch(incrementByAmount(userInfo));

    const options = {
  method: 'POST',
  url: 'https://api.freeapi.app/api/v1/users/login',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: userData,
};

try {
  const  res  = await axios.request(options);
  console.log(res.data.data.accessToken);
  console.log(res.data.data.user);
 
  toast.success(res.data.message);
  setTimeout(()=>{
    Navigate("/");
  },
  2000
)
} catch (error) {
  toast.error(error.response.data.message);
}
  }

  return (
    
     <div className="w-full flex justify-center items-center max-w-full py-3 sm:max-w-xl sm:mx-auto shadow-2xl mt-28 md:flex-0 shrink-0">
      <ToastContainer
position="top-right"
autoClose={5000}
rtl={false}
theme="dark"
/>
    <div className="relative z-0 flex flex-col min-w-0 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
        <h5 className="text-3xl font-bold">Log In</h5>
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
          aria-describedby="email-addon" aria-label="Name" placeholder="Full Name" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text"/>
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
          <div className="text-right mb-2">
           <a className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"href="#">Forgot Password?</a>
          </div>
            <div className="text-center">
          < button
          onClick={handleClick}
          className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button">Sign in</button>
           </div>
          <p className="mt-4 mb-0 leading-normal text-sm">or didn't have any account? <span className="font-semibold"><Link to="/registration">SIGN UP</Link></span></p>
       </form>
      </div>
    </div>
    </div>
  )
}

export default Login