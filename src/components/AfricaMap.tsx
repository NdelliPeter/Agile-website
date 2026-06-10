import mapData from "@/lib/africa-map.json";

type PathItem = { iso: string; name: string; d: string; cemac: boolean };
type LabelItem = { iso: string; label: string; x: number; y: number };

const data = mapData as unknown as {
  width: number;
  height: number;
  paths: PathItem[];
  labels: LabelItem[];
};

export function AfricaMap({ className = "" }: { className?: string }) {
  const { width, height, paths, labels } = data;

  // Approximate centre of CEMAC for the focus halo
  const cx =
    labels.reduce((s, l) => s + l.x, 0) / Math.max(labels.length, 1);
  const cy =
    labels.reduce((s, l) => s + l.y, 0) / Math.max(labels.length, 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Map of Africa with Central Africa (CEMAC) highlighted"
      className={className}
    >
      <defs>
        <radialGradient id="cemacGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="60%" stopColor="var(--primary)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo behind CEMAC */}
      <circle cx={cx} cy={cy} r={170} fill="url(#cemacGlow)" />

      {/* Country paths */}
      {paths.map((p) => (
        <path
          key={p.iso}
          d={p.d}
          className={
            p.cemac
              ? "fill-[var(--primary)] stroke-[var(--background)]"
              : "fill-[color-mix(in_oklab,var(--foreground)_10%,transparent)] stroke-[var(--background)]"
          }
          strokeWidth={1}
          strokeLinejoin="round"
        >
          <title>{p.name}</title>
        </path>
      ))}

      {/* CEMAC labels with connector lines */}
      {labels.map((l) => {
        // Push labels outward from centre for legibility
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
  );
}
