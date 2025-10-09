import React from "react";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import { paragraph } from "../../Utils/Paragragh";
import TestimonialItems from "./TestimonialItems";

// eslint-disable-next-line
import { motion } from "motion/react";
import { fadeUpSection } from "../../Utils/helpers";
import { Element } from "react-scroll";
function Testimonials() {
  return (
    <Element name="testimonials">
      <motion.section
        {...fadeUpSection()}
        className={` ${paragraph} space-y-8 py-14 overflow-hidden bg-primary-light`}
      >
        <div className="space-y-10 lap:space-y-16 pt-10">
          <div className="space-y-3">
            <Heading type="h2">Hear what out clients say</Heading>
            <P>
              Hear from our happy clients, real stories, star ratings, and
              experiences that showcase the quality and care we bring to every
              event.
            </P>
          </div>
          <div className="space-y-10">
            <TestimonialItems xArray={["-100%", "0%"]} />
            <TestimonialItems xArray={["0%", "-100%"]} />
          </div>
        </div>
      </motion.section>
    </Element>
  );
}

export default Testimonials;
