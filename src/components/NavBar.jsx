import Logo from "../ui/Logo";
import NavButtons from "../ui/NavButtons";
import NavLinks from "../ui/NavLinks";
import { paragraph } from "../Utils/Paragragh";

const NavBar = () => {
  return (
    <div className={`flex justify-between items-center ${paragraph}`}>
      <Logo />
      <NavLinks />
      <NavButtons />
    </div>
  );
};

export default NavBar;
