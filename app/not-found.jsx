"use client";

import Link from "@node_modules/next/link";
import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="w-screen bg-black">
      <div className="w-11/12 mx-auto justify-center items-center h-[85vh] flex flex-col">
        <h1 className="text-[150px] md:text-[200px] lg:text-[250px] text-purple font-bold select-none">
          404
        </h1>
        <Link href={"/"}>
          <motion.h3
            animate={{ y: [300, -300] }} // Yukarı aşağı hareket
            transition={{
              duration: 1,
              bounce: 0.5, // Z
              repeat: Infinity, // Sonsuz tekrar
              ease: "easeInOut", // Daha yumuşak geçiş
            }}
            className="text-white md:text-[#BBBBBB]/40 transition-all duration-300 md:hover:text-white underline underline-offset-2"
          >
            Click me to go home
          </motion.h3>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
