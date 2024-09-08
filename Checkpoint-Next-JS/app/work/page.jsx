"use client";
import { motion } from "framer-motion";
import React,  {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'Front_End',
    title: 'project 1',
    description:'The FurniShop Dashboard is a responsive web application designed to manage and monitor a smart home environment. Built using React, CSS3, and JavaScript, the dashboard provides real-time updates on various smart devices, including lights, thermostats, and security cameras.',
    stack : [
      {name:"Html5"},{name: "Css 3"},{name: "JavaScript"}
    ],
    image: '/assets/work/thumb1.png',
    live: "",
    github:"",
  },
  {
    num: '02',
    category: 'E-Commerce',
    title: 'project 2',
    description:'TaskMaster Pro is a full-stack web application designed to streamline project management and team collaboration. Developed using the MERN stack (MongoDB, Express, React, Node.js), it offers features like task assignment, progress tracking, and deadline reminders. The frontend, built with React and Tailwind CSS, provides a user-friendly interface.',
    stack : [
      {name:"Next.js"},{name: "Tailwind.css"},{name: "Node.js"}
    ],
    image: '/assets/work/thumb2.png',
    live: "",
    github:"",
  },
  {
    num: '03',
    category: 'FullStack_JS',
    title: 'project 3',
    description:'Alina Lee is a comprehensive full-stack e-commerce platform designed to provide a seamless online shopping experience. Built using the MERN stack (MongoDB, Express, React, Node.js), the application features a dynamic product catalog, advanced search functionality, and a secure checkout process. The frontend, created with React and Bootstrap, offers a responsive.',
    stack : [
      {name:"Express"},{name: "React JS"},{name: "MongoDB"}
    ],
    image: '/assets/work/thumb3.png',
    live: "",
    github:"",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
<div className="container mx-auto">
  <div className="flex flex-col xl:flex-row xl:gap-[30px]">
    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
<div className="flex flex-col gap-[30px] h-[50%]">
  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
    {project.num}
  </div>
  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
  <p className="text-white/60">{project.description}</p>
  <ul className="flex gap-4">
    {project.stack.map((item, index)=>{
      return(
        <li key={index} className="text-xl text-accent">
        {item.name}
        {index !== project.stack.length - 1 && ","}
        </li>
      )
    })}
  </ul>

  <div className="border border-white/20"></div>
  <div className="flex items-center gap-4">
    <Link href={project.github}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsGithub className="text-white text-3xl group-hover:text-accent" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Repository Project GitHub</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </Link>
  </div>
</div>
    </div>
    <div className="w-full xl:w-[50%]">
      <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
        {projects.map((project, index)=>{
          return (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

              </div>
              <div className="relative w-full h-full">
                <Image src={project.image} fill className="object-cover" alt="" />
              </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  </div>
</div>
    </motion.div>
  )
}

export default Work