import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Img from "../components/assets/main1.svg"
import axios from 'axios';

const LoginScreen = ({isLogin, setisLogin}) => {
const [otp,setOtp] = useState(0);
  const [phone,setPhone] = useState(0);

  const sendotp = async() => {
    const body = {phoneNumber : phone};

    const res = await axios.post("/api/send-code",body)
    .then((j)=>{console.log(j.data)});
  }

  const confirmotp = async() => {
    const body = {
        phoneNumber: phone,
        smsCode: otp
    }
    const res = await axios.post("/api/verify-code",body)
    .then((j)=>{
      const user = localStorage.setItem('user',phone);
      setisLogin(true);
      window.location="/home"});
  }
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div className=''>
        <div className=''>
          <p className='m-auto ml-0 px-40 py-16 w-[50vw] height pb-4 text-5xl font-extrabold leading-normal'>We help you organize Hackathons :)</p>
        </div>
        <div className='flex flex-row'>
        <p className='ml-40 mt-8 text-xl'>If you don't have an account you can <a href="/" className='text-[#4461f2]'>Register here</a></p>
        <img src={Img} className="w-[40vw] mt-[1vh] "/>
        <div className='flex flex-col gap-6'>
          <input type="text" className='p-4 w-[15vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter Phone Number"
            onChange={(e)=>{setPhone(e.target.value)}}
          ></input>
          <a className='ml-[11vw] text-sm hover:underline cursor' onClick={()=>{sendotp()}}>Send OTP</a>
          <input type="number" className='p-4 w-[15vw] bg-[#EAF0F7] focus:outline-none' placeholder="Enter OTP"
          onChange={(e)=>{setOtp(e.target.value)}}
        ></input>
          <button className='px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{confirmotp()}}>Sign In</button>
        </div>
        
        </div>

      </div>
    </div>)
}

export default LoginScreen
