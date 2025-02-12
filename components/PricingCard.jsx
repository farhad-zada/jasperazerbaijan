"use client";

import React from "react";
import Image from "@node_modules/next/image";

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
  return (
    <div
      className={`w-full md:w-full lg:w-full min-h-[600px] h-full p-4 rounded-2xl text-white flex flex-col ${
        highlight ? "bg-[#914BF1]" : "bg-[#272829]"
      }`}
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
          highlight ? "bg-white text-black" : "bg-transparent text-[#914BF1]"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
