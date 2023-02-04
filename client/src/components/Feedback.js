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
      <img src={data} className="mt-8 mx-64 w-[25vw] h-[40vh]"/>
    </div>
    <button className=''>Download csv</button>
    </div>
  )
}

export default Feedback
