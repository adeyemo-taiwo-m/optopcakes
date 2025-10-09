import { HiArrowSmallRight } from "react-icons/hi2";
import Button from "../../ui/Button";
import { fadeUp } from "../../Utils/helpers";
// eslint-disable-next-line
import { motion } from "motion/react";
function HeroButtons() {
  return (
    <motion.div
      variants={fadeUp(0.7)}
      initial="initial"
      animate="animate"
      className="flex flex-col w-full  lap:flex-row gap-3 mx-auto  lap:mx-0 "
    >
      <Button icon={<HiArrowSmallRight />}>Order now</Button>
      <Button type="secondary">View menu</Button>
    </motion.div>
  );
}

export default HeroButtons;
