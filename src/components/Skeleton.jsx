"use client";

import { useLayout } from "@/context/LayoutContext";

const shimmerEffect = "animate-pulse";

export const Skeleton = ({
  type = "page",
  lines = 5,
  showHeader = true,
  showImage = true,
  imageSize = "large",
  className = "",
}) => {
  const { navbarHeight } = useLayout();

  const renderLines = (count, height = "h-4", className = "") => {
    return Array(count)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className={`${height} bg-neutral-200 rounded-md ${shimmerEffect} ${className} ${
            index === count - 1 ? "w-3/4" : "w-full"
          }`}
        />
      ));
  };

  const getImageDimensions = () => {
    switch (imageSize) {
      case "small":
        return "h-16 w-32 md:h-24 md:w-24";
      case "medium":
        return "h-40 w-full md:h-64 md:w-full";
      case "large":
      default:
        return "h-24 w-full md:h-24 md:w-full";
    }
  };

  if (type === "card") {
    return (
      <div
        className={`rounded-lg bg-neutral-0 p-4 shadow-sm ${shimmerEffect} ${className}`}
      >
        {showImage && (
          <div
            className={`${getImageDimensions()} mb-4 rounded-md bg-neutral-200`}
          />
        )}
        {showHeader && (
          <div className="h-6 w-3/4 mb-4 bg-neutral-200 rounded-md" />
        )}
        <div className="space-y-2">{renderLines(lines)}</div>
      </div>
    );
  }

  if (type === "list-item") {
    return (
      <div
        className={`flex items-center space-x-4 py-3 ${shimmerEffect} ${className}`}
      >
        {showImage && <div className="h-12 w-12 rounded-full bg-neutral-200" />}
        <div className="flex-1 space-y-2">
          {showHeader && (
            <div className="h-5 w-1/3 bg-neutral-200 rounded-md" />
          )}
          {renderLines(2, "h-3", "mt-2")}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full mx-auto px-4 py-8 overflow-hidden ${className}`}
      style={{ height: `calc(100dvh - ${navbarHeight}px)` }}
    >
      <div className="mb-12">
        {showHeader && (
          <div className="h-10 md:h-14 w-3/4 mx-auto bg-neutral-200 rounded-md mb-6 md:mb-8 animate-pulse" />
        )}
        {showImage && (
          <div
            className={`${getImageDimensions()} mx-auto rounded-lg bg-brand-secondary ${shimmerEffect}`}
          />
        )}
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="h-8 w-1/2 bg-neutral-200 rounded-md animate-pulse" />
          <div className="space-y-3">{renderLines(Math.min(3, lines))}</div>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-2/3 bg-neutral-200 rounded-md animate-pulse" />
          <div className="space-y-3">{renderLines(Math.min(4, lines))}</div>
        </div>

        <div className="mt-12 text-center">
          <div className="h-10 w-40 mx-auto bg-brand-primary opacity-50 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
