import React, { useState, useEffect, useRef } from "react";

const EasingFunctions = {
  linear: (t) => t,

  easeOutQuad: (t) => t * (2 - t),

  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),

  easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),

  easeOutBounce: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
};

const NumberCountUp = ({
  end,
  start = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  className = "",
  easingFunction = "easeOutCubic",
  separator = ",",
  decimalPlaces = 0,
}) => {
  const [count, setCount] = useState(start);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const ease =
      EasingFunctions[easingFunction] || EasingFunctions.easeOutCubic;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentProgress = ease(progress);

      const currentCount = Math.floor(currentProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
        setIsComplete(true);
      }
    };

    window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(step);
    };
  }, [end, start, duration, easingFunction, isVisible]);

  const formattedNumber = count?.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });

  return (
    <div
      ref={countRef}
      className={`number-count-up ${className} ${isComplete ? "complete" : ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}
      {formattedNumber}
      {suffix}
    </div>
  );
};

export default NumberCountUp;
