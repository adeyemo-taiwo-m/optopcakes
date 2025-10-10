import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AppContext } from "../../contexts/AppContext";

// eslint-disable-next-line
import { motion } from "motion/react";

function CartButton() {
  const { cart, setIsOpenCart } = useContext(AppContext);
  const toggleCart = () => setIsOpenCart((isOpen) => !isOpen);

  return (
    <motion.div
      onHoverStart={toggleCart}
      onHoverEnd={toggleCart}
      className="relative scale-80 tab:scale-100 cursor-pointer"
    >
      <button onClick={toggleCart}>
        <MdOutlineShoppingCart
          size={50}
          className="text-primary-default cursor-pointer"
        />
      </button>
      {cart.length && (
        <div className="text-white bg-primary-default hover:bg-primary-hover border-2 border-white  flex justify-center items-center rounded-full w-8 h-8 absolute right-0 top-0 transform translate-x-2 -translate-y-2">
          {cart?.length}
        </div>
      )}
    </motion.div>
  );
}

export default CartButton;
