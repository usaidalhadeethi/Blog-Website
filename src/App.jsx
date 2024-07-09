import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar && Footer/Navbar'
import Footer from './components//Navbar && Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
