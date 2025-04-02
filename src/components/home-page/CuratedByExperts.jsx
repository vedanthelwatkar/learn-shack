import React from "react";
import HalfCircleIcon from "@/svgComponents/HalfCircleIcon";
import ArrowRight from "@/svgComponents/ArrowRight";
import BankIcon from "@/svgComponents/BankIcon";
import AplusIcon from "@/svgComponents/AplusIcon";
import FundsIcon from "@/svgComponents/FundsIcon";
import CrownIcon from "@/svgComponents/CrownIcon";

const curatedCardData = [
  {
    title: "Evaluate Your Profile",
    desc: "Get Detailed Analysis of Profile Strengths & Weaknesses",
    icon: <HalfCircleIcon />,
  },
  {
    title: "Get The Right University",
    desc: "Find the Right University That Matches Your Goals",
    icon: <BankIcon />,
  },
  {
    title: "Crack IELTS",
    desc: "Master IELTS with Smart Preparation Strategies",
    icon: <AplusIcon />,
  },
  {
    title: "Fund Your Dreams",
    desc: "Apply for Scholarships That Maximize Your Savings",
    icon: <CrownIcon />,
  },
  {
    title: "Plan Your Finances",
    desc: "Estimate Your Education Loan & Plan Smartly",
    icon: <FundsIcon />,
  },
];

const CuratedByExperts = () => {
  return (
    <div className="md:py-20 py-[60px] md:pb-10 w-full px-4 md:px-24 flex flex-col gap-8 md:gap-14 items-center justify-center">
      <div className="flex flex-col gap-3 w-full items-center">
        <span className="text-brand-primary font-semibold text-lg">
          CURATED BY OUR EXPERTS
        </span>
        <span className="text-h4 font-heading text-neutral-800 font-semibold max-w-[670px] text-center">
          We’ve Got the Resources to Make Your Journey Easy
        </span>
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-6">
        {curatedCardData.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-neutral-0 rounded-md overflow-hidden max-w-[400px]"
          >
            <div className="h-[6px] w-full bg-brand-primary" />
            <div className="flex flex-col md:py-9 md:px-6 p-4 gap-4 md:gap-6">
              <div className="p-3 w-fit flex items-center rounded-2xl bg-brand-secondary">
                {card.icon}
              </div>
              <span className="font-medium text-body-lg text-neutral-700">
                {card.title}
              </span>
              <span className="font-semibold text-h6 text-neutral-800">
                {card.desc}
              </span>
              <div className="flex text-system-info-600 gap-2">
                <button className="font-semibold text-body-md">
                  Learn more
                </button>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-6">
        {curatedCardData.slice(3).map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-neutral-0 rounded-md overflow-hidden max-w-[400px]"
          >
            <div className="h-[6px] w-full bg-brand-primary" />
            <div className="flex flex-col py-9 px-6 gap-6">
              <div className="p-3 w-fit flex items-center rounded-2xl bg-brand-secondary">
                {card.icon}
              </div>
              <span className="font-medium text-body-lg text-neutral-700">
                {card.title}
              </span>
              <span className="font-semibold text-h6 text-neutral-800">
                {card.desc}
              </span>
              <div className="flex text-system-info-600 gap-2">
                <button className="font-semibold text-body-md">
                  Learn more
                </button>
                <ArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedByExperts;
