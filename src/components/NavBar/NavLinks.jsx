import { Link } from "react-scroll";
import NavLink from "./NavLink";
function NavLinks() {
  return (
    <ul className="hidden lap:flex items-center gap-10">
      <li>
        <NavLink to="hero">Hero</NavLink>
      </li>
      <li>
        <NavLink to="services">Our services</NavLink>
      </li>
      <li>
        <NavLink to="about">About us</NavLink>
      </li>
      <li>
        <NavLink to="testimonials">Testimonials</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
