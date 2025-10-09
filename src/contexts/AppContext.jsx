import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider value={{ isOpenNav, setIsOpenNav, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
