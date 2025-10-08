import { MdOutlineShoppingCart } from "react-icons/md";

function CartButton() {
  return (
    <div className="relative ">
      <button>
        <MdOutlineShoppingCart size={50} className="text-primary-default" />
      </button>
      <div className="text-white bg-primary-default hover:bg-primary-hover border-2 border-white  flex justify-center items-center rounded-full w-8 h-8 absolute right-0 top-0 transform translate-x-2 -translate-y-2">
        7
      </div>
    </div>
  );
}

export default CartButton;
