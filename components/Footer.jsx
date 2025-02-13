"use client";

import { dropdownItems } from "@datas/dropdownItems";
import Link from "@node_modules/next/link";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkGray w-screen min-h-[300px] h-full text-white">
      <div className="w-11/12 mx-auto pt-20">
        <div className="flex flex-col md:flex-row justify-between ">
          <Link href={"/"}>
            <h2 className="text-3xl md:text-5xl">Jasper Azerbaijan</h2>
          </Link>
          <ul className="flex gap-5 mt-10 md:mt-0 md:gap-3 flex-col md:flex-row">
            {dropdownItems.map((item) => (
              <li
                className="hover:underline transition-all duration-300 hover:cursor-pointer"
                onClick={() => {
                  if (item.isNewPage) {
                    window.location.href = item.path;
                  } else {
                    handleGoSomewhere(item.element);
                  }
                }}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mt-5 w-11/12 mx-auto bg-darkGray opacity-25"></hr>

      <div>
        <p className="text-center text-gray-400 py-5">
          © 2025 Jasper Azerbaijan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
