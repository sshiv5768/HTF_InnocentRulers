import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrganizationNav from '../components/OrganizationNav'

const OrganizationLogin = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");


    const Login = async() =>{
        const body = {
            email,
            password
        }

        console.log(body);

        await axios.post('/api/org/login',body)
        .then((res)=>{
            const org = localStorage.setItem('org',email);
            alert("Success");
        })
    }


    useEffect(()=>{

    },[])

  return (
    <div>
    <OrganizationNav/>
    <div className='flex'>
      <div className='w-[40vw] h-[90vh] bg-[#b89b9b]'></div>
      <div className='m-auto'>
      <div className='flex flex-col gap-6'>
      <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Organization Email Address"
        onChange={(e)=>{setemail(e.target.value)}}
      ></input>
      <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Password"
      onChange={(e)=>{setpassword(e.target.value)}}
    ></input>
      <button className='px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{Login()}}>Login</button>
      <p>Are you not registered ? <a href="/organization/register" className='text-blue-600'>Click here</a></p>
    </div>
      </div>
    </div>
    </div>
  )
}

export default OrganizationLogin
