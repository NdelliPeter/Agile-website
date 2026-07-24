import logo from "@/assets/logo.png";
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
  const src = logo;

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
