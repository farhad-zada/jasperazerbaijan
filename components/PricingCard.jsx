"use client";

import Image from "@node_modules/next/image";
import { motion } from "framer-motion";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import GetStartedButton from "./GetStartedButton";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";

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
  additioanlServicesCard = false,
}) => {
  const isMobile = useBreakpoint();

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
      className={`w-full md:w-full lg:w-full ${
        additioanlServicesCard ? "h-full" : "h-full"
      } min-h-[600px]  p-4 rounded-2xl text-white flex flex-col relative ${
        highlight ? "bg-purple" : "bg-darkGray"
      } 


      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-grow">
        {!additioanlServicesCard ? (
          <p className="text-left">{planType}</p>
        ) : (
          <h1 className="text-4xl font-semibold pt-4 pb-2.5">
            Also we offer extra services{" "}
          </h1>
        )}
        <h3 className="text-4xl font-semibold pt-4 pb-2.5">
          {!additioanlServicesCard && (
            <div>
              <span className="font-serif font">₼</span>
              {isMonthly ? `${monthlyPrice}/m` : `${yearlyPrie}/y`}
            </div>
          )}
        </h3>
        {!additioanlServicesCard && (
          <p className="pb-5 opacity-70">
            {playTypeDescription} {isMonthly ? " Monthly" : " Yearly"}
          </p>
        )}
        <hr className="mb-5" />

        <div>
          {features.map((feature, index) => (
            <div key={index} className="py-2 flex gap-2 items-center">
              <Image
                src={"/assets/PricingIcon.svg"}
                width={16}
                height={16}
                alt="Image for features"
              />
              <p className="pricing_list_item opacity-90">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {!additioanlServicesCard && (
        <div className="my-10">
          <p>
            <span className="font-extrabold">Who is it for:</span> {goodFor}
          </p>
        </div>
      )}
      {/* <p className="font-normal">
        <span className="font-extrabold">İdeal istifadəçilər:</span> {goodFor}
      </p> */}

      <GetStartedButton
        onClick={() => handleGoSomewhere("form")}
        className={`${
          highlight &&
          "bg-white text-black md:hover:shadow-[#4F00B9] md:hover:ring-2 md:hover:ring-[#621FBB]  md:hover:shadow-lg hover:cursor-pointer "
        } border`}
      />

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
