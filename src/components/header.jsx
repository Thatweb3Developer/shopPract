import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <nav className='flex items-center w-full bg-orange-300 h-[60px]'>
      <div><a href="/" className='text-purple-700 text-4xl font-bold'>LeinadShops</a></div>

      <ul className='mx-auto gap-2 '>
         <Link to='/' className='mr-3 text-white font-bold'>Home</Link>
         <Link to='/about' className='mr-3 text-white font-bold'>About</Link>
         <Link to='/contact'className='mr-3 text-white font-bold'>Contact us</Link>
      </ul>

      <div className="mr-12 " ><IoMdCart className='text-white text-3xl cursor-pointer' /></div>
    </nav>
  )
}

export default Header