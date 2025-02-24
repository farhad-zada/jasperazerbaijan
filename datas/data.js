import { AiOutlineMobile } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";

export const servicesCardData = [
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

import featureBlockImage1 from "@public/assets/featureBlockImage1.jpeg";
import featureBlockImage2 from "@public/assets/featureBlockImage2.jpeg";
import featureBlockImage3 from "@public/assets/featureBlockImage3.jpeg";
import featureBlockImage4 from "@public/assets/featureBlockImage4.jpeg";

export const featuresData = [
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
    photo: featureBlockImage4,
    reversed: true,
  },
];

import avatarExample from "@public/assets/avatarExample.png";
import elgunTeam from "@public/assets/Teams/ElgunCEO.jpeg";
import farhadTeam from "@public/assets/Teams/FerhadBACKEND.jpeg";
import aliTeam from "@public/assets/Teams/AliFRONT.jpeg";

export const teamMembersData = [
  {
    id: 1,
    image: elgunTeam,
    name: "Elgun",
    comment:
      "Biz sadəcə proqram yazmırıq - biz gələcəyin texnoloji standartlarını müəyyən edirik. Mobil, web və blockchain həllərimizlə biznesinizi yeni səviyyəyə daşıyırıq. Uğurunuzun texnoloji tərəfdaşıyıq.",
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

import { MdInsights } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";

export const sizesBasedCardData = [
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

import cppSVG from "@public/assets/logos/cpp.svg";
import jsSVG from "@public/assets/logos/js.svg";
import pythonSVG from "@public/assets/logos/python.svg";
import javaSVG from "@public/assets/logos/java.svg";
import csharpSVG from "@public/assets/logos/cSharp.svg";
import logo from "@/public/assets/inlineSliderLogo.png";
import reactSVG from "@public/assets/logos/react.svg";
import angularSVG from "@public/assets/logos/angular.svg";
import vueSVG from "@public/assets/logos/vue.svg";
import expressSVG from "@public/assets/logos/express.svg";
import nuxtSVG from "@public/assets/logos/nuxt.svg";

export const threeColInfiniteSliderLogosData = [
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

export const pricesData = [
  {
    id: 1,
    planType: "Basic",
    monthlyPrice: 199,
    yearlyPrie: 1499,
    playTypeDescription: "Billed",
    highlight: false,
    features: [
      "Basic AI-generated designs",
      "Access to customization tools",
      "Standard templates library",
      "5 projects per month",
    ],
  },
  {
    id: 2,
    planType: "Normal",
    monthlyPrice: 499,
    yearlyPrie: 3999,
    playTypeDescription: "Billed ",
    highlight: true,
    features: [
      "Advanced AI-generated designs",
      "Full access to customization tools",
      "Premium templates library",
      "Unlimited projects",
      "Real-time collaboration",
      "Priority email support",
    ],
  },
  {
    id: 3,
    planType: "Premium",
    monthlyPrice: 999,
    yearlyPrie: 7999,
    playTypeDescription: "Billed ",
    highlight: false,
    features: [
      "All features included in Pro Plan",
      "Dedicated account manager",
      "Custom AI solutions and designs",
      "Onboarding and training sessions",
      "24/7 priority support",
      "Advanced analytics and reporting",
      "Secure cloud storage",
    ],
  },
];
