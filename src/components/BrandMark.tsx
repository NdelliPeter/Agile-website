import logoWhite from "@/assets/logo.png";
import logoColor from "@/assets/wHITEaGILE.png";
import { useApp } from "./AppProviders";

type Variant = "full" | "mark" | "muted";

export function BrandMark({
  variant = "full",
  className,
  size = 36,
  forceLight = false,
}: {
  variant?: Variant;
  className?: string;
  size?: number;
  forceLight?: boolean;
}) {
  const { theme } = useApp();
  const alt = "AGILE";
  // forceLight = mark sits on a dark surface (e.g. the footer) → use the
  // white version. Otherwise (light surfaces, e.g. the header) → colored.
  const src = forceLight ? logoWhite : logoColor;

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
