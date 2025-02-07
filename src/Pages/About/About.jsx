import React from "react";
import profilepic from "../../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "../../Shared/ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion"; // Ensure you're importing motion for animations

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "/ChrabonDeySarker_ResumeOf_Front-End-Devloper.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/ChrabonDeySarker_ResumeOf_Front-End-Devloper.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  return (
    <div className="my-20">
      <div className="grid md:grid-cols-2 items-center justify-center text-center gap-16 px-4">
        <motion.img
          src={profilepic}
          alt="Profile Picture"
          className=" object-cover rounded-full shadow-xl border-4 border-white"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0px 0px 20px rgba(178, 19, 202, 0.6)",
          }}
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white md:text-6xl text-5xl font-semibold tracking-tight mb-4"
          >
            <span className="text-purple-400">Charbon Dey Sarker</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                "Front-End Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-200 text-lg md:text-2xl mb-6"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 md:text-2xl text-lg my-10 text-left"
          >
            I am Charbon Dey Sarker, currently pursuing a BSc in Computer Science and Engineering at Daffodil International University. With a deep passion for coding and problem-solving, I am dedicated to becoming a skilled Web Developer and developing efficient software systems. I am proficient in various programming languages and web development, particularly in the MERN stack. Known for my strong time management skills, punctuality, and consistency, I am committed to continuous learning and always aim to deliver high-quality work
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 md:text-2xl text-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <p><strong>Name:</strong> Charbon Dey Sarker</p>
            <p><strong>Phone:</strong> +880 1794180006</p>
            <p><strong>Email:</strong> chrabondey@gmail.com</p>
            <p><strong>Address:</strong> Ashulia, Dhaka, Bangladesh</p>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center justify-between  gap-6 my-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#8b5cf6",
              }}
              className="cursor-pointer font-bold text-white px-6 py-3 border border-purple-500 rounded-xl"
              onClick={onButtonClick}
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 text-4xl sm:text-6xl text-purple-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/ChrabonDey"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/chrabon-dey/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/chrabondey"
              >
                <AiOutlineFacebook />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
