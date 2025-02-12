import LandingCard from "@components/LandingCard";
import Slider from "@components/Slider";
import { HiSparkles, HiArrowUpTray, HiMiniRocketLaunch } from "react-icons/hi2";

function Card({ headText, descText, logo }) {
  return (
    <div className="w-full bg-[#272829] min-h-56 h-full flex flex-col p-4">
      <div className="size-16 bg-[#914BF1] rounded-full flex justify-center items-center">
        {logo}
      </div>
      <div className="mt-14">
        <h3 className="subheader_text font-bold">{headText}</h3>
        <p>{descText}</p>
      </div>
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

export default function Home() {
  return (
    <div className="w-screen h-[99999px] bg-black">
      <div className="w-11/12 mx-auto">
        <LandingCard />
        <Slider />
        <section className="pt-40 text-white">
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
      </div>
    </div>
  );
}
