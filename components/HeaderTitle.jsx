import useBreakpoint from "@utils/hooks/useBreakpoint";
import { motion } from "framer-motion";

const HeaderTitle = ({
  text,
  className,
  animation = {},
  highlight = [],
  br = [], // Yeni br prop'u
}) => {
  const isMobile = useBreakpoint();
  return (
    <motion.h1
      className={`header_text font-bold w-full   ${className}`}
      initial={animation.initial}
      whileInView={animation.whileInView}
      transition={animation.transition}
    >
      {text.split(" ").map((word, index) => {
        const isHighlighted = highlight.includes(word);
        const isBreak = br.includes(word); // Eğer bu kelime br listesinde varsa, <br /> ekle

        return (
          <span
            key={index}
            className={isHighlighted ? "text-purple" : "text-white"}
          >
            {word} {!isMobile && isBreak ? <br /> : null}{" "}
          </span>
        );
      })}
    </motion.h1>
  );
};

export default HeaderTitle;
