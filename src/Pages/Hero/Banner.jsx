import React from "react";
import profilepic from "../../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "../../Shared/ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiFirebase,
} from "react-icons/di";
import { motion } from "framer-motion";

const Banner = () => {
  const onButtonClick = () => {
    const pdfUrl = "/Chrabon.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/Chrabon.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  
  return (
    <div className="mt-24   mx-auto relative">
      <div className="grid md:grid-cols-2 items-center justify-center text-center gap-40">
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
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-5xl space-y-3 text-5xl tracking-tight mb-10"
          >
            HEY, I AM <br />
            <div className="text-purple-500 mt-4 ">Charbon Dey Sarker</div>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 text-center md:text-center mx-auto"
          >
            A passionate Front-End Developer, Web Developer, and MERN Stack
            Developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center justify-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                         border-purple-400 rounded-xl"
                 onClick={onButtonClick}        
            >
              Download Resume
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/ChrabonDey">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/chrabon/">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/chrabondey">
                <AiOutlineFacebook />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] object-fill rounded-full shadow-lg"
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejs className="text-green-500 mx-2" />
        <DiMongodb className="text-green-600 mx-2" />
        <DiFirebase className="text-yellow-600 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Banner;
