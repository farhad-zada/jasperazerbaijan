"use client";

import LandingCard from "@components/LandingCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState, useCallback } from "react";

import Slider from "@components/Slider";
import Image from "@node_modules/next/image";

import Pricing from "@components/Pricing";
import { motion, AnimatePresence } from "framer-motion";
import CustomerReviewCard from "@components/CustomerReviewCard";
import FaqSection from "@components/FaqSection";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { Outfit } from "next/font/google";

import HeaderTitle from "@components/HeaderTitle";

import GetStartedButton from "@components/GetStartedButton";
import {
  featuresData,
  servicesCardData,
  sizesBasedCardData,
  teamMembersData,
  threeColInfiniteSliderLogosData,
} from "@datas/data";
import SubheaderTitle from "@components/SubheaderTitle";
import ContactUs from "@components/ContactUs";
import { handleGoSomewhere } from "@utils/handleGoSomewhere";

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
    <div className="w-full bg-darkGray min-h-56 h-full flex flex-col p-6  rounded-2xl pb-8">
      <div className="size-16 bg-purple rounded-full flex justify-center items-center">
        {logo}
      </div>
      <div className="mt-10">
        <h3 className="text-2xl 2xl:text-3xl font-bold pb-4">{headText}</h3>
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
            className="rounded-2xl"
            src={photo}
            width={400}
            height={600}
            alt={`${headText} photo`}
          />
          <div className="flex flex-col w-1/2">
            <div className="">
              <HeaderTitle text={headText} highlight={[]} />
              <SubheaderTitle text={descText} className={"w-1/2 py-5"} />
            </div>
            {/* <p className="py-3 w-1/2 subheader_text">{descText}</p> */}
            <div className="w-40">
              <GetStartedButton
                onClick={() => handleGoSomewhere("form")}
                className={"bg-purple"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="md:flex items-center justify-between w-full hidden">
          <div className="flex flex-col">
            <HeaderTitle text={headText} highlight={[]} />
            <SubheaderTitle text={descText} className={"w-1/2 py-5"} />
            {/* <p className="py-3 w-1/2 subheader_text">{descText}</p> */}
            <div className="w-40">
              <GetStartedButton
                onClick={() => handleGoSomewhere("form")}
                className={"bg-purple"}
              />
            </div>
          </div>
          <Image
            className="rounded-2xl"
            src={photo}
            width={400}
            height={600}
            alt={`${headText} photo`}
          />
        </div>
      )}
      <div className="md:hidden items-center justify-between w-full flex flex-col">
        <Image
          className="rounded-2xl mb-10"
          src={photo}
          width={400}
          height={600}
          alt={`${headText} photo`}
        />
        <div className="flex flex-col text-center">
          <h3 className="header_text font-semibold leading-[72px]">
            {headText}
          </h3>
          <p className="py-3 subheader_text">{descText}</p>
          {/* <button className="bg-purple rounded-2xl p-4 w-40 mx-auto mb-4">
            Get Started
          </button> */}
          <GetStartedButton
            className={"bg-purple rounded-2xl p-4 w-40 mx-auto mb-4"}
            onClick={() => handleGoSomewhere("form")}
          >
            Get Started
          </GetStartedButton>
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
        <div className="size-12 md:size-16 bg-purple rounded-full flex justify-center items-center">
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

export default function Home() {
  const isMobile = useBreakpoint();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideLeft = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembersData.length - 3 : prevIndex - 1
    );
  }, []);

  const slideRight = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex >= teamMembersData.length - 3 ? 0 : prevIndex + 1
    );
  }, []);

  const visibleTestimonials = [
    teamMembersData[currentIndex],
    teamMembersData[(currentIndex + 1) % teamMembersData.length],
    teamMembersData[(currentIndex + 2) % teamMembersData.length],
  ];

  return (
    <div className="w-screen h-full bg-black overflow-hidden">
      <div
        className={`w-11/12 mx-auto text-white ${outfitFontNormal.className}`}
      >
        <LandingCard />
        {/* <Slider /> */}
        <section className="pt-40">
          <HeaderTitle
            text="Unleash Your Potential"
            highlight="Potential"
            animation={{
              initial: { opacity: 0, y: -20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          />

          <SubheaderTitle
            text={
              "At Jasper Azerbaijan, we don’t just build technology—we revolutionize the way businesses embrace the digital world. From AI-driven platforms and e-commerce solutions to secure blockchain contracts and custom backend architectures, our expert team is here to help you break boundaries and stand out in today’s fast-paced market."
            }
            className={"w-3/4 md:w-4/6 pt-5 md:pt-2 pl-2 "}
          />
          {/* <motion.p
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
          </motion.p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
            {servicesCardData.map((card, index) => (
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
          <SubheaderTitle
            text={`Empower your vision with AI-driven precision. Our technology
            optimizes workflows, enhances automation, and brings intelligent
            solutions to complex challenges—turning bold ideas into real-world
            impact.`}
            className={"w-full md:w-1/2 py-5"}
          />

          <section className="space-y-4 mt-20">
            <div className="flex gap-5 md:flex-row flex-col">
              {sizesBasedCardData.slice(0, 2).map((card, index) => (
                <SizesBasedCard key={index} {...card} />
              ))}
            </div>
            <div className="flex gap-5 md:flex-row flex-col">
              {sizesBasedCardData
                .slice(2, sizesBasedCardData.length)
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

              <SubheaderTitle
                text={`Jasper Azerbaijan helps you to make a solution and make that a
                bussines! We build on varios platforms for your needs!`}
                className={"w-full pt-5"}
              />
            </div>

            <div className="h-full overflow-hidden hidden md:flex w-full">
              {threeColInfiniteSliderLogosData.map((group, index) => (
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
            <SubheaderTitle
              className={"w-full md:w-1/2 py-5"}
              text={`We have very talented and well motivated team`}
            />
            {/* <p className="subheader_text w-full md:w-1/2">
              We have very talented and well motivated team
            </p> */}

            <div className="flex gap-5 md:gap-2 mt-10 mx-auto md:mx-0 md:mt-0">
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

        <div className="pt-40">
          <ContactUs />
        </div>

        {/* <div className="bg-black w-full h-40"></div> */}
      </div>
    </div>
  );
}
