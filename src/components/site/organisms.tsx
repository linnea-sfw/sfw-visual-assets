/**
 * Generative micro-geometry.
 *
 * Every decorative form on this site is drawn, not photographed: dot-matrix
 * colonies, branching hyphae and stippled aggregates, produced deterministically
 * from a seed so a given plate is identical on every render and on the server.
 * Riso olive on paper, catalogued like specimens.
 */

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

export type Tone = "olive" | "ink" | "moss" | "paper" | "head" | "blue" | "gold";

type Props = {
  seed?: number;
  size?: number;
  className?: string;
  tone?: Tone;
};

/** Bacterial colony: lobed boundary, density falling to the rim. */
export function Colony({ seed = 7, size = 260, className, tone = "olive" }: Props) {
  const rand = rng(seed);
  const R = size / 2 - 6;
  const l1 = 0.3 + rand() * 0.18;
  const l2 = 0.12 + rand() * 0.16;
  const p1 = rand() * 6.28;
  const p2 = rand() * 6.28;
  const lobes = 3 + Math.floor(rand() * 3);
  const dots: string[] = [];
  const n = 620;
  for (let i = 0; i < n; i++) {
    const th = rand() * Math.PI * 2;
    const edge = 1 + l1 * Math.sin(lobes * th + p1) + l2 * Math.sin((lobes + 2) * th + p2);
    const u = rand();
    const rr = R * edge * Math.pow(u, 0.42);
    if (rr > R * 1.02) continue;
    const x = r2(size / 2 + rr * Math.cos(th));
    const y = r2(size / 2 + rr * Math.sin(th));
    const d = r2(0.7 + (1 - u) * 1.9 + rand() * 0.5);
    dots.push(`${x},${y},${d}`);
  }
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      data-tone={tone}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {dots.map((s, i) => {
        const [x, y, d] = s.split(",");
        return <circle key={i} cx={x} cy={y} r={d} />;
      })}
    </svg>
  );
}

/** Aggregate: concentric stippled rings, the way soil particles bind. */
export function Aggregate({ seed = 3, size = 240, className, tone = "olive" }: Props) {
  const rand = rng(seed);
  const rings = 7 + Math.floor(rand() * 4);
  const dots: Array<[number, number, number]> = [];
  for (let k = 1; k <= rings; k++) {
    const rr = (size / 2 - 8) * (k / rings);
    const count = Math.round(rr * 1.5);
    const off = rand() * 6.28;
    for (let i = 0; i < count; i++) {
      const th = off + (i / count) * Math.PI * 2 + (rand() - 0.5) * 0.09;
      const jit = rr + (rand() - 0.5) * 7;
      dots.push([
        r2(size / 2 + jit * Math.cos(th)),
        r2(size / 2 + jit * Math.sin(th)),
        r2(0.6 + rand() * 1.5),
      ]);
    }
  }
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      data-tone={tone}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {dots.map(([x, y, d], i) => (
        <circle key={i} cx={x} cy={y} r={d} />
      ))}
    </svg>
  );
}

/** Hyphae: recursive branching, drawn as hairlines with spore tips. */
export function Hyphae({
  seed = 11,
  width = 320,
  height = 420,
  from = "bottom",
  className,
  draw = false,
  tone = "olive",
}: {
  seed?: number;
  width?: number;
  height?: number;
  from?: "bottom" | "top" | "left" | "right";
  className?: string;
  draw?: boolean;
  tone?: Tone;
}) {
  const rand = rng(seed);
  const paths: Array<{ d: string; w: number }> = [];
  const tips: Array<[number, number, number]> = [];

  const start: [number, number] =
    from === "bottom"
      ? [width / 2, height]
      : from === "top"
        ? [width / 2, 0]
        : from === "left"
          ? [0, height / 2]
          : [width, height / 2];
  const baseAngle =
    from === "bottom" ? -Math.PI / 2 : from === "top" ? Math.PI / 2 : from === "left" ? 0 : Math.PI;

  const grow = (x: number, y: number, ang: number, len: number, w: number, depth: number) => {
    if (depth > 5 || len < 7) {
      tips.push([r2(x), r2(y), r2(0.9 + rand() * 1.8)]);
      return;
    }
    let d = `M${r2(x)} ${r2(y)}`;
    let cx = x;
    let cy = y;
    let a = ang;
    const steps = 4 + Math.floor(rand() * 3);
    for (let i = 0; i < steps; i++) {
      a += (rand() - 0.5) * 0.55;
      cx += Math.cos(a) * (len / steps);
      cy += Math.sin(a) * (len / steps);
      d += ` L${r2(cx)} ${r2(cy)}`;
    }
    paths.push({ d, w: r2(w) });
    const branches = rand() < 0.72 ? 2 : 1;
    for (let b = 0; b < branches; b++) {
      grow(
        cx,
        cy,
        a + (b === 0 ? -1 : 1) * (0.25 + rand() * 0.55),
        len * (0.58 + rand() * 0.24),
        Math.max(0.4, w * 0.72),
        depth + 1,
      );
    }
  };
  grow(start[0], start[1], baseAngle, Math.min(width, height) * 0.34, 1.5, 0);

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
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            strokeWidth={p.w}
            className={draw ? "grow" : undefined}
            style={draw ? { animationDelay: `${(i % 14) * 0.09}s` } : undefined}
          />
        ))}
      </g>
      <g>
        {tips.map(([x, y, d], i) => (
          <circle key={i} cx={x} cy={y} r={d} />
        ))}
      </g>
    </svg>
  );
}

/** A row of spores, used as a hairline divider that is alive. */
export function SporeRule({
  seed = 5,
  count = 96,
  className,
}: {
  seed?: number;
  count?: number;
  className?: string;
}) {
  const rand = rng(seed);
  return (
    <svg
      viewBox="0 0 1000 14"
      preserveAspectRatio="none"
      className={["spore-rule", className].filter(Boolean).join(" ")}
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: count }, (_, i) => (
        <circle
          key={i}
          cx={r2((i / (count - 1)) * 996 + 2)}
          cy={r2(7 + (rand() - 0.5) * 6)}
          r={r2(0.7 + rand() * 1.9)}
        />
      ))}
    </svg>
  );
}

/** A catalogued specimen: the drawing, its plate number and its caption. */
export function Plate({
  n,
  title,
  note,
  children,
}: {
  n: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="plate">
      <div className="plate__f">{children}</div>
      <figcaption>
        <span className="plate__n">{n}</span>
        <span className="plate__t">{title}</span>
        {note ? <span className="plate__note">{note}</span> : null}
      </figcaption>
    </figure>
  );
}
