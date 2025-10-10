import React, { cloneElement } from "react";
// eslint-disable-next-line
import { motion } from "motion/react";

function Button({ onClick, children, type = "primary", icon, className }) {
  const styles = {
    primary:
      "rounded-sm !text-sm  bg-primary-default hover:bg-primary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",

    secondary:
      "rounded-sm border  hover:bg-secondary-hover  justify-center border-secondary-hover  flex gap-2 px-4 py-3 text-secondary-active  hover:text-white  items-center",
    tertiary:
      "rounded-md text-sm mob:text-base text-center w-full bg-primary-default justify-center hover:bg-primary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",
    quantity:
      "w-8 h-8 flex items-center flex items-center justify-center rounded-md bg-primary-default text-white text-xl",
    whatsapp:
      "rounded-sm border justify-center  hover:bg-whatsapp border-whatsapp  flex gap-2 px-4 py-3 text-whatsapp  hover:text-white  items-center",
    delete:
      "rounded-sm bg-secondary-default hover:bg-secondary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",
  };
  return (
    <motion.button
      whileTap={{ y: 10 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      className={`${styles[type]} ${className} cursor-pointer group transition-all duration-300 `}
    >
      {children}{" "}
      {cloneElement(<span>{icon}</span>, {
        className:
          "transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-45",
      })}
    </motion.button>
  );
}

export default Button;
