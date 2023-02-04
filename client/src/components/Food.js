import React from 'react'
import Img1 from "../components/assets/1.jpeg";
import Img2 from "../components/assets/2.jpeg";
import Img3 from '../components/assets/3.jpeg';
import Img4 from "../components/assets/4.jpeg";
import Img5 from "../components/assets/5.png";
import Img6 from "../components/assets/6.png";

const Food = () => {
  return (
    <div>
    <p className='text-xl mx-32 font-semibold'>Venues</p>
    <div className='flex flex-wrap w-[80vw]'>
    <div className='mt-8'>
      <img src={Img1} className="ml-32 h-[30vh] cursor-pointer"/>
    </div> 
    <div className='mt-8'>
      <img src={Img2} className=" ml-8 h-[30vh] cursor-pointer"/>
    </div> 
    <div className='mt-8'>
      <img src={Img3} className="ml-8 h-[30vh] cursor-pointer"/>
    </div> 
    <div className='mt-8'>
      <img src={Img4} className="h-[30vh] ml-32 cursor-pointer"/>
    </div> 
    <div className='mt-8'>
      <img src={Img5} className="h-[30vh] ml-8 cursor-pointer"/>
    </div>
    <div className='mt-8'>
      <img src={Img6} className="h-[30vh] ml-8 cursor-pointer"/>
    </div>
  </div>
    </div>
  )
}

export default Food
