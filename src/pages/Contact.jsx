import React from "react";

import NumberCountUp from "@/components/NumberCountUp";
import GreenCheckIcon from "@/svgComponents/GreenCheckIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactFormContainer from "@/components/contact-page/ContactFormContainer";

const numberCountUpData = [
  {
    title: "University Partners",
    data: 850,
    suffix: "+",
  },
  {
    title: "Success Rate",
    data: 98,
    suffix: "%",
  },
];

const sessionData = [
  {
    icon: <GreenCheckIcon />,
    text: "Identify your profile strengths & areas for improvement",
  },
  {
    icon: <GreenCheckIcon />,
    text: "Suggest top 5-8 ideal universities to target",
  },
  {
    icon: <GreenCheckIcon />,
    text: "What GMAT/GRE score you need & waiver eligibility",
  },
  {
    icon: <GreenCheckIcon />,
    text: "Proven strategy to boost your admit & scholarship chances",
  },
];

const avatarData = [
  {
    img: "https://github.com/shadcn.png",
    fallback: "LS",
  },
  {
    img: "https://github.com/shadcn.png",
    fallback: "LS",
  },
  {
    img: "https://github.com/shadcn.png",
    fallback: "LS",
  },
  {
    img: "https://github.com/shadcn.png",
    fallback: "LS",
  },
  {
    img: "https://github.com/shadcn.png",
    fallback: "LS",
  },
];

const Contact = () => {
  return (
    <div className="w-full py-6 sm:gap-0 md:gap-10 gap-8 sm:py-[60px] px-5 lg:px-24 md:px-[60px] flex lg:flex-row flex-col justify-between">
      <div className="flex flex-col gap-8 sm:gap-12 w-full sm:w-1/2 md:w-full lg:max-w-[600px] my-5 items-center sm:items-start">
        <div className="flex flex-col sm:gap-6 gap-8 items-center justify-center sm:items-start sm:justify-start md:w-[90%] lg:w-full self-center lg:self-start">
          <h1 className="lg:text-h1 md:text-h2 text-h1 font-bold text-neutral-800 font-heading text-center lg:text-start self-center ">
            3X Your Chances To Study Abroad With Learnshack
          </h1>
          <div className="flex flex-col gap-4">
            <span className="text-neutral-800 text-body-xl font-semibold">
              Here's what we will discuss in your session:
            </span>
            <div className="flex flex-col gap-2 self-center lg:self-start">
              {sessionData.map((item, index) => (
                <div className="flex gap-3" key={index}>
                  <div>{item.icon}</div>
                  <span className="text-body-lg text-neutral-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 sm:gap-12">
          {numberCountUpData.map((item, index) => (
            <div
              className="flex flex-col gap-2 sm:items-start items-center"
              key={index}
            >
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
      <div className="flex flex-col w-full md:w-[500px] lg:w-[505px] lg:h-full rounded-lg bg-neutral-0 border border-brand-primary overflow-hidden bg-cover bg-center relative self-center lg:self-start">
        <div className="h-[6px] w-full bg-brand-primary rounded-[10px]"></div>
        <ContactFormContainer />
        <div className="bg-system-info-100 px-6 py-4 md:py-5 flex items-center justify-center md:flex-row md:gap-3 flex-col gap-4">
          <div className="flex -space-x-2">
            {avatarData.map((avatar, i) => (
              <Avatar key={i} className="border-2 border-white w-10 h-10">
                <AvatarImage src={avatar.img} alt={`User ${i + 1}`} />
                <AvatarFallback>U{i + 1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-body-xl text-system-info-600 font-semibold">
            Trusted by 10,000+ Students
          </span>
        </div>
      </div>
      <div className="flex lg:hidden gap-4 sm:gap-12 self-center">
        {numberCountUpData.map((item, index) => (
          <div className="flex flex-col gap-2 items-center" key={index}>
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
  );
};

export default Contact;
