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
    question: "Layihənin qiyməti necə müəyyən edilir?",
    answer:
      "Hər layihə fərdi olaraq qiymətləndirilir. Qiymət layihənin mürəkkəbliyi, müddəti və tələb olunan resurslardan asılı olaraq formalaşır. Sizinlə ətraflı müzakirədən sonra dəqiq qiymət təklifi təqdim edirik.",
  },
  {
    id: 2,
    question: "Layihənin hazırlanma müddəti nə qədərdir?",
    answer:
      "Layihələrin müddəti onların həcmindən və mürəkkəbliyindən asılıdır. Kiçik layihələr 2-4 həftə, orta həcmli layihələr 1-3 ay, böyük layihələr isə 3-6 ay və daha çox vaxt ala bilər. Dəqiq müddət texniki tapşırıq hazır olduqdan sonra müəyyən edilir.",
  },
  {
    id: 3,
    question: "Hazır məhsulun texniki dəstəyi necə həyata keçirilir?",
    answer:
      "Layihə təhvil verildikdən sonra 3 ay pulsuz texniki dəstək təqdim edirik. Bundan sonra isə texniki dəstək müqaviləsi əsasında xidmət göstəririk.",
  },
  {
    id: 4,
    question: "Mövcud layihəni təkmilləşdirə və ya yeniləyə bilərsinizmi?",
    answer:
      "Bəli, mövcud layihələrin analizi və təkmilləşdirilməsi xidmətini təqdim edirik. Sistemin audit edilməsi və yenilənməsi üçün ətraflı təklif hazırlayırıq.",
  },
  {
    id: 5,
    question: "Layihə prosesi zamanı müştəri ilə əlaqə necə qurulur?",
    answer:
      "Hər layihə üçün bir layihə meneceri təyin edilir və həftəlik hesabatlar təqdim olunur. İstənilən vaxt online görüşlər təşkil edə və layihənin gedişatını müzakirə edə bilərik.",
  },
  {
    id: 6,
    question: "Məxfilik və təhlükəsizlik məsələləri necə təmin edilir?",
    answer:
      "Bütün layihələr üçün NDA (məxfilik) müqaviləsi imzalayırıq. Məlumatların təhlükəsizliyi ən yüksək standartlara uyğun təmin edilir və mütəmadi olaraq təhlükəsizlik testləri aparılır.",
  },
  {
    id: 7,
    question: "Mobil tətbiqləriniz hansı platformalar üçün hazırlanır?",
    answer:
      "iOS və Android platformaları üçün native tətbiqlər, həmçinin cross-platform həllər təqdim edirik. Platforma seçimi sizin hədəf auditoriyanız və büdcənizə əsasən müəyyən edilir.",
  },
  {
    id: 8,
    question: "Blockchain həlləriniz hansı texnologiyalar əsasında qurulur?",
    answer:
      "Ethereum, Binance Smart Chain və digər aparıcı blockchain platformaları üzərində smart kontraktlar və DApp-lər hazırlayırıq. Layihənizin tələblərinə uyğun ən optimal blockchain platformasını seçirik.",
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
            Ən çox soruşulan sualları cavablandırdıq. Hələ də sualınız varsa,
            bizimlə əlaqə saxlayın - komandamız sizə köməkçi olmaqdan məmnunluq
            duyar.
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
