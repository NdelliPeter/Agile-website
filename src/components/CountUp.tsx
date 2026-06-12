import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up that triggers when scrolled into view.
 * Parses a value string like "37+", "100M XAF", "6" — animates the
 * leading number, preserves prefix/suffix text.
 */
export function CountUp({
  value,
  duration = 1600,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [played, setPlayed] = useState(false);
  const [display, setDisplay] = useState(value);

  // Parse leading number
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].includes(".") ? 1 : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || played || !match) {
      if (!match) setDisplay(value);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      setPlayed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPlayed(true);
            io.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            return;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, played, target, prefix, suffix, decimals, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
