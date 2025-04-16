"use client";

import { createContext, useContext, useState } from "react";

const LayoutContext = createContext(undefined);

export const LayoutProvider = ({ children }) => {
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(56);

  const getFullPageHeight = () => {
    if (typeof window === "undefined") {
      return "calc(100dvh - 56px)";
    }

    if (!isTopBannerVisible) {
      return `calc(100dvh - ${navbarHeight}px)`;
    }

    if (window.innerWidth >= 768) {
      return `calc(100dvh - 100px)`;
    }

    return `calc(100dvh - 113px)`;
  };

  return (
    <LayoutContext.Provider
      value={{
        isTopBannerVisible,
        setIsTopBannerVisible,
        navbarHeight,
        setNavbarHeight,
        getFullPageHeight,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
