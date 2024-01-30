import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Routes, Route,Outlet, BrowserRouter } from 'react-router-dom'
import Category from './components/category'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='/category' element ={<Category />} />
      <Route path='/transaction' element ={<Category />} />
      <Route path='/user' element ={<Category />} />

    </Route>

    <Route path='*' element={<h2 className='text-center bg-red-900 w-screen h-screen items-center justify-center flex text-white text-5xl font-extrabold'>Error page </h2>} />
  </Routes>
   
  </BrowserRouter>
   
)
