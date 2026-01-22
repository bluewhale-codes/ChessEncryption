import React from 'react'
import { Outlet } from 'react-router'
import {Header,Footer,ScrollToTop} from '../components/index'

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