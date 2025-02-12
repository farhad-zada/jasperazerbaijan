"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/assets/sliderLogo.png";

const logos = [
  { id: 1, src: logo, alt: "logo" },
  { id: 2, src: logo, alt: "logo" },
  { id: 3, src: logo, alt: "logo" },
  { id: 4, src: logo, alt: "logo" },
  { id: 5, src: logo, alt: "logo" },
];

const InfiniteSlider = () => {
  return (
    <div className="w-full bg-black">
      <div className="overflow-hidden w-11/12 mx-auto py-6 relative z-[1]">
        <motion.div
          className="flex space-x-8 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="relative h-16 w-80 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
