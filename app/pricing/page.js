import FAQ from "@components/FaqSection";
import Pricing from "@components/Pricing";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-full bg-black">
      <div className="w-11/12 mx-auto text-white">
        <Pricing onHomePage={false} />
        <div className="mt-40">
          <FAQ />
        </div>
      </div>
      <div className="w-full bg-black h-40"></div>
    </div>
  );
};

export default page;
