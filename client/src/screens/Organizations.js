import axios from 'axios';
import React, { useState } from 'react'
import OrganizationNav from '../components/OrganizationNav'

const Organizations = () => {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [cpassword,setcpassword] = useState("");
    const [name,setname] = useState("");

    const Signup = async() => {

        if(password!==cpassword){
            alert("Kindly enter the same password");
        }
        else{
            const org = {
                name,email,password
            }

            const result = await axios.post('/api/org/register',org)
            .then((res)=>{
                console.log(res.data);
            })
        }
    }

  return (
    <div>
      <OrganizationNav/>
      <div className='flex'>
        <div className='w-[40vw] h-[90vh] bg-[#b89b9b]'></div>
        <div className='m-auto'>
        <div className='flex flex-col gap-6'>
        <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Organization Name"
          onChange={(e)=>{setname(e.target.value)}}
        ></input>
        <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Organization Email Address"
          onChange={(e)=>{setemail(e.target.value)}}
        ></input>
        <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Password"
        onChange={(e)=>{setpassword(e.target.value)}}
      ></input>
      <input type="text" className='p-4 w-[25vw] bg-[#EAF0F7] focus:outline-none' placeholder="Re-Enter Password"
        onChange={(e)=>{setcpassword(e.target.value)}}
      ></input>
        <button className='px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{Signup()}}>Sign Up</button>
        <p>Are you already registered organization? <a href="/organization/login" className='text-blue-600'>Click here</a></p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Organizations
