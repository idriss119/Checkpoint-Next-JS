"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaSass} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostman, SiTypescript, SiMicrosoftsharepoint, SiReactrouter, SiSage, SiCrystal,SiRedux, SiMysql,SiMicrosoftsqlserver, SiCloud66, SiElectron, SiSass} from "react-icons/si";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const about = {
title: 'About me',
description:"I’m Wassim Mourali, a seasoned professional with over 12 years of experience in my field. As a Tunisian national, I bring a rich blend of expertise and cultural insight to every project. I’m fluent in both English and French, which allows me to connect with diverse teams and clients. I'm available for freelance opportunities and always eager to collaborate on innovative projects.",
info: [
  {
    filedName: "Name",
    filedValue: "Wassim MOURALI",
  },
  {
    filedName: "Phone",
    filedValue: "(+216) 23 462 652",
  },
  {
    filedName: "Experience",
    filedValue: "12+ Years",
  },
  {
    filedName: "GitHub",
    filedValue: "Wassim.Mourali",
  },
  {
    filedName: "Nationality",
    filedValue: "Tunisien",
  },
  {
    filedName: "Email",
    filedValue: "Was.Mourali@hotmail.com",
  },
  {
    filedName: "Freelance",
    filedValue: "Available",
  },
  {
    filedName: "Languages",
    filedValue: "English, French",
  },
]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:'As a Full Stack JS Developer, I specialize in building and maintaining scalable web applications using modern JavaScript frameworks and technologies. My expertise encompasses both frontend and backend development, ensuring seamless integration and functionality across the entire stack. I focus on delivering high-quality, efficient solutions that enhance user experience and drive business success.',
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "SOPAT SA Mliha.",
      position: "Managar Weighing System",
      duration: "2022 - 2024",
    },
    {
      company: "FlacoPlast Inc.",
      position: "Super Technical Repair Machine",
      duration: "2020 - 2022",
    },
    {
      company: "AMM.",
      position: "Super Technical",
      duration: "2018 - 2020",
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:'As a Full Stack JS Developer, I specialize in building and maintaining scalable web applications using modern JavaScript frameworks and technologies. My expertise encompasses both frontend and backend development, ensuring seamless integration and functionality across the entire stack. I focus on delivering high-quality, efficient solutions that enhance user experience and drive business success.',
  items: [
    {
      institution :"Online Cours Platform GoMyCode.",
      degree: "Full Stack Developer Bootcamp",
      duration: "2024",
    },
    {
      institution :"Intelligent Systems and Industrial Computing.",
      degree: "Higher Technician",
      duration: "2019",
    },
    {
      institution: "Certified Web Development Program",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "Certified Responsive Designer Program",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "Certified Chartered Program",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "Electrical Maintenance Certification Program",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "Emergency First Aid Certification Program",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "Embedded Systems (Weighing Systems)",
      degree: "Certification",
      duration: "2019"
    },
    {
      institution: "ERP Sage X3 Administration Certification Program",
      degree: "Certification",
      duration: "2019"
    },
  ]
};

const skills = {
  title:"My skills",
  description:"This portfolio showcases my comprehensive expertise in full-stack development, with proficiency in both frontend and backend technologies. From building responsive and dynamic user interfaces using HTML5, CSS3, JavaScript, React, and Bootstrap, to managing server-side operations with Node.js, Express, and databases like MongoDB and MySQL, I bring a well-rounded skill set. Additionally, I have experience with modern tools and frameworks such as Next.js, Tailwind, TypeScript, and Redux, along with cloud technologies, ERP systems, and advanced report generation.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaBootstrap />,
      name: "BootStrap"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
    icon: <SiNextdotjs />,
    name: "Next.js"
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB"
  },
  {
    icon: <SiExpress />,
    name: "Express"
  },
  {
    icon: <SiPostman />,
    name: "Postman"
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript"
  },
  {
    icon: <SiMicrosoftsharepoint />,
    name: "Microsoft SharePoint"
  },
  {
    icon: <SiMicrosoftsqlserver />,
    name: "Sql Server"
  },
  {
    icon: <SiReactrouter />,
    name: "React Router"
  },
  {
    icon: <SiRedux />,
    name: "Redux"
  },
  {
    icon: <SiMysql />,
    name: "MySQL"
  },
  {
    icon: <SiCloud66 />,
    name: "Cloud"
  },
  {
    icon: <SiElectron />,
    name: "Electron"
  },
  {
    icon: <FaSass />,
    name: "Sass"
  },
  {
    icon: <SiSage />,
    name: "ERP Sage"
  },
  {
    icon: <SiCrystal />,
    name: "Crystal Report"
  },
  ]
};


const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
  <div className="container mx-auto">
    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>
      <div className="min-h-[70vh] w-full">
<TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{experience.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
    <ScrollArea   className="h-[400px]">
<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {experience.items.map((item, index)=>{
    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
      <span className="text-accent">{item.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
      <div className="flex place-items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.company}</p>
      </div>
    </li>
  })}
</ul>
    </ScrollArea>
  </div>
  </TabsContent>


<TabsContent value="education" className="w-full">
<div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
    <ScrollArea   className="h-[400px]">
<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {education.items.map((item, index)=>{
    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
      <span className="text-accent">{item.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
      <div className="flex place-items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.institution}</p>
      </div>
    </li>)
  })}
</ul>
    </ScrollArea>
  </div>
</TabsContent>


<TabsContent value="skills" className="w-full h-full">
<div className="flex flex-col gap-[30px]">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
<h3 className="text-4xl font-bold">{skills.title}</h3>
<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
</div>
<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
  {skills.skillList.map((skill, index)=>{
    return(
      <li key={index}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                {skill.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    )
  })}
</ul>
</div>
  </TabsContent>
<TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-2 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-auto xl:mx-0">
      {about.info.map((item, index)=>{
        return(
          <li key={index} className="flex items-center justify-center max-w-[750px] xl:justify-start gap-4">
            <span className="text-white/60">{item.filedName}</span>
            <span className="text-xl">{item.filedValue}</span>

          </li>
        )
      })}
    </ul>
  </div>
  </TabsContent>
      </div>
    </Tabs>
  </div>
  </motion.div>
  )
}

export default Resume