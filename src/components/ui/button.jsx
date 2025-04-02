import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "w-fit bg-brand-primary text-neutral-0 hover:brightness-110 rounded-sm px-5 py-3 md:text-sm text-xs font-semibold",
        large:
          "w-fit bg-brand-primary text-neutral-0 hover:brightness-110 rounded-sm px-6 md:px-10 py-3 md:py-5 capitalize text-base",
        outline:
          "w-fit border border-brand-primary text-brand-primary hover:bg-purple-50 rounded-sm px-5 py-3 md:text-sm text-xs font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "text-body-xl items-end text-brand-primary font-semibold",
        link: "text-body-xl items-end text-brand-primary underline font-semibold",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
