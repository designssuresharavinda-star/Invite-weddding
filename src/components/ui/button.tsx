import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-serif uppercase transition-colors focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#c9a86a] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // navy "VIEW ON MAPS" call-to-action
        cta: "bg-navy text-cream rounded-[2px] tracking-[0.3em] pl-[calc(34px+0.3em)] pr-[34px] py-[15px] text-[clamp(12px,1.15vw,15px)] hover:bg-[#1c2c52] hover:-translate-y-[2px]",
        // outlined RSVP pill on velvet
        pill: "text-cream tracking-[0.26em] pl-[calc(30px+0.26em)] pr-[30px] py-[17px] rounded-[40px] border border-white/55 bg-white/10 backdrop-blur-[2px] text-[clamp(12px,1.15vw,15px)] cursor-pointer hover:bg-cream hover:text-navy",
      },
    },
    defaultVariants: { variant: "cta" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, className }))} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
