import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "lg",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
}) {
  const sizeClass = size === "xl" ? "display-xl" : size === "lg" ? "display-lg" : "display-md";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} >
      {eyebrow && <div className="eyebrow mb-4" style={{ fontSize: "18px", textTransform: "capitalize" }}>{eyebrow}</div>}
      <h2 className={`${sizeClass} text-foreground`}>{title}</h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      )}
    </div>
  );
}
