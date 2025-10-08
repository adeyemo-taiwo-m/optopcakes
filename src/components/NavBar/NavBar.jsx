import { useState } from "react";
import Logo from "../../ui/Logo";
import MobileNav from "./MobileNav";
import NavButtons from "./NavButtons";
import NavLinks from "../../ui/NavLinks";
import { paragraph } from "../../Utils/Paragragh";

const NavBar = () => {
  const [isOpenNav] = useState(false);
  return (
    <>
      <div className={`flex justify-between items-center ${paragraph}`}>
        <Logo />
        <NavLinks />
        <NavButtons />
      </div>
      <>{isOpenNav && <MobileNav />}</>
    </>
  );
};

export default NavBar;
