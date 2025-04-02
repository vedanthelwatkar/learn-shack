import React from "react";
import { Button } from "../ui/button";
import GraduateIcon from "@/svgComponents/GraduateIcon";
import AplusIcon from "@/svgComponents/AplusIcon";
import PersonCheckIcon from "@/svgComponents/PersonCheckIcon";

const cardData = [
  {
    title: "One-Stop Study Abroad Solution",
    desc: "We handle everything - from university selection and application submissions to visas, loans, and accommodation. Our expert team ensures a seamless experience so you can focus on achieving your study abroad dream.",
    icon: <GraduateIcon />,
  },
  {
    title: "Winning SOP & Profile Review",
    desc: "Your Statement of Purpose (SOP) and Letter of Recommendation (LOR) can make or break your application. Our experts craft personalized, winning documents that boost your chances of acceptance.",
    icon: <PersonCheckIcon />,
  },
  {
    title: "Test Prep & English Proficiency Guidance",
    desc: "Crack IELTS, TOEFL, GRE, GMAT, and more with expert strategies, practice tests, and mock interviews - helping you achieve high scores effortlessly and boosting your chances of admission.",
    icon: <AplusIcon />,
  },
];

const WhyLSE = () => {
  return (
    <div className="md:py-20 py-[60px] w-full px-5 md:px-24 flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col gap-8 md:gap-12 w-full">
        <div className="flex md:flex-row flex-col md:gap-10 gap-6 w-full">
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <span className="text-brand-primary font-semibold text-lg self-center md:self-start">
              WHY CHOOSE LSE
            </span>
            <span className="text-h4 font-heading text-neutral-800 font-semibold self-center md:self-start text-center md:text-start">
              Increase Your Acceptance Rate By 300% With Us
            </span>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <span className="self-center md:self-start text-center md:text-start">
              Get dedicated support with LSE Guardian – your personal mentor for
              study abroad success. From expert guidance to answering queries
              and solving challenges, your Guardian ensures a smooth journey
              from application to arrival.
            </span>
            <Button
              variant="outline"
              className="self-center md:self-start text-center md:text-start"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        {cardData.map((item) => (
          <div className="bg-neutral-0 rounded-md md:py-9 md:px-7 p-5 flex flex-col justify-start items-end md:gap-4 gap-3">
            <div className="flex w-full gap-20">
              <span className="text-h6 font-heading font-semibold text-neutral-800">
                {item.title}
              </span>
              <div className="flex">{item.icon}</div>
            </div>

            <p className="text-body-lg text-neutral-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyLSE;
