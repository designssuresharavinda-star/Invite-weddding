import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Uppercase, wide-tracked serif label (e.g. "WE ARE GETTING MARRIED"). */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "m-0 pl-[0.42em] font-serif font-medium uppercase tracking-[0.42em] text-[clamp(12px,1.15vw,15px)]",
        tone === "light" ? "text-cream/90" : "text-[#7b8296]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Flowing calligraphy heading. */
export function Script({
  children,
  tone = "light",
  as = "h2",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  as?: ElementType;
  className?: string;
}) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cn(
        "m-0 font-script font-normal leading-[1.15]",
        tone === "light" ? "text-cream" : "text-blue",
        className
      )}
    >
      {children}
    </Tag>
  );
}
