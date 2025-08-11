import { Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "✅ Your message has been successfully sent.",
            confirmButtonColor: "#16a34a", // Tailwind green-600
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "❌ Failed to send message. Please try again later.",
            confirmButtonColor: "#dc2626", // Tailwind red-600
          });
        }
      );
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700"
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 bg-white dark:bg-gray-700"
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-green-600 text-white rounded-md"
            >
              Send Message
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
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
                humaonkabir2003@gmail.com
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
                01743637814
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 text-xl mb-2">
                Follow Me:
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://github.com/HKabir12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <Github size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/humaonkabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300 transform hover:scale-125"
                >
                  <Linkedin size={30} />
                </a>
                <a
                  href="https://x.com/humaonkabir_12"
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
