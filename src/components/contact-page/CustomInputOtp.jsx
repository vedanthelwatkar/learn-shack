import React, { useState, useRef, useEffect, forwardRef } from "react";

const CustomInputOTP = forwardRef(
  ({ maxLength = 4, value = "", onChange, className, onComplete }, ref) => {
    const inputRefs = useRef([]);

    useEffect(() => {
      inputRefs.current = Array(maxLength)
        .fill(null)
        .map((_, i) => inputRefs.current[i] || React.createRef());
    }, [maxLength]);

    // Focus the first input when component mounts
    useEffect(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, []);

    // Expose focus method via ref
    useEffect(() => {
      if (ref) {
        ref.current = {
          focus: () => {
            if (inputRefs.current[0]) {
              inputRefs.current[0].focus();
            }
          },
        };
      }
    }, [ref]);

    const handleChange = (index, e) => {
      const digit = e.target.value;

      if (digit && !/^\d$/.test(digit)) return;

      const valueArray = value.split("");
      valueArray[index] = digit;
      const newValue = valueArray.join("").slice(0, maxLength);
      onChange(newValue);

      if (digit && index < maxLength - 1) {
        inputRefs.current[index + 1].focus();
      } else if (
        digit &&
        index === maxLength - 1 &&
        newValue.length === maxLength
      ) {
        // If the last digit is filled and we have all digits, trigger completion
        if (onComplete) {
          onComplete();
        }
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace") {
        const valueArray = value.split("");

        if (!valueArray[index] && index > 0) {
          valueArray[index - 1] = "";
          onChange(valueArray.join(""));
          inputRefs.current[index - 1].focus();
        } else if (valueArray[index]) {
          valueArray[index] = "";
          onChange(valueArray.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else if (e.key === "ArrowRight" && index < maxLength - 1) {
        inputRefs.current[index + 1].focus();
      } else if (e.key === "Enter" && value.length === maxLength) {
        // Handle Enter key press when all digits are filled
        if (onComplete) {
          onComplete();
        }
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain").trim();

      const digits = pastedData.replace(/\D/g, "").slice(0, maxLength);

      if (digits) {
        onChange(digits);

        const nextEmptyIndex = Math.min(digits.length, maxLength - 1);
        if (inputRefs.current[nextEmptyIndex]) {
          inputRefs.current[nextEmptyIndex].focus();
        }

        // If all fields are filled after paste, trigger completion
        if (digits.length === maxLength && onComplete) {
          onComplete();
        }
      }
    };

    return (
      <div className={`flex gap-3 justify-center flex-grow ${className || ""}`}>
        {Array.from({ length: maxLength }).map((_, index) => (
          <div
            key={index}
            className="relative flex h-20 w-20 bg-neutral-100 px-5 py-3 items-center justify-center rounded-md border border-input focus-within:ring-1 focus-within:ring-primary flex-1"
          >
            <input
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value[index] || ""}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="absolute inset-0 w-full h-full text-center text-xl font-medium bg-transparent outline-none"
            />
          </div>
        ))}
      </div>
    );
  }
);

export default CustomInputOTP;
