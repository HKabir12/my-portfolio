import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";
// Data array for social links to keep the code clean and scalable
const socialLinks = [
  {
    id: 1,
    href: "https://github.com/HKabir12",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/humaonkabir12",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    id: 3,
    href: "https://x.com/humaonkabir_12",
    icon: <Twitter size={24} />,
    label: "Twitter",
  },
];

const Hero = () => {
  const text = "I'm Humaon Kabir";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < text.length) {
          setIndex((i) => i + 1);
          return text.slice(0, index + 2);
        } else {
          // Reset after delay
          setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
          }, 1500);
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <section className="  py-16 sm:py-24 font-sans text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
            {/* Outer Glow Gradient Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-purple-500 animate-spin-slow blur-3xl opacity-30 -z-10"></div>

            {/* Image Container */}
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]">
              {/* Image */}
              <img
                src="https://i.ibb.co.com/7xjtSZxj/kabir.jpg"
                alt="Humaon Kabir"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Shape */}
            <div className="hidden md:block absolute bottom-0 right-0 w-48 h-48  rounded-full blur-xl -z-20 transform translate-x-1/4 translate-y-1/4"></div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              <motion.span
                key={displayedText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
              >
                {displayedText}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block ml-1 w-1 bg-green-500"
              >
                &nbsp;
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-400"
            >
              Frontend & Full Stack Developer
            </motion.p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
              I build responsive, modern web applications using React, Tailwind
              CSS, and Node.js. I am passionate about crafting beautiful user
              experiences and clean code.
            </p>

            {/* Action Buttons and Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-4">
              <motion.a
                href="/resume.pdf" // Replace with your actual resume link
                download
                className="inline-flex items-center space-x-2 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                whileHover={{
                  scale: 1.05,
                  x: [0, 5, -5, 0], // Side-to-side movement
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
