import TestimonialItem from "./TestimonialItem";
import { TESTIMONIALS } from "../../assets/data";
// eslint-disable-next-line
import { motion } from "motion/react";

function TestimonialItems({ xArray }) {
  return (
    <ul className="w-full">
      <motion.div
        animate={{ x: xArray }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex gap-4 w-full  no-scrollbar"
      >
        {TESTIMONIALS.map((data, i) => (
          <TestimonialItem data={data} key={i} />
        ))}
      </motion.div>
    </ul>
  );
}

export default TestimonialItems;
