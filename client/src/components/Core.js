import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Core = () => {

  const [name,setName]= useState("");
  const [domain,setDomain] = useState("");
  const [phone,setphone] = useState("");

  const [data,setData] = useState();

  var re = [];

  const RegisterMember = async()=>{
    const member = {
      name,domain,phone
    } 
    axios.post('/api/core/register',member).then((e)=>{
      re.push(member);
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

  const GetMember = async()=>{
    await axios.get('/api/core/all').then((res)=>{
        setData(res.data.member)
        console.log(data);
    })
  }

  useEffect(()=>{
    GetMember();
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
    <button className=' mx-[15vw] mt-[5vh] px-6 py-3 bg-[#4461F2] text-white hover:bg-[#142579]' onClick={()=>{RegisterMember();}}>Register</button>   
       </div>
       <div className='w-[50vw] p-16'>
       <p className='text-xl text-center mx-16 font-semibold'>Core Team List</p>
       <table className='flex text-left mx-auto w-[40vw] border-2'>
       <tr>
       <th className='mx-32 w-[20vw]'>Name</th>
       <th className='w-[15vw]'>Domain</th>
       <th className='w-[15vw]'>Phone</th>
       </tr>
        {
          re.push((e)=>{
            <tr>
        <td className='mx-32 w-[20vw]'>{e.name}</td>
       <td className='w-[15vw]'>{e.domain}</td>
       <td className='w-[15vw]'>{e.phone}</td>
       </tr>
          })
        }
        </table>
       </div>
    </div>
  )
}

export default Core
