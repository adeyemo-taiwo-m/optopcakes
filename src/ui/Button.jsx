import React from "react";

function Button({ onClick, children, type = "primary", icon, className }) {
  const styles = {
    primary:
      "rounded-sm bg-primary-default hover:bg-primary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",

    secondary:
      "rounded-sm border  hover:bg-secondary-hover  justify-center border-secondary-hover  flex gap-2 px-4 py-3 text-secondary-active  hover:text-white  items-center",
    tertiary:
      "rounded-md text-center w-full bg-primary-default justify-center hover:bg-primary-hover justify-center items-center flex gap-2 px-4 py-3 text-white",
    quantity:
      "w-8 h-8 flex items-center flex items-center justify-center rounded-md bg-primary-default text-white text-xl",
    whatsapp:
      "rounded-sm border justify-center  hover:bg-whatsapp border-whatsapp  flex gap-2 px-4 py-3 text-whatsapp  hover:text-white  items-center",
  };
  return (
    <button
      onClick={onClick}
      className={`${styles[type]} ${className} cursor-pointer`}
    >
      {children} {icon}
    </button>
  );
}

export default Button;
