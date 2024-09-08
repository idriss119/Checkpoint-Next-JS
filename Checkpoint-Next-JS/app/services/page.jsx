"use client";
import {BsArrowDown, BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Offering comprehensive web development services, I specialize in crafting responsive, user-friendly websites and robust backend systems. My expertise spans frontend design and backend integration, ensuring seamless performance and a top-tier user experience.',
    href: "/",
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Delivering intuitive and visually appealing UI/UX design, I focus on creating user-centric interfaces that enhance usability and engagement. My designs are tailored to meet user needs while ensuring a seamless and enjoyable experience across all devices.',
    href: "/",
  },
  {
    num: '03',
    title: 'Front-end /React JS',
    description: '"Specializing in front-end development with React JS, I build dynamic and responsive web applications that offer smooth, interactive user experiences. My code is clean, efficient, and designed to bring your ideas to life with the latest web technologies.',
    href: "/",
  },
  {
    num: '04',
    title: 'Back-end / Node.JS Next.JS',
    description: 'Experienced in back-end development with Node.js and Next.js, I create robust and scalable server-side solutions that power seamless web applications. My expertise ensures reliable data management, efficient APIs, and smooth integration with front-end systems.',
    href: "/",
  },

];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{opacity: 0 }} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
    }}
    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
    >
{services.map((service, index)=>{
return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
  <div className="w-full flex justify-between items-center">
  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
  <BsArrowDownRight className="text-primary text-3xl" />
  </Link>
  </div>
  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
  <p className="text-white/60">{service.description}</p>
  <div className="border-b border-white/20 w-full"></div>
</div>
})}
      </motion.div>
    </div>

    </section>

  )
}

export default Services