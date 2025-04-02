import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import SearchIcon from "@/svgComponents/SearchIcon";

export function SearchBar({
  onSearch,
  className,
  placeholders = ["Tell us what you're looking to learn"],
}) {
  const [query, setQuery] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  // Rotate placeholders
  const intervalRef = useRef(null);

  const startPlaceholderRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  useEffect(() => {
    startPlaceholderRotation();

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === "visible") {
        startPlaceholderRotation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders.length]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center w-full relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 z-10" />

        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          className="pl-10 pr-4 py-6 bg-neutral-100 border-none rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 text-sm w-full"
        />

        {!query && (
          <div className="absolute left-10 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.p
                key={`placeholder-${currentPlaceholder}`}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="text-neutral-500 text-sm"
              >
                {placeholders[currentPlaceholder]}
              </motion.p>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
