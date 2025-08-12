import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/HKabir12",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/humaonkabir12",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: "https://x.com/humaonkabir_12",
    label: "Twitter",
  },
];

const quickLinks = [
  { id: 1, label: "About", href: "#about", icon: <FaMapMarkerAlt /> },
  { id: 2, label: "Skills", href: "#skills", icon: <FaMapMarkerAlt /> },
  { id: 3, label: "Projects", href: "#projects", icon: <FaMapMarkerAlt /> },
  { id: 4, label: "Contact", href: "#contact", icon: <FaMapMarkerAlt /> },
];

const services = [
  { id: 1, label: "Web Development", href: "#services" },
  { id: 2, label: "Frontend Development", href: "#services" },
  { id: 3, label: "Backend Development", href: "#services" },
  { id: 4, label: "UI/UX Implementation", href: "#services" },
];
import { motion } from "framer-motion";

const Footer = () => {
  // Scroll to top handler
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700 text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-24">
  <div className="flex flex-col items-center md:items-start">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
      {/* Branding */}
      <div className="text-center md:text-left">
        <a
          href="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600 inline-block mb-4"
        >
          Humaon Kabir
        </a>
        <p className="text-sm text-gray-400 mb-6">
          Learning by building. Improving with every project.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {socialLinks.map(({ id, icon, url, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-purple-600/20 hover:from-green-500/40 hover:to-purple-600/40 transition-colors text-2xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center md:text-left">
        <h4 className="font-semibold text-xl mb-6">Quick Links</h4>
        <ul className="space-y-3">
          <li>
            <a
              href="/#about"
              className="flex items-center gap-2 hover:text-green-400 transition-colors text-gray-300 justify-center md:justify-start"
            >
              <FaMapMarkerAlt className="text-green-400" />
              About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className="flex items-center gap-2 hover:text-green-400 transition-colors text-gray-300 justify-center md:justify-start"
            >
              <FaMapMarkerAlt className="text-green-400" />
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="flex items-center gap-2 hover:text-green-400 transition-colors text-gray-300 justify-center md:justify-start"
            >
              <FaMapMarkerAlt className="text-green-400" />
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="flex items-center gap-2 hover:text-green-400 transition-colors text-gray-300 justify-center md:justify-start"
            >
              <FaMapMarkerAlt className="text-green-400" />
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div className="text-center md:text-left">
        <h4 className="font-semibold text-xl mb-6">Services</h4>
        <ul className="space-y-3">
          {services.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                className="hover:text-green-400 transition-colors text-gray-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="text-center md:text-left">
        <h4 className="font-semibold text-xl mb-6">Contact Info</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-green-400" />
            <span>Dhaka, Bangladesh</span>
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <FaPhone className="text-green-400" />
            <a
              href="tel:+8801843125672"
              className="hover:text-green-400 transition-colors"
            >
              +8801743637814
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-start">
            <FaEnvelope className="text-green-400" />
            <a
              href="mailto:hm.ismail772@gmail.com"
              className="hover:text-green-400 transition-colors"
            >
              humaonkabir2003@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3 text-xs text-gray-500 justify-center md:justify-start">
            <FaHeart className="text-red-500" />
            <span>Available for Work</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Humaon Kabir. Made with{" "}
            <FaHeart className="inline-block text-red-500" aria-hidden="true" />{" "}
            using React & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-purple-600/20 hover:from-green-500/40 hover:to-purple-600/40 transition-colors text-gray-300 text-lg"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FaArrowUp />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
