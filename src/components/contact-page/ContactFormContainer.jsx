import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactStep1 from "@/components/contact-page/ContactStep1";
import ContactStep2 from "./ContactStep2";
import ContactStep3 from "./ContactStep3";
import YoureAllSetCircleCheck from "@/svgComponents/YoureAllSetCircleCheck";

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

  const handleStep1Submit = (data) => {
    setFormData({
      ...formData,
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      countryCode: data.countryCode,
    });
    setCurrentStep(2);
  };

  const handleStep2Submit = () => {
    setCurrentStep(3);
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log("Resending OTP...");
  };

  const handleFinalSubmit = (data) => {
    setFormData({
      ...formData,
      selectedDestinations: data.destinations,
      intake: data.intake,
      examType: data.examType,
    });
    setFormSubmitted(true);

    // Here you would typically send the complete form data to your backend
    console.log("Form submitted:", {
      ...formData,
      selectedDestinations: data.destinations,
      intake: data.intake,
      examType: data.examType,
    });
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
    {
      id: 2,
      component: (
        <ContactStep2
          phoneNumber={`${formData.countryCode} ${formData.phoneNumber}`}
          onVerify={handleStep2Submit}
          onResend={handleResendOTP}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
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
            You’re All Set!
          </h3>
          <p className="text-neutral-700 text-body-lg font-medium text-center">
            We’ve received your details and our team is already on it. One of
            our expert counselors will give you a call within the next 24 hours
            to understand your goals and walk you through the best path to study
            abroad.
          </p>
        </div>
        <p className="text-neutral-700 text-body-lg font-medium text-center">
          In the meantime, feel free to jot down any questions you have — we’ll
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
