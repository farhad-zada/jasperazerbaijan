import useBreakpoint from "@utils/hooks/useBreakpoint";
import { motion } from "framer-motion";

const SubheaderTitle = ({
  text,
  className,
  animation = {},
  highlight = [],
  br = [],
}) => {
  const isMobile = useBreakpoint();
  return (
    <motion.h3
      className={` subheader_text  ${className}`}
      initial={animation.initial}
      whileInView={animation.whileInView}
      transition={animation.transition}
    >
      {text.split(" ").map((word, index) => {
        const isHighlighted = highlight.includes(word);
        const isBreak = br.includes(word);

        return (
          <span
            key={index}
            className={isHighlighted ? "text-purple" : "text-white"}
          >
            {word} {!isMobile && isBreak ? <br /> : null}{" "}
          </span>
        );
      })}
    </motion.h3>
  );
};

export default SubheaderTitle;
