"use client";

import LandingCard from "@components/LandingCard";
import avatarExample from "@public/assets/avatarExample.png";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useState, useCallback, useEffect } from "react";

import Slider from "@components/Slider";
import { HiSparkles, HiArrowUpTray, HiMiniRocketLaunch } from "react-icons/hi2";
import Image from "@node_modules/next/image";
import featureBlockImage1 from "@public/assets/featureBlockImage1.png";
import featureBlockImage2 from "@public/assets/featureBlockImage2.png";
import featureBlockImage3 from "@public/assets/featureBlockImage3.png";
import Pricing from "@components/Pricing";
import logo from "@/public/assets/inlineSliderLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import CustomerReviewCard from "@components/CustomerReviewCard";

function Card({ headText, descText, logo }) {
  return (
    <div className="w-full bg-darkGray min-h-56 h-full flex flex-col p-4">
      <div className="size-16 bg-purple rounded-full flex justify-center items-center">
        {logo}
      </div>
      <div className="mt-14">
        <h3 className="subheader_text font-bold">{headText}</h3>
        <p className="py-3 w-5/6 subheader_text">{descText}</p>
      </div>
    </div>
  );
}

function FeaturesBlock({ headText, descText, photo, reversed = false }) {
  return (
    <div className="mt-0 mb-20 md:mb-0 md:mt-20">
      {reversed ? (
        <div className="md:flex items-center justify-between w-full hidden">
          <Image
            src={photo}
            width={400}
            height={600}
            alt={`${headText} photo`}
          />
          <div className="flex flex-col w-1/2">
            <h3 className="header_text w-4/6 font-semibold leading-[72px]">
              {headText}
            </h3>
            <p className="py-3 w-5/6 subheader_text">{descText}</p>
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
            <p className="py-3 w-5/6 subheader_text">{descText}</p>
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
          <p className="py-3  subheader_text">{descText}</p>
          <button className="bg-purple rounded-2xl p-4 w-40 mx-auto mb-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function SizesBasedCard({ headText, descText, logo, size }) {
  return (
    <div
      className={`${
        size === 1 ? "w-full md:w-2/3" : "w-full"
      } bg-[#1A1A1A] h-96 rounded-2xl p-6 flex flex-col justify-between`}
    >
      {/* Top Section (Text + Icon) */}
      <div className="flex justify-between items-start">
        <p className="text-gray-300 w-5/6 text-lg md:text-lg 2xl:text-2xl">
          {descText}
        </p>
        <div className="w-12 h-12 bg-purple rounded-full flex justify-center items-center">
          {logo}
        </div>
      </div>

      {/* Bottom Section (Title) */}
      <h3 className="text-white font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        {headText}
      </h3>
    </div>
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
    headText: "Upload Brief",
    descText: "Share your project details and let our AI grasp your vision.",
    logo: <HiArrowUpTray size={30} />,
  },
  {
    headText: "Generate Designs",
    descText: "Watch as our AI crafts unique design ideas tailored to you.",
    logo: <HiSparkles size={30} />,
  },
  {
    headText: "Refine Creation",
    descText: "Perfect your chosen concept with easy-to-use AI tools.",
    logo: <HiMiniRocketLaunch size={30} />,
  },
];

const featuresData = [
  {
    id: 1,
    headText: "High-Resolution Outputs",
    descText:
      "Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.",
    photo: featureBlockImage1,
    reversed: false,
  },
  {
    id: 2,
    headText: "Real-Time Collaboration",
    descText:
      "Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.",
    photo: featureBlockImage2,
    reversed: true,
  },
  {
    id: 3,
    headText: "Advanced Scheduling Tools",
    descText:
      "Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.",
    photo: featureBlockImage3,
    reversed: false,
  },
];

const kBasedCardData = [
  {
    headText: "Witness the Future",
    descText:
      "Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.",
    logo: <HiArrowUpTray size={30} />,
    size: 1,
  },
  {
    headText: "Visualize the Impossible",
    descText:
      "Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity.",
    logo: <HiArrowUpTray size={30} />,
    size: 2,
  },
  {
    headText: "Synergy and Style",
    descText:
      "Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves its purpose flawlessly.",
    logo: <HiArrowUpTray size={30} />,
    size: 2,
  },
  {
    headText: "Timeless Precision",
    descText:
      "Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.",
    logo: <HiArrowUpTray size={30} />,
    size: 1,
  },
];

const fakeLogosForSlider = [
  {
    id: 1,
    logos: [
      { id: 1, src: logo, alt: "logo" },
      { id: 2, src: logo, alt: "logo" },
      { id: 3, src: logo, alt: "logo" },
      { id: 4, src: logo, alt: "logo" },
      { id: 5, src: logo, alt: "logo" },
    ],
  },
  {
    id: 2,
    logos: [
      { id: 1, src: logo, alt: "logo" },
      { id: 2, src: logo, alt: "logo" },
      { id: 3, src: logo, alt: "logo" },
      { id: 4, src: logo, alt: "logo" },
      { id: 5, src: logo, alt: "logo" },
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
    image: avatarExample,
    name: "John D.",
    comment:
      "Using this AI-powered design assistant has completely transformed the way I approach my projects. It’s like having a professional designer on call 24/7. Highly recommend it!",
  },
  {
    id: 2,
    image: avatarExample,
    name: "Michael S.",
    comment:
      "The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details.",
  },
  {
    id: 3,
    image: avatarExample,
    name: "David L.",
    comment:
      "This tool is a game-changer! It’s incredibly intuitive and the results are always impressive. I can't imagine working without it now.",
  },
  {
    id: 4,
    image: avatarExample,
    name: "James K.",
    comment:
      "I was skeptical at first, but this AI assistant exceeded all my expectations. It’s easy to use and delivers professional-grade designs effortlessly.",
  },
  {
    id: 5,
    image: avatarExample,
    name: "Robert P.",
    comment:
      "What an amazing tool! The AI understands my needs perfectly and helps me create stunning designs in no time. My productivity has doubled!",
  },
  {
    id: 6,
    image: avatarExample,
    name: "William M.",
    comment:
      "I love how this AI-powered assistant blends technology and creativity. It’s a must-have for any designer looking to streamline their workflow and produce top-notch work.",
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="w-screen h-[99999px] bg-black">
      <div className="w-11/12 mx-auto text-white">
        <LandingCard />
        <Slider />
        <section className="pt-40 ">
          <h1 className="header_text font-bold w-1/2 md:w-full leading-[46px]">
            Unleash Your <span className="text-purbg-purple">Creativity</span>
          </h1>
          <p className="w-3/4 md:w-4/6 subheader_text pt-10">
            Discover how our AI-Powered Design Assistant transforms your ideas
            into stunning designs effortlessly. Follow these simple steps to
            turn your vision into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {cardData.map((card, index) => (
              <Card
                key={index}
                headText={card.headText}
                descText={card.descText}
                logo={card.logo}
              />
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
          <h1 className="header_text font-semibold">
            Transforming <br /> Imagination into{" "}
            <span className="text-purbg-purple">Reality</span>
          </h1>
          <p className="w-full md:w-1/2">
            Unlock the full potential of your creativity with our AI-powered
            design assistant. Explore new dimensions of design, from futuristic
            visuals to timeless craftsmanship, and witness how AI can turn your
            wildest ideas into stunning realities.
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
            <h1 className="header_text font-medium leading-none md:leading-[40px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[72px] pl-10  w-full md:w-1/2">
              Seamless Tool <br />
              <span className="text-purbg-purple">Integration</span>
              <p className="text-lg leading-normal font-normal pt-5 w-full">
                NajmAI offers seamless integration with a variety of popular
                design and project management tools, ensuring a smooth and
                efficient workflow.
              </p>
            </h1>
            <div className="h-full overflow-hidden hidden md:flex">
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
          <h1 className="text-white header_text">
            Customer <span className="text-purple">Success</span> Stroies
          </h1>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="subheader_text w-full md:w-1/2">
              Discover how our platform has helped businesses create outstanding
              content effortlessly. Hear directly from our users about their
              success and satisfaction.
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
      </div>
    </div>
  );
}
