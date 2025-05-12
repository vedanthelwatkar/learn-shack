import React, { useRef, useEffect, useState } from "react";
import { useAnimation, useAnimationFrame } from "framer-motion";
import BoltIcon from "@/svgComponents/BoltIcon";
import InfiniteCarousel from "../InfiniteCarousel";

const universities = [
  "/svg-uni-logos/australian-national-university.svg",
  "/svg-uni-logos/brok-university.svg",
  "/svg-uni-logos/delft-university-of-technology.svg",
  "/svg-uni-logos/iu-international-university-of-applied-sciences.svg",
  "/svg-uni-logos/johns-hopkins-university.svg",
  "/svg-uni-logos/kth-royal-institute-of-technology.svg",
  "/svg-uni-logos/massey-university.svg",
  "/svg-uni-logos/mcgill-university.svg",
  "/svg-uni-logos/nanyang-technological-university.svg",
  "/svg-uni-logos/national-university-of-singapore.svg",
  "/svg-uni-logos/paris-saclay-university.svg",
  "/svg-uni-logos/singapore-management-university.svg",
  "/svg-uni-logos/srh-hochschule-berlin.svg",
  "/svg-uni-logos/stanford-university.svg",
  "/svg-uni-logos/trinity-college-dublin.svg",
  "/svg-uni-logos/university-college-cork.svg",
  "/svg-uni-logos/university-college-dublin.svg",
  "/svg-uni-logos/university-college-london.svg",
  "/svg-uni-logos/university-of-amsterdam.svg",
  "/svg-uni-logos/university-of-auckland.svg",
  "/svg-uni-logos/university-of-edinburgh.svg",
  "/svg-uni-logos/university-of-europe-for-applied-sciences.svg",
  "/svg-uni-logos/university-of-groningen-rug.svg",
  "/svg-uni-logos/university-of-otago.svg",
  "/svg-uni-logos/university-of-queensland.svg",
  "/svg-uni-logos/university-of-southampton.svg",
  "/svg-uni-logos/university-of-sydney.svg",
  "/svg-uni-logos/university-of-toronto.svg",
  "/svg-uni-logos/uppsala-university.svg",
  "/svg-uni-logos/yale-university.svg",
];

const UniversityCarousel = () => {
  return (
    <div className="pt-10 pb-5 md:py-[60px] w-full flex items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-8 sm:gap-10">
          <span className="text-body-xl text-neutral-800 font-semibold flex justify-center">
            850+ university partners & growing
          </span>

          <InfiniteCarousel>
            {universities.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={item}
                  alt={`University logo ${index}`}
                  className="h-[80px] w-auto mix-blend-screen"
                />
              </div>
            ))}
          </InfiniteCarousel>
        </div>

        <div className="hidden lg:flex gap-12 justify-center">
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              Visa Application Support
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              Accommodation Assistance
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              LSE Guardian Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCarousel;
