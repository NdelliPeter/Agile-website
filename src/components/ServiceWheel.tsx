import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sprout,
  Activity,
  TrendingUp,
  Landmark,
  Users,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";
import { useT } from "@/components/AppProviders";
import { SERVICE_KEYS, type ServiceKey } from "@/lib/services-data";
import logoImg from "@/assets/logo.png";

const ICONS: Record<ServiceKey, LucideIcon> = {
  audit: ShieldCheck,
  agro: Sprout,
  risk: Activity,
  performance: TrendingUp,
  heritage: Landmark,
  humanCapital: Users,
  diligenceBusiness: BriefcaseBusiness,
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
                  className="group/node flex w-16 flex-col items-center text-center sm:w-24 md:w-40 lg:w-48"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-primary shadow-[0_12px_30px_-14px_rgba(20,15,10,0.35)] transition-all duration-300 group-hover/node:-translate-y-0.5 group-hover/node:scale-[1.08] group-hover/node:border-primary group-hover/node:bg-primary group-hover/node:text-primary-foreground sm:h-11 sm:w-11 md:h-14 md:w-14 lg:h-16 lg:w-16">
                    <Icon size={16} strokeWidth={1.6} className="sm:hidden" />
                    <Icon size={22} strokeWidth={1.6} className="hidden sm:block md:hidden" />
                    <Icon size={24} strokeWidth={1.6} className="hidden md:block" />
                  </span>
                  <span className="mt-2 block font-display text-[9px] font-medium leading-tight text-foreground transition-colors group-hover/node:text-primary sm:text-[11px] md:mt-3 md:text-[13px] lg:text-[14px]">
                    {t(`home.servicesPreview.cards.${key}.title`)}
                  </span>
                  <span className="mt-1.5 hidden text-[11px] leading-snug text-muted-foreground md:block lg:text-[12px]">
                    {t(`home.servicesPreview.summaries.${key}`)}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center hub — AGILE logo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-16 w-16 place-items-center sm:h-24 sm:w-24 md:h-36 md:w-36 lg:h-44 lg:w-44">
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />
          <img
            src={logoImg}
            alt="AGILE"
            className="relative h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(20,15,10,0.25)]"
          />
        </div>
      </div>

      </div>
  );
}
