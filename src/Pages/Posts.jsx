import React from 'react'
import { Outlet } from 'react-router-dom'

const Posts = () => {
  return (
    <div className='p-5'>
    <h1 className=" text-4xl">Blog</h1>
    <Outlet/>
  </div>
  )
}

export default Posts