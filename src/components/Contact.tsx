import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className="pt-32 container " >
      <div className='grid md:grid-cols-2 gap-10'></div>
        <div className="space-y-8" data-aos="fade-up-left ">
          <h2 className='text-5xl'><b>Contact me</b></h2>
            <p className='text-blue-950 text-[18px] pt-2'>
             Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
      <div className='flex gap-3 items-center'>
        <IoIosMail size={30} /> alishbasif943@gmail.com
    </div>
    <div className='flex gap-3 items-center'>
        < BsFillTelephoneFill size={30} /> (021) 000-0000
        </div>
        <div className='space-y-8'></div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input type= "text"  
            className='h-[40px] bg-transparent border border-accent'
            id="name"/>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input type= "text"  
            className='h-[40px] bg-transparent border border-accent'
            id="email"/>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor='message'>Message</label>
            <textarea className='bg-transparent border border-accent'
            id="message" rows={8}>
            </textarea>
            </div>
            <button className='bg-accent  p-2 px-6 text-xl font-bold'>Send me</button>
      </div>
    </div>
  )
}

export default Contact
