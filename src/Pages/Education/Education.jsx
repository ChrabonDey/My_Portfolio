import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";


const educationData = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "Present",
    icon: <FaUniversity className="text-purple-400 text-5xl" />,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Madhupur Shahid Smrity Higher Secondary School & College",
    year: "Completed",
    icon: <FaSchool className="text-blue-400 text-5xl" />,
  },
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-2xl my-20 mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:my-20"
      id="education"
    >
    
        <h2 className="text-5xl font-extrabold text-center  mb-6">
         <span className="text-purple-400">My</span> Education
        </h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          Here's a glimpse of my academic journey and the institutions that shaped my learning.
        </p>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(128, 0, 128, 0.2)", 
                boxShadow: "0px 0px 15px rgba(128, 0, 128, 0.6)", 
              }}
              className="flex items-center gap-6 p-6 bg-gray-900/40 border border-purple-500 shadow-lg rounded-xl 
                         transform transition duration-300 backdrop-blur-lg cursor-pointer"
            >
              {edu.icon}
              <div>
                <h3 className="text-2xl font-bold text-purple-300">{edu.degree}</h3>
                <p className="text-lg text-gray-300">{edu.institution}</p>
                <span className="text-sm text-gray-400">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      
    </motion.div>
  );
};

export default Education;
