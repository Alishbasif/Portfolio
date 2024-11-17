import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
const Hero = () => {
  return ( 
    <div id="hero" className= 'min-h-screen bg-no-repeat bg-[url(/portfolio_img.png)] bg-cover'
    style={{backgroundSize:"35%", backgroundPosition:"left 100px top 100px"} }>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-calc[(100vh-60px)]'>
        <div className='hidden lg:block' ></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight'>
          <div>
            <p data-aos="zoom-in-up">This is</p>
            <p data-aos="zoom-in-up">Alishba</p>
            <p data-aos="zoom-in-up">Asif</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Hero


