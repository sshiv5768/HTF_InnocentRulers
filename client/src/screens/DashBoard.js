import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Community from '../components/Community';
import Navbar from "../components/Navbar"
import Core from '../components/Core';
import User from "../components/User";
import Sponsor from '../components/Sponsor';
import List from "../components/List"
import Feedback from '../components/Feedback';
import Log from '../components/Log';
import Food from '../components/Food';
import axios from "axios";

const DashBoard = () => {
  const user = localStorage.getItem('user');
  const {title} = useParams();

  const [core,setcore] = useState(false);
  const [use,setuse] = useState(false);
  const [list,setlist] = useState(false);
  const [sponsor,setsponsor] = useState(false);
  const [community,setcommunity] = useState(false);
  const [feedback,setfeedback] = useState(false); 
  const [log,setlogs] = useState(false);
  const [venue,setvenue] = useState(false);
  const [data,setData] = useState();

  if(!user){
    window.location.href="/";
  }



  useEffect(()=>{

  },[list,use,core,sponsor,community]);


  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <div className='flex'>
        <div className='w-[20vw] h-[100vh] bg-[#EBEBEB]'>
          <div className='p-8 mt-8'>
            <div className='text-center border-black hover:bg-white p-8 font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={
                ()=>{
                  console.log(core);
                  setuse(false);
                  setlist(false);
                  setsponsor(false);
                  setcommunity(false);
                  setcore(true);
                  setvenue(false);
                  setlogs(false);
                  setfeedback(false);
                }
              }
              >Core Registration Form</a>
              
            </div>
            
            <div className='text-center p-8  hover:bg-white font-semibold text-lg '>
            <a className="cursor-pointer hover:underline" onClick={()=>{
              setcore(false);
              setuse(false);
              setsponsor(false);
              setcommunity(false);
              setlist(true);
              setvenue(false);
                setlogs(false);
              setfeedback(false);
            }}>
            List of Attendes</a>
            </div>
            <div className='text-center p-8 hover:bg-white font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={()=>{
                setcore(false);
                setuse(false);
                setlist(false);
                setcommunity(false);
                setsponsor(true);
                setvenue(false);
                setlogs(false);
                setfeedback(false);
              }}>Featured Sponsors</a>
            </div>
            <div className='text-center p-8 hover:bg-white font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={()=>{
                setcore(false);
                setuse(false);
                setlist(false);
                setsponsor(false);
                setcommunity(true);
                setvenue(false);
                setlogs(false);
                setfeedback(false);
              }}>Community Collaborations</a>
            </div>
            <div className='text-center p-8 hover:bg-white font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={()=>{
                setcore(false);
                setuse(false);
                setlist(false);
                setsponsor(false);
                setcommunity(false);
                setfeedback(false);
                setlogs(true);
                setvenue(false);
              }}>Logistics/Swags</a>
            </div>
            <div className='text-center p-8 hover:bg-white font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={()=>{
                setcore(false);
                setuse(false);
                setlist(false);
                setsponsor(false);
                setcommunity(false);
                setfeedback(false);
                setlogs(false);
                setvenue(true);
              }}>Food And Venue</a>
            </div>
            <div className='text-center p-8 hover:bg-white font-semibold text-lg '>
              <a className="cursor-pointer hover:underline" onClick={()=>{
                setcore(false);
                setuse(false);
                setlist(false);
                setsponsor(false);
                setcommunity(false);
                setfeedback(true);
                setvenue(false);
                setlogs(false);
              }}>FeedBack Form</a>
            </div>

          </div>
        </div>
        <div className=' mt-[2vh]'>
        <p className='py-8 px-32 mx-auto font-bold text-5xl mt-8 '>{title}</p>
        {core && <Core/>}
        {use && <User/>}
        {community && <Community/>}
        {sponsor && <Sponsor/>}
        {list && <List title={title}/>}
        {feedback && <Feedback tite={title}/>}
        {log && <Log/>}
        {venue && <Food/>}
        {
          !core && !use && !community && !sponsor && !list && !feedback && !log && !venue && <p className='font-extrabold text-2xl mx-[30vw] mt-[20vh]'>Welcome to the HackHackathon</p>
        }
        </div>
      </div>
    </div>
  )
}

export default DashBoard
