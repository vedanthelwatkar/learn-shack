"use client";

import { useEffect, useState } from "react";
import { Timeline } from "../Timeline";
import OneOnOneIcon from "@/svgComponents/OneOnOneIcon";
import TeacherMagnifyIcon from "@/svgComponents/TeacherMagnifyIcon";
import TeacherRoadmap from "@/svgComponents/TeacherRoadmap";
import MobileDollars from "@/svgComponents/MobileDollars";
import MobileMap from "@/svgComponents/MobileMap";

const timelineItems = [
  {
    number: 1,
    title: "Get One-on-One Counseling & Profile Analysis",
    description:
      "We analyze your academics, budget, and career goals to match you with the right university, course, and scholarships.",
    comparison:
      "Offer limited options, generic advice, and a sales-driven approach",
    step: "STEP 01",
    image: <OneOnOneIcon />,
  },
  {
    number: 2,
    title: "Stand Out With Your SOP, LOR & Applications",
    description:
      "Get expertly structured SOPs and LORs, ensuring your application shines and increases your chances of acceptance.",
    comparison:
      "Provide generic templates, rushed applications, and little to no personalization",
    step: "STEP 02",
    image: <TeacherMagnifyIcon />,
  },
  {
    number: 3,
    title: "Master IELTS, TOEFL & More with LSE Expert",
    description:
      "Ace IELTS, TOEFL and other exams with personalized coaching, proven strategies, and top-notch learning resources.",
    comparison: "Share some basic resources with minimal effort and guidance",
    step: "STEP 03",
    image: <TeacherRoadmap />,
  },
  {
    number: 4,
    title: "Finance Your Dream & Secure Scholarships",
    description:
      "Find and apply for top scholarships and education loans to make your study abroad journey affordable.",
    comparison: "Sometimes use misleading claims without real aid",
    step: "STEP 04",
    image: <MobileDollars />,
  },
  {
    number: 5,
    title: "Visa, Accommodation & Settling Abroad",
    description:
      "We assist with visas, student housing, and part-time job opportunities, ensuring a hassle-free move abroad.",
    comparison: "Basic visa help with no focus on settlement or part-time jobs",
    step: "STEP 05",
    image: <MobileMap />,
  },
];

const ExpertRoadmap = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-brand-secondary py-[60px] pb-[36px] md:pb-[60px] md:py-20 w-full px-5 md:px-24 flex flex-col md:gap-14 gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 w-full items-center">
        <span className="text-brand-primary font-semibold text-lg">
          OUR EXPERT ROADMAP
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 max-w-[670px] text-center">
          Study Abroad The Right Way With Us
        </h2>
      </div>
      <div className="w-full max-w-4xl">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
};

export default ExpertRoadmap;
