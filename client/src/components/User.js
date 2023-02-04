import React, { useState } from 'react'
import axios from "axios";

const User = ({title}) => {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [phone,setphone] = useState("");
    const [gender,setgender] = useState("");
    const [domain,setdomain] = useState("");
    const [team,setteam] = useState("");

    const register = async()=>{
        const user = {
            name,
            email,
            phone,
            gender,
            domain,
            team,
            title
        }

        await axios.post('/api/user/save',user).then((res)=>{
            alert("Registration Completed");
        })
    }

  return (
    <div className=' mx-auto mt-28'>
    <p className='text-xl mx-32 font-semibold'>User Registration Form</p>
    <div className='w-[40vw] mx-[20vw]'>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}></input>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Phone Number (+91)" onChange={(e)=>{setphone(e.target.value)}}></input>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Gender" onChange={(e)=>{setgender(e.target.value)}}></input>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Domain" onChange={(e)=>{setdomain(e.target.value)}}></input>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Team Name" onChange={(e)=>{setteam(e.target.value)}}></input>
    <input className="p-4 w-[30vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" disabled defaultValue={title}/>
    <button className=' mx-[12vw] mt-[5vh] px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{register()}}>Register</button>
    </div>
    </div>
  )
}

export default User
