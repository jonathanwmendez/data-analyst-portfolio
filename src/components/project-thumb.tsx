import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

// Simple chart-style artwork used when a project has no screenshot.
export function ProjectThumb({
  variant,
  className,
}: {
  variant: Project["thumb"];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-secondary",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg
        viewBox="0 0 320 180"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {variant === "bars" && <Bars />}
        {variant === "line" && <Line />}
        {variant === "donut" && <Donut />}
        {variant === "funnel" && <Funnel />}
      </svg>
    </div>
  );
}

function Bars() {
  const a = [62, 88, 74, 120, 98, 132];
  const b = [40, 52, 46, 70, 58, 84];
  return (
    <g>
      {a.map((h, i) => (
        <g key={i}>
          <rect x={44 + i * 42} y={150 - h} width={14} height={h} rx={3} fill="var(--chart-1)" />
          <rect x={60 + i * 42} y={150 - b[i]} width={14} height={b[i]} rx={3} fill="var(--chart-2)" />
        </g>
      ))}
      <line x1={36} x2={292} y1={150} y2={150} stroke="var(--muted-foreground)" strokeOpacity={0.4} />
    </g>
  );
}

function Line() {
  const pts = [20, 44, 38, 70, 62, 96, 88, 118, 110, 128];
  const d = pts.map((y, i) => `${i === 0 ? "M" : "L"}${36 + i * 28},${150 - y}`).join(" ");
  const area = `${d} L${36 + 9 * 28},150 L36,150 Z`;
  return (
    <g>
      <path d={area} fill="var(--chart-1)" fillOpacity={0.12} />
      <path d={d} fill="none" stroke="var(--chart-1)" strokeWidth={3} strokeLinejoin="round" />
      {pts.map((y, i) => (
        <circle key={i} cx={36 + i * 28} cy={150 - y} r={3.5} fill="var(--card)" stroke="var(--chart-1)" strokeWidth={2} />
      ))}
    </g>
  );
}

function Donut() {
  const segs = [
    { v: 0.42, c: "var(--chart-1)" },
    { v: 0.26, c: "var(--chart-2)" },
    { v: 0.18, c: "var(--chart-3)" },
    { v: 0.14, c: "var(--chart-4)" },
  ];
  const r = 52;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <g transform="translate(110 90) rotate(-90)">
      {segs.map((s, i) => {
        const el = (
          <circle
            key={i}
            r={r}
            fill="none"
            stroke={s.c}
            strokeWidth={22}
            strokeDasharray={`${s.v * circ - 3} ${circ}`}
            strokeDashoffset={-offset}
          />
        );
        offset += s.v * circ;
        return el;
      })}
      <g transform="rotate(90)">
        {segs.map((s, i) => (
          <g key={i} transform={`translate(${90} ${-30 + i * 20})`}>
            <rect width={10} height={10} rx={2} fill={s.c} />
            <rect x={18} y={2} width={60 - i * 10} height={6} rx={3} fill="var(--muted-foreground)" fillOpacity={0.3} />
          </g>
        ))}
      </g>
    </g>
  );
}

function Funnel() {
  const rows = [220, 176, 128, 84];
  return (
    <g>
      {rows.map((w, i) => (
        <rect
          key={i}
          x={160 - w / 2}
          y={30 + i * 32}
          width={w}
          height={24}
          rx={5}
          fill="var(--chart-1)"
          fillOpacity={1 - i * 0.2}
        />
      ))}
    </g>
  );
}
