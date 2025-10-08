import React from "react";
import { HiBars3 } from "react-icons/hi2";
import Button from "../../ui/Button";
import CartButton from "../../ui/CartButton";

function NavButtons() {
  return (
    <div>
      <HiBars3
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
