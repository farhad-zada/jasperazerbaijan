"use client";

import LandingCard from "@components/LandingCard";
import avatarExample from "@public/assets/avatarExample.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState, useCallback } from "react";

import Slider from "@components/Slider";
import { HiArrowUpTray } from "react-icons/hi2";
import Image from "@node_modules/next/image";
import featureBlockImage1 from "@public/assets/featureBlockImage1.png";
import featureBlockImage2 from "@public/assets/featureBlockImage2.png";
import featureBlockImage3 from "@public/assets/featureBlockImage3.png";
import Pricing from "@components/Pricing";
import logo from "@/public/assets/inlineSliderLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import CustomerReviewCard from "@components/CustomerReviewCard";
import FaqSection from "@components/FaqSection";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { Outfit } from "next/font/google";

import { AiOutlineMobile } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";

import cppSVG from "@public/assets/logos/cpp.svg";
import jsSVG from "@public/assets/logos/js.svg";
import pythonSVG from "@public/assets/logos/python.svg";
import javaSVG from "@public/assets/logos/java.svg";
import csharpSVG from "@public/assets/logos/cSharp.svg";

import reactSVG from "@public/assets/logos/react.svg";
import angularSVG from "@public/assets/logos/angular.svg";
import vueSVG from "@public/assets/logos/vue.svg";
import expressSVG from "@public/assets/logos/express.svg";
import nuxtSVG from "@public/assets/logos/nuxt.svg";

import elgunTeam from "@public/assets/Teams/ElgunCEO.jpeg";
import farhadTeam from "@public/assets/Teams/FerhadBACKEND.jpeg";
import aliTeam from "@public/assets/Teams/AliFRONT.jpeg";
import HeaderTitle from "@components/HeaderTitle";

import { MdInsights } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

