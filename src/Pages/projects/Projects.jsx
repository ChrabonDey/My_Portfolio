import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Projects = ({ limit }) => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Display only 3 projects on the home page, all on the project page
  const displayedProjects =  projects.slice(0, 3)

  return (
    <div className="max-w-[1200px]  my-20 mx-auto px-6 md:my-28" id="portfolio">
      <h2 className="text-5xl font-bold text-gray-200 mb-12 text-center">
        <span className="text-purple-400">My</span> Projects
      </h2>

      {/* Flex container for projects */}
      <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-12">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition duration-300 cursor-pointer w-[30%] min-w-[300px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            {/* Image with Animation */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              initial={{ rotate: 0 }}
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            />

            {/* Project Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description.length > 120
                  ? `${project.description.slice(0, 120)}...`
                  : project.description}
              </p>

              {/* Links */}
              <div className="flex space-x-4 justify-center">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
                >
                  <AiOutlineGithub className="text-2xl mr-1" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/project")}
            className="px-6 py-3 bg-purple-600 text-gray-200 text-lg rounded-lg hover:bg-purple-700 transition duration-300"
          >
            See More Projects
          </button>
        </div>
      
    </div>
  );
};

export default Projects;
