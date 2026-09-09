import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { families, totalBlocks, motionCSS, C, IMG } from "@/lib/catalogue";
import type { Block } from "@/lib/catalogue/kit";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Asset Library — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "A working catalogue of photographic treatments, microscopy plates and page bands for the Soil Food Web Foundation site rebuild. Copy any block as standalone HTML.",
      },
      { property: "og:title", content: "Asset Library — Soil Food Web Foundation" },
      {
        property: "og:description",
        content:
          "Microscopy plates, frames, ink surfaces, printed furniture and page bands. Every block is standalone HTML, ready to paste.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Library,
});

function download(name: string, html: string) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function Actions({ id, html }: { id: string; html: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="lib-actions">
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(html);
          } catch {
            const ta = document.createElement("textarea");
            ta.value = html;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
          }
          setDone(true);
          window.setTimeout(() => setDone(false), 1600);
        }}
      >
        {done ? "Copied" : "Copy HTML"}
      </button>
      <button type="button" onClick={() => download(`sfw-${id}.html`, html)}>
        Download
      </button>
    </div>
  );
}

function BlockCard({ b }: { b: Block }) {
  return (
    <article className="lib-block" id={b.id}>
      <header className="lib-head">
        <div>
          <span className="lib-id">{b.id.toUpperCase()}</span>
          <h3>{b.title}</h3>
          <p>{b.note}</p>
        </div>
        <Actions id={b.id} html={b.html} />
      </header>
      <div
        className={"lib-stage" + (b.dark ? " on-dark" : "")}
        dangerouslySetInnerHTML={{ __html: b.html }}
      />
    </article>
  );
}

function Library() {
  return (
    <main className="lib">
      <style>{css}</style>

      <header className="lib-masthead">
        <p className="lib-eyebrow">Soil Food Web Foundation · Website rebuild</p>
        <h1>Asset library</h1>
        <p className="lib-lede">
          {totalBlocks} self-contained visual treatments. Every block is one HTML snippet with
          namespaced styles inside it — no external stylesheet, no font call, no script. Copy a
          block, paste it into a WordPress custom HTML block, swap the image path, replace the
          caption text.
        </p>
        <dl className="lib-facts">
          <div>
            <dt>Caption text</dt>
            <dd>REPLACE_WITH_CAPTION throughout. No measurement, magnification or species name appears anywhere.</dd>
          </div>
          <div>
            <dt>Image paths</dt>
            <dd>
              Public paths such as <code>{IMG.hands}</code>, so they survive a copy-paste.
            </dd>
          </div>
          <div>
            <dt>Motion</dt>
            <dd>CSS only, 16 seconds and longer per cycle, stopped by prefers-reduced-motion.</dd>
          </div>
        </dl>

        <div className="lib-warn">
          <b>Images are not in the project yet.</b> <code>/public/img/</code> is empty, so every
          plate below is currently a broken image. The paths use the subject names from the brief
          (<code>hands-soil.jpg</code>, <code>elaine-ingham.jpg</code>,{" "}
          <code>microscopy-fungal-hyphae.jpg</code> and so on). Upload the photographs under those
          names, or send the real filenames and they will be swapped in.
        </div>

        <nav className="lib-toc">
          {families.map((f) => (
            <a key={f.key} href={`#${f.key}`}>
              {f.title} <em>{f.blocks.length}</em>
            </a>
          ))}
          <a href="#motion">
            Motion layer <em>1</em>
          </a>
        </nav>
      </header>

      {families.map((f) => (
        <section key={f.key} className="lib-family" id={f.key}>
          <div className="lib-family-head">
            <h2>
              {f.title} <em>{f.blocks.length}</em>
            </h2>
            <p>{f.blurb}</p>
          </div>
          {f.blocks.map((b) => (
            <BlockCard key={b.id} b={b} />
          ))}
        </section>
      ))}

      <section className="lib-family" id="motion">
        <div className="lib-family-head">
          <h2>
            Motion layer <em>1</em>
          </h2>
          <p>
            The shared animation keyframes as one copyable block. Paste it once per page, then add
            the class names to any element. Every block above already carries its own motion, so
            this is for building new ones.
          </p>
        </div>
        <article className="lib-block">
          <header className="lib-head">
            <div>
              <span className="lib-id">MOTION</span>
              <h3>Motion CSS, complete</h3>
              <p>
                Drift, pan, breathe, aperture, edge walk and a one-time arrival. All wrapped in a
                prefers-reduced-motion guard, so it disappears for anyone who has asked for that.
              </p>
            </div>
            <Actions id="motion" html={motionCSS} />
          </header>
          <pre className="lib-code">{motionCSS}</pre>
        </article>
      </section>
    </main>
  );
}

