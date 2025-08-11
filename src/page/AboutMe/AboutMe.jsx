import React from 'react';
import { User, Sparkles } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 font-sans text-gray-900 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            About Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start">
              <Sparkles size={24} className="text-green-500 mr-2 animate-pulse" />
              A Passion for Building
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Hello! I'm Rashidul Kabir, a passionate Frontend and Full Stack Developer with over 3 years of experience. I thrive on creating intuitive, dynamic, and visually stunning web applications. My journey into development began with a curiosity for how things work, and it has evolved into a dedication to building products that are not just functional, but also provide a seamless user experience.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              I am proficient in modern technologies like **React**, **Node.js**, and **Tailwind CSS**. I am always eager to learn new tools and frameworks to stay at the forefront of web development. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee. I believe in the power of clean code, collaborative teams, and continuous learning.
            </p>
          </div>

          {/* Profile Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-green-500 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/600x600/E5E7EB/4B5563?text=Profile+Image"
                alt="Rashidul Kabir"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;