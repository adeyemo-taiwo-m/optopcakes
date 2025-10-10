import { useContext } from "react";
import { HiBars3 } from "react-icons/hi2";
import Button from "../../ui/Button";
import CartButton from "./CartButton";
import { AppContext } from "../../contexts/AppContext";
import { scroller } from "react-scroll";
import CartProductList from "../../features/Cart/CartProductList";

function NavButtons() {
  const { isOpenNav, setIsOpenNav, isOpenCart } = useContext(AppContext);

  console.log(isOpenNav);
  return (
    <div>
      <div>
        <div className="flex items-center lap:hidden gap-4">
          <CartButton />
          <HiBars3
            onClick={() => setIsOpenNav((isOpen) => !isOpen)}
            size={40}
            className="text-primary-default  cursor-pointer"
          />
        </div>
        <div className=" lap:flex gap-8 hidden ">
          <CartButton />
          <Button
            onClick={() =>
              scroller.scrollTo("booking", {
                smooth: true,
                duration: 600,
                offset: -80,
              })
            }
          >
            Get started
          </Button>
        </div>
      </div>
      {isOpenCart && <CartProductList />}
    </div>
  );
}

export default NavButtons;
