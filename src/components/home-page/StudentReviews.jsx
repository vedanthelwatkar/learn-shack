import React, { useState } from "react";
import { Button } from "../ui/button";
import PlayIcon from "@/svgComponents/PlayIcon";
import { Separator } from "../ui/separator";
import uniLogo from "../../assets/webp-uni-logos/stanford-university.webp";

const testimonials = [
  {
    id: 1,
    name: "Vignan Thokala",
    videoId: "3mDvUkZx2fw",
    testimony:
      "LearnShack turned my visa setback into a success story - now I'm studying in Ireland",
    logo: uniLogo,
    thumbnail: "./countries/study-in-usa.webp",
  },
  {
    id: 2,
    name: "Sejal Arora",
    videoId: "3mDvUkZx2fw",
    testimony:
      "LearnShack helped me get into a world-class university in the UK",
    logo: uniLogo,
    thumbnail: "./countries/study-in-canada.webp",
  },
  {
    id: 3,
    name: "Gautham Srinivasan",
    videoId: "3mDvUkZx2fw",
    testimony:
      "LearnShack helped me secure my dream university in just 3 days + scholarship",
    logo: uniLogo,
    thumbnail: "./countries/study-in-uk.webp",
  },
  {
    id: 4,
    name: "Sneha Singh",
    videoId: "3mDvUkZx2fw",
    testimony:
      "LearnShack secured me a €4,000 scholarship and made my dream affordable",
    logo: uniLogo,
    thumbnail: "./countries/study-in-australia.webp",
  },
];

const StudentReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (id) => {
    setActiveVideo(id);
  };

  return (
    <div className="sm:py-20 py-[60px] w-full sm:px-24 flex flex-col gap-12 items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-3 w-full items-center px-5 md:px-0">
          <span className="text-brand-primary font-semibold text-body-xl">
            STUDENT REVIEWS
          </span>
          <span className="text-h4 font-heading text-neutral-800 font-semibold max-w-[670px] text-center">
            A Glimpse of 10K+ Students’ Study Abroad Experience
          </span>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide max-w-[100vw] px-5 md:px-0">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative flex rounded-lg bg-neutral-200 min-w-[260px] w-[260px] h-[462px] lg:w-[294px] lg:h-[523px]"
            >
              {activeVideo === item.id ? (
                <iframe
                  className="w-full h-full object-cover rounded-lg"
                  src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                  title={item.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.thumbnail}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handlePlayVideo(item.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-0 rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    <PlayIcon />
                  </button>
                </>
              )}
              <div className="absolute bottom-0 m-2 bg-neutral-0 rounded-sm flex flex-col gap-4 p-3">
                <span className="font-medium text-body-sm text-neutral-700">
                  {item.testimony}
                </span>
                <Separator className="h-px bg-neutral-200" />
                <div className="flex w-full justify-between">
                  <span className="font-semibold text-body-md text-neutral-800">
                    {item.name}
                  </span>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-[52px] max-h-[22px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button>View More Success Stories</Button>
      </div>
    </div>
  );
};

export default StudentReviews;
