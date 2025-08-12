import React, { useState, useEffect } from "react";
import { NavLink } from "react-router"; // react-router-dom for web apps
import {
  Code,
  Github,
  Lightbulb,
  User,
  MessageSquare,
  Menu,
  X,
  Server,
} from "lucide-react";
import { FaServicestack } from "react-icons/fa";

const navLinks = [
  { id: 1, to: "/", icon: <Code size={16} />, text: "Home" },
  { id: 2, href: "#projects", icon: <Github size={16} />, text: "Projects" },
  { id: 3, href: "#skills", icon: <Lightbulb size={16} />, text: "Skills" },
  { id: 4, href: "#about", icon: <User size={16} />, text: "AboutMe" },
  {
    id: 5,
    href: "#contact",
    icon: <MessageSquare size={16} />,
    text: "Contact",
  },
  {
    id: 6,
    href: "#services",
    icon: <FaServicestack size={16} />,
    text: "Services",
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener to update active section for anchor links
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = "";
      ["projects", "skills", "about", "contact"].forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          if (
            el.offsetTop <= scrollPos &&
            el.offsetTop + el.offsetHeight > scrollPos
          ) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className=" text-gray-300 font-sans sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className="text-2xl font-extrabold text-white hover:text-green-400 transition-colors duration-300"
          >
            Kabir

            
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.to ? (
                <NavLink
                  key={link.id}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "hover:bg-green-500 hover:text-white text-gray-300"
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.text}</span>
                </NavLink>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "bg-green-500 text-white"
                      : "hover:bg-green-500 hover:text-white text-gray-300"
                  }`}
                >
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              )
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 pb-4">
          {navLinks.map((link) =>
            link.to ? (
              <NavLink
                key={link.id}
                to={link.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "hover:bg-green-500 hover:text-white text-gray-300"
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ) : (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-500 hover:text-white text-gray-300"
                }`}
              >
                {link.icon}
                <span>{link.text}</span>
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
