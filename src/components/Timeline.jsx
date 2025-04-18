"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function TimelineItem({
  number,
  title,
  description,
  comparison,
  step,
  image,
  className,
  isActive = false,
  isCompleted = false,
  progressPercent = 0,
  isLast = false,
}) {
  return (
    <div className={cn("relative flex gap-8", className)}>
      <div className="hidden sm:flex flex-col items-center">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-0 text-lg font-semibold text-neutral-800 border-2 z-10",
            isActive && "border-brand-primary text-brand-primary",
            isCompleted && "border-brand-primary text-brand-primary"
          )}
        >
          {number}
        </div>

        {!isLast && (
          <div className="relative w-[2px] grow -mt-1">
            <div className="absolute inset-0 w-[2px] bg-neutral-0"></div>
            <div
              className="absolute top-0 left-0 w-[2px] bg-brand-primary"
              style={{
                height: isCompleted
                  ? "100%"
                  : isActive
                  ? `${progressPercent}%`
                  : "0%",
                transition: "none",
              }}
            ></div>
          </div>
        )}
      </div>

      <div className="flex-1 sm:pb-12 pb-6 w-full px-5 lg:px-0 md:px-0">
        <div className="w-full rounded-lg flex flex-col items-center md:items-start h-fit relative">
          <div className="relative z-30 bg-neutral-50 rounded-t-lg">
            <div className="w-full flex justify-between bg-brand-primary px-6 py-2 text-neutral-0 rounded-t-lg">
              <span className="font-semibold text-body-sm text-neutral-0">
                LEARNSHACK
              </span>
              <span className="font-semibold text-body-sm text-neutral-0">
                {step}
              </span>
            </div>
            <div className="sm:pt-9 sm:px-7 sm:pb-6 p-5 pb-8 bg-neutral-0 rounded-b-lg">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-h6 font-heading font-semibold text-neutral-800">
                    {title}
                  </h3>
                  <p className="text-neutral-900 text-body-lg">{description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  {image}
                </div>
              </div>
              <span className="inline-flex items-center justify-center p-3 text-body-xl text-neutral-600 bg-neutral-0 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-6 sm:left-7 sm:translate-x-0 border border-neutral-200 w-12 h-12">
                VS
              </span>
            </div>
          </div>
          <div className="sticky sm:relative bottom-6 sm:bottom-0 w-full z-10 pt-8 pb-6 px-7 flex flex-col gap-3 bg-neutral-50 rounded-b-lg ">
            <h4 className="font-medium text-neutral-600 text-body-xl">
              Traditional consultancies
            </h4>
            <p className="text-neutral-600 text-body-xl">{comparison}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Timeline({ items, className }) {
  const [progressState, setProgressState] = useState(
    Array(items.length).fill(0)
  );
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const headerHeight = 130;

  const itemMeasurements = useRef([]);

  useEffect(() => {
    const initMeasurements = () => {
      if (!timelineRef.current) return;

      itemMeasurements.current = itemRefs.current.map((item) => {
        if (!item) return { top: 0, height: 0, lineHeight: 0 };

        const rect = item.getBoundingClientRect();

        const absoluteTop = rect.top + window.scrollY;
        return {
          top: absoluteTop,
          height: rect.height,

          lineHeight: rect.height - 40,
        };
      });
    };

    const calculateProgress = () => {
      const container = document.getElementById("main-content");
      container && container.scrollTop > 0
        ? container.scrollTop
        : window.scrollY;

      const windowHeight = window.innerHeight;
      const newProgress = [...progressState];

      for (let i = 0; i < itemMeasurements.current.length; i++) {
        const measurement = itemMeasurements.current[i];
        if (!measurement) continue;

        const previousIsComplete = i === 0 || newProgress[i - 1] >= 100;

        if (!previousIsComplete) {
          newProgress[i] = 0;
          continue;
        }

        const rect = itemRefs.current[i].getBoundingClientRect();
        const elementTopRelativeToViewport = rect.top;

        const triggerPoint = windowHeight * 0.6;

        if (elementTopRelativeToViewport < triggerPoint) {
          const progressRange = measurement.lineHeight;
          const progressPixels = triggerPoint - elementTopRelativeToViewport;

          let calculatedProgress = (progressPixels / progressRange) * 100;
          calculatedProgress = Math.min(Math.max(calculatedProgress, 0), 100);

          newProgress[i] = calculatedProgress;
        } else {
          newProgress[i] = 0;
        }
      }

      if (JSON.stringify(newProgress) !== JSON.stringify(progressState)) {
        setProgressState(newProgress);
      }
    };

    initMeasurements();
    calculateProgress();

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("resize", initMeasurements);

    window.addEventListener("scroll", scrollHandler, { passive: true });
    const container = document.getElementById("main-content");
    if (container) {
      container.addEventListener("scroll", scrollHandler, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (container) {
        container.removeEventListener("scroll", scrollHandler);
      }
      window.removeEventListener("resize", initMeasurements);
    };
  }, [items.length]);

  return (
    <div className={cn("relative", className)} ref={timelineRef}>
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className={index === items.length - 1 ? "last-of-type:pb-0" : ""}
        >
          <TimelineItem
            {...item}
            isActive={progressState[index] > 0}
            isCompleted={progressState[index] >= 100}
            progressPercent={progressState[index]}
            isLast={index === items.length - 1}
          />
        </div>
      ))}
    </div>
  );
}
