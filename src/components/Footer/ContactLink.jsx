import React from "react";

function ContactLink({ to, children }) {
  return (
    <a
      href={to}
      className="text-primary-default hover:text-primary-light cursor-pointer transition-colors duration-300"
      aria-label="Facebook"
    >
      {children}
    </a>
  );
}

export default ContactLink;
