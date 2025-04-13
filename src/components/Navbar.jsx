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
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const [isTopBannerVisible, setIsTopBannerVisible] = useState(true);
  const navRef = useRef(null);
  const bannerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!navRef.current) return;

    const updateNavbarHeight = (height) => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    updateNavbarHeight(navRef.current.getBoundingClientRect().height);

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        updateNavbarHeight(entry.contentRect.height);
      }
    });

    observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!bannerRef.current) return;

    const observerOptions = {
      threshold: 0.5,
    };

    const bannerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsTopBannerVisible(entry.isIntersecting);
      });
    }, observerOptions);

    bannerObserver.observe(bannerRef.current);

    return () => {
      bannerObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={bannerRef}>
        <TopBanner />
      </div>
      <nav className="w-full max-w-[100vw] sticky top-0 z-[100]" ref={navRef}>
        <div className="bg-white flex flex-col w-full sticky top-0 z-50">
          <div className="px-5 lg:px-20 lg:py-2 py-1 relative">
            <div className="flex justify-between items-center">
              <div className="w-[80px] h-[48px] lg:w-[100px] lg:h-[60px] flex-shrink-0">
                <LogoLight />
              </div>

              {mobileSearchVisible && (
                <div className="lg:hidden flex-grow px-3 animate-fadeIn">
                  <SearchBarComponent />
                </div>
              )}

              <div className="lg:flex lg:flex-grow items-center gap-6 mx-6 hidden">
                <SearchBarComponent />
              </div>

              <div className="hidden lg:flex items-center gap-6">
                <NavigationMenuComponent />
                <Button variant="outline">Evaluate Profile</Button>
                <Button onClick={() => navigate("/contact")}>
                  Talk to Founders
                </Button>
              </div>

              <div className="lg:hidden flex gap-4 items-center flex-shrink-0">
                <div
                  className="flex h-fit rounded-full bg-brand-secondary p-[6px] items-center justify-center cursor-pointer"
                  onClick={() => setMobileSearchVisible((prev) => !prev)}
                >
                  {mobileSearchVisible ? (
                    <PlusIcon className="rotate-45" width={24} height={24} />
                  ) : (
                    <SearchIcon />
                  )}
                </div>

                <div
                  className="flex cursor-pointer"
                  onClick={() => setNavDrawerOpen((prev) => !prev)}
                >
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

        <MobileDrawer
          isOpen={navDrawerOpen}
          isTopBannerVisible={isTopBannerVisible}
        />
      </nav>
    </>
  );
};

export default NavBar;
