"use client";

import { dropdownItems } from "@datas/dropdownItems";
import Link from "@node_modules/next/link";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";
import React from "react";
import jasperLogoNew from "../public/assets/jasperLogoNew.png";
import Image from "@node_modules/next/image";

import { Outfit } from "next/font/google";

const outfitFontNormal = Outfit({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="bg-darkGray w-screen min-h-[300px] h-full text-white">
      <div className="w-11/12 mx-auto pt-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                loading="lazy"
                width={"24px"}
                height={"24px"}
                src={jasperLogoNew}
                className="w-16 md:w-20 cursor-pointer"
                alt="Jasper Azerbaijan Logo"
              />
            </Link>
            <Link href={"/"}>
              <h1
                className={`${outfitFontNormal.className} text-white text-2xl md:text-4xl w-full`}
              >
                Jasper Azerbaijan
              </h1>
            </Link>
          </div>
          <ul className="flex gap-5 mt-10 md:mt-0 md:gap-3 justify-center md:justify-normal flex-row">
            {dropdownItems.map((item) => (
              <li
                key={item.id}
                className="hover:underline transition-all duration-300 hover:cursor-pointer"
                onClick={() => {
                  if (item.isNewPage) {
                    window.location.href = item.path;
                  } else {
                    handleGoSomewhere(item.element);
                  }
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mt-5 w-11/12 mx-auto bg-darkGray opacity-25"></hr>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between py-5 items-center">
        <p className="text-center text-gray-400 py-5">
          © 2025 Jasper Azerbaijan. All rights reserved.
        </p>
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=a5776eb7-0004-489f-94a1-3888f37ea0cd"
          title="DMCA.com Protection Status"
          target="_blank"
        >
          {" "}
          <img
            src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-07.png?ID=a5776eb7-0004-489f-94a1-3888f37ea0cd"
            alt="DMCA.com Protection Status"
          />
        </a>{" "}
      </div>
    </footer>
  );
};

export default Footer;
