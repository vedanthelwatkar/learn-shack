import React from "react";
import { Button } from "../ui/button";

const StudentReviews = () => {
  return (
    <div className="md:py-20 py-[60px] w-full px-4 md:px-24 flex flex-col gap-12 items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-3 w-full items-center">
          <span className="text-brand-primary font-semibold text-lg">
            LSE STUDENT REVIEWS
          </span>
          <span className="text-h4 font-heading text-neutral-800 font-semibold max-w-[670px] text-center">
            A Glimpse of 10K+ Students’ Study Abroad Experience
          </span>
        </div>
        <Button>View More Success Stories</Button>
      </div>
    </div>
  );
};

export default StudentReviews;
