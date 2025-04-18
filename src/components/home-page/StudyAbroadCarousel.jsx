"use client";
import { useState, useRef, useId, useEffect } from "react";
import { Button } from "../ui/button";
import RightDirection from "@/svgComponents/RightDirection";
import { useMediaQuery } from "@/hooks/use-media-query";
import useConstantsStore from "@/store/useConstantsStore";
import { useNavigate } from "react-router-dom";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const navigate = useNavigate();

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, description, searches, buttons } = slide;

  return (
    <div className="flex-shrink-0 w-[300px] md:w-[528px] lg:w-[608px] h-[494px] md:h-[390px]">
      <div
        ref={slideRef}
        className="rounded-sm overflow-hidden flex h-full flex-col sm:flex-row bg-neutral-50"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex overflow-hidden lg:h-full sm:h-[390px] h-[150px] lg:w-[240px] md:w-[200px] shrink-0">
          <img
            className="w-full lg:w-[240px] md:w-[200px] h-full object-cover"
            src={src || "/placeholder.svg"}
            alt={title}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          <span className="absolute bottom-0 text-h6 text-neutral-0 font-heading px-3 md:px-4 py-3 md:py-6 w-full md:text-center font-semibold">
            {title}
          </span>
        </div>
        <div className="p-6 flex flex-col gap-8 sm:gap-10 h-full">
          <p className="text-body-lg text-neutral-700">{description}</p>

          <div className="flex flex-col gap-3">
            <p className="text-body-lg font-medium text-neutral-800">
              Most popular searches:
            </p>
            <div className="flex flex-wrap gap-2">
              {searches.map((search, i) => (
                <span
                  key={i}
                  className="text-body-md px-3 py-1 font-semibold rounded-full bg-system-info-100 text-system-info-600"
                >
                  {search}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-2 mt-auto">
            {/* <Button variant="outline" className="flex-1">
              {buttons.view}
            </Button> */}

            <Button className="flex-1" onClick={() => navigate("/contact")}>
              {buttons.enquire}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`p-3 flex items-center justify-center bg-neutral-0 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <div className="flex">
        <RightDirection className="text-gray-600" />
      </div>
    </button>
  );
};

export default function StudyAbroadCarousel() {
  const { constantImages } = useConstantsStore();

  const baseSlides = [
    {
      src: "https://learn-shack-new-bucket.s3.ap-south-1.amazonaws.com/public/study-in-uk.webp",
      title: "Study in UK",
      description:
        "Explore affordable education in UK with top-ranked universities & scholarships.",
      searches: ["MBA in UK", "Data Science in UK", "Psychology in UK"],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "https://learn-shack-new-bucket.s3.ap-south-1.amazonaws.com/public/study-in-australia.webp",
      title: "Study in Australia",
      description:
        "Explore affordable education in Australia with top-ranked universities & scholarships.",
      searches: [
        "Engineering & IT in Australia",
        "Hospitality in Australia",
        "Business & Management in Australia",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "https://learn-shack-new-bucket.s3.ap-south-1.amazonaws.com/public/study-in-germany.webp",
      title: "Study in Germany",
      description:
        "Explore affordable education in Germany with top-ranked universities & scholarships.",
      searches: [
        "Automobile Engineering in Germany",
        "Computer Science & IT in Germany",
        "Business Management in Germany",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "https://learn-shack-new-bucket.s3.ap-south-1.amazonaws.com/public/study-in-usa.webp",
      title: "Study in USA",
      description:
        "Explore affordable education in USA with top-ranked universities & scholarships.",
      searches: [
        "Computer Science in USA",
        "Business & Management in USA",
        "Social Sciences in USA",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "https://learn-shack-new-bucket.s3.ap-south-1.amazonaws.com/public/study-in-canada.webp",
      title: "Study in Canada",
      description:
        "Explore affordable education in Canada with top-ranked universities & scholarships.",
      searches: [
        "Software Engineering in Canada",
        "Pharmacy in Canada",
        "Engineering in Canada",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
  ];

  const [slideCounter, setSlideCounter] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startTimeRef = useRef(0);
  const startPositionRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const animationRef = useRef(null);

  const getVisibleSlideCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 2;
  };

  const getTranslateAmount = () => {
    if (isMobile) return 300;
    if (isTablet) return 528;
    return 608;
  };

  const getFullSlideWidth = () => {
    const slideWidth = getTranslateAmount();
    const gapWidth = 24;
    return slideWidth + gapWidth;
  };

  const getRelativeIndex = (index) => {
    return index % baseSlides.length;
  };

  const getSlidesForRendering = () => {
    const totalNeeded = slideCounter + getVisibleSlideCount() + 3;
    const slides = [];

    for (let i = 0; i < totalNeeded; i++) {
      const slideIndex = getRelativeIndex(i);
      slides.push({
        ...baseSlides[slideIndex],
        key: `slide-${i}`,
      });
    }

    return slides;
  };

  const handlePreviousClick = () => {
    if (isTransitioning || slideCounter === 0) return;
    setIsTransitioning(true);
    setSlideCounter(slideCounter - 1);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideCounter(slideCounter + 1);
  };

  const handleSlideClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideCounter(index);
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current) {
      const currentPosition = e.touches[0].clientX;
      const diff = currentPosition - startPositionRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
    }
  };

  const handleTouchStart = (e) => {
    if (isTransitioning) return;

    startTimeRef.current = Date.now();
    startPositionRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;

    if (carouselRef.current) {
      const fullSlideWidth = getFullSlideWidth();
      currentTranslateRef.current = -slideCounter * fullSlideWidth;
      prevTranslateRef.current = currentTranslateRef.current;
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  const handleMouseDown = (e) => {
    if (isTransitioning) return;

    e.preventDefault();
    startTimeRef.current = Date.now();
    startPositionRef.current = e.clientX;
    isDraggingRef.current = true;

    if (carouselRef.current) {
      const fullSlideWidth = getFullSlideWidth();
      currentTranslateRef.current = -slideCounter * fullSlideWidth;
      prevTranslateRef.current = currentTranslateRef.current;
      animationRef.current = requestAnimationFrame(animation);
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const currentPosition = e.clientX;
      const diff = currentPosition - startPositionRef.current;
      currentTranslateRef.current = prevTranslateRef.current + diff;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    cancelAnimationFrame(animationRef.current);

    const movedPixels = currentTranslateRef.current - prevTranslateRef.current;

    if (movedPixels > 50 && slideCounter > 0) {
      handlePreviousClick();
    } else if (movedPixels < -50) {
      handleNextClick();
    }
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    cancelAnimationFrame(animationRef.current);

    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }

    const movedPixels = currentTranslateRef.current - prevTranslateRef.current;

    if (movedPixels > 50 && slideCounter > 0) {
      handlePreviousClick();
    } else if (movedPixels < -50) {
      handleNextClick();
    }
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
  };

  const animation = () => {
    if (carouselRef.current) {
      setSliderPosition();
      if (isDraggingRef.current) {
        animationRef.current = requestAnimationFrame(animation);
      }
    }
  };

  const setSliderPosition = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
    }
  };

  const id = useId();

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const fullSlideWidth = getFullSlideWidth();

      carouselRef.current.style.transition = "transform 500ms ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        slideCounter * fullSlideWidth
      }px)`;

      const transitionEndHandler = () => {
        setIsTransitioning(false);
      };

      carouselRef.current.addEventListener(
        "transitionend",
        transitionEndHandler
      );

      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener(
            "transitionend",
            transitionEndHandler
          );
        }
      };
    }
  }, [slideCounter, isMobile, isTablet]);

  const slides = getSlidesForRendering();

  return (
    <div className="bg-brand-secondary py-[60px] sm:py-20 w-full md:px-0 lg:px-24 flex flex-col gap-8 sm:gap-12 items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col gap-8 sm:gap-12 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 md:px-20 lg:px-0">
          <div className="flex flex-col gap-3 items-center sm:items-start px-5 md:px-0">
            <h2 className="text-h4 font-semibold text-center">
              Top Study{" "}
              <span className="text-h4 font-semibold text-brand-primary">
                Abroad Destinations
              </span>
            </h2>
            <p className="text-body-2xl text-neutral-700 sm:text-start text-center">
              Explore the step by step procedure to study in top destinations
            </p>
          </div>
          <div className="hidden sm:flex gap-4 self-end sm:self-auto">
            <CarouselControl
              type="previous"
              title="Go to previous slide"
              handleClick={handlePreviousClick}
            />
            <CarouselControl
              type="next"
              title="Go to next slide"
              handleClick={handleNextClick}
            />
          </div>
        </div>

        <div
          className="relative overflow-hidden w-full touch-pan-y md:pl-20 lg:pl-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="flex pl-2 sm:pl-0 cursor-grab transition-transform duration-500 ease-in-out gap-6"
          >
            {slides.map((slide, index) => (
              <Slide
                key={slide.key}
                slide={slide}
                index={index}
                current={slideCounter}
                handleSlideClick={handleSlideClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
