import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10vh] w-[100vw] bg-[#EBEBEB] px-16'>
        <div className='flex flex-row justify-between pt-8'>
            <div className='flex'>
            <p className='p-4'>Home</p>
            <p className='p-4'>About </p>
            <p className='p-4'>Contact</p>
            </div>
            <div>
                <button className='bg-[#4461F2] px-6 py-3 rounded-3xl text-white'>Sign In</button>
                <button className=' px-3 py-2 rounded-md ml-8'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
