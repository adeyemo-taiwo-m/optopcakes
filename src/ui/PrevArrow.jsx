//eslint-disable-next-line
import { motion } from "motion/react";

export default function PrevArrow({ onClick, icon }) {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{
        x: -20,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 100,
        },
      }}
      className={`absolute w-12 h-12 flex justify-center items-center lap:-left-12 desk:left:8 lap:top-1/2 left-8   -translate-y-1/2 z-10 bg-primary-default text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition`}
    >
      {icon}
    </motion.div>
  );
}
