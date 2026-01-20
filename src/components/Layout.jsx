import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'

const Layout = () => {
  return (
    <div>
        <ScrollToTop/>
        
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout