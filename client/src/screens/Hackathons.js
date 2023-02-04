import axios from 'axios';
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';

const Hackathons = () => {
    const user = localStorage.getItem('user');
    if(!user){
        window.location.href="/";
    }

    async function gethackathons(){
        const result = await axios.post('/api/hack/gethackathons',{
            admin:user
        }).then((res)=>{
             console.log(res.data);
        })
    }

    useEffect(()=>{
        gethackathons();
    },[])

  return (
    <div>
    <Navbar/>
  <div className='mt-[15vh]'>
      <div className=' text-center'>
          <p className='text-3xl font-extrabold mx-auto'>Here is the list of all the events you are involved in</p>
          <p className='text-center mt-[2vh] text-[#475569] font-bold'>We will try to provide you with the best experience.</p>
      </div>
      
  </div>
  </div>
  )
}

export default Hackathons
