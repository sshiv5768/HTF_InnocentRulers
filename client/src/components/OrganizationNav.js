import React from 'react'

const OrganizationNav = () => {
    const org = localStorage.getItem('org');

  return (
    <div className='h-[11vh] w-[100vw] bg-[#EBEBEB] px-16'>
    <div className='flex flex-row justify-between pt-8'>
        <div className='flex'>
        <a href="/home" className='p-4'>Home</a>
        {org && <a href="/hackathons" className='px-8 py-4'>List of Hackathons</a>}
        </div>
        {
          org ? 
          <>
            <button className='bg-[#4461F2] px-6 py-3 rounded-3xl text-white' onClick={()=>{localStorage.removeItem('org'); window.location.href="/"}}>Log out</button>
          </>
          :
          <>
          <div>
            <button className='bg-[#4461F2] px-6 py-3 rounded-3xl text-white' onClick={()=>{window.location.href="/login"}}>Sign In</button>
            <button className=' px-3 py-2 rounded-2xl ml-8' onClick={()=>{window.location.href="/"}}>Register</button>
        </div>
          </>
        }
    </div>
    </div>
  )
}

export default OrganizationNav
