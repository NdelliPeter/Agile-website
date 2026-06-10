import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

export type PipelineStep = {
  label: string;
  detail?: string;
};

export function Pipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <div className="relative w-full">
      {/* Mobile: simple vertical stack */}
      <ol className="flex flex-col gap-4 md:hidden">
        {steps.map((s, i) => (
          <li
            key={i}
            style={{ borderRadius: "1px 35px 1px 35px" }}
            className="group relative border border-[#048c7f] bg-[#048c7f] p-5 transition-colors hover:bg-[#036c5f] hover:border-[#036c5f]"
          >
            <StepNumber n={i + 1} />
            <h4 className="mt-2 text-base font-medium text-white">{s.label}</h4>
            {s.detail && (
              <p className="mt-1.5 text-sm leading-relaxed text-white/90">
                {s.detail}
              </p>
            )}
          </li>
        ))}
      </ol>

      {/* Desktop: zigzag flow */}
      <div
        className="relative hidden md:grid"
        style={{
          gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          gridTemplateRows: "1fr 56px 1fr",
          columnGap: "1.5rem",
        }}
      >
        {/* Central rail */}
        <div
          className="pointer-events-none relative"
          style={{
            gridColumn: `1 / span ${steps.length}`,
            gridRow: "2 / 3",
          }}
        >
          <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />
          <div className="absolute right-[6%] top-1/2 -translate-y-1/2 text-primary">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {steps.map((s, i) => {
          const isTop = i % 2 === 0;
          return (
            <Fragment key={i}>
              {/* Card */}
              <article
                className="group relative border border-[#048c7f] bg-[#048c7f] p-5 transition-colors hover:-translate-y-0.5 hover:bg-[#036c5f] hover:border-[#036c5f]"
                style={{
                  gridColumn: `${i + 1} / span 1`,
                  gridRow: isTop ? "1 / 2" : "3 / 4",
                  alignSelf: isTop ? "end" : "start",
                  borderRadius: "1px 35px 1px 35px",
                }}
              >
                <StepNumber n={i + 1} />
                <h4 className="mt-2 text-base font-medium leading-snug text-white">
                  {s.label}
                </h4>
                {s.detail && (
                  <p className="mt-1.5 text-sm leading-relaxed text-white/90">
                    {s.detail}
                  </p>
                )}
              </article>

              {/* Vertical connector from card to rail */}
              <span
                aria-hidden
                className="pointer-events-none relative"
                style={{
                  gridColumn: `${i + 1} / span 1`,
                  gridRow: "2 / 3",
                }}
              >
                <span
                  className={`absolute left-1/2 w-px -translate-x-1/2 bg-primary/40 ${
                    isTop ? "top-0 bottom-1/2" : "top-1/2 bottom-0"
                  }`}
                />
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-background" />
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-primary/10 px-2 font-display text-[11px] font-semibold tracking-[0.14em] text-primary">
      {String(n).padStart(2, "0")}
    </span>
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
