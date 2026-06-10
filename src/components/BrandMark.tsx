import logoLight from "@/assets/agile-logo-circle.png.asset.json";
import markDark from "@/assets/agile-mark-dark.png.asset.json";
import markGrey from "@/assets/agile-mark.png.asset.json";
import { useApp } from "./AppProviders";

type Variant = "full" | "mark" | "muted";

export function BrandMark({
  variant = "full",
  className,
  size = 36,
}: {
  variant?: Variant;
  className?: string;
  size?: number;
}) {
  const { theme } = useApp();
  let src = logoLight.url;
  let alt = "AGILE";

  if (variant === "mark") {
    src = theme === "dark" ? markGrey.url : markDark.url;
  } else if (variant === "muted") {
    src = markGrey.url;
  } else {
    src = logoLight.url;
  }

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
