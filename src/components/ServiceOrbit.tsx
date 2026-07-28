import { Link } from "@tanstack/react-router";
import { useT } from "./AppProviders";
import { SERVICE_KEYS, type ServiceKey } from "@/lib/services-data";
import logoImg from "@/assets/logo.png";

/**
 * Animated logo motif with multiple orbiting rings.
 * Each orbit carries service nodes that reveal a large tooltip on hover.
 */
export function ServiceOrbit({
  size = 380,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const t = useT();

  // Distribute 6 services across 3 rings (2 per ring), at distinct angles.
  const rings: Array<{
    radiusPct: number; // percentage of half-size
    duration: number; // seconds per rotation
    reverse?: boolean;
    nodes: Array<{ key: ServiceKey; angle: number }>;
  }> = [
      {
        radiusPct: 96,
        duration: 38,
        nodes: [
          { key: "audit", angle: 0 },
          { key: "risk", angle: 180 },
        ],
      },
      {
        radiusPct: 78,
        duration: 28,
        reverse: true,
        nodes: [
          { key: "performance", angle: 90 },
          { key: "heritage", angle: 270 },
        ],
      },
      {
        radiusPct: 60,
        duration: 22,
        nodes: [
          { key: "agro", angle: 45 },
          { key: "humanCapital", angle: 225 },
        ],
      },
    ];

  return (
    <div
      className={"relative mx-auto " + className}
      style={{ width: size, height: size }}
    >
      {/* Aurora halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[10%] rounded-full bg-[var(--brand-primary)]/25 blur-3xl"
        style={{ animation: "pulse 4s ease-in-out infinite" }}
      />

      {/* Rings + nodes */}
      {rings.map((ring, ri) => {
        const inset = ((100 - ring.radiusPct) / 2).toFixed(2) + "%";
        return (
          <div
            key={ri}
            aria-hidden={false}
            className="absolute"
            style={{
              top: inset,
              left: inset,
              right: inset,
              bottom: inset,
            }}
          >
            {/* Visible ring */}
            <div
              className="absolute inset-0 rounded-full border border-white/25"
              style={{ borderStyle: ri === 1 ? "dashed" : "solid" }}
            />
            {/* Rotating container holds the nodes */}
            <div
              className="absolute inset-0"
              style={{
                animation: `spin ${ring.duration}s linear infinite${ring.reverse ? " reverse" : ""
                  }`,
              }}
            >
              {ring.nodes.map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                return (
                  <div
                    key={n.key}
                    className="group/node absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Counter-rotate so tooltip stays upright */}
                    <div
                      style={{
                        animation: `spin ${ring.duration}s linear infinite${ring.reverse ? "" : " reverse"
                          }`,
                      }}
                    >
                      <Link
                        to="/services/$serviceKey"
                        params={{ serviceKey: n.key }}
                        className="relative block"
                        aria-label={t(
                          `home.servicesPreview.cards.${n.key}.title`,
                        )}
                      >
                        {/* Dot */}
                        <span className="block h-3.5 w-3.5 rounded-full bg-[var(--brand-primary)] shadow-[0_0_18px_rgba(94,234,212,0.9)] ring-2 ring-white/40 transition-transform duration-200 group-hover/node:scale-125" />
                        {/* Tooltip card */}
                        <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-[240px] -translate-x-1/2 translate-y-1 scale-95 opacity-0 transition-all duration-200 group-hover/node:pointer-events-auto group-hover/node:translate-y-0 group-hover/node:scale-100 group-hover/node:opacity-100">
                          <div
                            className="border border-white/15 bg-[#15120F]/95 p-4 text-left shadow-2xl backdrop-blur-xl"
                            style={{ borderRadius: "1px 14px 1px 14px" }}
                          >
                            <div className="eyebrow mb-1.5 text-[var(--brand-primary)]">
                              0{SERVICE_KEYS.indexOf(n.key) + 1} · Service
                            </div>
                            <div className="font-display text-[15px] font-medium leading-snug text-white">
                              {t(`home.servicesPreview.cards.${n.key}.title`)}
                            </div>
                            <p className="mt-2 text-[12.5px] leading-relaxed text-white/70">
                              {t(`home.servicesPreview.summaries.${n.key}`)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Centered logo */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <img
          src={logoImg}
          alt="AGILE"
          className="h-[40%] w-[40%] object-contain drop-shadow-[0_0_40px_rgba(94,234,212,0.45)]"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}
