import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full max-w-[560px] font-serif uppercase text-center tracking-[0.28em] text-[#26314f]",
        "text-[clamp(12px,1.2vw,16px)] px-6 py-5 rounded-[40px] border-0 bg-white/95 outline-none",
        "placeholder:text-[#6f7994] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a86a]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
