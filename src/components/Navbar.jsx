"use client";

import { useEffect, useRef } from "react";
import LogoLight from "@/svgComponents/LogoLight";
import TopBanner from "./navbar-components/TopBanner";
import NavigationMenuComponent from "./navbar-components/NavigationMenuComponent";
import SearchBarComponent from "./navbar-components/SearchBarComponent";
import MobileDrawer from "./navbar-components/MobileDrawer";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import SearchIcon from "@/svgComponents/SearchIcon";
import HamburgerIcon from "@/svgComponents/HamburgerIcon";
import PlusIcon from "@/svgComponents/PlusIcon";
import { useState } from "react";

const NavBar = () => {
  const isMobile = useMediaQuery();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  const handleMenu = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <nav className="w-full max-w-[100vw] fixed z-[100]" ref={navRef}>
      <div className="bg-white flex flex-col w-full sticky top-0 z-50">
        <TopBanner />
        <div className={`${isMobile ? "px-5" : "px-20"} py-2 relative`}>
          <div className="flex justify-between">
            <div className="flex-grow flex items-center gap-6">
              <div
                style={{
                  width: isMobile ? "80px" : "100px",
                  height: isMobile ? "48px" : "60px",
                }}
              >
                <LogoLight />
              </div>
              {!isMobile && <SearchBarComponent />}
            </div>
            {!isMobile && (
              <div className="flex items-center gap-6">
                <NavigationMenuComponent />
                <Button variant="outline">Evaluate Profile</Button>
                <Button>Talk to Founders</Button>
              </div>
            )}
            {isMobile && (
              <div className="flex gap-4 items-center justify-center">
                <div className="flex h-fit rounded-full bg-brand-secondary p-[6px] items-center justify-center">
                  <SearchIcon />
                </div>
                <div className="flex" onClick={handleMenu}>
                  {navDrawerOpen ? (
                    <PlusIcon className="rotate-45" width={32} height={32} />
                  ) : (
                    <HamburgerIcon />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileDrawer isOpen={navDrawerOpen} />
    </nav>
  );
};

export default NavBar;
