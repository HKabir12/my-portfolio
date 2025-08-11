import React from "react";
import { Gauge } from "lucide-react";

const skillCategories = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "REST APIs", level: 80 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 50 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 75 },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 py-16 sm:py-24 font-sans text-gray-900 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <Gauge size={28} className="text-green-500 mr-4" />
                <h3 className="text-2xl font-bold">{category}</h3>
              </div>
              <div className="space-y-6">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium">{name}</span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="h-2.5 bg-green-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
