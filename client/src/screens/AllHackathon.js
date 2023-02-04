import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrganizationNav from "../components/OrganizationNav";

const AllHackathon = () => {

    const [data,setdata] = useState([]);

    const GetAll = async () => {
        const res = await axios.get('/api/hackathon/get');
        // console.log(res.data.message);
        setdata(res.data.message);
        console.log(data)
    }

    useEffect(()=>{
        GetAll();

    },[data])

  return (
    <>
      <OrganizationNav/>
      <div>
        <p className='text-center mt-16 font-bold text-4xl'>Hackathons Available</p>
        <div className='flex mt-16 px-36  justify-center gap-10 flex-wrap'>
        {
          data.map((e)=>{
             <div className='h-[20vh] w-[30vw] border-2 border-black'>
              <p>{e.title}</p>
              <p>{e.desc}</p>
             </div>
          })
        }
        </div>
      </div>
    </>
  )
}

export default AllHackathon
