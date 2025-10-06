import React from "react";

function Button({ children, type = "primary", icon }) {
  const styles = {
    primary:
      "rounded-sm bg-primary-default hover:bg-primary-hover items-center flex gap-2 px-4 py-3 text-white",

    secondary:
      "rounded-sm border  hover:bg-secondary-hover border-secondary-hover  flex gap-2 px-4 py-3 text-secondary-active  hover:text-white  items-center",
  };
  return (
    <button className={styles[type]}>
      {children} {icon}
    </button>
  );
}

export default Button;
