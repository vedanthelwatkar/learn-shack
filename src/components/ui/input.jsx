import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "flex h-9 w-full border border-input bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm pl-4 pr-4 py-3 lg:py-6 bg-neutral-100 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm rounded-sm ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
