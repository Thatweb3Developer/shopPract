import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[250px] h-[100vh] flex flex-col  bg-gray-500'>
         <Link className='text-center font-light p-3 mt-[100px] mb-3 bg-white ' to='/category'>Categories</Link>

         <Link className='text-center font-light p-3 mb-3  bg-white' to='/user'>Users</Link>

         <Link className='text-center font-light p-3 bg-white ' to='/transaction'>Transactions</Link>

     
    </div>
  )
}

export default Sidebar