import { useContext } from "react";
import { HiBars3 } from "react-icons/hi2";
import Button from "../../ui/Button";
import CartButton from "./CartButton";
import { AppContext } from "../../contexts/AppContext";

function NavButtons() {
  const { isOpenNav, setIsOpenNav } = useContext(AppContext);
  console.log(isOpenNav);
  return (
    <div>
      <HiBars3
        onClick={() => setIsOpenNav((isOpen) => !isOpen)}
        size={40}
        className="text-primary-default lap:hidden cursor-pointer"
      />
      <div className=" lap:flex gap-8 hidden ">
        <CartButton />
        <Button>Get started</Button>
      </div>
    </div>
  );
}

export default NavButtons;
