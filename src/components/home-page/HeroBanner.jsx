import React from "react";
import NumberCountUp from "../NumberCountUp";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";
import { Button } from "../ui/button";
import QuotesIcon from "@/svgComponents/QuotesIcon";
import { useMediaQuery } from "@/hooks/use-media-query";

const numberCountUpData = [
  {
    title: "Success Rate",
    data: 98,
    suffix: "%",
  },
  {
    title: "Students Placed",
    data: 10,
    suffix: "k+",
  },
  {
    title: "Scholarships",
    data: 50,
    suffix: "k+",
  },
];

const HeroBanner = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="w-full py-6 md:gap-0 gap-8 md:py-16 px-5 md:px-24 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 max-w-[600px] md:my-5 items-center md:items-start">
        <div className="flex flex-col md:gap-9 gap-8 items-center justify-center md:items-start md:justify-start">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h1 className="text-h1 font-bold text-neutral-800 font-heading self-center md:self-start">
                We Guide You To
              </h1>
              <h1 className="text-[37px] font-bold text-neutral-800 font-heading self-center md:self-start text-center md:text-start">
                The Right University
              </h1>
            </div>
            <span className="text-h6 text-neutral-600 font-medium font-heading text-center md:text-start">
              so you can Master your Dreams.
            </span>
          </div>
          <div className="flex flex-col gap-5 md:gap-6">
            <Button variant="large">Book a FREE counselling today</Button>
            <div className="flex gap-1 self-center md:self-start">
              <span>or,</span>
              <Button variant="link">Get a FREE Profile Evaluation</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-12">
          {numberCountUpData.map((item) => (
            <div className="flex flex-col gap-2 md:items-start items-center">
              <NumberCountUp
                end={item.data}
                suffix={item.suffix}
                className="text-2xl md:text-h5 font-semibold text-neutral-700 font-heading"
              />
              <span className="text-sm md:text-base">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full h-[300px] md:w-[405px] md:h-[505px] md:min-w-[505px] rounded-xl bg-brand-secondary overflow-hidden bg-cover bg-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./hero-bg-desktop.svg')`,
          }}
        />

        <img
          src={isMobile ? "./student-mobile.png" : "./student.png"}
          alt="Student"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute left-6 md:left-12 bottom-20 md:bottom-24 font-sofia z-30 text-neutral-0 font-semibold text-[150px]">
          <QuotesIcon width={isMobile && 40} height={isMobile && 40} />
        </span>
        <span className="flex w-full h-full items-end relative z-30 text-neutral-0 font-semibold font-heading text-body-lg md:text-h6 p-6 md:px-14 md:py-10 text-center">
          Learnshack helped me overcome visa delays and study in Ireland
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#33333310] to-[#333333]"></div>
      </div>
      <a
        href="https://wa.me/918178759588"
        target="_blank"
        className="fixed right-7 bottom-7 w-16 h-16 cursor-pointer z-50 hidden md:flex"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

export default HeroBanner;
