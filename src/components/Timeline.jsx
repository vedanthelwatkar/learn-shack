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
                transition: "height 0.2s ease-out",
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
            <h4 className="font-semibold text-neutral-600 text-body-xl">
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
  const [progressStates, setProgressStates] = useState(
    Array(items.length).fill(0)
  );
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Initialize refs array with correct length
    itemRefs.current = itemRefs.current.slice(0, items.length);

    const handleScroll = () => {
      if (!timelineRef.current) return;

      // Get scroll position from document.body or documentElement
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newProgressStates = [...progressStates];
      let prevCompleted = true; // First item starts with ability to progress

      // Process each timeline item
      itemRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return;

        const rect = itemRef.getBoundingClientRect();
        const triggerLine = viewportHeight * 0.6; // Trigger line at 60% from top

        // Calculate progress only if previous item is completed
        if (prevCompleted) {
          if (rect.top <= triggerLine && rect.bottom > triggerLine) {
            // Item is crossing the trigger line - calculate progress
            const progressPercentage =
              ((triggerLine - rect.top) / rect.height) * 100;
            const clampedProgress = Math.min(
              100,
              Math.max(0, progressPercentage)
            );
            newProgressStates[index] = clampedProgress;
            prevCompleted = clampedProgress >= 100;
          } else if (rect.top > triggerLine) {
            // Item is below trigger line
            newProgressStates[index] = 0;
            prevCompleted = false;
          } else {
            // Item is above trigger line
            newProgressStates[index] = 100;
            prevCompleted = true;
          }
        } else {
          // Previous item not completed, so this one stays at 0
          newProgressStates[index] = 0;
        }
      });

      // Update state only if there's a change
      if (
        JSON.stringify(newProgressStates) !== JSON.stringify(progressStates)
      ) {
        setProgressStates(newProgressStates);
      }
    };

    // Add event listeners to both window and document.body
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.body.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    setTimeout(handleScroll, 100); // Small delay to ensure elements are rendered

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [items.length]);

  return (
    <div className={cn("relative", className)} ref={timelineRef}>
      {items.map((item, index) => {
        const progress = progressStates[index];
        const isCompleted = progress >= 100;
        const isActive = progress > 0 && progress < 100;

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={index === items.length - 1 ? "last-of-type:pb-0" : ""}
          >
            <TimelineItem
              {...item}
              isActive={isActive}
              isCompleted={isCompleted}
              progressPercent={progress}
              isLast={index === items.length - 1}
            />
          </div>
        );
      })}
    </div>
  );
}
