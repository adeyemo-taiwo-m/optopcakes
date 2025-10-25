import { createContext, useEffect, useState } from "react";
import { scroller } from "react-scroll";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [openServiceModal, setOpenServiceModal] = useState();
  const [selectedServiceData, setSelectedServiceData] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleViewToCart() {
    scroller.scrollTo("nav", {
      smooth: true,
      duration: 600,
      offset: 0,
    });

    setIsOpenCart((isOpenCart) => !isOpenCart);
  }
  return (
    <AppContext.Provider
      value={{
        isOpenNav,
        setIsOpenNav,
        theme,
        setTheme,
        cart,
        setCart,
        isOpenCart,
        setIsOpenCart,
        serviceName,
        setServiceName,
        handleViewToCart,
        openServiceModal,
        setOpenServiceModal,
        selectedServiceData,
        setSelectedServiceData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
