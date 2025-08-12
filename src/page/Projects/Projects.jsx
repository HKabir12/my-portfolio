import React, { useState, useEffect } from "react";
import { Github, ExternalLink, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectList(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section id="projects" className="dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Here are some of my recent projects that showcase my skills and
          creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4"></div>
              <div className="flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors">
                View Details <ArrowRight size={16} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-800 max-w-2xl w-full rounded-2xl shadow-2xl p-8 relative overflow-y-auto max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors p-1 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                {selectedProject.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3 text-gray-700 dark:text-gray-400 mb-6">
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Challenges:
                  </strong>{" "}
                  {selectedProject.challenges}
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Potential improvements and future plans:
                  </strong>{" "}
                  {selectedProject.futurePlans}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  <span>Live Site</span>
                </a>
                <a
                  href={selectedProject.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  <span>GitHub Client</span>
                </a>
                {selectedProject.githubServer && (
                  <a
                    href={selectedProject.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-gray-700 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={20} />
                    <span>GitHub Server</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
