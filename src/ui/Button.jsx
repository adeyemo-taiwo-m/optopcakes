import React from "react";

function Button({ onClick, children, type = "primary", icon }) {
  const styles = {
    primary:
      "rounded-sm bg-primary-default hover:bg-primary-hover items-center flex gap-2 px-4 py-3 text-white",

    secondary:
      "rounded-sm border  hover:bg-secondary-hover border-secondary-hover  flex gap-2 px-4 py-3 text-secondary-active  hover:text-white  items-center",
    tertiary:
      "rounded-md text-center w-full bg-primary-default hover:bg-primary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",
    quantity:
      "w-8 h-8 flex items-center flex items-center justify-center rounded-md bg-primary-default text-white text-xl",
  };
  return (
    <button onClick={onClick} className={styles[type]}>
      {children} {icon}
    </button>
  );
}

export default Button;
