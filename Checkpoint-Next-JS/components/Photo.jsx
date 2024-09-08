"use client"

import { motion } from "framer-motion";
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.8, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
        className="relative"
      >
        {/* SVG Circle */}
        <motion.svg 
          className="w-[300px] xl:w-[450px] h-[300px] xl:h-[450px]" 
          fill="transparent" 
          viewBox="0 0 506 506" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="220" 
            stroke="#00ff99" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ strokeDasharray: "24 10 0 0" }} 
            animate={{ 
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image with Mix-Blend Mode */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.8, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
          className="w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image 
            src="/assets/photoo.png" 
            priority 
            quality={100} 
            fill 
            alt="" 
            className="object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;
