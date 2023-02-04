import React from 'react'
import { useParams } from 'react-router'
import User from '../components/User'

const UserRegistration = () => {
  const {title} = useParams();
  return (
    <div className='flex'>
      <div className='w-[10vw] h-[100vh] bg-[#EBEBEB]'></div>
      <User title={title}/>
      <div className='w-[10vw] h-[100vh] bg-[#EBEBEB]'></div>
    </div>
  )
}

export default UserRegistration
