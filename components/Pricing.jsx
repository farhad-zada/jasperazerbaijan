"use client";

import React from "react";
import PricingCard from "./PricingCard";
import HeaderTitle from "./HeaderTitle";
import { pricesData } from "@datas/data";
import SubheaderTitle from "./SubheaderTitle";

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

const Pricing = ({ onHomePage }) => {
  const [isMontlyPrice, setIsMontlyPrice] = React.useState(false);
  return (
    <div
      className={`${!onHomePage ? "text-center mt-0" : "mt-40"}  text-white`}
      id="pricing"
    >
      <HeaderTitle
        text={"Affordable Plans for Every Need"}
        highlight={["Every", "Need"]}
        br={["Plans"]}
      />
      <SubheaderTitle
        text={
          "Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant."
        }
        className={`${
          !onHomePage && "text-center mx-auto"
        } w-full md:w-1/2 py-5`}
      />

      <div className="mb-6 flex items-center space-x-2  justify-center mt-10">
        <span className={`${!isMontlyPrice ? "opacity-100" : "opacity-50"}`}>
          Monthly
        </span>
        <button
          className="relative w-16 h-8 bg-purple text-purple rounded-full p-1 focus:outline-none"
          onClick={() => setIsMontlyPrice(!isMontlyPrice)}
        >
          <span
            className={`block size-5 bg-white rounded-full transition-transform transform ${
              isMontlyPrice ? "translate-x-9" : "translate-x-0"
            }`}
          ></span>
        </button>
        <span className={`${isMontlyPrice ? "opacity-100" : "opacity-50"}`}>
          Yearly
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pricesData.map((data) => (
          <PricingCard
            key={data.id}
            {...data}
            isMonthly={!isMontlyPrice ? true : false}
          />
        ))}
        <PricingCard
          highlight={true}
          additioanlServicesCard={true}
          features={additioanlServices}
        />
      </div>
    </div>
  );
};

export default Pricing;
