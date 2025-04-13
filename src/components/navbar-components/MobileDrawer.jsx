import { useState, useRef, useEffect } from "react";
import InstagramIcon from "@/svgComponents/InstagramIcon";
import { Button } from "../ui/button";
import LinkedinIcon from "@/svgComponents/LinkedinIcon";
import ArrowRight from "@/svgComponents/ArrowRight";
import { menuData } from "@/constants";
import RightDirection from "@/svgComponents/RightDirection";
import FlagIcon from "@/svgComponents/FlagIcon";
import InkpenIcon from "@/svgComponents/InkpenIcon";
import BriefcaseIcon from "@/svgComponents/BriefcaseIcon";
import BookIcon from "@/svgComponents/BookIcon";
import ReferIcon from "@/svgComponents/ReferIcon";
import InstagramColouredIcon from "@/svgComponents/InstagramColouredIcon";
import LinkedinColouredIcon from "@/svgComponents/LinkedinColouredIcon";

const MobileDrawer = ({ isOpen, isTopBannerVisible }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const contentRefs = useRef({});
  const [contentHeights, setContentHeights] = useState({});

  // Add effect to prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling on the body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Re-enable scrolling and restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Cleanup - ensure scrolling is re-enabled when component unmounts
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const heights = {};
    Object.keys(menuData).forEach((category) => {
      if (contentRefs.current[category]) {
        const el = contentRefs.current[category];
        heights[category] = el.scrollHeight;
      }
    });
    setContentHeights(heights);
  }, [menuData]);

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const getIcon = (category) => {
    switch (category) {
      case "Countries":
        return <FlagIcon />;
      case "Test Prep":
        return <InkpenIcon />;
      case "Services":
        return <BriefcaseIcon />;
      case "Resources":
        return <BookIcon />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed left-0 w-full ${
        isTopBannerVisible
          ? `sm:h-[calc(100dvh-113px)] md:h-[calc(100dvh-100px)]`
          : `h-[calc(100dvh-56px)]`
      } bg-neutral-0 z-50 overflow-y-auto scrollbar-hide transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="py-6 px-5">
          <Button variant="default" className="w-full">
            Talk to an Expert
          </Button>
        </div>

        <div className="flex flex-col px-4">
          {Object.entries(menuData).map(([category, items], index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between py-4 px-5 cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex gap-2">
                  <div>{getIcon(category)}</div>
                  <div className="flex items-center gap-3">
                    <span className="text-body-sm text-gray-900">
                      {category}
                    </span>
                  </div>
                </div>
                <RightDirection
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                    expandedCategory === category ? "rotate-90" : ""
                  }`}
                />
              </div>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height:
                    expandedCategory === category
                      ? `${contentHeights[category]}px`
                      : "0px",
                  opacity: expandedCategory === category ? 1 : 0,
                }}
                ref={(el) => (contentRefs.current[category] = el)}
              >
                <ul className="pl-8">
                  {items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-body-sm py-2 text-neutral-600 hover:text-gray-900 cursor-pointer transition-colors"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto p-4">
          <div className="bg-brand-secondary rounded-[6px] py-4 px-6">
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-neutral-900 text-body-sm">
                    Refer & Earn
                  </h3>
                  <p className="text-body-sm text-neutral-700">
                    Help your friend study abroad & earn rewards
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-primary text-body-sm font-semibold">
                    Refer now
                  </span>
                  <RightDirection className="h-4 w-4 text-brand-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <ReferIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-neutral-100 w-full">
          <button className="py-4 px-5 flex gap-1 border-r border-r-neutral-200 flex-1 items-center justify-center">
            <span className="flex text-neutral-900 text-body-sm">
              Follow us on
            </span>
            <div className="flex">
              <InstagramColouredIcon />
            </div>
          </button>
          <button className="py-4 px-5 flex gap-1 flex-1 items-center justify-center">
            <span className="flex text-neutral-900 text-body-sm">
              Follow us on
            </span>
            <div className="flex">
              <LinkedinColouredIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
