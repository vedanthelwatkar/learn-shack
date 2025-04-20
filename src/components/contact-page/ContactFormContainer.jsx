import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactStep1 from "@/components/contact-page/ContactStep1";
import ContactStep2 from "./ContactStep2";
import ContactStep3 from "./ContactStep3";
import YoureAllSetCircleCheck from "@/svgComponents/YoureAllSetCircleCheck";
import { postContactInfo } from "@/store/ContactStore";

const ContactFormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91",
    selectedDestinations: [],
    intake: "",
    examType: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resendCooldown, setResendCooldown] = useState(30);

  useEffect(() => {
    let interval;
    if (resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  useEffect(() => {
    if (isOtpSent) {
      setCurrentStep(3);
    }
  }, [isOtpSent]);

  useEffect(() => {
    if (isOtpVerified) {
      setCurrentStep(3);
    }
  }, [isOtpVerified]);

  const handleStep1Submit = async (data) => {
    setFormData({
      ...formData,
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      countryCode: data.countryCode,
    });
    sendOtp(data.phoneNumber, data.countryCode);
  };

  const handleStep2Submit = async (otp) => {
    return await verifyOtp(otp);
  };

  const handleResendOTP = async () => {
    if (!isOtpSent || resendCooldown > 0) return;

    setError(null);
    setIsLoading(true);

    try {
      otplessRef.current?.initiate({
        channel: "PHONE",
        phone: formData.phoneNumber,
        countryCode: formData.countryCode,
      });
      setResendCooldown(30);
      console.log("OTP resent");
    } catch (e) {
      console.error("Resend OTP failed:", e);
      setError("Failed to resend OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const otplessRef = useRef(null);

  useEffect(() => {
    otplessRef.current = new OTPless((eventCallback) => {
      const EVENTS_MAP = {
        ONETAP: () => {
          const { response } = eventCallback;
          const token = response?.token;
          if (token) {
            console.log("One Tap Token:", token);
            setIsOtpVerified(true);
          }
        },
        OTP_AUTO_READ: () => {
          const { otp } = eventCallback.response;
          console.log("Auto-read OTP:", otp);
        },
        FAILED: () => {
          const { response } = eventCallback;
          console.error("OTP Failed:", response);
          setError("OTP verification failed.");
        },
        FALLBACK_TRIGGERED: () => {
          const { response } = eventCallback;
          console.warn("Fallback triggered:", response);
        },
      };

      if ("responseType" in eventCallback) {
        EVENTS_MAP[eventCallback.responseType]?.();
      }
    });
  }, []);

  const sendOtp = (phoneNumber, countryCode) => {
    setIsLoading(true);
    try {
      otplessRef.current?.initiate({
        channel: "PHONE",
        phone: phoneNumber,
        countryCode: countryCode,
      });
      setIsOtpSent(true);
    } catch (e) {
      console.error("OTP send failed:", e);
      setError("Failed to send OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (otp) => {
    setIsLoading(true);
    try {
      const response = await otplessRef.current?.verify({
        channel: "PHONE",
        phone: formData.phoneNumber,
        otp,
        countryCode: formData.countryCode,
      });
      console.log("response: ", response);

      if (!response.success) {
        const rawMessage =
          response.response?.errorMessage || "OTP verification failed";
        const errorMessage = rawMessage.replace(/^Request error:\s*/i, "");
        setError(errorMessage);

        console.log("Verification failed:", response.response);
        return { success: false, error: response.response };
      }

      return { success: true, data: response };
    } catch (e) {
      console.log("Verification error:", e);
      setError("OTP verification error");
      return { success: false, error: e };
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalSubmit = async (data) => {
    const updatedFormData = {
      ...formData,
      selectedDestinations: data.destinations,
      intake: data.intake,
      examType: data.examType,
    };

    setFormData(updatedFormData);
    postContactInfo(updatedFormData);
    setFormSubmitted(true);

    console.log("Form submitted successfully", updatedFormData);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const formSteps = [
    {
      id: 1,
      component: (
        <ContactStep1
          initialData={{
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            countryCode: formData.countryCode,
          }}
          onSubmit={handleStep1Submit}
        />
      ),
    },
    // {
    //   id: 2,
    //   component: (
    //     <ContactStep2
    //       phoneNumber={`${formData.countryCode} ${formData.phoneNumber}`}
    //       onVerify={handleStep2Submit}
    //       onResend={handleResendOTP}
    //       setIsOtpSent={setIsOtpSent}
    //       setCurrentStep={setCurrentStep}
    //       isLoading={isLoading}
    //       error={error}
    //       resendCooldown={resendCooldown}
    //     />
    //   ),
    // },
    {
      id: 3,
      component: <ContactStep3 onSubmit={handleFinalSubmit} />,
    },
  ];

  if (formSubmitted) {
    return (
      <div className="pt-5 pb-10 px-9 flex flex-col gap-6 items-center justify-center text-center h-full min-h-[500px]">
        <YoureAllSetCircleCheck />
        <div className="flex flex-col gap-3">
          <h3 className="text-brand-primary font-semibold text-h6 font-heading text-center">
            You're All Set!
          </h3>
          <p className="text-neutral-700 text-body-lg font-medium text-center">
            We've received your details and our team is already on it. One of
            our expert counselors will give you a call within the next 24 hours
            to understand your goals and walk you through the best path to study
            abroad.
          </p>
        </div>
        <p className="text-neutral-700 text-body-lg font-medium text-center">
          In the meantime, feel free to jot down any questions you have — we'll
          be happy to answer them all on the call!
        </p>
      </div>
    );
  }

  const getTitle = () => {
    switch (currentStep) {
      case 1:
        return "Talk to Learnshack Experts Today!";
      case 2:
        return "Verify OTP";
      case 3:
        return "You're just a step away!";
    }
  };

  return (
    <div className="pt-5 pb-8 md:pb-10 px-5 flex flex-col gap-4 md:gap-6 h-full relative">
      <span className="text-brand-primary font-semibold text-body-xl">
        {getTitle()}
      </span>

      <div className="relative">
        <AnimatePresence initial={false} custom={currentStep} mode="wait">
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {formSteps.find((step) => step.id === currentStep)?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactFormContainer;
