"use client";

import {motion} from 'framer-motion';
import React, {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger
} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import NextSliderBtn from '/components/NextSliderBtn';

import {
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import {
  SiGo,
  SiPostgresql,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";

const projects = [
  {
    num: "01",
    category: "Mobile",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [
      {icon: <SiFlutter/>,
        name: "Flutter"
      }, 
      {icon: <SiPostgresql/>,
        name: "PostgreSQL"
      }, 
      {icon: <SiGo/>,
        name: "Golang"
      }
    ],
    image: "/assets/work/435312623_18009683213372582_4333128199359947275_n.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [
      {
        icon: <FaReact/>,
        name: "React"
      },
      {
        icon: <SiNextdotjs/>,
        name: "Next.js"
      }, 
      {
        icon: <SiTailwindcss/>,
        name: "TailwindCSS"
      }, 
      {
        icon: <FaNodeJs/>,
        name: "Node.js"}
    ],
    image: "/assets/work/435378113_18009683186372582_3568438501627520806_n.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //current slide index
    const currentIndex = swiper.activeIndex;
    //update project state base on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeIn' },
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent
              text-outline '>{project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-semibold leading-none text-white
              group-hover:text-accent transition-all duration-300 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>
                {project.description}
              </p>
              {/* stack */}
              <ul className='flex gap-6'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-6xl group-hover:text-accent
                    transition-all duration-200">
                      <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-[#232329] 
                        p-6 rounded-full flex justify-center items-center group">
                        <div className="text-4xl group-hover:text-accent
                        transition-all duration-200">{item.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.name}</p>
                      </TooltipContent>
                      </Tooltip>
                      </TooltipProvider>
                
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className='flex items-center gap-6'>
                {/* liveproject button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                    bg-white/5 flex items-center justify-center group'>
                      <BsArrowUpRight className='text-white text-3xl 
                      group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                    bg-white/5 flex items-center justify-center group'>
                      <BsGithub className='text-white text-3xl 
                      group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return(
                  <SwiperSlide key={index}
                  className='w-full'>
                    <div className='h-[460px] relative group flex justify-center
                    items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image src={project.image} fill 
                        className='object-cover'
                        alt=''
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              {/* <NextSliderBtns /> */}
              <NextSliderBtn containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' 
              btnStyles='bg-accent hover:bg-accent-hover text-primary 
              text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all'/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;