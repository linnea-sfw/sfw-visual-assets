import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { SporeRule } from "./organisms";
import { CAPTION } from "./photos";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/learn", label: "Learn" },
  { to: "/science", label: "Science" },
  { to: "/projects", label: "Projects" },
  { to: "/community", label: "Community" },
] as const;

const ALL = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/elaine-ingham", label: "Dr. Elaine Ingham" },
  { to: "/learn", label: "Learn" },
  { to: "/workshops", label: "Workshops" },
  { to: "/science", label: "Science" },
  { to: "/projects", label: "Projects" },
  { to: "/projects/rancho-cacachilas", label: "Case study" },
  { to: "/community", label: "Community" },
  { to: "/now", label: "Now" },
  { to: "/donate", label: "Donate" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="hdr__mark">
          Soil Food Web Foundation
          <small>Est. 1986 · 501(c)(3)</small>
        </Link>
        <nav className="hdr__nav">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} data-active={path.startsWith(n.to)}>
              {n.label}
            </Link>
          ))}
          <button className="btn" onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
          <Link to="/donate" className="btn btn--give">
            Donate
          </Link>
        </nav>
        <div className="hdr__menu" style={{ display: undefined }}>
          <button className="btn" onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <div className="drawer">
          <div className="wrap">
            <ul>
              {ALL.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} onClick={() => setOpen(false)}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ paddingBottom: "var(--s-5)" }}>
              <Link to="/donate" className="btn btn--give" onClick={() => setOpen(false)}>
                Donate
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <SporeRule seed={41} count={120} />
        <div className="ftr__cols">
          <div>
            <h4>Soil Food Web Foundation</h4>
            <p style={{ color: "var(--sage)", maxWidth: "34ch" }}>
              A 501(c)(3) science education nonprofit. Forty years of teaching people to put soil
              under a microscope and read what is living in it.
            </p>
            <div style={{ marginTop: "var(--s-4)" }}>
              <Link to="/donate" className="btn btn--give">
                Donate
              </Link>
            </div>
          </div>
          <div>
            <h4>Learn</h4>
            <Link to="/learn">Courses</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/now">Calendar</Link>
          </div>
          <div>
            <h4>Work</h4>
            <Link to="/science">Science</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/projects/rancho-cacachilas">Case studies</Link>
          </div>
          <div>
            <h4>Foundation</h4>
            <Link to="/about">About</Link>
            <Link to="/elaine-ingham">Dr. Elaine Ingham</Link>
            <Link to="/community">Community</Link>
          </div>
        </div>
        <div className="ftr__base">
          <span>© {new Date().getFullYear()} Soil Food Web Foundation</span>
          <span>Placeholder text throughout. Visual mockup.</span>
        </div>
      </div>
    </footer>
  );
}

export function Site({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/* ---------- small reusable pieces ---------- */

export function Photo({
  src,
  ar = "ar-4x3",
  className = "",
  drift = false,
  alt = "",
}: {
  src: string;
  ar?: string;
  className?: string;
  drift?: boolean;
  alt?: string;
}) {
  return (
    <div className={`frame ${ar} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={`ph ${drift ? "slow" : ""}`} />
    </div>
  );
}

export function Fig({
  src,
  ar,
  caption = CAPTION,
  className,
  drift,
  alt = "",
}: {
  src: string;
  ar?: string;
  caption?: string;
  className?: string;
  drift?: boolean;
  alt?: string;
}) {
  return (
    <figure className="fig">
      <Photo
        src={src}
        ar={ar ?? "ar-4x3"}
        className={className ?? ""}
        drift={drift ?? false}
        alt={alt}
      />
      <figcaption className="cap">{caption}</figcaption>
    </figure>
  );
}

export function Field({ src, moss = false }: { src: string; moss?: boolean }) {
  return (
    <div className={`field ${moss ? "field--moss" : ""}`}>
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}

export function Shards({ src }: { src: string }) {
  return (
    <div className="shard">
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function VideoFrame({
  src,
  title,
  ar = "ar-wide",
}: {
  src: string;
  title: string;
  ar?: string;
}) {
  return (
    <div className={`vid ${ar}`}>
      <img src={src} alt="" loading="lazy" />
      <div className="vid__play">
        <span className="vid__mark">
          <i />
        </span>
        <span className="vid__t">{title}</span>
      </div>
    </div>
  );
}

export function Slot({ label }: { label: string }) {
  return <div className="slot">{label}</div>;
}

export function Masthead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="stack">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="d2">{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
    </div>
  );
}
