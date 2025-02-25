"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "@node_modules/next/link";
import useOutsideClick from "@utils/hooks/useOutsideClick";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";
import { dropdownItems } from "@datas/dropdownItems";
import jasperLogo from "../public/assets/jasper normal logo.png";
import Image from "@node_modules/next/image";

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
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useOutsideClick(ref, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  return (
    <div className="w-screen bg-black h-20 flex items-center justify-center z-[40] py-16">
      <nav className="w-11/12 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={jasperLogo}
            className="w-28 md:w-40"
            alt="Jasper Azerbaijan Logo"
          />
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
            ref={ref}
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={
              isMenuOpen
                ? { opacity: 1, scale: 1, x: -100 }
                : { opacity: 0, scale: 0.9, x: 100 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={` absolute md:right-0 md:-top-[16px]  top-16 -right-[100px] overflow-hidden md:mt-4 md:w-80 bg-darkGray text-white rounded-lg shadow-lg p-3 w-40 h-40 md:h-full ${
              isMenuOpen ? "block" : "hidden"
            } z-[50]`}
          >
            <motion.ul
              className=" overflow-hidden flex  gap-4  items-center justify-center flex-col md:flex-row "
              variants={staggeredList}
              initial="hidden"
              animate="visible"
            >
              {dropdownItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="hover:underline cursor-pointer transition duration-200 "
                  variants={listItem}
                  onClick={() => {
                    if (item.isNewPage) {
                      window.location.href = item.path;
                    } else {
                      handleGoSomewhere(item.element);
                    }
                  }}
                >
                  {item.title}
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
