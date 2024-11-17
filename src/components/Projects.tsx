import React from 'react'
import Heading from "./Heading";
import Card from "./Card"

const data = [
  {
    id:0,
    title:"Simple Calculator",
    desc:"A basic and simple HTML CSS and Typescript calculator which calculate many operations",
    image:"/project_1.png",
    tags:["HTML","CSS","JAVASCRIPT"],
  },
  {
    id:1,
    title:"Static Resume Builder",
    desc:"A simple Typescript building resume which gives a unique idea for building any resume",
    image:"/project_2.png",
    tags:["HTML","CSS","TYPESCRIPT"],
  },
  {
    id:2,
    title:"Dynamic Resume Builder",
    desc:"A dynamic Typescript building resume form which gives a unique idea for any dynamic form",
    image:"/project_3.png",
    tags:["HTML","CSS","TYPESCRIPT"],
  },
  {
    id:3,
    title:"Editable Resume Builder",
    desc:"A Editable Typescript resume form which gives a open source to edit the resume",
    image:"/project_4.png",
    tags:["HTML","CSS","TYPESCRIPT"],

  }
]

const project = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols2 lg:grid-cols-2 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
         title={el.title}
         desc={el.desc}
         image={el.image}
         tags={el.tags}
         />))}
      </div>
    </div>
  )
}

export default project
