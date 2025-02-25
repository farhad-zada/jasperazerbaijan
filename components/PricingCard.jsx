"use client";

import Image from "@node_modules/next/image";
import { motion } from "framer-motion";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import GetStartedButton from "./GetStartedButton";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "@utils/hooks/useOutsideClick";

const additioanlServices = [
  "Domain Registration",
  "Advanced Security Package",
  "Custom Server Configuration",
  "Website Migration Service",
  "SEO Optimization Service",
  "Website Speed Optimization",
  "Blockchain Node Setup and Configuration",
  "Mobile App Backend Integration",
];

const PricingCard = ({
  id,
  planType,
  monthlyPrice,
  yearlyPrie,
  playTypeDescription,
  highlight,
  features,
  isMonthly,
  goodFor,
}) => {
  const isMobile = useBreakpoint();
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInnerGetStartedClick = () => {
    setIsModalOpen(false);
    handleGoSomewhere("form");
  };

  useOutsideClick(ref, () => {
    if (isModalOpen) setIsModalOpen(false);
  });

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
      className={`w-full md:w-full lg:w-full min-h-[600px] h-full p-4 rounded-2xl text-white flex flex-col relative ${
        highlight ? "bg-purple" : "bg-darkGray"
      } 
        ${isModalOpen && ""}
      ${
        isModalOpen && highlight
          ? "bg-[#a076de]"
          : !highlight && !isModalOpen && "bg-[#373839]"
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-grow">
        <p className="text-left">{planType}</p>
        <h3 className="text-4xl font-semibold pt-4 pb-2.5">
          <span className="font-serif font">₼</span>{" "}
          {isMonthly ? `${monthlyPrice}/m` : `${yearlyPrie}/y`}
        </h3>
        <p className="pb-5 opacity-70">
          {playTypeDescription} {isMonthly ? " Monthly" : " Yearly"}
        </p>
        <hr className="mb-5" />

        <div>
          {features.map((feature, index) => (
            <div key={index} className="py-2 flex gap-2 items-center">
              <Image
                src={"/assets/PricingIcon.svg"}
                width={20}
                height={20}
                alt="Image for features"
              />
              <p className="pricing_list_item opacity-90">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <p>
          <span className="font-extrabold">Who is it for:</span> {goodFor}
        </p>
      </div>
      {/* <p className="font-normal">
        <span className="font-extrabold">İdeal istifadəçilər:</span> {goodFor}
      </p> */}

      <GetStartedButton
        onClick={() => setIsModalOpen(!isModalOpen)}
        className={`${
          highlight &&
          "bg-white text-black md:hover:shadow-[#4F00B9] md:hover:ring-2 md:hover:ring-[#621FBB]  md:hover:shadow-lg "
        } border`}
      />
      {isModalOpen && (
        <motion.div
          ref={ref}
          initial={{ bottom: -120 }}
          animate={{ bottom: 0, left: 0 }}
          exit={{ bottom: -40 }}
          className={`absolute bottom-0 left-0 border w-full md:h-1/2 h-[60%] rounded-2xl overflow-hidden grid grid-cols-1 ${
            highlight ? "bg-[#a076de]" : "bg-darkGray"
          }
          }`}
        >
          <ol className="w-11/12 mx-auto px-5 mt-5 list-disc">
            <h1 className="text-2xl">
              Əlavə Xidmətlər (Bütün planlar üçün əlavə ödənişlə)
            </h1>
            {additioanlServices.map((servicesItem, index) => (
              <li key={index} className="pricing_list_item opacity-70">
                {servicesItem}
              </li>
            ))}
          </ol>
          <GetStartedButton
            onClick={() => handleInnerGetStartedClick()}
            className={`
              mt-auto mb-3  h-16 w-[95%] mx-auto
                            ${
                              highlight &&
                              "bg-white text-black md:hover:shadow-[#4F00B9] md:hover:ring-2 md:hover:ring-[#621FBB]  md:hover:shadow-lg  "
                            } border`}
          />
        </motion.div>
      )}

      {/* <button
        className={`mt-auto rounded-2xl p-4 w-full border ${
          highlight ? "bg-white text-black" : "bg-transparent text-purbg-purple"
        }`}
      >
        Get Started
      </button> */}
    </motion.div>
  );
};

export default PricingCard;
