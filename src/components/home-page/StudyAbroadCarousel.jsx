"use client";
import { useState, useRef, useId, useEffect } from "react";
import { Button } from "../ui/button";
import RightDirection from "@/svgComponents/RightDirection";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);

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
    <div className="flex-shrink-0 w-[85%] md:w-1/2 px-2 md:px-4">
      <div
        ref={slideRef}
        className="rounded-md overflow-hidden flex flex-col md:flex-row bg-neutral-50"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex overflow-hidden md:h-[390px] h-[200px] w-full md:w-[240px] shrink-0">
          <img
            className="w-full md:w-[240px] h-full object-cover"
            src={src || "/placeholder.svg"}
            alt={title}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          <span className="absolute bottom-0 text-h6 text-neutral-0 font-heading px-4 py-6 w-full text-center font-semibold">
            {title}
          </span>
        </div>
        <div className="p-6 flex flex-col gap-8 md:gap-10">
          <p className="text-body-lg text-neutral-700">{description}</p>

          <div className="flex flex-col gap-3">
            <p className="text-body-lg font-medium text-neutral-800">
              Most popular searches:
            </p>
            <div className="flex flex-wrap gap-2">
              {searches.map((search, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 font-semibold rounded-full bg-system-info-100 text-system-info-600"
                >
                  {search}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-2 mt-auto">
            <Button variant="outline" className="flex-1">
              {buttons.view}
            </Button>

            <Button className="flex-1">{buttons.enquire}</Button>
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
  const slides = [
    {
      src: "./usa.png",
      title: "Study in USA",
      description:
        "Enroll in job-oriented programs in USA: Top universities and scholarships on offer",
      searches: [
        "MBA in USA",
        "Computer Science in USA",
        "Data Science in USA",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "./germany.png",
      title: "Study in Germany",
      description:
        "Enroll in job-oriented programs in Germany: Top universities and scholarships on offer",
      searches: [
        "MBA in Germany",
        "Data Science in Germany",
        "Business Schools in Germany",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
    {
      src: "./usa.png",
      title: "Study in Canada",
      description:
        "Enroll in job-oriented programs in Canada: Top universities and scholarships on offer",
      searches: [
        "MBA in Canada",
        "Engineering in Canada",
        "Health Sciences in Canada",
      ],
      buttons: {
        view: "View Country",
        enquire: "Enquire Now",
      },
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startTimeRef = useRef(0);
  const startPositionRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const animationRef = useRef(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  // Swipe functionality
  const handleTouchStart = (e) => {
    startTimeRef.current = Date.now();
    startPositionRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;

    if (carouselRef.current) {
      currentTranslateRef.current = -current * (isMobile ? 85 : 50);
      prevTranslateRef.current = currentTranslateRef.current;
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  const handleTouchMove = (e) => {
    if (isDraggingRef.current) {
      const currentPosition = e.touches[0].clientX;
      const diff = currentPosition - startPositionRef.current;
      // Convert pixel difference to percentage of container width
      const containerWidth = carouselRef.current.offsetWidth;
      const percentageDiff = (diff / containerWidth) * 100;

      currentTranslateRef.current = prevTranslateRef.current + percentageDiff;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    cancelAnimationFrame(animationRef.current);

    const movedPercentage =
      currentTranslateRef.current - prevTranslateRef.current;

    // Determine if swipe was significant enough to change slide
    if (movedPercentage > 10) {
      handlePreviousClick();
    } else if (movedPercentage < -10) {
      handleNextClick();
    }
  };

  // Mouse drag for desktop
  const handleMouseDown = (e) => {
    e.preventDefault();
    startTimeRef.current = Date.now();
    startPositionRef.current = e.clientX;
    isDraggingRef.current = true;

    if (carouselRef.current) {
      currentTranslateRef.current = -current * (isMobile ? 85 : 50);
      prevTranslateRef.current = currentTranslateRef.current;
      animationRef.current = requestAnimationFrame(animation);
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const currentPosition = e.clientX;
      const diff = currentPosition - startPositionRef.current;
      // Convert pixel difference to percentage of container width
      const containerWidth = carouselRef.current.offsetWidth;
      const percentageDiff = (diff / containerWidth) * 100;

      currentTranslateRef.current = prevTranslateRef.current + percentageDiff;
    }
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    cancelAnimationFrame(animationRef.current);

    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }

    const movedPercentage =
      currentTranslateRef.current - prevTranslateRef.current;

    // Determine if swipe was significant enough to change slide
    if (movedPercentage > 10) {
      handlePreviousClick();
    } else if (movedPercentage < -10) {
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
      carouselRef.current.style.transform = `translateX(${currentTranslateRef.current}%)`;
    }
  };

  const id = useId();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Clean up mouse events on document
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Reset animation when current slide changes
  useEffect(() => {
    if (carouselRef.current) {
      // Reset the transform to the current slide position
      carouselRef.current.style.transition = "transform 500ms ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        current * (isMobile ? 85 : 50)
      }%)`;

      // Clear transition after animation completes
      const transitionEndHandler = () => {
        carouselRef.current.style.transition = "";
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
  }, [current, isMobile]);

  return (
    <div className="bg-brand-secondary py-[60px] md:py-20 w-full px-5 md:px-24 flex flex-col gap-8 md:gap-12 items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col gap-8 md:gap-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h2 className="text-h4 font-semibold text-center">
              Top Study{" "}
              <span className="text-h4 font-semibold text-brand-primary">
                Abroad Destinations
              </span>
            </h2>
            <p className="text-xl text-neutral-700 md:text-start text-center">
              Explore the step by step procedure to study in top destinations
            </p>
          </div>
          <div className="hidden md:flex gap-4 self-end md:self-auto">
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
          className="relative overflow-hidden w-full touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="flex pl-2 md:pl-0 cursor-grab"
            style={{
              transform: `translateX(-${current * (isMobile ? 85 : 50)}%)`,
              transition: "transform 500ms ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
                index={index}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
