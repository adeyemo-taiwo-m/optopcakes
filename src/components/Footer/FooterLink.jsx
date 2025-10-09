import React from "react";
import { Link } from "react-scroll";

function FooterLink({ to = "#", children }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-primary-hover opacity-100 cursor-pointer "
      >
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
