import Link from "@node_modules/next/link";
import React from "react";

const footerData = [
  {
    id: 1,
    title: "How it Works",
  },
  {
    id: 2,
    title: "Features",
  },
  {
    id: 3,
    title: "Pricing",
  },
  {
    id: 4,
    title: "Blog",
  },
  {
    id: 5,
    title: "Faqs",
  },
  {
    id: 6,
    title: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-darkGray w-screen min-h-[300px] h-full text-white">
      <div className="w-11/12 mx-auto pt-20">
        <div className="flex flex-col md:flex-row justify-between ">
          <Link href={"/"}>
            <h2 className="text-3xl md:text-5xl">Jasper Azerbaijan</h2>
          </Link>
          <ul className="flex gap-5 mt-10 md:mt-0 md:gap-3 flex-col md:flex-row">
            {footerData.map((item) => (
              <li key={item.id}>{item.title}</li>
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
