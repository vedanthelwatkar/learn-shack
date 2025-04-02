import { useMediaQuery } from "@/hooks/use-media-query";
import ArrowTopRight from "@/svgComponents/ArrowTopRight";
import Sparkle from "@/svgComponents/Sparkle";
import React from "react";

const TopBanner = () => {
  const isMobile = useMediaQuery();

  return (
    <div
      className={`w-full bg-purple-100 ${
        !isMobile && "py-3"
      } flex items-center justify-center text-purple-800 text-sm`}
    >
      <div className={`flex items-center gap-16 ${isMobile && "px-5 py-3"}`}>
        <div className="w-4 h-4 text-purple-800">
          <Sparkle />
        </div>
        <span className="flex font-semibold text-center text-body-sm md:text-body-md">
          Get Full Access to a 2-Month IELTS Prep Course for Only $99!
          {!isMobile && (
            <span className="ml-1">
              <ArrowTopRight />
            </span>
          )}
        </span>
        <div className="w-4 h-4 text-purple-800">
          <Sparkle />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
