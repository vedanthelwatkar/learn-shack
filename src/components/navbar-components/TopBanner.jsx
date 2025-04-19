import { useMediaQuery } from "@/hooks/use-media-query";
import ArrowTopRight from "@/svgComponents/ArrowTopRight";
import Sparkle from "@/svgComponents/Sparkle";
import React from "react";

const TopBanner = () => {
  return (
    <div
      className={`w-full bg-purple-100 sm:py-3  flex items-center justify-center text-purple-800 text-sm`}
    >
      <div
        className={`flex items-center gap-6 sm:gap-16 px-5 py-3 sm:px-0 sm:py-0`}
      >
        <div className="w-4 h-4 text-purple-800">
          <Sparkle />
        </div>
        <span className="flex font-semibold text-center text-body-md">
          Admissions open for September 2025 Intake
          {/* <span className="hidden sm:flex ml-1 self-center">
            <ArrowTopRight />
          </span> */}
        </span>
        <div className="w-4 h-4 text-purple-800">
          <Sparkle />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
