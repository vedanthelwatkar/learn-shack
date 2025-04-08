import React from "react";
import WhatsappIcon from "@/svgComponents/WhatsappIcon";
import QuotesIcon from "@/svgComponents/QuotesIcon";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import NumberCountUp from "@/components/NumberCountUp";

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
    data: 1.5,
    prefix: "₹",
    suffix: "Cr+",
    decimalPlaces: 1,
  },
];

const Contact = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="w-full py-6 md:px-10 sm:gap-0 gap-8 sm:py-[60px] px-5 lg:px-24 flex flex-col-reverse sm:flex-row justify-between items-center">
      <div className="flex flex-col gap-8 sm:gap-12 w-full sm:w-1/2 max-w-[600px] sm:my-5 items-center sm:items-start">
        <div className="flex flex-col sm:gap-9 gap-8 items-center justify-center sm:items-start sm:justify-start">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h1 className="lg:text-h1 md:text-h2 text-h1 font-bold text-neutral-800 font-heading self-center sm:self-start">
                We Guide You To
              </h1>
              <h1 className="lg:text-h1 md:text-h2 text-h1 font-bold text-neutral-800 font-heading self-center sm:self-start text-center sm:text-start whitespace-nowrap">
                The Right University
              </h1>
            </div>
            <span className="text-h6 lg:text-[28px] text-neutral-600 font-medium font-heading text-center sm:text-start">
              so you can Master your Dreams.
            </span>
          </div>
          <div className="flex flex-col gap-5 sm:gap-6">
            <Button variant="large">Book a FREE counselling today</Button>
            <div className="flex gap-1 self-center sm:self-start">
              <span>or,</span>
              <Button variant="link">Get a FREE Profile Evaluation</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-12">
          {numberCountUpData.map((item) => (
            <div className="flex flex-col gap-2 sm:items-start items-center">
              <NumberCountUp
                end={item.data}
                prefix={item.prefix}
                suffix={item.suffix}
                decimalPlaces={item.decimalPlaces}
                className="text-h5 font-semibold text-neutral-700 font-heading"
              />
              <span className="text-body-xl">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full h-[300px] sm:w-full sm:h-[300px] md:w-[360px] md:h-[505px] lg:w-[505px] lg:h-[505px] rounded-xl bg-brand-secondary overflow-hidden bg-cover bg-center relative">
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
        <span className="absolute left-6 sm:left-12 bottom-20 font-sofia z-30 text-neutral-0 font-semibold text-[150px]">
          <QuotesIcon width={isMobile && 40} height={isMobile && 40} />
        </span>
        <span className="flex w-full h-full items-end relative z-30 text-neutral-0 font-semibold font-heading text-body-xl md:text-body-2xl lg:text-h6 p-6 sm:px-14 sm:py-10 text-center">
          Learnshack helped me overcome visa delays and study in Ireland
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#33333310] to-[#333333]"></div>
      </div>
      <a
        href="https://wa.me/918178759588"
        target="_blank"
        className="fixed md:right-7 md:bottom-7 right-4 bottom-4 w-16 h-16 cursor-pointer z-50"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

export default Contact;
