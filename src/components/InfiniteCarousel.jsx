import { motion, useAnimation, useAnimationFrame } from "framer-motion";
import React, { useEffect, useRef, Children, useState } from "react";

const InfiniteCarousel = ({ className, children }) => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const baseSpeed = useRef(-1.3);
  const xPosition = useRef(0);
  const isFirstRender = useRef(true);
  const [animationSlowed, setAnimationSlowed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const originalChildren = Children.toArray(children);
  const duplicatedChildren = [
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
    ...originalChildren,
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isFirstRender.current && carouselRef.current) {
      xPosition.current = 0;
      controls.set({ x: xPosition.current });
      isFirstRender.current = false;
    }
  }, [controls]);

  useAnimationFrame(() => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.scrollWidth / 2;

    const currentSpeed = animationSlowed ? -0.2 : baseSpeed.current;

    xPosition.current += currentSpeed;

    if (Math.abs(xPosition.current) >= containerWidth) {
      xPosition.current = 0;
    }

    controls.set({
      x: xPosition.current,
    });
  });

  const handleClick = () => {
    if (isMobile) {
      setAnimationSlowed(!animationSlowed);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setAnimationSlowed(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setAnimationSlowed(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={isMobile ? () => {} : undefined}
    >
      <motion.div
        ref={carouselRef}
        className="flex gap-4 sm:gap-8"
        animate={controls}
        initial={{ x: 0 }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
