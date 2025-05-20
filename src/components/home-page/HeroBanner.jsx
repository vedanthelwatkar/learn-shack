import React, { useEffect, useState } from "react";
import NumberCountUp from "../NumberCountUp";
import { Button } from "../ui/button";
import QuotesIcon from "@/svgComponents/QuotesIcon";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    image: "/himani-verma-learnshackedu.png",
    alt: "himani-verma-learnshackedu",
    quote:
      "I applied to top 6 universities & got offers from all through Learnshack.",
  },
  {
    image: "/harsh-jirapure-learnshackedu.png",
    alt: "harsh-jirapure-learnshackedu",
    quote:
      "I secured my UK visa in weeks at an affordable cost with Learnshack.",
  },
  {
    image: "/shubhra-pandey-learnshackedu.png",
    alt: "shubhra-pandey-learnshackedu",
    quote: "I cracked IELTS with a 7.5 band in just one month with Learnshack",
  },
  {
    image: "/keyur-sabhani-learnshackedu.png",
    alt: "keyur-sabhani-learnshackedu",
    quote: "I got my admission & refund sorted with Learnshack’s support",
  },
];

const numberCountUpData = [
  { title: "Success Rate", data: 98, suffix: "%" },
  { title: "Students Placed", data: 10, suffix: "k+" },
  {
    title: "Scholarships",
    data: 1.5,
    prefix: "₹",
    suffix: "Cr+",
    decimalPlaces: 1,
  },
];

const HeroBanner = () => {
  const isMobile = useMediaQuery();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 250);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="w-full py-6 md:px-10 sm:gap-0 gap-8 sm:py-[60px] px-5 lg:px-24 flex flex-col-reverse sm:flex-row justify-between items-center">
      <div className="flex flex-col gap-8 sm:gap-12 w-full sm:w-1/2 max-w-[600px] sm:my-5 items-center sm:items-start">
        <div className="flex flex-col sm:gap-9 gap-8 items-center justify-center sm:items-start sm:justify-start">
          <div className="flex flex-col gap-3">
            <h1 className="lg:text-h1 md:text-h2 text-h1 font-bold text-neutral-800 font-heading self-center sm:self-start text-center sm:text-start">
              We Guide You To <br /> The Right University
            </h1>
            <span className="text-h6 lg:text-[28px] text-neutral-600 font-medium font-heading text-center sm:text-start">
              so you can Master your Dreams.
            </span>
          </div>
          <div className="flex flex-col gap-5 sm:gap-6">
            <Button variant="large" onClick={() => navigate("/contact-us")}>
              Book Your FREE Counseling Today
            </Button>
            {/* <div className="flex gap-1 self-center sm:self-start">
              <span>or,</span>
              <Button variant="link">Get a FREE Profile Evaluation</Button>
            </div> */}
          </div>
        </div>
        <div className="flex gap-4 sm:gap-12">
          {numberCountUpData.map((item) => (
            <div
              className="flex flex-col gap-2 md:items-start items-center"
              key={item.title}
            >
              <NumberCountUp
                end={item.data}
                prefix={item.prefix}
                suffix={item.suffix}
                decimalPlaces={item.decimalPlaces}
                className="text-h5 font-semibold text-neutral-700 font-heading"
              />
              <span className="text-body-xl md:text-start text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full h-[300px] md:w-[360px] sm:h-[505px] lg:w-[505px] lg:h-[505px] rounded-xl bg-brand-secondary overflow-hidden bg-cover bg-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./hero-bg-desktop.svg')`,
          }}
        />

        <img
          src={current.image}
          alt={current.alt}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute left-6 sm:left-12 md:left-5 bottom-20 md:bottom-[104px] font-sofia z-30 text-neutral-0 font-semibold text-[150px]">
          <QuotesIcon width={isMobile && 40} height={isMobile && 40} />
        </span>
        <span
          className={`flex w-full h-full items-end relative z-30 text-neutral-0 font-semibold font-heading text-body-xl md:text-body-2xl lg:text-h6 p-6 lg:p-10 sm:py-10 sm:px-5 text-center transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.quote}
        </span>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#33333310] to-[#333333]" />
      </div>
    </div>
  );
};

export default HeroBanner;
