import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);



  return (
    <div className="max-w-[1200px] my-20 mx-auto px-6 md:my-20" id="portfolio">
      <h2 className="text-5xl font-bold text-gray-200 mb-12 text-center">
        <span className="text-purple-400">My</span> Projects
      </h2>

      {/* Flex container for projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between gap-x-8 gap-y-12">
        {projects.map((project, index) => (
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

    </div>
  );
};

export default Project;
