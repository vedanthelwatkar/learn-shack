import React, { useState, useEffect } from "react";
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
}) => {
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setState } = useOtpStore();

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

      <div className="flex flex-col gap-6">
        <CustomInputOTP maxLength={4} value={otp} onChange={setOtp} />

        {errorMessage && (
          <p className="text-red-500 text-sm -mt-4">{errorMessage}</p>
        )}

        <p className="text-neutral-600 text-body-lg font-medium flex gap-2">
          Didn't receive the OTP?{" "}
          <button
            className="text-brand-primary text-body-md font-medium"
            onClick={handleResendOTP}
            disabled={isSubmitting}
          >
            Resend
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
