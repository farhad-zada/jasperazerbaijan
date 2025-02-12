"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const dropdownItems = [
  "Home",
  "How it Works",
  "Features",
  "Pricing",
  "Blog",
  "FAQs",
  "Contact",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="w-screen bg-black h-20 flex items-center justify-center z-[40]">
      <nav className="w-11/12 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-white text-xl font-semibold">JasperAzerbaijan</h2>

        <div className="relative">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="h-12 w-12 bg-[#272829] flex justify-center items-center rounded-md"
            >
              <motion.div
                key={isMenuOpen ? "close" : "bars"}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: isMenuOpen ? 180 : 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMenuOpen ? (
                  <IoClose size={30} className="text-white" />
                ) : (
                  <FaBars size={22} className="text-white" />
                )}
              </motion.div>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={
              isMenuOpen
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.9, y: -10 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute right-0 mt-4 w-48 bg-[#272829] text-white rounded-lg shadow-lg p-3 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="space-y-2">
              {dropdownItems.map((item) => (
                <li
                  key={item}
                  className="hover:underline cursor-pointer transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
