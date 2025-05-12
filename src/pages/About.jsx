import InfiniteCarousel from "@/components/InfiniteCarousel";
import NumberCountUp from "@/components/NumberCountUp";
import { Button } from "@/components/ui/button";
import BinocularsIcon from "@/svgComponents/BinocularsIcon";
import DiamondIcon from "@/svgComponents/DiamondIcon";
import TargetIcon from "@/svgComponents/TargetIcon";
import ThinRightArrow from "@/svgComponents/ThinRightArrow";
import { progressCardData, reviewData } from "@/utils/constants";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const whatWeOfferData = [
  {
    title: "Our Vision",
    desc: "To be the most trusted platform for students aiming to study in top global universities with scholarships and success.",
    icon: <BinocularsIcon />,
  },
  {
    title: "Our Mission",
    desc: "To guide students through every step of their study abroad journey with expert support, honest advice, and proven results.",
    icon: <TargetIcon />,
  },
  {
    title: "Our Core Values",
    desc: "To understand your goals and guide you to opportunities that truly fit you—not just what’s popular or easy.",
    icon: <DiamondIcon />,
  },
];

const lifeAtLearnshackImages = [
  "/about/about-learnshackedu-1.png",
  "/about/about-learnshackedu-2.png",
  "/about/about-learnshackedu-3.png",
  "/about/about-learnshackedu-1.png",
  "/about/about-learnshackedu-2.png",
  "/about/about-learnshackedu-3.png",
  "/about/about-learnshackedu-1.png",
  "/about/about-learnshackedu-2.png",
  "/about/about-learnshackedu-3.png",
];

