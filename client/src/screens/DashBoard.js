import React from 'react'
import Navbar from "../components/Navbar"

const DashBoard = () => {
  const user = localStorage.getItem('user');
  if(!user){
    window.location.href="/";
  }

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <div className='flex'>
        <div className='w-[20vw] h-[100vh] bg-[#EBEBEB]'>
          
        </div>
        <div className='mx-auto mt-[2vh]'>
        <p className='font-bold text-5xl mt-8 '>Hack this Fall</p>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
