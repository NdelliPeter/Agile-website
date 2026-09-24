import { useEffect, useRef, type ReactNode } from "react";

/**
 * Reveal primitive — fades and rises content into view once on intersect.
 * Pure CSS via the `reveal` utility + a data attribute toggle.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-revealed", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => {
              el.setAttribute("data-revealed", "true");
            }, delay);
            io.unobserve(el);
            return () => window.clearTimeout(t);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Component = Tag as unknown as React.ElementType;
  return (
    <Component ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
