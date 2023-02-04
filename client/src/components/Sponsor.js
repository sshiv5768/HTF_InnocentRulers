import React from 'react'
import Img1 from "../components/assets3/1.png"
import Img2 from "../components/assets3/2.png"
import Img3 from "../components/assets3/3.png"
import Img4 from "../components/assets3/4.png"
import Img5 from "../components/assets3/5.png"
import Img6 from "../components/assets3/6.png"


const Sponsor = () => {
  return (
    <div className='mt-8'>
    <p className='text-2xl mx-32 font-semibold underline'>Recommended Sponsors</p>
      <div className='flex flex-wrap'>
        <div className=''>
          <img src={Img1} className="w-[18vw] h-[35vh] ml-48 mt-4 cursor-pointer"></img>
        </div>
        <div className=''>
          <img src={Img2} className="w-[18vw] h-[35vh] mx-16 mt-4 cursor-pointer"></img>
        </div>
        <div className=''>
          <img src={Img3} className="w-[18vw] h-[35vh] mt-4 cursor-pointer"></img>
        </div>
        <div className=''>
          <img src={Img4} className="w-[18vw] h-[35vh] h-[35vh] ml-48 mt-4 cursor-pointer"></img>
        </div>
        <div className=''>
          <img src={Img5} className="w-[18vw] h-[35vh] mx-16 mt-4 cursor-pointer"></img>
        </div>
        <div className=''>
          <img src={Img6} className="w-[18vw] h-[35vh] mt-4 cursor-pointer"></img>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
