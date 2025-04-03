"use client";

import { useEffect, useRef, useState } from "react";
import LogoLight from "@/svgComponents/LogoLight";
import TopBanner from "./navbar-components/TopBanner";
import NavigationMenuComponent from "./navbar-components/NavigationMenuComponent";
import SearchBarComponent from "./navbar-components/SearchBarComponent";
import MobileDrawer from "./navbar-components/MobileDrawer";
import { Button } from "./ui/button";
import SearchIcon from "@/svgComponents/SearchIcon";
import HamburgerIcon from "@/svgComponents/HamburgerIcon";
import PlusIcon from "@/svgComponents/PlusIcon";

const NavBar = () => {
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
        <div className="px-5 lg:px-20 lg:py-2 py-1 relative">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px] lg:w-[100px] lg:h-[60px]">
              <LogoLight />
            </div>
            <div className="lg:flex lg:flex-grow items-center gap-6 mx-6 md:hidden sm:hidden">
              <SearchBarComponent />
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <NavigationMenuComponent />
              <Button variant="outline">Evaluate Profile</Button>
              <Button>Talk to Founders</Button>
            </div>

            <div className="lg:hidden flex gap-4 items-center">
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
          </div>
        </div>
      </div>
      <MobileDrawer isOpen={navDrawerOpen} />
    </nav>
  );
};

export default NavBar;
