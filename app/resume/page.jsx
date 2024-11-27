"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,

} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

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
    },
    {
      name: "FlappyBird",
      description:
        "Developed a Flappy Bird clone using Java and Swing, featuring smooth gameplay, score tracking, and randomized obstacle generation. Implemented responsive controls, game-over logic, and restart functionality.",
      technologies: ["Java", "Swing"],
    },
    {
      name: "Stock Trading Platform",
      description:
        "Created a platform allowing users to buy, sell, and manage their stock portfolios. Integrated Google OAuth authentication with JWT, Razorpay for payments, and unique QR codes for transactions.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
    },
    {
      name: "Home Rental Web App",
      description:
        "Developed a Home Rental application enabling property browsing and listing. Integrated Redux for state management and Express.js for backend API requests. Features include location filters, JWT-based authentication, and RESTful APIs.",
      technologies: ["React", "Redux", "Express.js", "Node.js", "MongoDB"],
    },
    {
      name: "Airbnb Clone",
      description:
        "Developed a web application replicating core Airbnb functionalities. Features include user authentication, property listings, booking management, and responsive design. Integrated Multer for image uploads and JWT for secure authentication.",
      technologies: ["React", "Redux", "Express.js", "MongoDB", "MUI"],
    },
    {
      name: "Gemini Clone",
      description:
        "This project is a React-based user interface for interacting with the Google Gemini API, utilizing the Generative AI SDK. The application allows users to input prompts and receive generative responses from the Gemini model.",
      technologies: ["React", "Redux", "Tailwind.css"],
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
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTypescript />, name: "TypeScript" },  // Added TypeScript
    { icon: <SiMongodb />, name: "MongoDB" },        // Added MongoDB
    { icon: <SiMysql />, name: "MySQL" },            // Added MySQL as a DBMS example
  ],
};

const Resume = () => {
  const totalProjects = projects.items.length; // Calculate total projects

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="projects" className="flex flex-col xl:flex-row gap-[40px]">
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="w-full">
            {/* Projects Section */}
            <TabsContent value="projects">
              <h3 className="text-4xl font-bold mb-4">
                {projects.title} ({totalProjects})
              </h3>
              <p className="mb-4 text-gray-600">{projects.description}</p>
              <ScrollArea className="h-[300px] overflow-y-scroll">
                <ul className="space-y-4">
                  {projects.items.map((project, index) => (
                    <li key={index} className="bg-gray-800 p-4 rounded-md">
                      <h4 className="text-lg font-semibold">{project.name}</h4>
                      <p className="text-gray-500 mb-2">{project.description}</p>
                      <p className="text-gray-400">
                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Other Sections */}
            {/* Education Section */}
            <TabsContent value="education">
              <h3 className="text-4xl font-bold mb-4">{education.title}</h3>
              <ul className="space-y-4">
                {education.items.map((item, index) => (
                  <li key={index} className="bg-gray-800 p-4 rounded-md">
                    <span className="block text-gray-400">{item.duration}</span>
                    <h4 className="text-lg font-semibold">{item.institution}</h4>
                    <p className="text-gray-500">{item.degree}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills">
              <h3 className="text-4xl font-bold mb-4">{skills.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About Me Section */}
            <TabsContent value="about">
              <h3 className="text-4xl font-bold mb-4">{about.title}</h3>
              <p className="mb-4">{about.description}</p>
              <ul className="space-y-2">
                {about.info.map((info, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium">{info.fieldName}:</span>
                    <span>{info.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;