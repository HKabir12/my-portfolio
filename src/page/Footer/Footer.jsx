import React from "react";
import { Link } from "react-router"; // Import Link for internal routing
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/hkabir_12",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/your-link",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    url: "https://twitter.com/your",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <p className="text-sm order-2 md:order-1 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} **Humaon Kabir**. All rights reserved.
        </p>

        {/* Social Icons Section */}
        <div className="flex space-x-6 order-1 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-2xl hover:text-green-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;