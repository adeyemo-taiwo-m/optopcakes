// eslint-disable-next-line
import { motion } from "motion/react";
import { fadeUp } from "../Utils/helpers";
function Heading({ type = "h1", children, otherStyle }) {
  const style = {
    h1: "font-serif desk:text-7xl text-4xl tab:text-5xl lap:text-6xl font-semibold lap:mx-0  lap:text-left text-text-header mx-auto text-center   lap:w-8/10 desk:text-7xl desk:w-full",
    h2: "text-3xl mx-auto text-center lap:text-4xl desk:text-5xl font-semibold text-text-header ",
    h3: "font-sans font-semibold text-lg text-text-header text-center",
  };
  return (
    <motion.h1
      variants={fadeUp(0.4)}
      initial="initial"
      animate="animate"
      className={`${style[type]} ${otherStyle}`}
    >
      {children}
    </motion.h1>
  );
}

export default Heading;
