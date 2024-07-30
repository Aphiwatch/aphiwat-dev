"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel,
  SelectSeparator, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope} from "react-icons/fa"
import { icons } from "lucide-react";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+66) 99 476 2751"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Aphiwatch09@gmail.com"
  }
];

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} 
    animate={{
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeIn' },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c]
            rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">
              Fill out the form and I'll get back to you soon as possible. 
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phonenumber" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a services</SelectLabel>
                    <SelectItem value="mst">Mobile Development</SelectItem>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="bst">Backend Development</SelectItem>
                    <SelectItem value="cst">UX/UI Design</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              {/* button */}
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#27272c]
                    text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact