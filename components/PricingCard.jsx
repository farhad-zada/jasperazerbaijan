"use client";

import { useEffect, useState } from "react";
import Image from "@node_modules/next/image";
import { motion } from "framer-motion";

const PricingCard = ({
  id,
  planType,
  monthlyPrice,
  yearlyPrie,
  playTypeDescription,
  highlight,
  features,
  isMonthly,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // İlk renderda kontrol et
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  ``;
  const cardVariants = {
    hidden: isMobile
      ? id === 2
        ? { opacity: 0, x: 100 }
        : { opacity: 0, x: -100 }
      : id === 2
      ? { opacity: 0, y: 200 }
      : { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`w-full md:w-full lg:w-full min-h-[600px] h-full p-4 rounded-2xl text-white flex flex-col ${
        highlight ? "bg-purple" : "bg-darkGray"
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-grow">
        <p className="text-left">{planType}</p>
        <h3 className="text-4xl font-semibold pt-4 pb-2.5">
          ${isMonthly ? `${monthlyPrice}` : `${yearlyPrie}`}/m
        </h3>
        <p className="pb-5">
          {playTypeDescription} {isMonthly ? " Monthly" : " Yearly"}
        </p>
        <hr />

        <div>
          {features.map((feature, index) => (
            <p key={index} className="py-2 flex gap-2 items-center">
              <Image
                src={"/assets/PricingIcon.svg"}
                width={20}
                height={20}
                alt="Image for features"
              />
              {feature}
            </p>
          ))}
        </div>
      </div>

      <button
        className={`mt-auto rounded-2xl p-4 w-full border ${
          highlight ? "bg-white text-black" : "bg-transparent text-purbg-purple"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;
