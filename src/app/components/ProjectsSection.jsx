"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DailyAgenda",
    description: "A task management website for creating and organizing daily to-do lists.",
    image: "/images/projects/1.png",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/dionelbawag11/daily-agenda-app",
    previewUrl: "https://daily-agenda-app.vercel.app/",
  },
  {
    id: 2,
    title: "DevTinker",
    description: "A simple code editor for web development, built using HTML, CSS, and JavaScript.",
    image: "/images/projects/2.png",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/dionelbawag11/code-editor-app",
    previewUrl: "https://code-editor-app-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "TicTacToe",
    description: " A classic game of Tic Tac Toeimplemented using React.js, and JavaScript.",
    image: "/images/projects/3.png",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/dionelbawag11/tictactoe-app",
    previewUrl: "https://tictactoe-app-pi.vercel.app/",
  },
  {
    id: 4,
    title: "Soon",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "salon-app(thesis)",
    description: " A simple reservation system for managing services, employee schedules, and automated email notifications",
    image: "/images/projects/5.png",
    tag: ["All", "Web Development"],
    gitUrl: "https://github.com/dionelbawag11/salon-app",
    previewUrl: "/salon-app-phi.vercel.app",
  },
  {
    id: 6,
    title: "JavaScript Algorithms and Data Structures",
    description: " This certification showcases my proficiency in JavaScript and key data structures, empowering me to excel in web development and tackle advanced coding tasks",
    image: "/images/projects/js-code-camp.png",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.linkedin.com/posts/dionel-victor-bawag-ba43ab283_im-delighted-to-share-that-ive-achieved-activity-7112116172254298112-oIQD?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 7,
    title: "Udemy jQuery",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert1.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-8ce0487d-50d2-42d3-b668-1faaa36c426f/",
  },
  {
    id: 8,
    title: "Udemy Git Bash",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert2.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-90017438-bb85-4d4a-8248-e9a39bde7a4c/",
  },
  {
    id: 9,
    title: "Udemy jQuery",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert3.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-bbf48633-6e99-43de-96be-6bf6e64f15aa/",
  },
  {
    id: 10,
    title: "Udemy Javascript",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert4.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-de4a614a-bef6-4beb-9b34-c19344bbf955/",
  },
  {
    id: 11,
    title: "Udemy cPanel",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert5.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-eedd2d0e-e64a-4d9c-b1e7-862a8417eebe/",
  },
  {
    id: 12,
    title: "Udemy HTML",
    description: "My Udemy HTML certification encompasses all essential HTML topics, providing me with a strong foundation in web development.",
    image: "/images/projects/cert6.jpg",
    tag: ["All", "Certifications"],
    gitUrl: "/",
    previewUrl: "https://www.udemy.com/certificate/UC-efeb0e74-4f36-451d-9484-9ca69bb7218b/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Development"
          isSelected={tag === "Web Development"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certifications"
          isSelected={tag === "Certifications"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;