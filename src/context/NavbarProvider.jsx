import { createContext, useState } from "react";

const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContext;
