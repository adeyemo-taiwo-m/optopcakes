import React from "react";
import { paragraph } from "../../Utils/Paragragh";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import GridImages from "./GridImages";

// eslint-disable-next-line
import { motion } from "motion/react";
import { fadeUpSection } from "../../Utils/helpers";

function Gallery() {
  return (
    <motion.section {...fadeUpSection()} className={` ${paragraph} space-y-8`}>
      <div className="space-y-3 pt-10">
        <Heading type="h2">Our Recent Works</Heading>
        <P>
          Browse through our gallery to see how we bring events to life — from
          mouth-watering small chops and elegant cakes to stunning decorations
          and full catering setups
        </P>
      </div>
      <div>
        <GridImages />
      </div>
    </motion.section>
  );
}

export default Gallery;
