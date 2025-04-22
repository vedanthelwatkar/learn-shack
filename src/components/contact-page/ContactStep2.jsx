import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import CustomInputOTP from "./CustomInputOtp";
import useOtpStore from "@/store/useOtpStore";

const ContactStep2 = ({
  phoneNumber,
  onVerify,
  onResend,
  setCurrentStep,
  isLoading,
  error,
  resendCooldown,
}) => {
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const otpInputRef = useRef(null);
  const { setState } = useOtpStore();

  // Focus OTP input on component mount
  useEffect(() => {
    if (otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, []);

  // Listen for paste events
  useEffect(() => {
    const handlePaste = (e) => {
      const pastedData = e.clipboardData.getData("text");
      // Check if pasted content is a 4-digit number
      if (/^\d{4}$/.test(pastedData)) {
        setOtp(pastedData);
        e.preventDefault();
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, []);

  // Handle enter key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && otp.length === 4 && !isSubmitting) {
        handleVerifyOTP();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [otp, isSubmitting]);

  // Handle browser auto-fill for OTP
  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          if (otp && otp.code) {
            setOtp(otp.code);
          }
        })
        .catch((err) => {
          console.log("OTP Credential API error:", err);
        });

      return () => ac.abort();
    }
  }, []);

  useEffect(() => {
    if (otp) {
      setErrorMessage("");
    }
  }, [otp]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setIsSubmitting(false);
    }
  }, [error]);

  useEffect(() => {
    setIsSubmitting(isLoading);
  }, [isLoading]);

  const handleVerifyOTP = async () => {
    if (otp.length !== 4) return;

    setIsSubmitting(true);
    try {
      await onVerify(otp);
    } catch (error) {
      console.error("OTP verification error:", error);
      setErrorMessage("Failed to verify OTP. Please try again.");
    }
  };

  const handleResendOTP = async () => {
    try {
      await onResend();
      setOtp("");
      setErrorMessage("");
    } catch (error) {
      console.error("Resend OTP error:", error);
      setErrorMessage("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 min-h-[286px] md:min-h-[375px]">
      <p className="text-neutral-600 text-body-lg font-medium flex gap-2">
        We've sent you an OTP on {phoneNumber}
        <button
          className="text-brand-primary text-body-md font-medium"
          onClick={() => {
            setState({ isOtpSent: false });
            setCurrentStep(1);
          }}
        >
          Edit
        </button>
      </p>

      <div className="flex flex-col gap-6 w-full">
        <div className="w-full">
          <CustomInputOTP
            maxLength={4}
            value={otp}
            onChange={setOtp}
            ref={otpInputRef}
            onComplete={handleVerifyOTP}
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm -mt-4">{errorMessage}</p>
        )}

        <p className="text-neutral-600 text-body-lg font-medium flex gap-2">
          Didn't receive the OTP?{" "}
          <button
            className="text-brand-primary text-body-md font-medium"
            onClick={handleResendOTP}
            disabled={isSubmitting || resendCooldown > 0}
          >
            {resendCooldown > 0
              ? `Resend OTP in ${resendCooldown}s`
              : "Resend OTP"}
          </button>
        </p>
      </div>

      <Button
        className="w-full mt-auto"
        onClick={handleVerifyOTP}
        disabled={otp.length !== 4 || isSubmitting}
      >
        {isSubmitting ? "Verifying..." : "Verify OTP"}
      </Button>
    </div>
  );
};

export default ContactStep2;
