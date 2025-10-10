import { HiX } from "react-icons/hi";
// eslint-disable-next-line
import { motion } from "motion/react";
function Modal({ children, closeModal, ref }) {
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
        },
      }}
      className="fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm z-[1000]"
    >
      <div className="w-full max-w-4/5 lap:max-w-3/5 desk:max-w-2/5 p-6 bg-white/80 border-2 border-white rounded-2xl shadow-lg">
        <span className="align-right flex justify-end  p-2  ">
          <HiX
            onClick={() => closeModal((isOpen) => !isOpen)}
            className="text-2xl cursor-pointer rounded-2xl  text-primary-active "
          />
        </span>
        {children}
      </div>
    </motion.div>
  );
}

export default Modal;
