"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqArrow from "@public/assets/faqArrowIcon.svg";
import HeaderTitle from "./HeaderTitle";
import SubheaderTitle from "./SubheaderTitle";

const fakeFaqData = [
  {
    id: 1,
    question: "How is the project price determined?",
    answer:
      "Each project is evaluated individually. The price is formed based on the complexity, duration, and required resources of the project. After a detailed discussion with you, we provide an exact price offer.",
  },
  {
    id: 2,
    question: "How long does it take to develop a project?",
    answer:
      "The duration of projects depends on their size and complexity. Small projects take 2-4 weeks, medium-sized projects take 1-3 months, and large projects can take 3-6 months or longer. The exact duration is determined after the technical specifications are prepared.",
  },
  {
    id: 3,
    question: "How is technical support for the finished product provided?",
    answer:
      "We provide free technical support for 3 months after the project is delivered. After that, technical support is provided based on a service agreement.",
  },
  {
    id: 4,
    question: "Can you improve or update an existing project?",
    answer:
      "Yes, we offer services for analyzing and improving existing projects. We prepare a detailed proposal for auditing and updating the system.",
  },
  {
    id: 5,
    question:
      "How is communication with the client established during the project process?",
    answer:
      "A project manager is assigned to each project, and weekly reports are provided. We can organize online meetings at any time to discuss the progress of the project.",
  },
  {
    id: 6,
    question: "How are confidentiality and security ensured?",
    answer:
      "We sign an NDA (confidentiality agreement) for all projects. Data security is ensured in accordance with the highest standards, and regular security tests are conducted.",
  },
  {
    id: 7,
    question: "Which platforms do your mobile applications support?",
    answer:
      "We develop native applications for iOS and Android, as well as cross-platform solutions. The choice of platform is determined based on your target audience and budget.",
  },
  {
    id: 8,
    question: "Which technologies are your blockchain solutions based on?",
    answer:
      "We develop smart contracts and DApps on Ethereum, Binance Smart Chain, and other leading blockchain platforms. We select the most optimal blockchain platform according to your project requirements.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      className="border-b border-gray-700"
      initial={{ opacity: 0, y: -10 }}
      exit={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full text-left py-4 text-lg font-medium text-white flex justify-between items-center"
        onClick={onClick}
      >
        {question}
        <span
          className={`${
            isOpen ? "rotate-0 text-purple" : "rotate-180"
          } transition-all transform duration-300 ease-linear text-2xl`}
        >
          ^
        </span>
      </button>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 pb-4"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.div
      id="faq"
      className="bg-darkGray min-h-[500px] flex flex-col md:flex-row justify-between items-center px-4 w-full rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl w-full p-6 rounded-lg flex gap-10">
        <motion.div
          className="w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderTitle
            text={"Frequently Asked Questions"}
            highlight={["Questions"]}
            br={["Frequently", "Asked"]}
            className={"text-left"}
          />

          <p className="text-gray-400 mt-2 mb-6 w-1/2 hidden md:flex">
            We have answered the most frequently asked questions. If you still
            have any questions, feel free to contact us – our team will be happy
            to assist you.
          </p>
        </motion.div>
      </div>
      <div className="w-full">
        {fakeFaqData.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}
