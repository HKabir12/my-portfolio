import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Code,
  Github,
  Lightbulb,
  User,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { FaServicestack } from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    href: "#home",
    icon: <Code size={16} />,
    text: "Home",
    type: "anchor",
  },

  {
    id: 2,
    href: "#projects",
    icon: <Github size={16} />,
    text: "Projects",
    type: "anchor",
  },
  {
    id: 3,
    href: "#skills",
    icon: <Lightbulb size={16} />,
    text: "Skills",
    type: "anchor",
  },
  {
    id: 4,
    href: "#about",
    icon: <User size={16} />,
    text: "AboutMe",
    type: "anchor",
  },
  {
    id: 5,
    href: "#contact",
    icon: <MessageSquare size={16} />,
    text: "Contact",
    type: "anchor",
  },
  {
    id: 6,
    href: "#services",
    icon: <FaServicestack size={16} />,
    text: "Services",
    type: "anchor",
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = navLinks
    .filter((link) => link.type === "anchor")
    .map((link) => link.href.substring(1));

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection = "";

      sectionIds.forEach((section) => {
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
  }, [sectionIds]);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-gray-300 font-sans sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            end
            onClick={handleLinkClick}
            className="text-2xl font-extrabold text-white hover:text-green-400 transition-colors duration-300"
          >
            <i className="">HK</i>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.type === "router" ? (
                <NavLink
                  key={link.id}
                  to={link.to}
                  end
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
                  onClick={(e) => handleAnchorClick(e, link.href)}
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

          {/* Mobile Hamburger */}
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
            link.type === "router" ? (
              <NavLink
                key={link.id}
                to={link.to}
                end
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
                onClick={(e) => handleAnchorClick(e, link.href)}
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
