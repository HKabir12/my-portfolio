import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [animationData, setAnimationData] = useState(null);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Load Lottie Animation from public folder
  useEffect(() => {
    fetch("/public/Modern email.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
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
            confirmButtonColor: "#16a34a",
          });
          setFormData({ name: "", email: "", message: "" });
          setShowModal(false);
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "❌ Failed to send message. Please try again later.",
            confirmButtonColor: "#dc2626",
          });
        }
      );
  };

  // if (!animationData) return null;

  return (
    <section id="contact" className="py-16 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Open Modal Button */}
          <div className="flex flex-col items-center dark:bg-gray-800">
               <div className="w-64 mt-4">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              ✉ Send Me a Direct Message
            </button>
           
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Let’s connect and make something amazing together.
            </p>
            <div>
              <h4 className="font-semibold text-green-600 text-xl mb-1">
                Email:
              </h4>
              <a
                href="mailto:humaonkabir2003@gmail.com"
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
                href="tel:+8801743637814"
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
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125"
                >
                  <Github size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/humaonkabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125"
                >
                  <Linkedin size={30} />
                </a>
                <a
                  href="https://x.com/humaonkabir_12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors transform hover:scale-125"
                >
                  <Twitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                Write Your Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                {status && (
                  <p className="text-green-500 text-center">{status}</p>
                )}
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
