import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const NewHackathon = () => {
    const user = localStorage.getItem('user');
    if(!user){
        window.location.href="/";
    }
  
    const [name,setname] = useState("");
    const [desc,setdesc] = useState("");
  

  
    const SubmitHandler =  async () =>{
      const hackathon = {
        title:name,
        desc:desc,
        admin:user
      }

      console.log(hackathon);
      const result = await axios.post("/api/hack/newhackathon",hackathon)
      .then((re)=>{alert("Hackathon Created Successfully")}).then(()=>{
        window.location.href="/dashboard"
      })
    
    }
  return (
    <div>
      <Navbar/>
      <div className=''>
        <div className='text-center'>
        <p className='font-bold text-2xl mt-[10vh]'>Enter the name of the Hackathon.</p>
        <div className='mt-[5vh]'>
            <input type="text" className='w-[40vw] p-6 bg-[#EAF0F7] outline-none' placeholder='Enter your Hackathon Name' onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <p className='font-bold text-2xl mt-[10vh]'>Enter the Description of the Hackathon.</p>
        <div className='mt-[1vh]'>
            <input type="text" className='w-[40vw] mt-1 h-[15vh] p-6 bg-[#EAF0F7] outline-none' placeholder='Description' onChange={(e)=>{setdesc(e.target.value)}}/>
        </div>
        <button className='bg-[#4461F2] py-3 px-16 text-white font-bold rounded-sm mt-[10vh] hover:bg-[#142579]'onClick={()=>{SubmitHandler()}}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default NewHackathon
