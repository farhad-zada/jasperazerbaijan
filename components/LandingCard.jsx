import React from "react";
import Image from "next/image";
import photo from "@/public/assets/landingAsset.png";

const LandingCard = () => {
  return (
    <div className="w-11/12 bg-[#272829] rounded-[40px] relative flex flex-col md:flex-row items-center mx-auto md:h-[80vh] overflow-hidden p-6 md:p-12">
      {/* Left Side - Text Content */}
      <div className="w-full text-center md:text-left space-y-5 text-white">
        <h1 className="  font-bold leading-tight header_text">
          Your AI-Powered <br />
          <span className="text-[#914BF1]">Design</span> Assistant
        </h1>
        <p>
          Unlock your creative potential. Seamlessly generate, customize, and
          perfect your designs with cutting-edge AI technology.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full  flex justify-end mt-8 md:mt-0">
        <Image
          src={photo}
          width={700}
          height={700}
          alt="Landing Card Photo"
          className="object-contain max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LandingCard;
