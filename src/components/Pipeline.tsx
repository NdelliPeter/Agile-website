import { Fragment } from "react";

export type PipelineStep = {
  label: string;
  detail?: string;
};

/**
 * Editorial horizontal stepper.
 * - Mobile: vertical rail with numbered markers.
 * - Desktop: horizontal rule with anchored markers; copy stacks below.
 * Single visual register, no decorative card shapes — meant to sit
 * comfortably inside enterprise-tone editorial layouts.
 */
export function Pipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <div className="relative w-full">
      {/* Mobile */}
      <ol className="md:hidden">
        {steps.map((s, i) => (
          <li
            key={i}
            className="relative grid grid-cols-[36px_1fr] gap-5 pb-10 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute left-[17px] top-9 bottom-0 w-px bg-border last:hidden"
            />
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background font-display text-[11px] font-medium tracking-[0.14em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-1.5">
              <div className="font-display text-base font-medium text-foreground">
                {s.label}
              </div>
              {s.detail && (
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop */}
      <div className="relative hidden md:block">
        {/* Connector rail */}
        <div className="absolute left-0 right-0 top-[18px] h-px bg-border" aria-hidden />
        <ol
          className="relative grid gap-8"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((s, i) => (
            <Fragment key={i}>
              <li className="group relative">
                <span
                  className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background font-display text-[11px] font-medium tracking-[0.14em] text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6">
                  <div className="font-display text-[17px] font-medium leading-snug text-foreground">
                    {s.label}
                  </div>
                  {s.detail && (
                    <p className="mt-2 max-w-[26ch] text-[14px] leading-relaxed text-muted-foreground">
                      {s.detail}
                    </p>
                  )}
                </div>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function VerticalPipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <ol className="relative">
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
      {steps.map((s, i) => (
        <li key={i} className="relative grid grid-cols-[28px_1fr] gap-4 pb-8 last:pb-0">
          <span className="relative z-10 mt-1.5 h-3.5 w-3.5 rounded-full border border-primary bg-background" />
          <div>
            <div className="font-display text-[11px] font-medium tracking-[0.18em] text-primary">
              {s.label}
            </div>
            {s.detail && (
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
