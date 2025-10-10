import React from "react";
import { Link } from "react-scroll";

function FooterLink({ to = "#", children, onClick }) {
  return (
    <li onClick={onClick}>
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
