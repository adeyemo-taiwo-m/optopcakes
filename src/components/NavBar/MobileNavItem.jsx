import React from "react";
import { Link } from "react-scroll";

function MobileNavItem({ children, to = "#", navRef }) {
  return (
    <Link ref={navRef} to={to} className="w-full">
      <li className="hover:text-primary-active text-xl w-full hover:bg-primary-light duration-300  transition-colors text-white  px-4 py-3 rounded-sm  border-b border-primary-light/20 ">
        {children}
      </li>
    </Link>
  );
}

export default MobileNavItem;
