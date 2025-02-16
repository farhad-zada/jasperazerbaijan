"use client";

import React from "react";
import PricingCard from "./PricingCard";
import HeaderTitle from "./HeaderTitle";

const priceDatas = [
  {
    id: 1,
    planType: "Free",
    monthlyPrice: 0,
    yearlyPrie: 0,
    playTypeDescription: "Free Forever",
    highlight: false,
    features: [
      "Basic AI-generated designs",
      "Access to customization tools",
      "Standard templates library",
      "5 projects per month",
    ],
  },
  {
    id: 2,
    planType: "Basic",
    monthlyPrice: 14.99,
    yearlyPrie: 11.93,
    playTypeDescription: "Billed ",
    highlight: true,
    features: [
      "Advanced AI-generated designs",
      "Full access to customization tools",
      "Premium templates library",
      "Unlimited projects",
      "Real-time collaboration",
      "Priority email support",
    ],
  },
  {
    id: 3,
    planType: "Pro",
    monthlyPrice: 29.99,
    yearlyPrie: 24.93,
    playTypeDescription: "Billed ",
    highlight: false,
    features: [
      "All features included in Pro Plan",
      "Dedicated account manager",
      "Custom AI solutions and designs",
      "Onboarding and training sessions",
      "24/7 priority support",
      "Advanced analytics and reporting",
      "Secure cloud storage",
    ],
  },
];

const Pricing = ({ onHomePage }) => {
  const [isMontlyPrice, setIsMontlyPrice] = React.useState(false);
  return (
    <div
      className={`${!onHomePage ? "text-center mt-0" : "mt-40"}  text-white`}
    >
      <HeaderTitle
        text={"Affordable Plans for Every Need"}
        highlight={["Every", "Need"]}
        br={["Plans"]}
      />
      <p
        className={`${
          !onHomePage && "text-center mx-auto"
        } w-full md:w-1/2 mt-10 xl:text-xl 2xl:text-2xl`}
      >
        Choose the perfect plan for your design projects, from startups to
        enterprises. Our pricing tiers are designed to offer flexibility and
        value, ensuring you get the most out of our AI-powered design assistant.
      </p>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceDatas.map((data) => (
          <PricingCard
            key={data.id}
            {...data}
            isMonthly={!isMontlyPrice ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
