import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WelcomeModal=() => {
  const [showModal, setShowModal] = useState(false);

  // Page load hole 1 sec pore modal show hobe
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full relative shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Welcome to my Portfolio 👋
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Thanks for visiting! Explore my projects and skills below.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default WelcomeModal;