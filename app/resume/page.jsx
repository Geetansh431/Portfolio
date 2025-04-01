"use client";

import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaExternalLinkAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import * as Dialog from '@radix-ui/react-dialog';
import { IoClose } from "react-icons/io5";

// About Data
const about = {
  title: "About Me",
  description:
    "I'm Geetansh, a passionate developer with a keen interest in creating innovative solutions through technology. My journey in development began with a simple curiosity about how things work on the internet, which has evolved into a deep understanding of full-stack development. I specialize in building modern web applications using cutting-edge technologies and best practices. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.",
  info: [
    { fieldName: "Name", fieldValue: "Geetansh Goyal" },
    { fieldName: "Phone", fieldValue: "(+91) 8847222304" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "Geetanshg2@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
    { fieldName: "Location", fieldValue: "Punjab, India" },
  ],
};

// Projects Data
const projects = {
  title: "Featured Projects",
  description:
    "A collection of my best work showcasing my expertise in full-stack development, UI/UX design, and problem-solving abilities.",
  items: [
    {
      name: "StudyNotion",
      description:
        "A comprehensive ed-tech platform that revolutionizes online learning. Features include course creation, student enrollment, payment integration, and interactive learning materials.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/Geetansh431/StudyNotion",
      demo: "https://study-notion-theta-dusky.vercel.app/",
      image: "/assets/assets/work/thumb1.png",
      type: "E-Learning Platform"
    },
  ],
};

// Education Data
const education = {
  title: "Educational Journey",
  description: "My academic path and qualifications that have shaped my professional development",
  items: [
    {
      institution: "St. Xavier's School",
      degree: "Matriculation(X)",
      duration: "2020",
      description: "Completed with distinction in Science and Mathematics"
    },
    {
      institution: "Sudesh Vatika Convent School",
      degree: "Intermediate(XII)",
      duration: "2022",
      description: "Specialized in Computer Science with excellent academic performance"
    },
    {
      institution: "Chitkara University",
      degree: "B.Tech Computer Science",
      duration: "2022 - 2026",
      description: "Currently pursuing with focus on software development and computer science fundamentals"
    },
  ],
};

// Skills Data - Simplified without categories
const skills = {
  title: "Technical Expertise",
  description: "My comprehensive skill set covering various aspects of modern web development",
  items: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaFigma />, name: "Figma" },
  ]
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {["projects", "skills", "education", "about"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base md:text-base uppercase font-medium transition-all duration-300 ${
                activeSection === section
                  ? "bg-accent/20 text-accent border-b-2 border-accent shadow-md"
                  : "text-white hover:text-accent hover:bg-white/5"
              }`}
            >
              {section}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="mt-8 sm:mt-10">
          {/* Projects Section */}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">{projects.title}</h2>
                <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto px-4">{projects.description}</p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
              >
                {projects.items.map((project, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={staggerItem}
                    className="bg-[#111] rounded-xl overflow-hidden shadow-xl group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer"
                    style={{
                      borderRadius: "14px",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <div className="relative">
                        <div className="w-full h-56 md:h-64 overflow-hidden">
                          <img
                            src={project.image || "/assets/assets/work/placeholder.jpg"}
                            alt={project.name}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#000000cc] via-[#00000066] to-transparent flex items-end justify-center pb-5">
                          <span className="text-white font-medium px-4 py-2 rounded-full bg-accent/80 text-sm">
                            View Project
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase px-3 py-1 bg-cyan-400/10 rounded-full">
                            {project.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex space-x-3">
                            <a
                              href={project.github}
                              className="p-2 rounded-full text-white/70 hover:text-accent transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub className="text-lg" />
                            </a>
                            <a
                              href={project.demo}
                              className="p-2 rounded-full text-white/70 hover:text-accent transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt className="text-lg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Skills Section - Simplified */}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">{skills.title}</h2>
                <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto px-4">{skills.description}</p>
              </div>

              {/* Skill Items as simple cards in a grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
              >
                {skills.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={staggerItem}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 p-4 sm:p-6 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 flex flex-col items-center text-center"
                  >
                    <span className="text-3xl sm:text-4xl text-accent mb-3">{skill.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Education Section */}
          {activeSection === "education" && (
            <motion.div
              key="education"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">{education.title}</h2>
                <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto px-4">{education.description}</p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-8 sm:space-y-10 relative before:absolute before:left-4 sm:before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-accent/20 before:content-['']"
              >
                {education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className="flex h-10 w-10 bg-accent rounded-full items-center justify-center absolute z-10 left-0 sm:left-1/2 sm:-ml-5">
                      <span className="text-white text-lg font-bold">{index + 1}</span>
                    </div>
                    
                    <div className={`sm:w-1/2 ${
                      index % 2 === 0 ? 'pr-12 sm:pr-16 pl-16 sm:pl-0' : 'pl-16 sm:pl-16 sm:pr-0'
                    }`}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 transition-colors p-6 shadow-xl hover:shadow-accent/5">
                        <div className="mb-2 text-accent text-sm font-medium">{item.duration}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.institution}</h3>
                        <p className="text-white/60 text-sm italic mb-3">{item.degree}</p>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">{about.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 transition-colors p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaUserCircle className="mr-2 text-accent" /> Personal Profile
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">{about.description}</p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-accent font-medium mb-2">Connect with me</p>
                    <div className="flex gap-4">
                      <Social />
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 transition-colors p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <FaUser className="mr-2 text-accent" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {about.info.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-white/80 text-sm sm:text-base border-b border-white/10 pb-3">
                        <span className="font-medium text-white">{item.fieldName}</span>
                        <span className="text-accent">{item.fieldValue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;