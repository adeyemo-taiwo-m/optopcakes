import React from "react";

function MobileNavItem({ children, to = "#" }) {
  return (
    <li className="hover:text-primary-active text-xl w-full hover:bg-primary-light duration-300  transition-colors text-white  px-4 py-3 rounded-sm mb-4 border-b border-primary-light/20 ">
      <a href={to}>{children}</a>
    </li>
  );
}

export default MobileNavItem;
