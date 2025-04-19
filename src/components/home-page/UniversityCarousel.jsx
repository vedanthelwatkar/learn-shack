import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useAnimationFrame } from "framer-motion";
import BoltIcon from "@/svgComponents/BoltIcon";
import useConstantsStore, { getS3 } from "@/store/useConstantsStore";

const UniversityCarousel = () => {
  const [universities, setUniversities] = useState([]);
  const { universityLogos } = useConstantsStore();

  useEffect(() => {
    getS3(
      {
        bucketName: "learn-shack-new-bucket",
        prefix: "svg-uni-logos/",
      },
      { variable: "universityLogos" }
    );
  }, []);

  useEffect(() => {
    if (universityLogos && universityLogos.length > 0) {
      const mappedUrls = universityLogos.map((item) => item.url);
      setUniversities(mappedUrls);
    }
  }, [universityLogos]);
  const duplicatedUniversities = [...universities, ...universities];

  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isHovered = useRef(false);
  const baseSpeed = useRef(-1.3);
  const xPosition = useRef(0);
  const isFirstRender = useRef(true);

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

    const currentSpeed = isHovered.current
      ? baseSpeed.current * 0.3
      : baseSpeed.current;

    xPosition.current += currentSpeed;

    if (Math.abs(xPosition.current) >= containerWidth) {
      xPosition.current = 0;
    }

    controls.set({ x: xPosition.current });
  });

  return (
    <div className="pt-10 pb-5 md:py-[60px] w-full flex items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-10">
          <span className="text-body-xl text-neutral-800 font-semibold flex justify-center">
            850+ university partners & growing
          </span>

          <div
            ref={containerRef}
            className="w-full"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            <motion.div
              ref={carouselRef}
              className="flex gap-12 ml-0"
              animate={controls}
              initial={{ x: 0 }}
            >
              {duplicatedUniversities.map((item, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={item}
                    alt={`University logo ${index}`}
                    className="h-[60px] sm:h-[80px] w-auto mix-blend-screen"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:flex gap-12 justify-center">
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              Visa Application Support
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              Accommodation Assistance
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BoltIcon />
            <p className="text-lg text-brand-primary font-semibold">
              LSE Guardian Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCarousel;
