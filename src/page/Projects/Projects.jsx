import React, { useState } from "react";
import { Github, ExternalLink, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const projectList = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "https://placehold.co/600x400/E5E7EB/4B5563?text=Portfolio+Website",
    tech: ["React", "Tailwind CSS", "DaisyUI"],
    description:
      "A responsive personal portfolio showcasing my skills, experience, and projects.",
    liveLink: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
    challenges:
      "Ensuring full responsiveness across devices and optimizing load speed.",
    futurePlans: "Add a blog section and integrate dark mode toggle.",
  },
  {
    id: 2,
    name: "E-Commerce Store",
    image: "https://placehold.co/600x400/E5E7EB/4B5563?text=E-Commerce+Store",
    tech: ["MERN Stack", "Stripe API"],
    description:
      "A full-stack online store with product management, cart functionality, and payment gateway.",
    liveLink: "https://your-ecommerce-link.com",
    github: "https://github.com/yourusername/ecommerce-store",
    challenges:
      "Integrating payment securely and handling large product images.",
    futurePlans: "Add customer reviews and product recommendation system.",
  },
  {
    id: 3,
    name: "Task Manager App",
    image: "https://placehold.co/600x400/E5E7EB/4B5563?text=Task+Manager+App",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "A task management tool with user authentication, categories, and due date reminders.",
    liveLink: "https://your-taskmanager-link.com",
    github: "https://github.com/yourusername/task-manager",
    challenges: "Synchronizing data between multiple devices in real-time.",
    futurePlans: "Add push notifications and offline mode.",
  },
];

// Reusable Project Card component
const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col h-full cursor-pointer"
    onClick={() => onSelect(project)}
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
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors">
      View Details <ArrowRight size={16} className="ml-2" />
    </div>
  </motion.div>
);

// Projects Section Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 font-sans text-gray-900 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
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
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
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
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3 text-gray-700 dark:text-gray-400">
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Challenges:
                  </strong>{" "}
                  {selectedProject.challenges}
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Future Plans:
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
                  <span>Live Project</span>
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
