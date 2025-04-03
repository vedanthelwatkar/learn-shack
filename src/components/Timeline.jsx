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
            "flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold text-neutral-800 border-2 border-gray-200 z-10",
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

      <div className="flex-1 sm:pb-12 pb-6">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-neutral-100 shadow-sm">
          <div className="flex justify-between bg-brand-primary px-6 py-2 text-neutral-0 rounded-t-lg">
            <span className="font-semibold text-body-sm text-neutral-0">
              LEARNSHACK
            </span>
            <span className="font-semibold text-body-sm text-neutral-0">
              {step}
            </span>
          </div>

          <div className="sm:pt-9 sm:px-7 sm:pb-6 p-5 pb-8 bg-neutral-0 rounded-b-lg relative">
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

          <div className="pt-8 pb-6 px-7 flex flex-col gap-3 bg-neutral-50">
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
  const headerHeight = 130; // Height of the header in pixels

  // Store item measurements to avoid recalculating
  const itemMeasurements = useRef([]);

  useEffect(() => {
    // Initialize measurements
    const initMeasurements = () => {
      if (!timelineRef.current) return;

      itemMeasurements.current = itemRefs.current.map((item) => {
        if (!item) return { top: 0, height: 0, lineHeight: 0 };

        const rect = item.getBoundingClientRect();
        // Add current scroll position to get absolute position
        const absoluteTop = rect.top + window.scrollY;
        return {
          top: absoluteTop,
          height: rect.height,
          // The line height would be the distance to the next item or a fixed value
          lineHeight: rect.height - 40, // approximation, adjust if needed
        };
      });
    };

    // Calculate progress per pixel for each timeline item
    const calculateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Account for header offset
      const adjustedScrollY = scrollY + headerHeight;

      const newProgress = [...progressState];

      // Process items in sequence
      for (let i = 0; i < itemMeasurements.current.length; i++) {
        const measurement = itemMeasurements.current[i];
        if (!measurement) continue;

        // Check if previous items are completed
        const previousIsComplete = i === 0 || newProgress[i - 1] >= 100;

        if (!previousIsComplete) {
          // If previous not complete, ensure this one has no progress
          newProgress[i] = 0;
          continue;
        }

        const viewportPosition = measurement.top - adjustedScrollY;

        // Calculate trigger point (when item enters viewport enough to start)
        const triggerPoint = windowHeight * 0.6;

        if (viewportPosition < triggerPoint) {
          // Item is in the trigger zone

          // Calculate progress based on how far item has moved past trigger
          const progressRange = measurement.lineHeight;
          const progressPixels = triggerPoint - viewportPosition;

          // Convert to percentage with direct pixel mapping
          let calculatedProgress = (progressPixels / progressRange) * 100;

          // Clamp between 0-100%
          calculatedProgress = Math.min(Math.max(calculatedProgress, 0), 100);

          newProgress[i] = calculatedProgress;
        } else {
          // Item hasn't reached trigger zone yet
          newProgress[i] = 0;
        }
      }

      // Only update state if there's a change
      if (JSON.stringify(newProgress) !== JSON.stringify(progressState)) {
        setProgressState(newProgress);
      }
    };

    // Initialize and attach scroll handler
    initMeasurements();
    calculateProgress(); // Initial calculation

    // Use requestAnimationFrame for smoother performance
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

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", initMeasurements);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", initMeasurements);
    };
  }, [items.length, progressState]);

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
