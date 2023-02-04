import React, { useEffect } from 'react'

const Navbar = ({isLogin,setisLogin}) => {
  const user = localStorage.getItem('user');
  return (
    
    <div className='h-[11vh] w-[100vw] bg-[#EBEBEB] px-16'>
        <div className='flex flex-row justify-between pt-8'>
            <div className='flex'>
            <a href="/home" className='p-4'>Home</a>
            <a href="/" className='p-4 hover:underline'>About </a>
            </div>
            {
              user ? 
              <>
                <button className='bg-[#4461F2] px-6 py-3 hover:underline rounded-3xl text-white' onClick={()=>{localStorage.removeItem('user'); window.location.href="/"}}>Log out</button>
              </>
              :
              <>
              <div>
                <button className='bg-[#4461F2] px-6 py-3 rounded-3xl hover:underline text-white hover:bg-[#4455ac]' onClick={()=>{window.location.href="/login"}}>Sign In</button>
                <button className=' px-3 py-1 rounded-2xl ml-8' onClick={()=>{window.location.href="/"}}>Register</button>
            </div>
              </>
            }
        </div>
    </div>
  )
}

export default Navbar
