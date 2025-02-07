import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiFirebase,
  DiPython,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithub,
  DiSass,
} from "react-icons/di";
import { motion } from "framer-motion";
import Reveal from "../../Shared/Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejs className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Firebase", icon: <DiFirebase className="text-yellow-600" /> },
      { name: "GitHub", icon: <DiGithub className="text-gray-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-[750px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:my-20"
      id="skills"
    >
      <Reveal>
        <h2 className="text-5xl font-extrabold text-center mb-6">My <span className="text-purple-400 ">Tech</span> Stack</h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          I have experience working on various frontend and full-stack projects. Check out my{" "}
          <a href="#" className="underline text-purple-500 hover:text-purple-400 transition">
            portfolio
          </a>
          .
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border border-purple-600 p-10 rounded-xl bg-purple-900/20 shadow-lg w-full md:w-1/2 
                         transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-center text-purple-300 mb-4">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-3 px-12 py-4 justify-center bg-purple-800/30 rounded-lg hover:bg-purple-700/50 transition"
                  >
                    <span className="text-3xl">{tech.icon}</span>
                    <span className="text-lg font-semibold text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </motion.div>
  );
};

export default Skills;
