import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomInputOTP from "./CustomInputOtp";

const ContactStep2 = ({ phoneNumber, onVerify, onResend, setCurrentStep }) => {
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerifyOTP = async () => {
    if (otp.length !== 4) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      onVerify();
    } catch (error) {
      console.error("OTP verification error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 min-h-[286px] md:min-h-[375px]">
      <p className="text-neutral-600 text-body-lg font-medium flex gap-2">
        We've sent you an OTP on {phoneNumber}
        <button
          className="text-brand-primary text-body-md font-medium"
          onClick={() => {
            setCurrentStep(1);
          }}
        >
          Edit
        </button>
      </p>

      <div className="flex flex-col gap-6">
        <CustomInputOTP maxLength={4} value={otp} onChange={setOtp} />

        <p className="text-neutral-600 text-body-lg font-medium flex gap-2">
          Didn't receive the OTP?{" "}
          <button
            className="text-brand-primary text-body-md font-medium"
            onClick={onResend}
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
