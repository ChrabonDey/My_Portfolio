import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="px-6 my-20 max-w-[1000px] mx-auto md:my-28" id="contact">

 

         <h1 className="text-5xl font-extrabold">Get In <span className="text-purple-500">Touch</span></h1>
      <div className="grid md:grid-cols-2 place-items-center">
        {/* Contact Info Section */}
        <div className="text-gray-300 my-3">
          <h3 className="text-4xl font-semibold mb-5">Contact <span className="text-purple-500">Me</span></h3>
          <p className="text-gray-400 text-lg">Feel free to reach out to me!</p>

          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3">
              <AiFillPhone size={22} className="text-purple-500" /> 
              <span className="text-gray-300">+880 1794180006</span>
            </p>
            <p className="flex items-center gap-3">
              <AiFillMail size={22} className="text-purple-500" />
              <span className="text-gray-300">chrabondey@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt size={22} className="text-purple-500" />
              <span className="text-gray-300">Ashulia, Dhaka, Bangladesh - 1341</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a href="https://www.linkedin.com/in/chrabon-dey/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={32} className="text-blue-600 hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://github.com/ChrabonDey" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={32} className="text-gray-300 hover:text-gray-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          action="https://getform.io/f/placeYourEndpointHere"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4  text-gray-300"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4  text-gray-300"
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4  text-gray-300"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
