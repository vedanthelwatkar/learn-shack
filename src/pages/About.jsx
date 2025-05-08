import NumberCountUp from "@/components/NumberCountUp";
import { Button } from "@/components/ui/button";
import BinocularsIcon from "@/svgComponents/BinocularsIcon";
import DiamondIcon from "@/svgComponents/DiamondIcon";
import TargetIcon from "@/svgComponents/TargetIcon";
import ThinRightArrow from "@/svgComponents/ThinRightArrow";
import React, { useEffect, useRef } from "react";

const progressCardData = [
  {
    title: "Students",
    desc: "mentored personally with 1:1 guidance across their full study abroad journey.",
    data: 3500,
    suffix: "+",
  },
  {
    title: "Scholarships",
    desc: "disbursed and fee waivers unlocked through strong, tailored applications.",
    data: 1.5,
    prefix: "₹",
    suffix: "Cr+",
    decimalPlaces: 1,
  },
  {
    title: "University Partners",
    desc: "across the UK, USA, Canada, Germany, Ireland, Australia, and more.",
    data: 850,
    suffix: "+",
  },
  {
    title: "Counsellings",
    desc: "and counting, with hundreds of new journeys beginning each month.",
    data: 25000,
    suffix: "+",
  },
];

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

const reviewData = [
  {
    title: "Masters in Business Analyticsy",
    desc: "Learnshack helped me clear IELTS with 7.5 bands in just a month with clarity. They handled everything—from shortlisting top universities and submitting applications to securing my education loan and visa.",
    name: "Shubhra Pandey",
    from: "Banaras",
    to: "UK",
    flag: "🇬🇧",
    src: "/shubhra-pandey-withbg-learnshack.png",
  },
  {
    title: "MSc in Computer Science",
    desc: "I was working at the Times of India, but deep down, I felt stuck. On my friend's recommendation, I came to Learnshack. Their team didn’t just talk about universities; they helped me figure out my own goals and gave me the confidence to take this step. The entire process, from selecting the right university to getting my offer, was stress-free. Today, I’m here in the UK, studying at a world-class university and looking forward to my future.",
    name: "Sejal Arora",
    from: "Jhansi",
    to: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    src: "/placeholder.png",
  },
  {
    title: "Msc in Medical Device Technology",
    desc: "I had already paid a deposit to a university in Ireland, but had to withdraw due to visa delays—waiting a year felt devastating. Then I found LearnShack. Their team truly understood my situation, gave me tailored advice, and I had a new offer letter within no time. Thanks to their relationships with universities, I didn’t have to waste a year, and today, I’m in Ireland, studying exactly what I wanted.",
    name: "Vignan Thokala",
    from: "Hyderabad",
    to: "Ireland",
    flag: "🇮🇪",
    src: "/vighnan-thokala-withbg-learnshack.png",
  },
  {
    title: "Msc Computer Science",
    desc: "Learnshack guided me from switching plans in India to securing admission at the University of Edinburgh with a scholarship and English test waiver. Their expert team understood my profile deeply and delivered results that felt truly personalized—even good enough for me to refer a friend confidently.",
    name: "Hrisav Raj",
    from: "Patna",
    to: "Scotland",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    src: "/placeholder.png",
  },
  {
    title: "Msc in Cyber Security",
    desc: "I spent 3 lakhs on a premium study abroad service that failed to get me an admit or even recover my deposit. I felt completely lost—until I found LearnShack. They understood my goals, guided me personally, and even helped me get my refund back. More than just saving my money, they gave me a second chance at my dream.",
    name: "Keyur Sabhani",
    from: "Ahmedabad",
    to: "Germany",
    flag: "🇩🇪",
    src: "/keyur-sabhani-withbg-learnshack.png",
    featured: true,
  },
  {
    title: "MSc in Robotics & AI",
    desc: "I had multiple offers, but somehow, none of them felt right. My heart was set on the University of Hertfordshire, but getting in seemed nearly impossible. When I shared my goal with the counselors at Learnshack, instead of convincing me to settle for the options I already had, they worked towards making my dream a reality, and within just three days, I received my offer letter, along with a scholarship!",
    name: "Gautham Srinivasiah",
    from: "Hyderabad",
    to: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    src: "/placeholder.png",
  },
  {
    title: "Msc in Sustainable Supply Chain Management",
    desc: "While other consultancy pushed me towards mismatched options, Learnshack suggested better-suited countries like Ireland and USA. We applied to six universities & I got offers from literally all of them. Today, I’m studying my dream course at UCD, and I finally felt like someone was truly on my side.",
    name: "Himani Verma",
    from: "Delhi",
    to: "Ireland",
    flag: "🇮🇪",
    src: "/himani-verma-withbg-learnshack.png",
  },
  {
    title: "MSc in Computer Science",
    desc: "I was struggling to clear IELTS and TOEFL despite multiple attempts, even after paying a deposit elsewhere. Learnshack turned it all around—helping me find a university that waived English tests, securing a low-interest education loan, and even arranging my accommodation. Their support was a complete game-changer.",
    name: "Aradhya Charan",
    from: "Lucknow",
    to: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    src: "/keyur-sabhani-withbg-learnshack.png",
  },
  {
    title: "Msc in Artificial Intelligence",
    desc: "Learnshack helped me turn things around when my initial university and visa process got stuck. They guided me to withdraw the old application, secured my admit to Aston University, and helped me file a priority visa within weeks.",
    name: "Harsh Jirapure",
    from: "Surat",
    to: "UK",
    flag: "🇬🇧",
    src: "/harsh-jirapure-withbg-learnshack.png",
  },
];

