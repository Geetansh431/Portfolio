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
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import Social from "@/components/Social";

// About Data
const about = {
  title: "About Me",
  description:
    "I'm Geetansh, a developer with a passion for coding and technology. I've always been fascinated by how things work and enjoy diving deep into solving complex problems. My journey into development started with a simple curiosity, and it has now grown into a full-fledged career path. I love experimenting with new technologies, learning new programming languages, and building innovative projects.",
  info: [
    { fieldName: "Name", fieldValue: "Geetansh Goyal" },
    { fieldName: "Phone", fieldValue: "(+91) 8847222304" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "Geetanshg2@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

// Projects Data
const projects = {
  title: "My Projects",
  description:
    "Here are some of the exciting projects I have worked on that showcase my development skills and creativity.",
  items: [
    {
      name: "StudyNotion",
      description:
        "Developed a fully functional ed-tech platform enabling users to add courses for students to purchase and consume. Used JWT for Google OAuth for authentication and authorization, integrated Razorpay for payments, and implemented unique QR codes for each order.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind.css"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
    {
      name: "FlappyBird",
      description:
        "Developed a Flappy Bird clone using Java and Swing, featuring smooth gameplay, score tracking, and randomized obstacle generation. Implemented responsive controls, game-over logic, and restart functionality.",
      technologies: ["Java", "Swing"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
    {
      name: "Stock Trading Platform",
      description:
        "Created a platform allowing users to buy, sell, and manage their stock portfolios. Integrated Google OAuth authentication with JWT, Razorpay for payments, and unique QR codes for transactions.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
    {
      name: "Home Rental Web App",
      description:
        "Developed a Home Rental application enabling property browsing and listing. Integrated Redux for state management and Express.js for backend API requests. Features include location filters, JWT-based authentication, and RESTful APIs.",
      technologies: ["React", "Redux", "Express.js", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
    {
      name: "Airbnb Clone",
      description:
        "Developed a web application replicating core Airbnb functionalities. Features include user authentication, property listings, booking management, and responsive design. Integrated Multer for image uploads and JWT for secure authentication.",
      technologies: ["React", "Redux", "Express.js", "MongoDB", "MUI"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
    {
      name: "Gemini Clone",
      description:
        "This project is a React-based user interface for interacting with the Google Gemini API, utilizing the Generative AI SDK. The application allows users to input prompts and receive generative responses from the Gemini model.",
      technologies: ["React", "Redux", "Tailwind.css"],
      github: "#",
      demo: "#",
      image: "/placeholder.jpg",
    },
  ],
};

// Education Data
const education = {
  title: "My Education",
  items: [
    { institution: "St. Xavier's School", degree: "Matriculation(X)", duration: "2020" },
    { institution: "Sudesh Vatika Convent School", degree: "Intermediate(XII)", duration: "2022" },
    { institution: "Chitkara University", degree: "B.Tech Computer Science", duration: "2022 - 2026" },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  categories: [
    {
      name: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML 5", level: 90 },
        { icon: <FaCss3 />, name: "CSS", level: 85 },
        { icon: <FaJs />, name: "JavaScript", level: 88 },
        { icon: <FaReact />, name: "React.js", level: 85 },
        { icon: <SiNextdotjs />, name: "Next.js", level: 80 },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", level: 82 },
        { icon: <SiMongodb />, name: "MongoDB", level: 78 },
        { icon: <SiMysql />, name: "MySQL", level: 75 },
      ]
    },
    {
      name: "Other",
      skills: [
        { icon: <FaJava />, name: "Java", level: 75 },
        { icon: <SiTypescript />, name: "TypeScript", level: 72 },
        { icon: <FaFigma />, name: "Figma", level: 85 },
      ]
    }
  ]
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [activeSkillCategory, setActiveSkillCategory] = useState("Frontend");

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
      className="min-h-[80vh] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12 flex flex-wrap justify-center gap-1 md:gap-2"
        >
          {["projects", "skills", "education", "about"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm md:text-base uppercase font-medium transition-all duration-300 ${
                activeSection === section 
                  ? "text-accent border-b-2 border-accent" 
                  : "text-white hover:text-accent"
              }`}
            >
              {section}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="mt-8">
          {/* Projects Section */}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{projects.title}</h2>
                <p className="text-white/80 max-w-2xl mx-auto">{projects.description}</p>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.items.map((project, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={staggerItem}
                    className="bg-white/5 backdrop-blur-sm overflow-hidden rounded-xl group border border-white/10 hover:border-accent/50 transition-colors"
                  >
                    <div className="h-48 bg-white/5 relative">
                      <div className="absolute inset-0 bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <a href={project.github} className="bg-white/5 p-3 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300">
                            <FaGithub className="text-xl" />
                          </a>
                          <a href={project.demo} className="bg-white/5 p-3 rounded-full text-accent hover:bg-accent hover:text-white transition-all duration-300">
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{project.name}</h3>
                      <p className="text-white/80 text-sm mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/5 text-xs text-accent rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/5 text-xs text-accent rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{skills.title}</h2>
                <div className="flex justify-center gap-4 mt-6 mb-8">
                  {skills.categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveSkillCategory(category.name)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                        activeSkillCategory === category.name
                          ? "text-accent border-b-2 border-accent"
                          : "text-white hover:text-accent"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                {skills.categories.map((category) => (
                  activeSkillCategory === category.name && (
                    <motion.div 
                      key={category.name}
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={staggerItem}
                          className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center mb-2">
                            <div className="text-2xl mr-3 text-accent">
                              {skill.icon}
                            </div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                              className="h-full bg-accent"
                            />
                          </div>
                          <div className="mt-1 text-right text-sm text-accent">
                            {skill.level}%
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )
                ))}
              </div>
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
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{education.title}</h2>
              </div>

              <div className="max-w-3xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 z-0"></div>

                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-16 relative z-10"
                >
                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={staggerItem}
                      className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                    >
                      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                        <div className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent max-w-sm ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                          <span className="text-accent font-bold block mb-2">{item.duration}</span>
                          <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
                          <p className="text-white/80">{item.degree}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-accent z-10"></div>
                      </div>
                      <div className="md:w-1/2"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
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
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{about.title}</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <motion.div 
                      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <p className="text-white/80 leading-relaxed">{about.description}</p>
                      <div className="mt-6">
                        <Social containerStyles="flex gap-4" iconStyles="text-2xl text-accent hover:text-accent/80 transition-colors" />
                      </div>
                    </motion.div>
                  </div>
                  <div className="md:col-span-1">
                    <motion.div 
                      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2 mb-4">Personal Info</h3>
                      <div className="space-y-3">
                        {about.info.map((info, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -0 }}
                            transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                            className="flex flex-col"
                          >
                            <span className="text-white/60 text-sm">{info.fieldName}</span>
                            <span className="text-accent font-medium">{info.fieldValue}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
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

export default Resume;