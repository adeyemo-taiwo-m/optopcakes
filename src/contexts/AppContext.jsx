import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
