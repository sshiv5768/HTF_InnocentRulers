import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrganizationNav from "../components/OrganizationNav";

const AllHackathon = () => {

    const [data,setdata] = useState([]);


    useEffect(()=>{
      const res = axios.get('/api/hackathon/get')
      .then((re)=>{
      setdata(re.data.message);
      console.log(data);
      })
    },[data])

  return (
    <>
      <OrganizationNav/>
      <div>
        <p className='text-center mt-16 font-bold text-4xl'>Hackathons Available</p>
        <div className='flex flex-wrap w-[80vw] mx-auto gap-8 mt-8'>
        {
          data.length > 0 && data.map((e)=>{
            return (
              <>
              <div className='p-16 w-[20vw] mx-auto shadow-lg border-2'>
                <p className='text-xl font-semibold text-center'>{e.title}</p>
                <div className='mt-4'>
                <p className='text-lg'>{e.desc}</p>
                <p className='text-lg'>POC: {e.admin}</p>
                </div>
                <button className='py-3 px-6 border-2 rounded-lg mx-12 mt-8'>Coming Soon</button>
                </div>
              </>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default AllHackathon
