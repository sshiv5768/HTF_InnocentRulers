import React from 'react'
import Img1 from "../components/assets/1.jpeg";
import Img2 from "../components/assets/2.jpeg";
import Img3 from '../components/assets/3.jpeg';
import Img4 from "../components/assets/4.jpeg";

const Food = () => {
  return (
    <div>
    <p className='text-xl mx-32  font-semibold'>Venues</p>
    <div className='flex flex-wrap w-[90vw]'>
    <div className='mt-8'>
      <img src={Img1} className="mx-64 h-[30vh]"/>
    </div> 
    <div className='mt-8'>
      <img src={Img2} className="h-[30vh]"/>
    </div> 
    <div className='mt-8'>
      <img src={Img3} className="mx-64 h-[30vh]"/>
    </div> 
    <div className='mt-8'>
      <img src={Img4} className="h-[30vh]"/>
    </div> 
  </div>
    </div>
  )
}

export default Food
