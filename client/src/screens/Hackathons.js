import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

const Hackathons = () => {
    const user = localStorage.getItem('user');
    if(!user){
        window.location.href="/";
    }


    const [data,setdata] = useState([]);
        async function gethackathons(){
        await axios.post('/api/hackathon/getall',{
            admin:user
        }).then((res)=>{
             setdata(res.data.message);
        })
    }

    useEffect(()=>{
        gethackathons();
    },[])

  return (
    <div>
    <Navbar/>
  <div className='mt-[15vh]'>
      <div className=' text-center mb-[10vh]'>
          <p className='text-3xl font-extrabold mx-auto'>Here is the list of all the events you are involved in</p>
          <p className='text-center mt-[2vh] text-[#475569] font-bold'>We will try to provide you with the best experience.</p>

          {
            data.length > 0 ? 
            <>
                {
                    data.map((e)=>{
                        return (
                            <>
                            <a className='hover:cursor-pointer  scale-110 ' href={"/dashboard/" + e.title} >
            <div className='text-left mt-[5vh] border-2 w-[40vw] m-auto p-8 rounded-sm hover:border-[#16A34a] hover:bg-[#f0fdf4]'>
            <div className='ml-8'>
                <p className='font-bold text-xl'>{e.title}</p>
                <p className='text-[#475569] font-bold'>{e.desc}</p>
            </div>
            </div>
            </a>
                            </>
                        )
                    })
                }
            </>
            :  
            <>
            <p className='text-[#475569] font-bold'>No Hackathons available.</p>
            </>
          }
      </div>
      
  </div>
  </div>
  )
}

export default Hackathons
