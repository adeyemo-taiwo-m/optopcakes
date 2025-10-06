import Logo from "../ui/Logo";
import NavButtons from "../ui/NavButtons";
import NavLinks from "../ui/NavLinks";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <NavLinks />
      <NavButtons />
    </div>
  );
};

export default NavBar;
