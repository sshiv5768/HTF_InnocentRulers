import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Feedback = ({title}) => {

  const [data,setdata] = useState("");

  useEffect(()=>{
    axios.post('/api/feedback/create').then((re)=>{
      console.log(re.data.data);
      setdata(re.data.data);
    })
  },[])

  return (
    <div className='mt-8 mx-32 '>
    <p className='text-xl  font-semibold'>Feedback Form</p>
    <p clasName="text-md mx-32 mt-4 font-semibold">You can share the following QR code to share the feedback form</p>

    <div className=''>
    
      {
        data == "" ? <p className='p-36 mx-16'>Kindly Wait Till we generate your QR....</p> : <img src={data} className="mt-8 mx-64 w-[25vw] h-[40vh]"/>
      }
    </div>
    <div className='flex gap-0'>
    <button className='mx-[12vw] px-6 py-3 bg-blue-600 text-white hover:bg-blue-700' onClick={()=>{window.location.href=data}}>Download QR Code</button>
    <button className=' px-6 py-3 bg-blue-600 text-white hover:bg-blue-700'>Check the Stats</button>
    </div>

    </div>
  )
}

export default Feedback
