import React from "react";
import Image from "next/image";
import photo from "@/public/assets/landingAsset.png";
import HeaderTitle from "./HeaderTitle";
import SubheaderTitle from "./SubheaderTitle";

const LandingCard = () => {
  return (
    <section className="w-full bg-darkGray rounded-[40px] relative flex flex-col md:flex-row items-center  md:h-[80vh] overflow-hidden p-6 md:p-12 mt-2 md:mt-0">
      {/* Left Side - Text Content */}
      <div className="w-full text-center md:text-left space-y-5 text-white">
        <HeaderTitle
          text={"Incredible Speed, Awesome Profit!"}
          highlight={["Profit!"]}
          br={"Ultimate"}
        />
        <SubheaderTitle
          text={`AI, Blockchain, Web, and Mobile – it will increase your profits!`}
          className={"w-full md:w-full py-0 md:py-5"}
        />
      </div>

      {/* Right Side - Image */}
      <div className="w-full  flex justify-end mt-8 md:mt-0">
        <Image
          src={photo}
          width={500}
          height={500}
          alt="Landing Card Photo"
          className="object-contain max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default LandingCard;