const lifeAtLearnshackImages = [
  "/about-learnshackedu-1.png",
  "/about-learnshackedu-2.png",
  "/about-learnshackedu-3.png",
  "/about-learnshackedu-1.png",
  "/about-learnshackedu-2.png",
  "/about-learnshackedu-3.png",
  "/about-learnshackedu-1.png",
  "/about-learnshackedu-2.png",
  "/about-learnshackedu-3.png",
];

const About = () => {
  const reviewContainerRef = useRef(null);
  const lifeAtLearnshackRef = useRef(null);
  const middleImageRef = useRef(null);
  const featuredCardRef = useRef(null);

  const middleIndex = Math.floor(lifeAtLearnshackImages.length / 2);

  useEffect(() => {
    if (reviewContainerRef.current && featuredCardRef.current) {
      const container = reviewContainerRef.current;
      const containerWidth = container.offsetWidth;

      const featuredCard = featuredCardRef.current;
      const cardWidth = featuredCard.offsetWidth;

      const scrollPosition =
        featuredCard.offsetLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollLeft = scrollPosition;
    }

    if (lifeAtLearnshackRef.current && middleImageRef.current) {
      const container = lifeAtLearnshackRef.current;
      const containerWidth = container.offsetWidth;

      const middleImage = middleImageRef.current;
      const imageWidth = middleImage.offsetWidth;

      const scrollPosition =
        middleImage.offsetLeft - containerWidth / 2 + imageWidth / 2;

      container.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <div className="relative flex flex-col">
      <div className="banner relative bg-brand-secondary px-5 pt-12 pb-40 sm:px-20 sm:py-24 flex items-center justify-center">
        <img
          src="/map.png"
          className="absolute max-w-none top-[178px] w-[360px] h-[174px] sm:top-[101px] sm:w-[786px] sm:h-[380px] xl:top-6 xl:h-[450px] xl:w-[931px]"
        />
        <img
          src="/castle-image-1.png"
          className="absolute left-0 bottom-0 h-[175px] sm:h-[208px] xl:h-[368px]"
        />
        <img
          src="/castle-image-2.png"
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
            <Button>Get Started With Us</Button>
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
              <div className="bg-neutral-0 flex flex-col rounded-md border border-neutral-200 xl:min-w-[280px] flex-1">
                <img
                  src="/placeholder.png"
                  className="h-[200px] xl:h-[260px] object-contain"
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
                  src="/placeholder.png"
                  className="h-[200px] xl:h-[260px] object-contain"
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
          <Button>Connect with Our Counsellors</Button>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex gap-4">
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
          <div className="flex gap-4">
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
      <div className="student-reviews flex flex-col gap-6 sm:gap-8 xl:gap-12 py-12 sm:p-12 xl:p-16 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center px-5">
          <span className="text-brand-primary text-body-xl font-semibold">
            STUDENT REVIEWS
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center">
            Real Reviews from Our Learners
          </span>
        </div>
        <div
          className="flex overflow-x-auto w-dvw scrollbar-hide gap-4 px-4"
          ref={reviewContainerRef}
        >
          {reviewData.map((item, index) => (
            <div
              key={index}
              ref={item.featured ? featuredCardRef : null}
              className="flex-shrink-0 bg-neutral-0 border border-neutral-200 flex flex-col gap-3 p-4 sm:p-6 rounded-md w-[320px] sm:w-[420px] h-[360px]"
            >
              <span className="text-brand-primary font-semibold text-body-2xl">
                {item.title}
              </span>
              <span className="text-neutral-700 text-body-lg h-[227px] sm:[200px] overflow-y-auto scrollbar-hide">
                {item.desc}
              </span>
              <div className="flex gap-3 items-center">
                <img
                  src={item.src}
                  alt="/placeholder.svg"
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
      <div className="life-at-ls relative flex flex-col gap-6 sm:gap-8 p-12 sm:px-20 xl:p-16  items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center z-10">
          <span className="text-brand-primary text-body-xl font-semibold">
            BEHIND THE SCENES
          </span>
          <span className="text-neutral-800 text-h4 font-semibold text-center">
            Glimpse of Life At LearnShack Edu
          </span>
        </div>
        <div className="absolute top-0 sm:top-[15%] md:top-[5%] xl:top-[7%] w-dvw flex justify-center items-center">
          <div className="w-[925px] sm:w-[1160px] md:w-[1800px] 2xl:w-[2400px] rounded-[50%] h-[200px] bg-neutral-50 flex-shrink-0" />
        </div>
        <div
          className="flex overflow-x-auto w-dvw scrollbar-hide gap-4 justify-start items-center"
          ref={lifeAtLearnshackRef}
        >
          {lifeAtLearnshackImages.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Life at LearnShack ${index + 1}`}
              className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
              ref={index === middleIndex ? middleImageRef : null}
            />
          ))}
        </div>
        <div className="absolute bottom-[-25%] sm:bottom-[-16%] xl:bottom-[-15%] w-dvw flex justify-center items-center">
          <div className="w-[925px] sm:w-[1160px] md:w-[1800px] 2xl:w-[2400px] h-[200px] rounded-[50%] bg-neutral-50 flex-shrink-0" />
        </div>
      </div>
      <div
        className="xl:flex hidden what-we-believe z-10 bg-brand-secondary px-16 pt-6 pb-0 gap-4 justify-center"
        style={{
          backgroundImage: `url("/about-bg.png")`,
        }}
      >
        <img src="/about-male.png" className="h-[391px] self-end mb-[-1px]" />
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
        <img src="/about-female.png" className="h-[360px] self-end mb-[-1px]" />
      </div>
      <div
        className="xl:hidden flex items-center flex-col what-we-believe z-10 bg-brand-secondary px-5 pt-12 sm:px-12 gap-4 justify-center"
        style={{
          backgroundImage: `url("/about-bg.png")`,
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
          <Button>Start Your Journey Today</Button>
        </div>
        <div className="flex">
          <img
            src="/about-male.png"
            className="h-[293px] sm:h-[391px] self-end mb-[-1px]"
          />
          <img
            src="/about-female.png"
            className="h-[270px] sm:h-[360px] self-end mb-[-1px] -ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
