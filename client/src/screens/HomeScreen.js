import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Img from "../components/assets/main.svg"
import axios from "axios";
import {Swal} from "sweetalert2";

const HomeScreen = ({isLogin, setisLogin}) => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhone] = useState(0);

  const signin = async() => {
    const body = {
      name,email,phoneNumber
    }

    const result = await axios.post("/api/register",body)
    .then((res)=>{
      console.log(res.data);
      window.location.href="/login"
    })
  }

  return (
    <div className='overflow-hidden'>
      <Navbar isLogin={isLogin} setisLogin={setisLogin}/>
      <div className=''>
        <div className=''>
          <p className='m-auto ml-0 px-40 py-16 w-[50vw] pb-4 text-5xl font-extrabold leading-normal'>We help you organize Hackathons :)</p>
        </div>
        <div className='flex flex-row'>
        <p className='ml-40 text-xl mt-8'>If you already have an account you can <a href="/login" className='text-[#4461f2]'>Login</a></p>
        <img src={Img} className="w-[40vw] mt-[1vh] "/>
        <div className='flex flex-col gap-6'>
          <input type="name" className='p-4 w-[15vw] bg-[#EAF0F7] focus:outline-none' placeholder="Name" 
            onChange={(e)=>{setName(e.target.value)}} 
          ></input>
          <input type="email" className='p-4 w-[15vw] bg-[#EAF0F7] focus:outline-none' placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
          ></input>
          <input type="number" className='p-4 w-[15vw] bg-[#EAF0F7] focus:outline-none' placeholder="Phone Number (+91)" 
            onChange={(e)=>{setPhone(e.target.value)}}
          ></input>
          <button className='px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{signin()}}>Sign In</button>
          <p>Are you an organization ? <a href="/organization/signup" className='text-blue-500'>Click here</a></p>
        </div>
        
        </div>

      </div>
    </div>
  )
}

export default HomeScreen
