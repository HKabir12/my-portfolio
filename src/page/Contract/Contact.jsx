import { Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

// The Contact component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS, Formspree, or a backend API
    setStatus("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Get In Touch
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-600 dark:text-green-400 mt-4 text-center">
                {status}
              </p>
            )}
          </form>

          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div>
              <h4 className="font-semibold text-green-600 text-xl mb-1">
                Email:
              </h4>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
              >
                your.email@example.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 text-xl mb-1">
                Phone:
              </h4>
              <a
                href="tel:+1234567890"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
              >
                +123 456 7890
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 text-xl mb-2">
                Follow Me:
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <Github size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <Linkedin size={30} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <Twitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
