import MobileNavItem from "./MobileNavItem";
import Button from "../../ui/Button";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import { createRef, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
// eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { slideDown } from "../../Utils/helpers";
import useOutsideClick from "../../hooks/useOutsideClick";
import { scroller } from "react-scroll";

function MobileNav() {
  const excludeRef = createRef(null);
  const { setIsOpenNav } = useContext(AppContext);
  const modalRef = useOutsideClick(
    () => setIsOpenNav((isOpen) => !isOpen),
    excludeRef
  );
  return createPortal(
    <div className="overlay">
      <AnimatePresence>
        <motion.div
          variants={slideDown}
          initial="initial"
          animate="animate"
          exit="exit"
          ref={modalRef}
          className="tab:hidden bg-primary-default  absolute z-100000 top-0 right-0 rounded-bl-mob-nav w-screen rounded-br-mob-nav  p-8 border-t border-primary-light shadow-lg"
        >
          <div className="w-full" ref={excludeRef}>
            <span className="align-right flex justify-end  p-2  ">
              <HiX
                onClick={() => setIsOpenNav((isOpen) => !isOpen)}
                className="text-2xl cursor-pointer rounded-2xl  text-white "
              />
            </span>
            <ul className="flex w-full  flex-col items-start px-6 py-4 space-y-6  text-white font-medium">
              <MobileNavItem to="hero">Home</MobileNavItem>

              <MobileNavItem to="about">About us</MobileNavItem>
              <MobileNavItem to="services">Our services</MobileNavItem>
              <MobileNavItem to="testimonials">Testimonials</MobileNavItem>

              <li className="mt-2 ml-4 flex flex-col gap-4 w-full">
                <a
                  href="https://wa.me/2348032822302"
                  className=" text-primary-default  rounded-sm !text-sm   justify-center items-center flex gap-2 px-4 py-3    bg-white  hover:bg-primary-light"
                >
                  Contact Us
                </a>
                <Button
                  onClick={() => {
                    scroller.scrollTo("booking", {
                      smooth: true,
                      duration: 600,
                      offset: 0,
                    });
                  }}
                  type="secondary"
                  className="!border-primary-light  hover:border-primary-light  hover:!text-primary-default hover:!bg-white text-white"
                >
                  Book now
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>,
    document.body
  );
}

export default MobileNav;
