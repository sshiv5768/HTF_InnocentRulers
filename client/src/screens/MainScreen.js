import React from 'react'
import Navbar from '../components/Navbar'
import {FontAwesomeIcon} from "@fortawesome/free-solid-svg-icons";

const MainScreen = () => {
    const user = localStorage.getItem('user');
    if(!user){
        window.location.href="/";
    }
  return (
    <div>
      <Navbar/>
    <div className='mt-[15vh]'>
        <div className=' text-center'>
            <p className='text-3xl font-extrabold mx-auto'>What brings you to HackHackathons Today?</p>
            <p className='text-center mt-[2vh] text-[#475569] font-bold'>We will try to provide you with the best experience.</p>
        </div>
        <a className='hover:cursor-pointer  scale-110 ' href="/newhackathon">
        <div className='text-left mt-[10vh] border-2 w-[40vw] m-auto p-8 rounded-sm hover:border-[#16A34a] hover:bg-[#f0fdf4]'>
        <div className='ml-8'>
            <p className='font-bold text-xl'>Create a New Hackathon</p>
            <p className='text-[#475569] font-bold'>Manage the data of users during a hackathon.</p>
        </div>
    </div>
        </a>
        <a className='hover:cursor-pointer scale-110 ' href="/hackathons">
        <div className='text-left mt-[5vh] border-2 w-[40vw] m-auto p-8 rounded-sm hover:border-[#16A34a] hover:bg-[#f0fdf4]'>
        <div className='ml-8'>
            <p className='font-bold text-xl'>Manage an existing Hackathon</p>
            <p className='text-[#475569] font-bold'>Keep track of the data from a previously created hackathon.</p>
        </div>
    </div>
        </a>
    </div>
    </div>
  )
}

export default MainScreen
