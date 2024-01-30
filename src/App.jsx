import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App flex">
      <Sidebar />
      <Header />
      {/* <Outlet ></Outlet>  */}
    </div>
  )
}

export default App
