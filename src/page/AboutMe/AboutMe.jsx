import React from "react";
import {
  Sparkles,
  Briefcase,
  BookOpen,
  CodeXml,
  Award,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";
const AboutMe = () => {
  const stats = [
    {
      id: 1,
      icon: (
        <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
      ),
      value: "2+",
      label: "Years Experience",
    },
    {
      id: 2,
      icon: (
        <CodeXml className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
      ),
      value: "20+",
      label: "Projects Completed",
    },
    {
      id: 3,
      icon: (
        <Award className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
      ),
      value: "1",
      label: "Certifications",
    },
    {
      id: 4,
      icon: (
        <GraduationCap className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
      ),
      value: "2022",
      label: "Started Journey",
    },
  ];
  const education = [
    {
      id: 1,
      title: "B.Sc., Institute of Information Technology (IIT)",
      subtitle: "Jahangirnagar University, Dhaka",
      duration: "2022–Present (3rd Year)",
    },
    {
      id: 2,
      title: "HSC in Science",
      subtitle: "Shahid Bulbul Govt. College, Pabna",
      duration: "",
    },
  ];

  const workExperience = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Personal Project",
      duration: "January 2025 – Present",
      details:
        "Built a MERN stack application with user authentication, CRUD features, and a responsive UI.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Freelance (Volunteer)",
      duration: "March 2025 – May 2025 (Remote)",
      details:
        "Developed a responsive website for a local NGO using React and Tailwind CSS to help raise donations online.",
    },
    {
      id: 3,
      role: "Volunteer Contributor",
      company: "Open Source Contribution",
      duration: "February 2025 – Present (Remote)",
      details:
        "Contributed UI enhancements and bug fixes to a GitHub-based React tool, collaborating via issues and PRs.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A brief introduction to my background, education, and work
            experience.
          </p>
        </div>
        <div className="overflow-hidden py-8">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 15, // Speed of scroll
              repeat: Infinity,
            }}
          >
            {[...stats, ...stats].map(({ id, icon, value, label }, index) => (
              <motion.div
                key={id + "-" + index}
                className="glass-card text-center group p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-md cursor-default min-w-[200px]"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {icon}
                <h3 className="text-2xl font-bold mb-1 text-gradient">
                  {value}
                </h3>
                <p className="text-sm text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - About Text */}
          <div className="flex flex-col  space-y-6 max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center md:justify-start">
              <Sparkles
                size={22}
                className="text-green-500 mr-2 animate-pulse"
              />
              A Passion for Building Web Applications
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Hello! I'm Humaon Kabir, a passionate Frontend and Full Stack
              Developer with over 3 years of experience. I thrive on creating
              intuitive, dynamic, and visually stunning web applications. My
              journey into development began with a curiosity for how things
              work, and it has evolved into a dedication to building products
              that are not just functional, but also provide a seamless user
              experience.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am proficient in modern technologies like <strong>React</strong>
              , <strong>Node.js</strong>, and <strong>Tailwind CSS</strong>. I
              am always eager to learn new tools and frameworks to stay at the
              forefront of web development. When I'm not coding, you can find me
              exploring new design trends, contributing to open-source projects,
              or enjoying a good cup of coffee. I believe in the power of clean
              code, collaborative teams, and continuous learning.
            </p>
          </div>

          {/* Right Column - Education & Work */}
          <div className="space-y-16 max-w-xl mx-auto md:mx-0">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold flex items-center mb-8">
                <BookOpen size={24} className="text-green-500 mr-3" />
                Education
              </h3>
              <div className="space-y-10 relative">
                {education.map((edu, index) => (
                  <div key={edu.id} className="pl-12 relative">
                    <div className="absolute -left-5 top-2 flex items-center justify-center w-8 h-8 sm:w-7 sm:h-7 bg-green-500 rounded-full ring-8 ring-green-200 dark:ring-green-900">
                      <span className="text-white font-bold text-sm sm:text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {edu.title}
                    </h4>
                    <p className="text-sm sm:text-base text-green-600 dark:text-green-400 font-medium">
                      {edu.subtitle}
                    </p>
                    {edu.duration && (
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {edu.duration}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold flex items-center mb-8">
                <Briefcase size={24} className="text-green-500 mr-3" />
                Work Experience
              </h3>
              <div className="space-y-10 relative">
                {workExperience.map((work, index) => (
                  <div key={work.id} className="pl-12 relative">
                    <div className="absolute -left-5 top-2 flex items-center justify-center w-8 h-8 sm:w-7 sm:h-7 bg-green-500 rounded-full ring-8 ring-green-200 dark:ring-green-900">
                      <span className="text-white font-bold text-sm sm:text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {work.role}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                      {work.company}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {work.duration}
                    </p>
                    <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                      {work.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
