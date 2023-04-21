import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <SideBar />
            <div className='ml-[300px] p-[1rem] w-full pr-[6rem]'>
            {children}
            </div>
        </div>
      
       
    </div>
  )
}

export default Layout