import React from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

// Data array for social links to keep the code clean and scalable
const socialLinks = [
  {
    id: 1,
    href: "https://github.com/hkabir_12",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/your-link",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    id: 3,
    href: "https://twitter.com/your",
    icon: <Twitter size={24} />,
    label: "Twitter",
  },
];

const Hero = () => {
  return (
     <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 font-sans text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-green-500 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.ibb.co.com/7xjtSZxj/kabir.jpg"
                alt="Rashidul Kabir"
                className="object-cover w-full h-full"
              />
            </div>
            {/* You can add a subtle background shape here for more flair */}
            <div className="hidden md:block absolute bottom-0 right-0 w-48 h-48 bg-green-500 bg-opacity-10 rounded-full -z-10 transform translate-x-1/4 translate-y-1/4"></div>
          </div>
          
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Hello, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Rashidul Kabir
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-400">
              Frontend & Full Stack Developer
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
              I build responsive, modern web applications using React, Tailwind CSS,
              and Node.js. I am passionate about crafting beautiful user experiences
              and clean code.
            </p>

            {/* Action Buttons and Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>

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
