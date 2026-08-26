import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "lg",
  widthClassName = "max-w-3xl",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  widthClassName?: string;
}) {
  const sizeClass = size === "xl" ? "display-xl" : size === "lg" ? "display-lg" : "display-md";
  return (
    <div className={widthClassName + (align === "center" ? " mx-auto text-center" : "")} >
      {eyebrow && <div className="eyebrow mb-4" style={{ fontSize: "18px", textTransform: "capitalize" }}>{eyebrow}</div>}
      <h2 className={`${sizeClass} text-foreground`}>{title}</h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-justify text-muted-foreground md:text-lg">{intro}</p>
      )}
    </div>
  );
}
