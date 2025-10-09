import { Element } from "react-scroll";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import Heading from "../../ui/Heading";
import { paragraph } from "../../Utils/Paragragh";
import { fadeUp } from "../../Utils/helpers";
// eslint-disable-next-line
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      className={`lap:flex z-10 relative lap:flex-row justify-between ${paragraph}`}
    >
      <Element
        name="hero"
        className="pb-4 lap:justify-center  flex w-4/5 flex-col lap:text-left  mx-auto lap:mx-0 gap-4 tab:gap-6 lap:w-1/2"
      >
        <div className="space-y-3">
          <Heading>
            {" "}
            Fresh & Tasty{" "}
            <span className="text-primary-default">Small Chops for</span> Every
            Occasion
          </Heading>
          <motion.p
            variants={fadeUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-center tab:w-4/5  lap:text-left tab:mx-auto lap:mx-0"
          >
            Perfectly prepared finger foods delivered to your event, ensuring
            every guest enjoys a tasteful and hassle-free experience
          </motion.p>
        </div>
        <HeroButtons />
      </Element>
      <HeroImage />
    </section>
  );
}

export default Hero;
