"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "@node_modules/next/link";

const dropdownItems = [
  "Home",
  "How it Works",
  "Features",
  "Pricing",
  "Blog",
  "FAQs",
  "Contact",
];

const staggeredList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="w-screen bg-black h-20 flex items-center justify-center z-[40] py-16">
      <nav className="w-11/12 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h2 className="text-white text-xl font-semibold">JasperAzerbaijan</h2>
        </Link>

        <div className="relative">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="h-12 w-12 bg-darkGray flex justify-center items-center rounded-md"
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
            className={`absolute right-0 mt-4 w-48 bg-darkGray text-white rounded-lg shadow-lg p-3 ${
              isMenuOpen ? "block" : "hidden"
            } z-[50]`}
          >
            <motion.ul
              className="space-y-2 mt-10 overflow-hidden"
              variants={staggeredList}
              initial="hidden"
              animate="visible"
            >
              {dropdownItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="hover:underline cursor-pointer transition duration-200"
                  variants={listItem}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
