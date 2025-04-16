import { Button } from "@/components/ui/button";
import React from "react";

const ErrorPage = ({ errorInfo }) => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-heading text-9xl sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-brand-primary opacity-5">
          404
        </div>
      </div>

      <div className="flex gap-6 flex-col items-center justify-center z-10">
        <span className="text-body-2xl text-brand-primary font-semibold">
          Something went wrong
        </span>
        <span className="text-h2 font-heading font-bold text-center">
          Sorry, an unexpected error occurred.
        </span>
        {errorInfo && (
          <pre className="flex flex-wrap w-full text-body-lg">
            {errorInfo.componentStack}
          </pre>
        )}
        <Button onClick={() => (window.location.href = "/")}>
          Take me Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
