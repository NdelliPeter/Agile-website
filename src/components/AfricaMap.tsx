import { useState } from "react";
import mapData from "@/lib/africa-map.json";

type PathItem = { iso: string; name: string; d: string; cemac: boolean };
type LabelItem = { iso: string; label: string; x: number; y: number };

const data = mapData as unknown as {
  width: number;
  height: number;
  paths: PathItem[];
  labels: LabelItem[];
};

// CEMAC member-state quick facts surfaced on hover.
const CEMAC_FACTS: Record<string, { gdpRank: string; sector: string }> = {
  CMR: { gdpRank: "#1 CEMAC GDP", sector: "Banking · Agro · Oil" },
  GAB: { gdpRank: "#2 GDP / capita", sector: "Oil · Forestry" },
  COG: { gdpRank: "Oil exporter", sector: "Energy · Logistics" },
  CAF: { gdpRank: "Frontier market", sector: "Mining · Donor" },
  TCD: { gdpRank: "Sahel gateway", sector: "Oil · Agriculture" },
  GNQ: { gdpRank: "Highest GDP/cap.", sector: "Oil · Gas" },
};

export function AfricaMap({ className = "" }: { className?: string }) {
  const { width, height, paths, labels } = data;
  const [hover, setHover] = useState<PathItem | null>(null);

  const cx =
    labels.reduce((s, l) => s + l.x, 0) / Math.max(labels.length, 1);
  const cy =
    labels.reduce((s, l) => s + l.y, 0) / Math.max(labels.length, 1);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Map of Africa with CEMAC member states highlighted"
        className="h-auto w-full"
      >
        <defs>
          <radialGradient id="cemacGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
            <stop offset="60%" stopColor="var(--primary)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pulsing halo behind CEMAC */}
        <circle cx={cx} cy={cy} r={170} fill="url(#cemacGlow)">
          <animate
            attributeName="r"
            values="160;195;160"
            dur="4.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.85;1;0.85"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Country paths */}
        {paths.map((p) => {
          const isHover = hover?.iso === p.iso;
          const baseFill = p.cemac
            ? "fill-[var(--primary)]"
            : "fill-[color-mix(in_oklab,var(--foreground)_10%,transparent)]";
          const hoverFill = p.cemac
            ? "hover:fill-[color-mix(in_oklab,var(--primary)_75%,white)]"
            : "hover:fill-[color-mix(in_oklab,var(--foreground)_20%,transparent)]";
          return (
            <path
              key={p.iso}
              d={p.d}
              className={`${baseFill} ${hoverFill} stroke-[var(--background)] cursor-pointer transition-colors duration-200 ${
                isHover ? "stroke-[var(--primary)]" : ""
              }`}
              strokeWidth={isHover ? 1.5 : 1}
              strokeLinejoin="round"
              onMouseEnter={() => setHover(p)}
              onMouseLeave={() => setHover((h) => (h?.iso === p.iso ? null : h))}
              onFocus={() => setHover(p)}
              onBlur={() => setHover(null)}
              tabIndex={0}
            >
              <title>{p.name}</title>
            </path>
          );
        })}

        {/* CEMAC labels with connector lines */}
        {labels.map((l) => {
          const dx = l.x - cx;
          const dy = l.y - cy;
          const len = Math.hypot(dx, dy) || 1;
          const lx = l.x + (dx / len) * 70;
          const ly = l.y + (dy / len) * 60;
          return (
            <g key={l.iso}>
              <line
                x1={l.x}
                y1={l.y}
                x2={lx}
                y2={ly}
                stroke="var(--primary)"
                strokeWidth={1}
                strokeOpacity={0.55}
              />
              <circle cx={l.x} cy={l.y} r={3} fill="var(--primary)" />
              <text
                x={lx}
                y={ly}
                textAnchor={dx >= 0 ? "start" : "end"}
                dy="0.32em"
                dx={dx >= 0 ? 6 : -6}
                className="fill-[var(--foreground)] font-display"
                style={{ fontSize: 18, fontWeight: 500 }}
              >
                {l.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip + legend overlay */}
      <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-3 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur">
        <span className="inline-flex items-center gap-1.5 text-foreground">
          <span className="inline-block h-2 w-2 rounded-sm bg-primary" />
          CEMAC
        </span>
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-sm bg-[color-mix(in_oklab,var(--foreground)_18%,transparent)]" />
          Africa
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-3 min-w-[180px] max-w-[240px] rounded-md border border-border bg-background/95 px-4 py-3 text-left shadow-lg backdrop-blur transition-opacity duration-200"
        style={{ opacity: hover ? 1 : 0 }}
      >
        <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
          {hover?.cemac ? "CEMAC member" : "Africa"}
        </div>
        <div className="mt-1 font-display text-base font-medium text-foreground">
          {hover?.name ?? "—"}
        </div>
        {hover && CEMAC_FACTS[hover.iso] && (
          <>
            <div className="mt-2 text-[11px] text-muted-foreground">
              {CEMAC_FACTS[hover.iso].gdpRank}
            </div>
            <div className="text-[11px] text-muted-foreground">
              {CEMAC_FACTS[hover.iso].sector}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
