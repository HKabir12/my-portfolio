import {  Link } from "react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Code,
  Github,
  Lightbulb,
  User,
  MessageSquare,
} from "lucide-react"; // Using Lucide React for modern icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to close the mobile menu
  const handleLinkClick = () => {
    setOpen(false);
  };
  const navLinks = [
    {
      id: 1,
      to: "/",
      icon: <Code size={16} />,
      text: "Home",
    },
    {
      id: 2,
      href: "#projects",
      icon: <Github size={16} />,
      text: "Projects",
    },
    {
      id: 3,
      href: "#skills",
      icon: <Lightbulb size={16} />,
      text: "Skills",
    },
    {
      id: 4,
      href: "#about",
      icon: <User size={16} />,
      text: "About",
    },
    {
      id: 5,
      href: "#contact",
      icon: <MessageSquare size={16} />,
      text: "Contact",
    },
  ];

  return (
    <nav className="bg-gray-800 text-gray-300 shadow-lg font-sans sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-white hover:text-green-400 transition-colors duration-300"
          >
            Kabir
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.id}
                  to={link.to}
                  className="flex items-center space-x-2 p-2 hover:text-green-400 transition-colors duration-300 rounded-md"
                >
                  <span className="transform transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.text}</span>
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center space-x-2 p-2 hover:text-green-400 transition-colors duration-300 rounded-md"
                >
                  <span className="transform transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.text}</span>
                </a>
              )
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="p-2 text-gray-300 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {open ? (
                <X size={24} /> // Close icon
              ) : (
                <Menu size={24} /> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu links */}
      <div
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } md:hidden px-4 pb-4 bg-gray-800 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-2 pt-2">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.id}
                to={link.to}
                onClick={handleLinkClick}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium hover:text-green-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            ) : (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium hover:text-green-400 hover:bg-gray-700 rounded-md transition-colors"
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
