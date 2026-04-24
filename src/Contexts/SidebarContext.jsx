import { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };

    // Run once on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <SidebarContext.Provider
      value={{
        toggle,
        setToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
