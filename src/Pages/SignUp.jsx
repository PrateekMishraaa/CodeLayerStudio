import React, { useState } from 'react';
import { FiCode } from 'react-icons/fi';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        mobile:"",
        password:"",
    })
  const [isLogin, setIsLogin] = useState(false); 

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(handleChange)

const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!formData.fullName || !formData.email || !formData.mobile || !formData.password){
        toast.error("All fields are required")
    }
    try{
        const response = await axios.post("https://codelayerstudiobackend.onrender.com/signup",formData,{
            "headers":{
                "Content-Type":"application/json"
            }
        })
        toast.success("Registration successsull",response)
        setTimeout(()=>{
            navigate('/')
        },1000)
    }catch(error){
        console.log(error)
        toast.error("something went wrong")
    }
}

  return (
  <>
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-lg p-8 bg-white border border-white rounded-3xl shadow-lg">
        {/* Logo/Header */}
        <div className="text-xl sm:text-2xl font-extrabold tracking-wide flex items-center gap-2 mb-6">
          <FiCode className="text-blue-400" />
          <a href="/" className="flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              CodeLayer
            </span>
            <span className="text-gray-900">Studio Pvt.Ltd</span>
          </a>
        </div>

        {/* Conditional Title */}
        <h2 className="text-2xl font-semibold mb-4">
          {isLogin ? 'Login to your account' : 'Create an account'}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
               type="text"
                placeholder="Full Name" 
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className="input-style " />

              <input
               type="text" 
               placeholder="Mobile Number" 
               name='mobile'
               value={formData.mobile}
               onChange={handleChange}
               className="input-style" />
            </>
          )}
          <input
           type="email"
            placeholder="Email" 
            name='email'
            value={formData.email}
            onChange={handleChange}
            className="input-style" />
          <input 
          type="password" 
          placeholder="Password" 
          name='password'
          value={formData.password}
          onChange={handleChange}
          className="input-style" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Text */}
        <p className="text-center text-sm mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={handleToggle} className="text-blue-500 hover:underline font-medium">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </section>
    <ToastContainer/>
  
  </>
  );
};

export default SignUp;
