"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqArrow from "@public/assets/faqArrowIcon.svg";
import HeaderTitle from "./HeaderTitle";

const fakeFaqData = [
  {
    id: 1,
    question: "How does the AI generate designs?",
    answer:
      "The AI uses deep learning algorithms to analyze design patterns and generate creative outputs based on user input.",
  },
  {
    id: 2,
    question: "Can I customize the AI-generated designs?",
    answer:
      "Yes, you can customize the designs by adjusting parameters and using our built-in editing tools.",
  },
  {
    id: 3,
    question: "What support options are available?",
    answer:
      "We offer email support, live chat, and a community forum to help with any issues or questions.",
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial for new users to explore all features.",
  },
  {
    id: 5,
    question: "How secure is my data?",
    answer:
      "We use end-to-end encryption and follow industry standards to ensure your data remains secure.",
  },
  {
    id: 6,
    question: "What integrations are available?",
    answer:
      "Our platform integrates with Figma, Adobe XD, and other popular design tools.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      className="border-b border-gray-700"
      initial={{ opacity: 0, y: -10 }}
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
          />
          <p className="text-gray-400 mt-2 mb-6 w-1/2 hidden md:flex">
            Have questions about our AI-Powered Design Assistant? Find answers
            to the most common questions and learn how our platform can enhance
            your creative process.
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
