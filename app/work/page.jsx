"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    num: "01",
    category: 'MERN',
    title: "StudyNotion",
    description: "StudyNotion is an ed-tech platform built with the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS) that allows users to create, consume, and rate educational content. It features a unique compiler for running code, a platform for instructors to connect with global learners, QR code generation for orders, and Razorpay payment integration.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Express.js" }],
    image: '/assets/assets/work/thumb1.png',
    live: 'https://study-notion-theta-dusky.vercel.app/',
    github: "https://github.com/Geetansh431/StudyNotion"
  },
  {
    num: "02",
    category: 'MERN',
    title: "Zerodha",
    description: "A trading platform built with the MERN stack that mimics key features of Zerodha, including stock market tracking, user authentication, and real-time data integration.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Express.js" }],
    image: '/assets/assets/work/thumb2.png',
    live: '',
    github: "https://github.com/Geetansh431/Zerodha"
  },
  {
    num: "03",
    category: 'MERN',
    title: "Home Rental Web Application",
    description: "A platform for property listings with search, filtering, and management capabilities, built with React and Redux. This web app allows users to view, book, and manage properties for rent.",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: '/assets/assets/work/thumb3.png',
    live: '',
    github: "https://github.com/Geetansh431/Home-Rental-Web"
  },
  {
    num: "04",
    category: 'Java',
    title: "Flappy Bird",
    description: "This is a simple clone of the popular Flappy Bird game, developed using Java and Swing for the graphical user interface. The objective of the game is to control a bird, avoiding obstacles by flying between them.",
    stack: [{ name: "Java" }, { name: "Swing" }],
    image: '/assets/assets/work/thumb4.png',
    live: '',
    github: "https://github.com/Geetansh431/FlappyBird"
  },
  {
    num: "05",
    category: 'MERN',
    title: "Airbnb",
    description: "This project is a web application that replicates the core functionalities of Airbnb, allowing users to book accommodations, manage listings, and handle bookings seamlessly. Built with a modern tech stack, this application aims to provide a user-friendly experience similar to Airbnb.",
    stack: [{ name: "React" }, { name: "Redux" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: '/assets/assets/work/thumb5.png',
    live: '',
    github: "https://github.com/Geetansh431/Airbnb"
  },
]

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.4, ease: "easeIn" } }}
      className="py-16 bg-gradient-to-b from-transparent to-black/20"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h4 className="text-accent mb-2 uppercase tracking-wider font-medium">Portfolio</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`h-1 ${index === activeProject ? 'w-10 bg-accent' : 'w-5 bg-white/20'} transition-all duration-300 rounded-full`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Main Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Project Details */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-6xl font-extrabold text-accent/30">{projects[activeProject].num}</span>
                <div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs uppercase tracking-wider">{projects[activeProject].category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">{projects[activeProject].title}</h3>
                </div>
              </div>
              
              <p className="text-white/70 mb-6">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white text-sm mb-3 font-medium">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].stack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Live Project Button - Updated with target="_blank" and rel="noopener noreferrer" */}
                <a 
                  href={projects[activeProject].live || projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-black font-medium transition-transform hover:translate-y-[-2px]"
                >
                  <span>Live Demo</span>
                  <BsArrowUpRight />
                </a>
                
                {/* GitHub Button - Updated with target="_blank" and rel="noopener noreferrer" */}
                <a 
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-medium transition-all hover:bg-white/20"
                >
                  <BsGithub />
                  <span>Source Code</span>
                </a>
              </div>
              
              {/* Mobile Project Navigation */}
              <div className="flex justify-between items-center mt-8 lg:hidden">
                <button 
                  onClick={() => setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1)}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="text-white/50">
                  {activeProject + 1} / {projects.length}
                </div>
                <button 
                  onClick={() => setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1)}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Project Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="w-full aspect-[16/9] relative">
                <Image 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>
              
              <div className="absolute bottom-0 right-0 p-4 hidden lg:flex gap-2">
                <button 
                  onClick={() => setActiveProject(prev => prev === 0 ? projects.length - 1 : prev - 1)}
                  className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={() => setActiveProject(prev => prev === projects.length - 1 ? 0 : prev + 1)}
                  className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Thumbnails */}
        <div className="mt-12 hidden md:grid grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 ${
                activeProject === index 
                  ? 'ring-2 ring-accent scale-105 shadow-lg shadow-accent/20' 
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="aspect-video relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform"
                />
                <div className={`absolute inset-0 ${activeProject === index ? 'bg-accent/10' : 'bg-black/40'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Work;