import MobileNavItem from "./MobileNavItem";
import Button from "../../ui/Button";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

function MobileNav() {
  return createPortal(
    <div className="tab:hidden absolute z-100000 top-0 right-0 rounded-bl-mob-nav w-screen rounded-br-mob-nav bg-primary-default p-8 border-t border-primary-light shadow-lg">
      <div className="w-full">
        <span className="align-right flex justify-end">
          {" "}
          <HiX className="text-2xl text-white" />
        </span>
        <ul className="flex w-full  flex-col items-start px-6 py-4 space-y-10  text-white font-medium">
          <MobileNavItem>Home</MobileNavItem>
          <MobileNavItem>Our services</MobileNavItem>
          <MobileNavItem>About us</MobileNavItem>
          <MobileNavItem>Testimonials</MobileNavItem>

          <li className="mt-2 ml-4 flex gap-4 w-full">
            <Button className=" !text-primary-default     bg-white  hover:bg-primary-light">
              Contact Us
            </Button>
            <Button
              type="secondary"
              className="!border-primary-light  hover:border-primary-light  hover:!text-primary-default hover:!bg-white text-white"
            >
              Order now
            </Button>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
}

export default MobileNav;
