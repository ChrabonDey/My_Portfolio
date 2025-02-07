import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === id);
        setProject(foundProject);
      });
  }, [id]);

  if (!project) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 my-10">
      <h2 className="text-4xl font-bold text-gray-200 mb-8 text-center">
        {project.title}
      </h2>

      {/* Flexbox Layout for Image & Details */}
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 text-gray-300 text-left">
          <p className="text-2xl leading-relaxed mb-6">{project.description}</p>

          {/* Tags Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-200 mb-2">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tag?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-purple-700 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              View Site
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
            >
              <AiOutlineGithub className="text-2xl mr-1" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
