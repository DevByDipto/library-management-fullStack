import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const mainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <main className='min-h-[700px]'>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default mainLayout