import React from "react";
import FaqAccordion from "../FaqAccordian";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { faqData } from "@/utils/constants";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 pt-10 w-full px-4 md:px-10 lg:px-24 flex flex-col gap-12 items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col w-full items-center justify-center gap-8 sm:gap-10">
        <div className="flex flex-col gap-3 w-full items-center">
          <span className="text-brand-primary font-semibold text-body-xl">
            READ OUR FAQS
          </span>
          <span className="text-h4 font-heading text-neutral-800 font-semibold max-w-[670px] text-center">
            Get Answers To Your Questions
          </span>
        </div>
        <FaqAccordion faqs={faqData} />
        <div className="text-center">
          <p className="text-neutral-700 text-body-xl">
            Have More Questions?{" "}
            <Button variant="link" onClick={() => navigate("/contact-us")}>
              Contact Us Here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
