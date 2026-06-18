import ScrollReveal from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <ScrollReveal>
      <div className={cn("flex flex-col gap-3", alignClass)}>
        <span
          className={cn(
            "text-[10px] font-semibold tracking-[0.4em] uppercase",
            light ? "text-red-400" : "text-red-500"
          )}
        >
          {tag}
        </span>
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-balance",
            light ? "text-white" : "text-neutral-900"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-base font-light leading-relaxed max-w-xl",
              light ? "text-neutral-300" : "text-neutral-500"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
