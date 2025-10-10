export const fadeUp = (delay) => {
  return {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeUpSection = () => {
  return {
    initial: { y: 80, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },

    viewport: { amount: 0.3, once: false },
  };
};

export const slideDown = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    },
  },
  exit: {
    y: "-100%",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);
}
