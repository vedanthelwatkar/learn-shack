import React from "react";
import FaqAccordion from "../FaqAccordian";
import { Button } from "../ui/button";

const faqData = [
  {
    question: "Why should I hire study abroad consultant?",
    answer:
      "Hiring a study abroad consultant like LearnshackEdu provides you with expert guidance and support throughout the entire application process. We have in-depth knowledge of various universities, programs, and admission requirements. We can help you make informed decisions, maximize your chances of acceptance, and provide valuable insights on scholarships, visa processes, and accommodation. The difference is having an acceptance chance of 5% compared to that of 70%.",
  },
  {
    question: "Which country is the best for studying abroad?",
    answer:
      "The best country for studying abroad depends on your academic goals, budget, career aspirations, and personal preferences. Popular destinations include the USA, UK, Canada, Australia, Germany, and New Zealand. Each offers unique advantages in terms of education quality, post-study work opportunities, cultural experience, and cost of living.",
  },
  {
    question: "What Can I Expect In The Free Consultation Call?",
    answer:
      "In our free consultation call, we'll discuss your academic background, career goals, budget, preferred destinations, and timeline. We'll provide initial guidance on suitable programs and universities, explain the application process, and outline how our services can help you achieve your study abroad goals.",
  },
  {
    question:
      "Does the Indian government provide scholarships for studying abroad?",
    answer:
      "Yes, the Indian government offers several scholarship programs for students wishing to study abroad, including the National Overseas Scholarship, GATE Scholarship, and Commonwealth Scholarship. Additionally, various government departments and organizations like ICCR and UGC provide financial assistance for specific fields of study.",
  },
  {
    question:
      "How can a study abroad consultant help me choose the right university and program?",
    answer:
      "A study abroad consultant helps you select the right university and program by analyzing your academic profile, career goals, budget, and preferences. We provide insights on university rankings, program quality, admission requirements, and employment outcomes. We also consider factors like location, campus culture, and available support services to ensure a good fit.",
  },
];

const Faq = () => {
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
            Have More Questions? <Button variant="link">Contact Us Here</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
