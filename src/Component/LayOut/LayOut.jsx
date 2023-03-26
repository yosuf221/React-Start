import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <>
        <NavBar />
        

        <Outlet />
        
        <Footer />
    </>
  )
}
