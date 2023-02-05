import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Core = ({title}) => {

  const [name,setName]= useState("");
  const [domain,setDomain] = useState("");
  const [phone,setphone] = useState("");

  const [data,setData] = useState([]);
  const [active,setactive] = useState(false);


  const RegisterMember = async()=>{
    console.log(title);
    const member = {
      name,domain,phone,title
    } 
    axios.post('/api/core/register',member).then((e)=>{
      setName("");
    setDomain("");
    setphone("");
      alert("Member added");
      
    }).then(()=>{
      setName("");
    setDomain("");
    setphone("");
  
    })
    
  }

  const GetMember = ()=>{
     axios.get('/api/core/all').then((res)=>{

        res.data.message.map((e)=>{
          if(e.title === title){

            setData(res.data.message)
          }
        })
        console.log(data);
    })
    setactive(true);
  }

  useEffect(()=>{
  },[])

  
  return (
    <div className='mt-8 flex'>
    <div className='w-[30vw]'>
    <p className='text-xl mx-32 font-semibold'>Core Team Registration</p>
    <p className='mx-32 mt-2 w-[25vw] flex-wrap text-[#475569]'>Only Organizer can register a core team member</p>
    <div className='mx-[5vw] mt-[3vh]'>
        <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
        <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Domain" onChange={(e)=>{setDomain(e.target.value)}}/>
        <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Phone Number (+91)" onChange={(e)=>{setphone(e.target.value)}}/>
        
    </div>
    <button className=' mx-[15vw] mt-[5vh] px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579] cursor-pointer' onClick={()=>{RegisterMember()}}>Register</button>   
       </div>
       <div className='w-[50vw] p-16'>
       <button className='text-xl text-center mx-16 font-semibold' onClick={()=>{GetMember()}}>Get Core Team List</button>
       <table className='flex text-left mx-auto w-[43vw] border-2'>
       <tr>
       <th className='mx-32 w-[20vw]'>Name</th>
       <th className='w-[15vw]'>Domain</th>
       <th className='w-[15vw]'>Phone</th>
       </tr>
       </table>
       {
        active && data.map((e)=>{
          return (
            <div className='flex text-left border-2'>
          <p className=' w-[20vw]'>{e.name}</p>
          <p className=' w-[20vw]'>{e.domain}</p>
          <p className=' w-[20vw]'>{e.phone}</p>
          </div>
          )
        })
      }
        
        
       </div>
    </div>
  )
}

export default Core
