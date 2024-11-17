import React from 'react'
import { IoMenu } from "react-icons/io5";
const navbar = () => {
  return (
    <div id='navbar_container' className=' container pt-5' >
      <div id='navbar_flex_elements'className=' p-5 flex justify-between items-center'>
        <div className='text-4xl font-medium'><b>My Profile</b></div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href="#hero">Home</a></li>
        <li className='menuLink'><a href="#about">About</a></li>
        <li className='menuLink'><a href="#projects">Projects</a></li>
        <li className='menuLink'><a href="#skills">Skills</a></li>
        <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        <IoMenu  className='md:hidden' size={30}/>
      </div>
    </div>
  )
}
export default navbar
