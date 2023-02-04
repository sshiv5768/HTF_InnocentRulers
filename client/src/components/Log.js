import React, {useState} from 'react'

const Log = () => {

  const [name,setName] = useState("");
  const [domain,setDomain] = useState("");
  const [quan,setQuan] = useState();
  return (
    <div className='' >
    <p className='text-xl mx-32  font-semibold'>Logistics and Swags</p>
    <div className='flex'>
    <div className='mx-[5vw] mt-[3vh] w-[30vw]'>
    <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
    <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="text" placeholder="Company" onChange={(e)=>{setDomain(e.target.value)}}/>
    <input className="p-4 w-[25vw] mt-[5vh] bg-[#EAF0F7] focus:outline-none" type="Number" placeholder="Quantity" onChange={(e)=>{setQuan(e.target.value)}}/>
    <button className='bg-[#4461F2] px-6 py-3 mt-8 mx-4 rounded-3xl text-white' onClick={()=>{alert("Entry Added")}}>Confirm</button>
</div>
<div className='p-4'>
<table className='flex text-left mx-auto w-[50vw] border-2'>
<tr>
<th className='mx-32 w-[20vw]'>Name</th>
<th className='w-[15vw]'>Company</th>
<th className='w-[15vw]'>Quantity</th>
</tr>

</table>
</div>
    </div>
    </div>
  )
}

export default Log
