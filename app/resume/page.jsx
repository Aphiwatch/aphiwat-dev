"use client";

import { Icon } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter
} from "react-icons/si";

const about = {
  title: "About Me",
  description: "Now i am a software developer, after retire i will be a farmer.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Aphiwat Chalongtham"
    },
    {
      fieldName: "Phone",
      fieldValue: "099-476-2751"
    },
    {
      fieldName: "Experience",
      fieldValue: "5 Months"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thai"
    },
    {
      fieldName: "Email",
      fieldValue: "Aphiwatch09@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Thai"
    },
  ]
};

const experience = {
  icon: "",
  title: "My Experience",
  description: "I have experience in the technology industry,specializing in software development.",
  items:[
    {
      company: "Extend It Resource Co., Ltd.",
      position: "Software Developer",
      duration: "Jul-2024 - Present",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
      company: "KTW",
      position: "Mobile Developer",
      duration: "May-2024",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
  ]
};

const education = {
  icon: "",
  title: "My Education",
  description: "I hold a Bachelor’s degree in Computer Engineering.",
  items:[
    {
      institute: "Kasetsart University",
      degree: "Computer Engineer",
      duration: "2020 - 2024",
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
      institute: 'Tessaban3 "Tessaban Anusorn"',
      degree: "High School",
      duration: "2014 - 2020",
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
  ]
};

const skills = {
  title: "My Skills",
  description: "I future i will learning more technology to be more professional.",
  skillslist:[
    {
      name: "HTML",
      icon: <FaHtml5/>
    },
    {
      name: "CSS",
      icon: <FaCss3/>
    },
    {
      name: "JavaScript",
      icon: <FaJs/>
    },
    {
      name: "React",
      icon: <FaReact/>
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss/>
    },
    {
      name: "Figma",
      icon: <FaFigma/>  
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs/>
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs/>
    },
    {
      name: "Flutter",
      icon: <SiFlutter/>
    }
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area"; 

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeIn' },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* Experience */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]"><ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) =>{
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 
                      px-10 rounded-xl flex flex-col justify-center items-center 
                      lg:items-start gap-1">
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                         text-center lg:text-left">
                          {item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul></ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-semibold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]"><ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) =>{
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 
                      px-10 rounded-xl flex flex-col justify-center items-center 
                      lg:items-start gap-1">
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                         text-center lg:text-left">
                          {item.institute}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ul></ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-semibold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                xl:gap-[30px]">
                  {skills.skillslist.map((skill, index) =>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-full bg-[#232329] 
                            p-6 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent
                              transition-all duration-200">
                                { skill.icon }
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-semibold">
                  {about.title}
                </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-12 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-center 
                      xl:justify-start gap-4">
                        <span className="text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl ">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
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

export default Resume;