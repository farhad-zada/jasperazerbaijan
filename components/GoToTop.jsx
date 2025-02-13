"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileTap={{ rotate: 360, backgroundColor: "#6b21a8" }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-4 z-[40] right-4 p-4 bg-purple text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Go to top"
      whileHover={{ backgroundColor: "#9333ea" }}
    >
      <ArrowUp size={32} />
    </motion.button>
  );
};

export default GoToTopButton;
