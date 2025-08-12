import React from "react";
import { Sparkles, BookOpen, Briefcase } from "lucide-react";

const education = [
  {
    id: 1,
    title: "B.Sc in Computer Science",
    subtitle: "Jahangirnagar University Dhaka",
    duration: "2022 - present",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    subtitle: "Shahid Bulbul Govt. College Pabna",
    duration: "2019 - 2021",
  },
];

const workExperience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Our University Project",
    duration: "2023 - Present",
    details:
      "Developed and maintained web applications using React, Tailwind CSS, and modern JavaScript.",
  },
  {
    id: 2,
    role: "Practice Web Developer",
    company: "Creative Soft",
    duration: "2022 - 2023",
    details:
      "Assisted in building responsive websites and fixing UI bugs for client projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20  transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Intro */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold flex items-center mb-4">
            <Sparkles size={22} className="text-green-500 mr-2 animate-pulse" />
            A Passion for Building
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Hello! I'm Humaon Kabir, a passionate Frontend and Full Stack
            Developer with over 3 years of experience. I create intuitive,
            dynamic, and visually stunning web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-8">
              <BookOpen size={24} className="text-green-500 mr-3" />
              Education
            </h3>
            <div className="space-y-10 relative">
              {education.map((edu, index) => (
                <div key={edu.id} className="pl-12 relative">
                  <div className="absolute -left-5 top-2 flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-8 ring-green-200 dark:ring-green-900">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold">{edu.title}</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    {edu.subtitle}
                  </p>
                  {edu.duration && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.duration}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-8">
              <Briefcase size={24} className="text-green-500 mr-3" />
              Work Experience
            </h3>
            <div className="space-y-10 relative">
              {workExperience.map((work, index) => (
                <div key={work.id} className="pl-12 relative">
                  <div className="absolute -left-5 top-2 flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-8 ring-green-200 dark:ring-green-900">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold">{work.role}</h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    {work.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {work.duration}
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {work.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
