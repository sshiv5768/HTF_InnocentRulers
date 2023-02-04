import React, { useEffect, useState } from 'react'
import axios from "axios"

const List = ({title}) => {

    const [data,setData]= useState([]);
    var re=[];

    const GetAllUsers = async()=> {
        const result = await axios.get("/api/user/getalluser")
        .then((res)=>{
           console.log(res.data.message);
           res.data.message.map((e)=>{
                if(e.title === title){
                    re.push(e);
                }
           })
           setData(re);
        })
    }


 useEffect(()=>{
    GetAllUsers();
 },[])

// useEffect(()=>{
//     axios.get('/api/user/getalluser').then((res)=>{
//         setData(res.data.message);
//     })
//     console.log(data);
// },[])




  return (
    <div className='mt-8 px-8'>
    <p className='text-xl mx-32 font-semibold underline'>List of Registered User</p>
    <p className='text-md mt-4 mx-32 font-medium'>Link for User Registration: <i className='underline'><a href={"http://localhost:3000/user/registration/"+title}>http://localhost:3000/user/registration/{title}</a></i></p>

    <br/><br/>
       
        <table className='flex text-left mx-auto w-[60vw] border-2'>
                        <tr>
                        <th className='mx-32 w-[20vw]'>Name</th>
                        <th className='w-[15vw]'>Email</th>
                        <th className='w-[15vw]'>Gender</th>
                        <th className='w-[15vw]'>Domain</th>
                        <th className='w-[15vw]'>Team</th>
                        <th className='w-[15vw]'>Phone</th>
                        </tr>
        </table>
        {
            data.map((e)=>{
                return (
                    <div className='border-2 w-[60vw] mx-32'>
                        <tr className='text-left border-2'>
                            <td className='mx-32 w-[20vw]'>{e.name}</td>
                            <td className='w-[15vw]'>{e.email}</td>
                            <td className='w-[15vw]'>{e.gender}</td>
                            <td className='w-[15vw]'>{e.domain}</td>
                            <td className='w-[15vw]'>{e.team}</td>
                            <td className='w-[15vw]'>{e.phone}</td>
                        </tr>
                    </div>
                )
            })
        }
     
    </div>
  )
}

export default List