const About = () => {
  const navigate = useNavigate();
  const duplicatedReviews = [
    ...reviewData,
    ...reviewData,
    ...reviewData,
    ...reviewData,
  ];

  const reviewContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const scrollToCard = () => {
    const container = reviewContainerRef.current;
    if (!container || cardRefs.current.length === 0) return;

    const card = cardRefs.current[currentIndexRef.current];
    if (!card) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const scrollPosition = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    currentIndexRef.current =
      (currentIndexRef.current + 1) % cardRefs.current.length;
  };

  useEffect(() => {
    const container = reviewContainerRef.current;

    if (!container || cardRefs.current.length === 0) return;

    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(scrollToCard, 2000);
    };

    if (!isAnimationPaused) {
      startInterval();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimationPaused]);

  const toggleAnimation = () => {
    if (isAnimationPaused) {
      scrollToCard();
    }
    setIsAnimationPaused(!isAnimationPaused);
  };

  return (
    <div className="relative flex flex-col">
      <div className="banner relative bg-brand-secondary px-5 pt-12 pb-40 sm:px-20 sm:py-24 flex items-center justify-center">
        <img
          src="/about/map.png"
          className="absolute max-w-none top-[178px] w-[360px] h-[174px] sm:top-[101px] sm:w-[786px] sm:h-[380px] xl:top-6 xl:h-[450px] xl:w-[931px]"
        />
        <img
          src="/about/castle-image-1.png"
          className="absolute left-0 bottom-0 h-[175px] sm:h-[208px] xl:h-[368px]"
        />
        <img
          src="/about/castle-image-2.png"
          className="absolute right-0 bottom-0 h-[175px] sm:h-[208px] xl:h-[368px]"
        />
        <div className="max-w-[720px]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-brand-primary font-semibold text-center text-body-xl">
              ABOUT US
            </span>
            <h1 className="text-brand-primary font-bold font-heading text-h2 text-center">
              Guiding Your Study Abroad Dreams with Care
            </h1>
            <span className="text-neutral-800 text-body-lg text-center max-w-[560px]">
              We believe that choosing to study abroad is a life-changing
              decision, one that deserves more than just information. It
              deserves guidance, care, and protection - just like a guardian
              would provide.
            </span>
            <Button onClick={() => navigate("/contact-us")}>
              Get Started With Us
            </Button>
          </div>
        </div>
      </div>
      <div className="behind-it-all pt-16 px-5 pb-12 sm:p-12 sm:pt-16 xl:p-20 xl:pb-16">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <span className="text-brand-primary text-body-xl font-semibold">
                MEET OUR FOUNDERS
              </span>
              <h4 className=" text-neutral-800 font-heading text-h4 font-semibold">
                The Ones Behind It All
              </h4>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
              <div className="bg-neutral-0 flex overflow-hidden flex-col rounded-md border border-neutral-200 xl:min-w-[280px] flex-1">
                <img
                  src="/image-placeholder.png"
                  className="h-[200px] xl:h-[260px] object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <span className="text-neutral-900 text-body-2xl font-semibold">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam beatae ea ratione!"
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900 text-body-xl font-semibold">
                      Aman Gupta
                    </span>
                    <span className="text-neutral-700 text-body-lg">
                      Founder
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-0 flex flex-col rounded-md border border-neutral-200 xl:min-w-[280px] flex-1">
                <img
                  src="/image-placeholder.png"
                  className="h-[200px] xl:h-[260px] object-cover"
                />
                <div className="flex flex-col gap-4 p-6">
                  <span className="text-neutral-900 text-body-2xl font-semibold">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam beatae ea ratione!"
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="text-neutral-900 text-body-xl font-semibold">
                      Akash Gupta
                    </span>
                    <span className="text-neutral-700 text-body-lg">
                      Founder & Researcher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-progress flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-16 px-5 py-12 sm:p-12 xl:px-16 xl:py-20">
        <div className="flex flex-col gap-4 flex-1 items-center justify-center xl:items-start xl:justify-start">
          <span className="text-brand-primary text-body-xl font-semibold">
            OUR PROGRESS
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center xl:text-start">
            Numbers That Matter For Big Dreams
          </span>
          <span className="text-neutral-700 text-body-xl text-center xl:text-start">
            These aren’t just stats. They’re stories of students who once
            started just like you. Unlike traditional study abroad consultants,
            we invest real time to understand your academic goals, career
            aspirations, and personal concerns. Every suggestion we give is
            rooted in what's best for your future — not in partnerships or
            shortcuts.
          </span>
          <Button onClick={() => navigate("/contact-us")}>
            Connect with Our Counsellors
          </Button>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {progressCardData.slice(0, 2).map((item) => (
              <div className="border border-neutral-200 rounded-md bg-neutral-0 p-6 flex flex-col gap-2 flex-1">
                <span className="text-brand-primary text-h4 font-semibold">
                  <NumberCountUp
                    prefix={item.prefix}
                    suffix={item.suffix}
                    end={item.data}
                    decimalPlaces={item.decimalPlaces}
                  />
                </span>
                <span className="text-body-2xl font-semibold text-neutral-800">
                  {item.title}
                </span>
                <span className="text-body-lg text-neutral-700 min-w-[250px]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {progressCardData.slice(2).map((item) => (
              <div className="border border-neutral-200 rounded-md bg-neutral-0 p-6 flex flex-col gap-2 flex-1">
                <span className="text-brand-primary text-h4 font-semibold">
                  <NumberCountUp
                    prefix={item.prefix}
                    suffix={item.suffix}
                    end={item.data}
                    decimalPlaces={item.decimalPlaces}
                  />
                </span>
                <span className="text-body-2xl font-semibold text-neutral-800">
                  {item.title}
                </span>
                <span className="text-body-lg text-neutral-700 min-w-[250px]">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="what-we-offer flex flex-col gap-6 sm:gap-8 xl:gap-12 py-12 xl:py-16 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center px-5 sm:px-12 xl:px-16">
          <span className="text-brand-primary text-body-xl font-semibold">
            WHAT WE OFFER
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center">
            The Heart of Learnshack Edu
          </span>
        </div>
        <div className="flex gap-4 self-start overflow-auto scrollbar-hide w-dvw px-5 sm:px-12 xl:px-16">
          {whatWeOfferData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center bg-neutral-0 border border-neutral-200 rounded-md overflow-hidden min-w-[300px]"
            >
              <div className="h-[6px] w-full bg-brand-primary" />
              <div className="flex flex-col p-6 gap-4 sm:gap-7">
                <div className="p-3 w-fit flex items-center rounded-2xl bg-brand-secondary">
                  {card.icon}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-body-2xl text-neutral-800">
                    {card.title}
                  </span>
                  <span className="text-body-lg text-neutral-700">
                    {card.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="student-reviews flex flex-col gap-6 sm:gap-8 xl:gap-12 py-12 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center px-5 sm:px-12 xl:px-16">
          <span className="text-brand-primary text-body-xl font-semibold">
            STUDENT REVIEWS
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center">
            Real Reviews from Our Learners
          </span>
        </div>
        <InfiniteCarousel className="hidden sm:flex w-dvw gap-4 px-4">
          {reviewData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-neutral-0 border border-neutral-200 flex flex-col gap-3 p-4 sm:p-6 rounded-md w-[320px] sm:w-[420px] h-[360px]"
            >
              <span className="text-brand-primary font-semibold text-body-2xl">
                {item.title}
              </span>
              <span className="text-neutral-700 text-body-lg h-[227px] sm:h-[200px] overflow-auto scrollbar-hide">
                {item.desc}
              </span>
              <div className="flex gap-3 items-center">
                <img
                  src={item.src}
                  alt="/placeholder.png"
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex flex-col gap-1 flex-1 justify-center">
                  <span className="text-neutral-800 font-semibold text-body-2xl">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-neutral-700 text-body-lg">
                      {item.from}
                    </span>
                    <ThinRightArrow />
                    <span className="text-neutral-700 text-body-lg">
                      {item.to}
                    </span>
                  </div>
                </div>
                <div className="text-h4 font-semibold font-heading">
                  {item.flag}
                </div>
              </div>
            </div>
          ))}
        </InfiniteCarousel>
        <div
          className="flex sm:hidden overflow-x-auto scrollbar-hide w-dvw gap-4 px-4 scroll-smooth"
          ref={reviewContainerRef}
          onClick={toggleAnimation}
        >
          <div className="flex-shrink-0" />
          {duplicatedReviews.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex-shrink-0 bg-neutral-0 border border-neutral-200 flex flex-col gap-3 p-4 sm:p-6 rounded-md w-[320px] sm:w-[420px] h-[360px]"
            >
              <span className="text-brand-primary font-semibold text-body-2xl">
                {item.title}
              </span>
              <span className="text-neutral-700 text-body-lg h-[227px] sm:h-[200px] overflow-auto scrollbar-hide">
                {item.desc}
              </span>
              <div className="flex gap-3 items-center">
                <img
                  src={item.src}
                  alt="/placeholder.png"
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="flex flex-col gap-1 flex-1 justify-center">
                  <span className="text-neutral-800 font-semibold text-body-2xl">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-neutral-700 text-body-lg">
                      {item.from}
                    </span>
                    <ThinRightArrow />
                    <span className="text-neutral-700 text-body-lg">
                      {item.to}
                    </span>
                  </div>
                </div>
                <div className="text-h4 font-semibold font-heading">
                  {item.flag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="life-at-ls relative flex flex-col gap-6 sm:gap-8 items-center py-12 xl:py-16  justify-center">
        <div className="flex flex-col gap-4 items-center justify-center z-20 px-12 sm:px-20 xl:px-16">
          <span className="text-brand-primary text-body-xl font-semibold">
            BEHIND THE SCENES
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center">
            Glimpse of Life At LearnShack Edu
          </span>
        </div>
        <div className="absolute top-0 sm:top-[15%] md:top-[5%] xl:top-[7%] w-dvw flex justify-center items-center">
          <div className="w-[925px] sm:w-[1160px] md:w-[1800px] 2xl:w-[2400px] rounded-[50%] h-[200px] bg-neutral-50 flex-shrink-0 z-10" />
        </div>
        <InfiniteCarousel className="flex overflow-x-auto w-dvw scrollbar-hide gap-4 justify-start items-center">
          {lifeAtLearnshackImages.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Life at LearnShack ${index + 1}`}
              className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
            />
          ))}
        </InfiniteCarousel>
        <div className="absolute bottom-[-25%] sm:bottom-[-16%] xl:bottom-[-15%] w-dvw flex justify-center items-center">
          <div className="w-[925px] sm:w-[1160px] md:w-[1800px] 2xl:w-[2400px] h-[200px] rounded-[50%] bg-neutral-50 flex-shrink-0" />
        </div>
      </div>
      <div
        className="xl:flex hidden what-we-believe z-10 bg-brand-secondary px-16 pt-6 pb-0 gap-4 justify-center"
        style={{
          backgroundImage: `url("/about/about-bg.png")`,
        }}
      >
        <img
          src="/about/about-male.png"
          className="h-[391px] self-end mb-[-1px]"
        />
        <div className="flex flex-col gap-10 py-16 items-center justify-center flex-1 max-w-[680px]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-brand-primary text-body-xl font-semibold">
              WHAT WE BELIEVE
            </span>
            <span className="text-neutral-800 text-h4 italic font-semibold text-center">
              “You don’t need to do this alone. You just need the right guide.”
            </span>
          </div>
          <Button>Start Your Journey Today</Button>
        </div>
        <img
          src="/about/about-female.png"
          className="h-[360px] self-end mb-[-1px]"
        />
      </div>
      <div
        className="xl:hidden flex items-center flex-col what-we-believe z-10 bg-brand-secondary px-5 pt-12 sm:px-12 gap-4 justify-center"
        style={{
          backgroundImage: `url("/about/about-bg.png")`,
        }}
      >
        <div className="flex flex-col gap-6 sm:gap-8 xl:gap-10 items-center justify-center flex-1 max-w-[680px]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="text-brand-primary text-body-xl font-semibold">
              WHAT WE BELIEVE
            </span>
            <span className="text-neutral-800 text-h4 italic font-semibold text-center">
              “You don’t need to do this alone. You just need the right guide.”
            </span>
          </div>
          <Button onClick={() => navigate("/contact-us")}>
            Start Your Journey Today
          </Button>
        </div>
        <div className="flex">
          <img
            src="/about/about-male.png"
            className="h-[293px] sm:h-[391px] self-end mb-[-1px]"
          />
          <img
            src="/about/about-female.png"
            className="h-[270px] sm:h-[360px] self-end mb-[-1px] -ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
