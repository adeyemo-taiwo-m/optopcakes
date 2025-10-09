import SpinImage from "../HeroInfo/SpinImage";
// eslint-disable-next-line
import { easeIn, motion } from "motion/react";
function HeroImage() {
  const imageArr = Array.from({ length: 4 }, (_, i) => i + 1);
  console.log(imageArr);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: easeIn,
        },
      }}
      className="flex relative justify-center items-center my-10"
    >
      <motion.img
        transition={{ duration: 0.5 }}
        animate={{
          rotate: 360,
          transition: {
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          },
        }}
        src="/small-chop.png"
        className="w-60 tab:w-100 lap:w-120 desk:w-160"
      />
      <SpinImage radius={120} otherSTyle=" tab:hidden lap:hidden" />
      <SpinImage otherSTyle=" hidden tab:block lap:hidden" />
      <SpinImage radius={230} otherSTyle="hidden lap:block   desk:hidden" />
      <SpinImage radius={270} otherSTyle="hidden desk:block" />
    </motion.div>
  );
}

export default HeroImage;
