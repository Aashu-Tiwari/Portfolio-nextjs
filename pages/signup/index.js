"use client"

import React from 'react'

const page = (user) => {
  console.log(user)
  return (
    <div className='flex items-center justify-center'>
      <div className='mt-[200px] xl:w-[450px] p-10 xl:p-0 '>
        <h2 className=''><span className='text-accent text-3xl mb-[20px] absolute top-[180px] '>Thank you for reaching out!</span> <br /> Your message has been received, and I will get back to you as soon as possible. I appreciate your interest and look forward to connecting with you.</h2>
      </div>
    </div>
  )
}

export default page