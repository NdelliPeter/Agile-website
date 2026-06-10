import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sprout,
  Activity,
  TrendingUp,
  Landmark,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/components/AppProviders";
import { SERVICE_KEYS, type ServiceKey } from "@/lib/services-data";

const ICONS: Record<ServiceKey, LucideIcon> = {
  audit: ShieldCheck,
  agro: Sprout,
  risk: Activity,
  performance: TrendingUp,
  heritage: Landmark,
  humanCapital: Users,
};


export function ServiceWheel() {
  const t = useT();
  const count = SERVICE_KEYS.length;
  const radius = 38; // % from center to node anchor

  return (
    <div className="group relative mx-auto aspect-square w-full max-w-[760px] select-none">
      {/* Decorative concentric rings (static) */}
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-primary"
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.2" />
        <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.2" strokeDasharray="0.5 1.6" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.18" />
      </svg>

      {/* Spinning layer: spokes + nodes rotate together */}
      <div className="wheel absolute inset-0 will-change-transform [animation:spin_50s_linear_infinite] [animation-play-state:paused] motion-safe:group-hover:[animation-play-state:running]">
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-primary"
        >
          {SERVICE_KEYS.map((_, i) => {
            const a = (i / count) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(a) * radius;
            const y = 50 + Math.sin(a) * radius;
            const hx = 50 + Math.cos(a) * 13;
            const hy = 50 + Math.sin(a) * 13;
            return (
              <line
                key={i}
                x1={hx}
                y1={hy}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.28"
                strokeWidth="0.22"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {SERVICE_KEYS.map((key, i) => {
          const angle = (i / count) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const left = 50 + Math.cos(rad) * radius;
          const top = 50 + Math.sin(rad) * radius;
          const Icon = ICONS[key];
          return (
            <div
              key={key}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Counter-rotate inner content so it stays upright while wheel spins */}
              <div
                className="[animation:spin_50s_linear_infinite_reverse] [animation-play-state:paused] motion-safe:group-hover:[animation-play-state:running]"
              >
                <Link
                  to="/services/$serviceKey"
                  params={{ serviceKey: key }}
                  className="group/node flex w-40 flex-col items-center text-center md:w-48"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-[0_12px_30px_-14px_rgba(20,15,10,0.35)] transition-all duration-300 group-hover/node:-translate-y-0.5 group-hover/node:scale-[1.08] group-hover/node:border-primary group-hover/node:bg-primary group-hover/node:text-primary-foreground md:h-16 md:w-16">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="mt-3 block font-display text-[13px] font-medium leading-tight text-foreground transition-colors group-hover/node:text-primary md:text-[14px]">
                    {t(`home.servicesPreview.cards.${key}.title`)}
                  </span>
                  <span className="mt-1.5 block text-[11px] leading-snug text-muted-foreground md:text-[12px]">
                    {t(`home.servicesPreview.summaries.${key}`)}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center hub (static) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_24px_60px_-24px_rgba(20,15,10,0.5)] md:h-44 md:w-44">
          <div className="font-display text-[10px] uppercase tracking-[0.3em] opacity-80">AGILE</div>
          <div className="mt-1.5 px-3 text-center font-display text-base font-medium leading-tight md:text-lg">
            Key Services
          </div>
          <div className="mt-2 text-[9px] uppercase tracking-[0.26em] opacity-65">Hover · Click</div>
        </div>
      </div>
    </div>
  );
}
