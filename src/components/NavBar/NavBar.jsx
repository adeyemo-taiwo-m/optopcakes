import { useContext } from "react";
import Logo from "../../ui/Logo";
import MobileNav from "./MobileNav";
import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import { paragraph } from "../../Utils/Paragragh";
// eslint-disable-next-line
import { easeIn, motion } from "motion/react";
import { AppContext } from "../../contexts/AppContext";

const NavBar = () => {
  const { isOpenNav } = useContext(AppContext);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            ease: easeIn,
          },
        }}
        className={`flex justify-between items-center ${paragraph}`}
      >
        <Logo />
        <NavLinks />
        <NavButtons />
      </motion.div>
      <>{isOpenNav && <MobileNav />}</>
    </>
  );
};

export default NavBar;
