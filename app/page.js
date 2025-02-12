"use client";

import LandingCard from "@components/LandingCard";
import Slider from "@components/Slider";
import { HiSparkles, HiArrowUpTray, HiMiniRocketLaunch } from "react-icons/hi2";
import Image from "@node_modules/next/image";
import featureBlockImage1 from "@public/assets/featureBlockImage1.png";
import featureBlockImage2 from "@public/assets/featureBlockImage2.png";
import featureBlockImage3 from "@public/assets/featureBlockImage3.png";
import Pricing from "@components/Pricing";
import logo from "@/public/assets/inlineSliderLogo.png";
import { motion } from "framer-motion";

function Card({ headText, descText, logo }) {
  return (
    <div className="w-full bg-[#272829] min-h-56 h-full flex flex-col p-4">
      <div className="size-16 bg-[#914BF1] rounded-full flex justify-center items-center">
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
            <button className="bg-[#914BF1] rounded-2xl p-4 w-40">
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
            <button className="bg-[#914BF1] rounded-2xl p-4 w-40">
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
          <button className="bg-[#914BF1] rounded-2xl p-4 w-40 mx-auto mb-4">
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
        <div className="w-12 h-12 bg-[#914BF1] rounded-full flex justify-center items-center">
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

export default function Home() {
  return (
    <div className="w-screen h-[99999px] bg-black">
      <div className="w-11/12 mx-auto text-white">
        <LandingCard />
        <Slider />
        <section className="pt-40 ">
          <h1 className="header_text font-bold w-1/2 md:w-full leading-[46px]">
            Unleash Your <span className="text-[#914BF1]">Creativity</span>
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
            <span className="text-[#914BF1]">Reality</span>
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
          <div className="w-full h-[600px] bg-[#272829] rounded-3xl flex flex-col md:flex-row justify-between items-center pt-10">
            <h1 className="header_text font-medium leading-none md:leading-[40px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[72px] pl-10  w-full md:w-1/2">
              Seamless Tool <br />
              <span className="text-[#914BF1]">Integration</span>
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
      </div>
    </div>
  );
}
