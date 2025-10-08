import React from "react";

function FooterLink({ to = "#", children }) {
  return (
    <li>
      <a
        href={to}
        className="hover:text-primary-hover opacity-100 cursor-pointer "
      >
        {children}
      </a>
    </li>
  );
}

export default FooterLink;