const outfitFontNormal = Outfit({ subsets: ["latin"], weight: "400" });

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function Card({ headText, descText, logo }) {
  return (
    <div className="w-full bg-darkGray min-h-56 h-full flex flex-col p-4 rounded-2xl">
      <div className="size-16 bg-purple rounded-full flex justify-center items-center">
        {logo}
      </div>
      <div className="mt-14">
        <h3 className="subheader_text font-bold">{headText}</h3>
        <ul className=" list-disc pl-10">
          {descText.slice(0, 6).map((text, index) => (
            <li key={index} className="text-[#BBBBBB] text-lg">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeaturesBlock({ headText, descText, photo, reversed = false }) {
  return (
    <motion.div
      className="mt-0 mb-20 md:mb-0 md:mt-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {reversed ? (
        <div className="md:flex items-center justify-between w-full hidden">
          <Image
            src={photo}
            width={400}
            height={600}
            alt={`${headText} photo`}
          />
          <div className="flex flex-col w-1/2">
            <HeaderTitle text={headText} highlight={[]} />
            <p className="py-3 w-1/2 subheader_text">{descText}</p>
            <button className="bg-purple rounded-2xl p-4 w-40">
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="md:flex items-center justify-between w-full hidden">
          <div className="flex flex-col">
            <h3 className="header_text w-4/6 font-semibold leading-[72px]">
              {headText}
            </h3>
            <p className="py-3 w-1/2 subheader_text">{descText}</p>
            <button className="bg-purple rounded-2xl p-4 w-40">
              Get Started
            </button>
          </div>
          <Image
            src={photo}
            width={400}
            height={600}
            alt={`${headText} photo`}
          />
        </div>
      )}
      <div className="md:hidden items-center justify-between w-full flex flex-col">
        <Image src={photo} width={400} height={600} alt={`${headText} photo`} />
        <div className="flex flex-col text-center">
          <h3 className="header_text font-semibold leading-[72px]">
            {headText}
          </h3>
          <p className="py-3 subheader_text">{descText}</p>
          <button className="bg-purple rounded-2xl p-4 w-40 mx-auto mb-4">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function SizesBasedCard({ headText, descText, logo, size }) {
  return (
    <motion.div
      className={`${
        size === 1 ? "w-full md:w-2/3" : "w-full"
      } bg-[#1A1A1A] h-96 rounded-2xl p-6 flex flex-col justify-between`}
      variants={fadeInScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start">
        <p className="text-gray-300 w-5/6 text-lg md:text-lg 2xl:text-2xl">
          {descText}
        </p>
        <div className="size-16 bg-purple rounded-full flex justify-center items-center">
          {logo}
        </div>
      </div>
      <h3 className="text-white font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        {headText}
      </h3>
    </motion.div>
  );
}

function InlineSlider({ logos, reversed = false }) {
  return (
    <div className="overflow-hidden h-full w-full mx-auto py-6 z-[1]  flex items-center relative">
      <motion.div
        className="flex flex-col space-y-16"
        initial={{ y: reversed ? "-20%" : "20%" }}
        animate={{ y: reversed ? "20%" : "-20%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="relative h-24 w-80">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const cardData = [
  {
    headText: "Mobil tətbiq inkişafı",
    descText: [
      "iOS & Android tətbiqləri",
      "Flutter, React-Native kimi çox platformalı həllər",
      "Tətbiqin optimalizasiyası",
      "Push bildirişləri",
      "API inteqrasiyaları",
      "iOS & Android tətbiqləri",
      "Flutter, React-Native kimi çox platformalı həllər",
      "Tətbiqin optimalizasiyası",
      "Push bildirişləri",
      "API inteqrasiyaları",
      "iOS & Android tətbiqləri",
      "Flutter, React-Native kimi çox platformalı həllər",
      "Tətbiqin optimalizasiyası",
      "Push bildirişləri",
      "API inteqrasiyaları",
    ],
    logo: <AiOutlineMobile size={30} />,
  },
  {
    headText: "Blockchain Solutions",
    descText: [
      "Building Smart Contracts for your specific needs",
      "Supporting both on EVM & TVM",
      "DeFi projects",
      "NFT marketplace",
      "Blockchain consulting",
      "Security audit",
    ],
    logo: <SiBitcoinsv size={30} />,
  },
  {
    headText: "Web Solutions",
    descText: [
      "Responsive design",
      "Userfriendly interface",
      "High performance",
      "E-Commerce solutions",
      "Corporative",
    ],
    // descText: `Responsive design, Userfriendly interface, High performance, E-Commerce solutions, Corporative websites, Managment panels`,
    logo: <AiOutlineGlobal size={30} />,
  },
];

const featuresData = [
  {
    id: 1,
    headText: "Innovative Approach",
    descText: `Using edge-cutting technologies, Digital transformation experience, AI integration into bussinesses, IoT solutions, Big Data analysis`,
    photo: featureBlockImage1,
    reversed: false,
  },
  {
    id: 2,
    headText: "Cost-Effective Solutions",
    descText: `Optimal budget planning, Transparant evalution, Flexible payment options, ROI focused approach`,
    photo: featureBlockImage2,
    reversed: true,
  },
  {
    id: 3,
    headText: "Continues Support",
    descText: `24/7 technical support, Regular updates, Performance monitoring, Security updates, Backup və restore services`,
    photo: featureBlockImage3,
    reversed: false,
  },
  {
    id: 3,
    headText: "Hosting Service",
    descText: `Reliable & Safe, High performance servers, 99.9% update guaranty, SSL certificates, Backup service, DDoS protection (4TB), 24/7 support`,
    photo: featureBlockImage3,
    reversed: true,
  },
];

const kBasedCardData = [
  {
    headText: "Empower Your Decisions",
    descText:
      "Leverage AI-driven insights and automation to optimize your operations. Transform data into actionable strategies with cutting-edge technology.",
    logo: <MdInsights size={32} />,
    size: 1,
  },
  {
    headText: "Redefine What's Possible",
    descText:
      "Harness AI and automation to streamline complex tasks, optimize workflows, and unlock new opportunities for growth.",
    logo: <FaRocket size={32} />,
    size: 2,
  },
  {
    headText: "Efficiency Meets Innovation",
    descText:
      "Seamlessly integrate AI-powered solutions that enhance performance, automate processes, and drive smarter decision-making.",
    logo: <AiFillThunderbolt size={32} />,
    size: 2,
  },
  {
    headText: "Unmatched Accuracy",
    descText:
      "Harness AI-driven precision for optimal performance. Our technology refines every process, ensuring efficiency and reliability in every task.",
    logo: <TbTargetArrow size={32} />,
    size: 1,
  },
];

const fakeLogosForSlider = [
  {
    id: 1,
    logos: [
      { id: 1, src: cppSVG, alt: "cppSVG" },
      { id: 2, src: jsSVG, alt: "jsSVG" },
      { id: 3, src: pythonSVG, alt: "pythonSVG" },
      { id: 4, src: javaSVG, alt: "javaSVG" },
      { id: 5, src: csharpSVG, alt: "csharpSVG" },
    ],
  },
  {
    // frameworks such as react, angular, vue, next.js, nuxt.js
    id: 2,
    logos: [
      { id: 1, src: reactSVG, alt: "reactSVG" },
      { id: 2, src: angularSVG, alt: "angularSVG" },
      { id: 3, src: vueSVG, alt: "vueSVG" },
      { id: 4, src: expressSVG, alt: "expressSVG" },
      { id: 5, src: nuxtSVG, alt: "nuxtSVG" },
    ],
  },
  {
    id: 3,
    logos: [
      { id: 1, src: logo, alt: "logo" },
      { id: 2, src: logo, alt: "logo" },
      { id: 3, src: logo, alt: "logo" },
      { id: 4, src: logo, alt: "logo" },
      { id: 5, src: logo, alt: "logo" },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    image: elgunTeam,
    name: "Elgun",
    comment:
      "Using this AI-powered design assistant has completely transformed the way I approach my projects. It’s like having a professional designer on call 24/7. Highly recommend it!",
  },
  {
    id: 2,
    image: farhadTeam,
    name: "Farhad",
    comment:
      "The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details.",
  },
  {
    id: 3,
    image: aliTeam,
    name: "Ali",
    comment:
      "This tool is a game-changer! It’s incredibly intuitive and the results are always impressive. I can't imagine working without it now.",
  },
  {
    id: 4,
    image: avatarExample,
    name: "Mustafa",
    comment:
      "I was skeptical at first, but this AI assistant exceeded all my expectations. It’s easy to use and delivers professional-grade designs effortlessly.",
  },
];

export default function Home() {
  const isMobile = useBreakpoint();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideLeft = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  }, []);

  const slideRight = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
    );
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="w-screen h-full bg-black overflow-hidden">
      <div
        className={`w-11/12 mx-auto text-white ${outfitFontNormal.className}`}
      >
        <LandingCard />
        <Slider />
        <section className="pt-40">
          {/* <motion.h1
            className="header_text font-bold w-full leading-[46px] lg:h-14 2xl:h-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Unleash Your <span className="text-purple h-full">Potential</span>
          </motion.h1> */}
          <HeaderTitle
            text="Unleash Your Potential"
            highlight="Potential"
            animation={{
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          />

          <motion.p
            className="w-3/4 md:w-4/6 subheader_text pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At Jasper Azerbaijan, we don’t just build technology—we
            revolutionize the way businesses embrace the digital world. From
            AI-driven platforms and e-commerce solutions to secure blockchain
            contracts and custom backend architectures, our expert team is here
            to help you break boundaries and stand out in today’s fast-paced
            market.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  headText={card.headText}
                  descText={card.descText}
                  logo={card.logo}
                />
              </motion.div>
            ))}
          </div>
        </section>
        <section className="pt-40 ">
          {featuresData.map((feature, index) => (
            <FeaturesBlock
              key={index}
              headText={feature.headText}
              descText={feature.descText}
              photo={feature.photo}
              reversed={feature.reversed}
            />
          ))}
        </section>
        <section className="pt-40 text-wrap">
          <HeaderTitle
            text={"Transforming Innovation into Reality"}
            br={["Transforming"]}
            highlight={["Reality"]}
          />
          <p className="w-full md:w-1/2">
            Empower your vision with AI-driven precision. Our technology
            optimizes workflows, enhances automation, and brings intelligent
            solutions to complex challenges—turning bold ideas into real-world
            impact.
          </p>

          <section className="space-y-4 mt-20">
            <div className="flex gap-5 md:flex-row flex-col">
              {kBasedCardData.slice(0, 2).map((card, index) => (
                <SizesBasedCard key={index} {...card} />
              ))}
            </div>
            <div className="flex gap-5 md:flex-row flex-col">
              {kBasedCardData
                .slice(2, kBasedCardData.length)
                .map((card, index) => (
                  <SizesBasedCard key={index} {...card} />
                ))}
            </div>
          </section>
        </section>

        <Pricing onHomePage={true} />

        <section className="pt-40">
          <div className="w-full h-[600px] bg-darkGray rounded-3xl flex flex-col md:flex-row justify-between items-center pt-10">
            <div className=" w-11/12 md:w-1/2 pl-10">
              <HeaderTitle
                text={"Flexible to Choose the Platform"}
                highlight={"Flexible"}
              />

              <p className="text-lg leading-normal font-normal pt-5 w-full">
                Jasper Azerbaijan helps you to make a solution and make that a
                bussines! We build on varios platforms for your needs!
              </p>
            </div>

            <div className="h-full overflow-hidden hidden md:flex w-full">
              {fakeLogosForSlider.map((group, index) => (
                <InlineSlider
                  key={index}
                  logos={group.logos}
                  reversed={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-40">
          {/* <h1 className="text-white header_text">
            Our <span className="text-purple">Team</span>
          </h1> */}
          <HeaderTitle text={"Our Team"} highlight={["Team"]} />
          <div className="flex flex-col md:flex-row justify-between">
            <p className="subheader_text w-full md:w-1/2">
              We have very talented and well motivated team
            </p>

            <div className="flex gap-2 mt-10 mx-auto md:mx-0 md:mt-0">
              <button
                className="size-10 bg-purple rounded-full flex justify-center items-center p-2"
                onClick={slideLeft}
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                className="size-10 bg-purple rounded-full flex justify-center items-center p-2"
                onClick={slideRight}
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="relative mt-10">
            <motion.div className="" initial={false}>
              <AnimatePresence mode="popLayout" initial={true}>
                {!isMobile ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {visibleTestimonials.map((testimonial, index) => (
                      <CustomerReviewCard
                        key={`${testimonial.id}-${index}`}
                        {...testimonial}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col">
                    {visibleTestimonials
                      .slice(0, 1)
                      .map((testimonial, index) => (
                        <CustomerReviewCard
                          key={`${testimonial.id}-${index}`}
                          {...testimonial}
                        />
                      ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="pt-40">
          <FaqSection />
        </section>

        <div className="bg-black w-full h-40"></div>
      </div>
    </div>
  );
}
