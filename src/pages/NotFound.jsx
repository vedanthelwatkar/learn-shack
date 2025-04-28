import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full h-[calc(100dvh-96px)] sm:h-[calc(100dvh-100px)] lg:h-[calc(100dvh-120px)] flex flex-col items-center justify-center relative`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-heading text-9xl sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-brand-primary opacity-5">
          404
        </div>
      </div>

      <div className="flex gap-6 flex-col items-center justify-center z-10">
        <span className="text-body-2xl text-brand-primary font-semibold">
          PAGE NOT FOUND
        </span>
        <span className="text-h2 font-heading font-bold text-center">
          Uh Oh! Something went wrong
        </span>
        <span className="text-body-lg">
          Sorry, we can't seem to find the page you're looking for...
        </span>
        <Button onClick={() => navigate("/")}>Take me Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
