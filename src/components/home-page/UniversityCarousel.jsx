import { useMediaQuery } from "@/hooks/use-media-query";
import BoltIcon from "@/svgComponents/BoltIcon";
import React from "react";

const UniversityCarousel = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="md:py-20 py-[60px] w-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <span className="text-lg text-neutral-800 font-semibold flex justify-center">
            850+ university partners & growing
          </span>
          <div className="flex justify-center">uni</div>
        </div>
        {!isMobile && (
          <div className="flex gap-12 justify-center">
            <div className="flex gap-2">
              <BoltIcon />
              <p className="text-lg text-brand-primary font-semibold">
                Visa Application Support
              </p>
            </div>
            <div className="flex gap-2">
              <BoltIcon />
              <p className="text-lg text-brand-primary font-semibold">
                Accommodation Assistance
              </p>
            </div>
            <div className="flex gap-2">
              <BoltIcon />
              <p className="text-lg text-brand-primary font-semibold">
                LSE Guardian Expert
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityCarousel;
