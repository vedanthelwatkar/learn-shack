import React, { useState, useRef, useEffect, forwardRef } from "react";

const CustomInputOTP = forwardRef(
  ({ maxLength = 4, value = "", onChange, className, onComplete }, ref) => {
    const inputRefs = useRef([]);
    const hiddenInputRef = useRef(null);

    // Create array of refs for each OTP digit input
    useEffect(() => {
      inputRefs.current = Array(maxLength)
        .fill()
        .map((_, i) => inputRefs.current[i] || React.createRef());
    }, [maxLength]);

    // Mobile-first focus handling
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
          // Android requires click to show keyboard
          if (isAndroid()) inputRefs.current[0].click();
        }
      }, 350);
      return () => clearTimeout(timeout);
    }, []);

    // Handle mobile paste and autofill
    const handleInput = (index, e) => {
      const input = e.target;
      const newValue = input.value;

      // Handle multi-character input (mobile paste/autofill)
      if (newValue.length > 1) {
        const digits = newValue.replace(/\D/g, "").slice(0, maxLength);
        onChange(digits);

        if (digits.length === maxLength) {
          input.blur();
          if (onComplete) onComplete();
        } else {
          const nextIndex = Math.min(digits.length, maxLength - 1);
          inputRefs.current[nextIndex]?.focus();
        }
        return;
      }

      // Single character input
      if (newValue && !/^\d$/.test(newValue)) return;

      const updated = value.split("");
      updated[index] = newValue;
      const joined = updated.join("").slice(0, maxLength);
      onChange(joined);

      // Auto-focus next input
      if (newValue && index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Submit when complete
      if (joined.length === maxLength && onComplete) {
        onComplete();
      }
    };

    // Mobile keyboard navigation
    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace") {
        if (!value[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      }
    };

    return (
      <div className={`flex gap-3 justify-center  ${className || ""}`}>
        {/* Hidden input for SMS autofill */}
        <input
          ref={hiddenInputRef}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          className="absolute opacity-0 h-0 w-0"
          onChange={(e) => {
            const digits = e.target.value
              .replace(/\D/g, "")
              .slice(0, maxLength);
            if (digits) {
              onChange(digits);
              if (digits.length === maxLength && onComplete) onComplete();
            }
          }}
        />

        {Array(maxLength)
          .fill()
          .map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="tel"
              inputMode="numeric"
              value={value[i] || ""}
              className="text-center text-xl font-medium bg-neutral-100 outline-none relative flex h-20 w-14 md:w-20 px-5 py-3 items-center justify-center rounded-sm border border-input focus-within:ring-1 focus-within:ring-primary flex-1 md:flex-none"
              onChange={(e) => handleInput(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onFocus={(e) => e.target.select()}
            />
          ))}
      </div>
    );
  }
);

// Helper function for Android detection
const isAndroid = () => /android/i.test(navigator.userAgent);

export default CustomInputOTP;
