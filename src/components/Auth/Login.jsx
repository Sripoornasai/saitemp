"use client"
import React from 'react'
import { useState } from 'react';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log('email is' , email);
        console.log('password is' , password);
        setEmail("")
        setPassword("")
    }
    
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg p-8 rounded-lg w-96 border border-gray-300">

    <form onSubmit={(e)=>{submitHandler(e)}} action="" className="flex flex-col items-center space-y-4">
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

      <input
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
        className="text-black w-full px-4 py-2 border border-emerald-600 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
        type="email"
        placeholder="Enter your email"
        required
      />
      
      <input
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
        className="text-black w-full px-4 py-2 border border-emerald-600 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
        type="password"
        placeholder="Enter your password"
        required
      />
      
      <button
        type="submit"
        className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Login
      </button>
      
      <p className="text-sm text-gray-500">
        Don't have an account? <a href="/signup" className="text-emerald-600 hover:underline">Sign up</a>
      </p>
    </form>
  </div>
</div>

  )
}

export default Login