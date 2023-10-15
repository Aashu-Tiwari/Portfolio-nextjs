"use client"

import Circles from '/components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { useEffect, useState } from 'react'
import axios from '/Utils/axios'
import { data } from 'autoprefixer'
import { useDispatch } from 'react-redux'
import { asyncsignupstudent } from '../../store/Actions/studentaction'


const Contact = () => {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [subject,setsubject] = useState("")
  const [message,setmessage] = useState("")
  const [User,setUser] = useState("")


  const dispatch = useDispatch();


  const submitHandler = (e)=>{
    const user = {
      name:name,
      email:email,
      subject:subject,
      message:message
    }
    dispatch(asyncsignupstudent(user))
    console.log(user)
  }

  submitHandler();

  // useEffect(()=>{
  //   submitHandler();  
  // },[submitHandler])



  return <div className='h-full bg-primary/30 '>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className='h2 text-center mb-12 '>Let's <span className='text-accent '>connect.</span></motion.h2>
        <motion.form action="/signup" variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" className='flex-1 flex flex-col gap-6 w-full mx-auto '>
          <div className="flex gap-x-6 w-full">
            <input type="text" placeholder='name' className='input' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input type="email" placeholder='Email' className='input' value={email} onChange={(e)=>{setemail(e.target.value)}} />
          </div>
          <div className=''>
            <input type="text" placeholder='Subject' className='input' value={subject} onChange={(e)=>{setsubject(e.target.value)}}/>
            {/* <input type="text" placeholder='Message' className='input h-[200px] mt-8'/> */}
            <textarea value={message} placeholder='message' className='textarea mt-8 xl:h-40 h-20' onChange={(e)=>{setmessage(e.target.value)}}></textarea>
          </div>
          <input onClick={submitHandler} type="Submit" placeholder="Let's talk" className='btn rounded-full border cursor-pointer border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' />
          <BsArrowRight className='mt-[-58px] ml-[130px]'/>
        </motion.form >
      </div>
    </div>
  </div>;
};

export default Contact;
