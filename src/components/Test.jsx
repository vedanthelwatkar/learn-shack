import React from "react";

const Test = () => {
  return (
    <div className="bg-black h-[600px] w-full overflow-y-auto">
      <div className="w-full relative z-30">
        <div className="flex justify-between bg-brand-primary px-6 py-2 text-neutral-0 rounded-t-lg">
          <span className="font-semibold text-body-sm text-neutral-0">
            LEARNSHACK
          </span>
          <span className="font-semibold text-body-sm text-neutral-0">1</span>
        </div>

        <div className="sm:pt-9 h-[400px] sm:px-7 sm:pb-6 p-5 pb-8 bg-neutral-0 rounded-b-lg relative">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-h6 font-heading font-semibold text-neutral-800">
                Check
              </h3>
              <p className="text-neutral-900 text-body-lg">descccc</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              img
            </div>
          </div>
          <span className="inline-flex items-center justify-center p-3 text-body-xl text-neutral-600 bg-neutral-0 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-6 sm:left-7 sm:translate-x-0 border border-neutral-200 w-12 h-12">
            VS
          </span>
        </div>
      </div>

      {/* Sticky element at bottom */}
      <div className="sticky bottom-[200px] z-10 pt-8 pb-6 px-7 flex flex-col gap-3 bg-neutral-50">
        <h4 className="font-medium text-neutral-600 text-body-xl">
          Traditional consultancies
        </h4>
        <p className="text-neutral-600 text-body-xl">comparison</p>
      </div>

      {/* Additional content after sticky element */}
      <div className="bg-gray-400 w-full h-screen text-center flex items-center justify-center text-2xl">
        Content below sticky element
      </div>
    </div>
  );
};

export default Test;
