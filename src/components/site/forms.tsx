/**
 * Additional generative plates, in the same spirit as organisms.tsx:
 * seeded, deterministic, code-drawn. Root architecture, a trophic web
 * plated like an old scientific chart, and a stippled soil profile.
 */
import type { Tone } from "./organisms";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const r2 = (n: number) => Math.round(n * 100) / 100;

/** Root architecture: a taproot with laterals and fine hairs, drawn downward. */
export function RootArch({
  seed = 21,
  width = 520,
  height = 760,
  className,
  tone = "olive",
  draw = false,
}: {
  seed?: number;
  width?: number;
  height?: number;
  className?: string;
  tone?: Tone;
  draw?: boolean;
}) {
  const rand = rng(seed);
  const paths: Array<{ d: string; w: number }> = [];
  const hairs: string[] = [];

  const grow = (x: number, y: number, ang: number, len: number, w: number, depth: number) => {
    if (depth > 4 || len < 10) return;
    let d = `M${r2(x)} ${r2(y)}`;
    let cx = x;
    let cy = y;
    let a = ang;
    const steps = 6 + Math.floor(rand() * 4);
    for (let i = 0; i < steps; i++) {
      a += (rand() - 0.5) * 0.38;
      cx += Math.cos(a) * (len / steps);
      cy += Math.sin(a) * (len / steps);
      d += ` L${r2(cx)} ${r2(cy)}`;
      if (depth > 0 && rand() < 0.5) {
        const ha = a + (rand() < 0.5 ? -1 : 1) * (0.9 + rand() * 0.6);
        const hl = 5 + rand() * 13;
        hairs.push(
          `M${r2(cx)} ${r2(cy)} L${r2(cx + Math.cos(ha) * hl)} ${r2(cy + Math.sin(ha) * hl)}`,
        );
      }
    }
    paths.push({ d, w: r2(w) });
    const branches = depth === 0 ? 5 + Math.floor(rand() * 3) : rand() < 0.6 ? 2 : 1;
    for (let b = 0; b < branches; b++) {
      const spread = depth === 0 ? 0.6 + rand() * 0.9 : 0.3 + rand() * 0.7;
      grow(
        cx - (depth === 0 ? len * (0.15 + rand() * 0.7) : 0),
        cy - (depth === 0 ? len * (0.1 + rand() * 0.6) : 0),
        a + (b % 2 === 0 ? -1 : 1) * spread,
        len * (0.42 + rand() * 0.3),
        Math.max(0.35, w * 0.55),
        depth + 1,
      );
    }
  };
  grow(width / 2, 0, Math.PI / 2, height * 0.42, 3.2, 0);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      data-tone={tone}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.5">
        {hairs.map((d, i) => (
          <path key={i} d={d} strokeWidth="0.5" />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            strokeWidth={p.w}
            className={draw ? "grow" : undefined}
            style={draw ? { animationDelay: `${(i % 18) * 0.07}s` } : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

/** Trophic web: seeded nodes on tiers, joined by hairlines, plated like a chart. */
export function TrophicWeb({
  seed = 31,
  width = 900,
  height = 520,
  className,
  tone = "olive",
}: {
  seed?: number;
  width?: number;
  height?: number;
  className?: string;
  tone?: Tone;
}) {
  const rand = rng(seed);
  const tiers = [4, 6, 7, 5];
  const nodes: Array<{ x: number; y: number; r: number; t: number }> = [];
  tiers.forEach((count, t) => {
    const y = 60 + (t * (height - 120)) / (tiers.length - 1);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: r2(((i + 0.5) / count) * (width - 120) + 60 + (rand() - 0.5) * 40),
        y: r2(y + (rand() - 0.5) * 34),
        r: r2(4 + rand() * 13),
        t,
      });
    }
  });
  const links: Array<[number, number]> = [];
  nodes.forEach((n, i) => {
    const next = nodes.filter((m) => m.t === n.t + 1);
    next.forEach((m) => {
      if (rand() < 0.42) links.push([i, nodes.indexOf(m)]);
    });
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      data-tone={tone}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" fill="none" opacity="0.45">
        {links.map(([a, b], i) => {
          const p = nodes[a]!;
          const q = nodes[b]!;
          const mx = (p.x + q.x) / 2;
          return (
            <path
              key={i}
              d={`M${p.x} ${p.y} C${mx} ${p.y} ${mx} ${q.y} ${q.x} ${q.y}`}
              strokeWidth="0.7"
            />
          );
        })}
      </g>
      <g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx={n.x} cy={n.y} r={r2(n.r * 0.34)} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** A soil profile built from stippled horizons: density falls with depth. */
export function SoilProfile({
  seed = 47,
  width = 420,
  height = 900,
  className,
  tone = "olive",
}: {
  seed?: number;
  width?: number;
  height?: number;
  className?: string;
  tone?: Tone;
}) {
  const rand = rng(seed);
  const horizons = [0, 0.14, 0.32, 0.55, 0.78, 1];
  const dots: Array<[number, number, number]> = [];
  const edges: string[] = [];

  for (let h = 0; h < horizons.length - 1; h++) {
    const top = horizons[h]! * height;
    const bot = horizons[h + 1]! * height;
    const density = [1, 0.72, 0.45, 0.26, 0.13][h] ?? 0.2;
    const n = Math.round((bot - top) * width * 0.0042 * density * 10);
    for (let i = 0; i < n; i++) {
      dots.push([
        r2(rand() * width),
        r2(top + rand() * (bot - top)),
        r2(0.5 + rand() * (h < 2 ? 1.9 : 1.2)),
      ]);
    }
    if (h > 0) {
      let d = `M0 ${r2(top)}`;
      for (let x = 0; x <= width; x += 18) {
        d += ` L${x} ${r2(top + (rand() - 0.5) * 12)}`;
      }
      edges.push(d);
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      data-tone={tone}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {dots.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} />
      ))}
      <g fill="none" stroke="currentColor" opacity="0.55">
        {edges.map((d, i) => (
          <path key={i} d={d} strokeWidth="0.8" />
        ))}
      </g>
    </svg>
  );
}
