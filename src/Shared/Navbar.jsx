import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const onButtonClick = () => {
    const pdfUrl = "/Chrabon.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Chrabon.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md z-50 shadow-lg py-4">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-12 h-20">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-bold text-purple-400">
          Charbon Dey Sarker
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-lg text-gray-200 font-semibold">
          <li><NavLink to="/" className="hover:text-purple-400 transition">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-purple-400 transition">About</NavLink></li>
          <li><NavLink to="/project" className="hover:text-purple-400 transition">Projects</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-purple-400 transition">Contact</NavLink></li>
        </ul>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(178, 19, 202, 0.6)" }}
          className="hidden md:block text-gray-200 px-6 py-2 border border-purple-400 rounded-xl transition-all"
          onClick={onButtonClick}
        >
          Download Resume
        </motion.button>

        {/* Mobile Menu Toggle Button */}
        <div onClick={toggleNav} className="md:hidden text-gray-200 cursor-pointer" aria-label="Toggle Navigation">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed left-0 top-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center z-40"
            >
              <ul className="text-3xl space-y-6 text-gray-200 text-center font-semibold">
                <li onClick={closeNav}><NavLink to="/" className="hover:text-purple-400 transition">Home</NavLink></li>
                <li onClick={closeNav}><NavLink to="/about" className="hover:text-purple-400 transition">About</NavLink></li>
                <li onClick={closeNav}><NavLink to="/project" className="hover:text-purple-400 transition">Projects</NavLink></li>
                <li onClick={closeNav}><NavLink to="/contact" className="hover:text-purple-400 transition">Contact</NavLink></li>
              </ul>

              {/* Mobile CV Download Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(178, 19, 202, 0.6)" }}
                className="mt-6 text-gray-200 px-6 py-3 border border-purple-400 rounded-xl"
                onClick={onButtonClick}
              >
                Download Resume
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
