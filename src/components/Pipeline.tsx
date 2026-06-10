import { Fragment } from "react";

export type PipelineStep = {
  label: string;
  detail?: string;
};

export function Pipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))] md:gap-0">
      {steps.map((s, i) => (
        <Fragment key={i}>
          <li className="relative flex flex-col gap-2 border-t border-border pt-5 md:border-r md:border-t md:px-5 md:pr-6 md:last:border-r-0">
            <span className="font-display text-[11px] font-medium tracking-[0.18em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="text-base font-medium leading-snug text-foreground">{s.label}</h4>
            {s.detail && (
              <p className="text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
            )}
          </li>
        </Fragment>
      ))}
    </ol>
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
