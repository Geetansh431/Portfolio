"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: 'MERN',
    title: "StudyNotion",
    description: "StudyNotion is an ed-tech platform built with the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS) that allows users to create, consume, and rate educational content. It features a unique compiler for running code, a platform for instructors to connect with global learners, QR code generation for orders, and Razorpay payment integration.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Express.js" }],
    image: '/assets/assets/work/thumb1.png',
    live: '',
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
    stack: [{ name: "Java" }, { name: "Swing" },],
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
    github: "This project is a web application that replicates the core functionalities of Airbnb, allowing users to book accommodations, manage listings, and handle bookings seamlessly. Built with a modern tech stack, this application aims to provide a user-friendly experience similar to Airbnb."
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // Get the current slide index
    const currentIndex = swiper.activeIndex;
    // Update the project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[15px] h-[50%]">
              {/* Outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent bg-clip-text text-white">{project.num}</div>
              {/* Project Title */}
              <h2 className="text-4xl font-bold text-white">{project.title}</h2>
              {/* Project Description */}
              <p className="text-white/70 text-lg">{project.description}</p>
              {/* Tech Stack */}
              <ul className="flex gap-4 text-lg text-accent">
                {project.stack.map((item, index) => (
                  <li key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4 mt-2">
                {/* Live Project Button */}
                <Link href={project.live || project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group hover:bg-white/20 transition-all">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group hover:bg-white/20 transition-all">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-full xl:w-[50%] xl:h-[520px] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/30 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} layout="fill" objectFit="cover" alt={project.title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work
