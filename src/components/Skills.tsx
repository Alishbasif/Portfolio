import React from 'react'

const Skills = () => {
  return (
    <div id="skills"className='container pt-32 'data-aos="fade-up-left">
        <div className='grid md:grid-cols-2 gap-20 items-center'>
         <div>
        <h2 className='text-4xl md:text-5xl'>Work Experience with Technology</h2>   
        <p className='text-blue-700 pt-2'>
        I have starting a foundation in Web Development,specializing in HTML, CSS and JAVASCRIPT.My experience extends to using frameworks like React and Next.Js ,trying to create dynamic and user-friendly applications. I have also done projects using Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhnace my skill set and contribute efficiently to projects.     
        </p> 
        <div>
            <div className='grid grid-cols2 text-accent text-3xl sm:text-4xl'>
                 <div className='space-y-2'>
                     <h2 data-aos="fade-up-left">Typescript</h2>
                     <h2 data-aos="fade-up-left">React</h2>
                     <h2 data-aos="fade-up-left">Next.js</h2>
                     <h2 data-aos="fade-up-left">Tailwind CSS</h2>
                     <h2 data-aos="fade-up-left">CSS</h2>
                     <h2 data-aos="fade-up-left">HTML</h2>
                 </div>
            </div>
        </div>
        </div>   
        </div>
      
    </div>
  )
}

export default Skills