const css = `
.lib{background:${C.paper};color:${C.body};font-family:'Source Sans 3','Source Sans Pro',system-ui,sans-serif;padding:0 0 120px;}
.lib *{box-sizing:border-box;}
.lib-masthead{max-width:1180px;margin:0 auto;padding:64px 32px 40px;}
.lib-eyebrow{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${C.green};margin:0 0 18px;}
.lib h1{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:clamp(34px,4vw,54px);line-height:1.08;color:${C.head};margin:0 0 20px;}
.lib-lede{font-size:18px;line-height:1.65;max-width:64ch;margin:0 0 30px;}
.lib-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;border-top:1px solid rgba(21,104,38,.3);padding-top:18px;margin:0 0 26px;}
.lib-facts dt{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:${C.green};margin-bottom:6px;}
.lib-facts dd{margin:0;font-size:14px;line-height:1.55;}
.lib code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;background:rgba(21,104,38,.08);padding:1px 5px;}
.lib-warn{border-left:3px solid ${C.gold};padding:14px 18px;background:rgba(201,162,39,.09);font-size:14.5px;line-height:1.6;margin-bottom:34px;}
.lib-toc{display:flex;flex-wrap:wrap;gap:10px;border-top:1px solid rgba(21,104,38,.3);padding-top:22px;}
.lib-toc a{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:12px;color:${C.head};text-decoration:none;box-shadow:inset 0 0 0 1px rgba(21,104,38,.35);padding:8px 12px;}
.lib-toc a em{font-style:normal;color:${C.green};margin-left:6px;}
.lib-toc a:hover{background:rgba(21,104,38,.07);}
.lib-family{max-width:1180px;margin:0 auto;padding:0 32px;scroll-margin-top:20px;}
.lib-family-head{border-top:3px solid ${C.green};padding-top:16px;margin:64px 0 26px;}
.lib-family-head h2{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:26px;color:${C.head};margin:0 0 8px;}
.lib-family-head h2 em{font-style:normal;font-size:15px;color:${C.green};margin-left:8px;}
.lib-family-head p{margin:0;font-size:15.5px;line-height:1.6;max-width:70ch;}
.lib-block{border-top:1px solid rgba(21,104,38,.28);padding:26px 0 40px;scroll-margin-top:20px;}
.lib-head{display:flex;justify-content:space-between;align-items:flex-start;gap:24px;margin-bottom:22px;}
.lib-id{font-family:ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.1em;color:${C.leaf};}
.lib-head h3{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:18px;color:${C.head};margin:4px 0 6px;}
.lib-head p{margin:0;font-size:14.5px;line-height:1.55;max-width:74ch;color:${C.body};}
.lib-actions{display:flex;gap:8px;flex:0 0 auto;}
.lib-actions button{font-family:Montserrat,Arial,sans-serif;font-weight:600;font-size:11.5px;letter-spacing:.04em;padding:9px 14px;background:transparent;color:${C.green};border:1px solid rgba(21,104,38,.45);cursor:pointer;}
.lib-actions button:hover{background:${C.green};color:${C.paper};border-color:${C.green};}
.lib-stage{padding:0;}
.lib-stage.on-dark{background:${C.deep};}
.lib-code{font-family:ui-monospace,Menlo,monospace;font-size:12px;line-height:1.6;background:rgba(34,55,31,.06);padding:18px;overflow:auto;white-space:pre-wrap;color:${C.head};}
@media(max-width:820px){
  .lib-facts{grid-template-columns:1fr;}
  .lib-head{flex-direction:column;}
  .lib-masthead,.lib-family{padding-left:18px;padding-right:18px;}
}
`;
