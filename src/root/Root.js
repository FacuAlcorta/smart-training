import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ButtonTop from '../components/ButtonTop'

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ButtonTop />
      <Footer />
    </>
  )
}

export default Root