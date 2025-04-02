import React from "react";
import { Button } from "../ui/button";
import GraduationHatIcon from "@/svgComponents/GraduationHatIcon";

const LimitedScholarships = () => {
  return (
    <div className="md:py-20 py-[60px] w-full px-5 md:px-24 flex flex-col gap-14 items-center justify-center">
      <div className="flex md:flex-row flex-col-reverse bg-neutral-0 rounded-xl ">
        <div className="relative md:p-14 p-5 flex flex-col justify-start md:gap-10 gap-8">
          <GraduationHatIcon className="hidden md:flex absolute -top-10 -left-7" />
          <div className="flex flex-col md:gap-6 gap-4">
            <div className="flex flex-col md:gap-4 gap-3">
              <div className="flex items-center justify-start gap-3">
                <div className="w-[10px] h-[10px] bg-system-success-600 rounded-full" />
                <span className="text-brand-primary font-semibold text-body-xl">
                  LIMITED SCHOLARSHIPS AVAILABLE
                </span>
              </div>
              <span className="text-h4 font-heading text-neutral-800 font-semibold max-w-[570px]">
                Win Scholarships Upto ₹800,000+ for Top Universities
              </span>
            </div>
            <span className="text-body-lg text-neutral-700 max-w-[570px]">
              Unlock global scholarships and find the best opportunities to ease
              your financial burden and take the first step towards financial
              aid.
            </span>
          </div>
          <div className="flex md:w-fit w-full gap-4">
            <Button className="flex-1">Apply Now</Button>
            <Button className="flex-1" variant="outline">
              Know More
            </Button>
          </div>
        </div>
        <div className="flex relative p-3 md:p-6">
          <GraduationHatIcon className="md:hidden absolute -top-6 -left-5" />
          <img src="./scholarship.png" />
        </div>
      </div>
    </div>
  );
};

export default LimitedScholarships;
