import React from 'react'
import Img1 from "../components/assets2/1.png"
import Img2 from "../components/assets2/2.png"
import Img3 from "../components/assets2/3.png"
import Img4 from "../components/assets2/4.png"

const Community = () => {
  return (
    <div className='mt-8'>
    <p className='text-xl mx-32 font-semibold'>Community Collaborations Form</p>
    <div className='mx-32 mt-8 w-[60vw] flex justify-between'>
      <img src={Img1} className="w-[50vw]"/>
      <button className='bg-[#4461F2] h-[7vh] px-6 py-2  mt-12 rounded-3xl hover:underline text-white hover:bg-[#4455ac]'>Send Invite</button>
    </div>
    <div className='mx-32 mt-8 w-[60vw] flex justify-between'>
      <img src={Img2} className="w-[50vw]"/>
      <button className='bg-[#4461F2] h-[7vh] px-6 py-2  mt-12 rounded-3xl hover:underline text-white hover:bg-[#4455ac]'>Send Invite</button>
    </div>
    <div className='mx-32 mt-8 w-[60vw] flex justify-between'>
      <img src={Img3} className="w-[50vw]"/>
      <button className='bg-[#4461F2] h-[7vh] px-6 py-2  mt-12 rounded-3xl hover:underline text-white hover:bg-[#4455ac]'>Send Invite</button>
    </div>
    </div>
  )
}

export default Community
