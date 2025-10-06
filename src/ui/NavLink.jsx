import { Link } from "react-scroll";

function NavLink({ children, to }) {
  return (
    <Link
      to={to}
      activeClass="primary-default"
      spy={true}
      offset={-200}
      smooth={true}
      duration={500}
      className="hover:text-primary-default   "
    >
      {children}
    </Link>
  );
}

export default NavLink;
