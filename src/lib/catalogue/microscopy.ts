import { Block, Family, C, F, IMG, MICRO, CAP, SCALE, motion, tidy } from "./kit";

/* ------------------------------------------------------------------ *
 * The approved microscopy plate, and its variants.
 * Circles are FIELD OF VIEW. Microscopy imagery only — never a face,
 * never hands, never a landscape.
 * ------------------------------------------------------------------ */

type PlateOpts = {
  id: string;
  img: string;
  ring?: number;
  ringColor?: string;
  keyline?: string;
  rule?: "below" | "above" | "none";
  caption?: "under" | "margin" | "none";
  scale?: number;
  seconds?: number;
  width?: number;
  bleed?: boolean;
};

const softRing = "rgba(89,166,108,.55)";

function plateCSS(o: PlateOpts) {
  const n = `sfw-${o.id}`;
  const ring = o.ring ?? 10;
  const ringColor = o.ringColor ?? softRing;
  const key = o.keyline ?? "rgba(21,104,38,.22)";
  const scale = o.scale ?? 1.12;
  const secs = o.seconds ?? 26;
  return `
.${n}{font-family:${F.b};color:${C.body};max-width:${o.width ?? 420}px;}
.${n} .plate{position:relative;aspect-ratio:1/1;box-shadow:inset 0 0 0 1px ${key};overflow:hidden;background:${C.paper};}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(${scale});transform-origin:52% 48%;}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 ${ring}px ${ringColor};pointer-events:none;}
.${n} .rule{height:1px;background:rgba(21,104,38,.30);border:0;margin:14px 0 10px;}
.${n} .cap{font-family:${F.s};font-style:italic;font-size:16px;line-height:1.35;color:${C.head};margin:0;}
.${n} .sub{font-family:${F.b};font-size:12.5px;line-height:1.4;letter-spacing:.01em;color:${C.green};margin:4px 0 0;}
${motion(`
.${n} .disc img{animation:${n}-drift ${secs}s ease-in-out infinite alternate;}
@keyframes ${n}-drift{0%{transform:scale(${scale}) translate3d(-1.4%,1.1%,0);}100%{transform:scale(${scale}) translate3d(1.6%,-1.3%,0);}}
`)}`;
}

function plate(o: PlateOpts) {
  const n = `sfw-${o.id}`;
  const rule = o.rule ?? "below";
  const cap = o.caption ?? "under";
  const captionBlock = `<p class="cap">${CAP}</p><p class="sub">${CAP}</p>`;
  const ruleEl = `<hr class="rule">`;
  const fig = `<div class="plate"><div class="disc"><img src="${o.img}" alt="${CAP}"></div><div class="ring"></div></div>`;

  if (cap === "margin") {
    return tidy(`<style>
${plateCSS(o)}
.${n}.margin{display:grid;grid-template-columns:1fr 132px;gap:18px;align-items:start;max-width:560px;}
.${n}.margin .side{padding-top:6px;border-left:1px solid rgba(21,104,38,.30);padding-left:12px;}
.${n}.margin .rule{display:none;}
</style>
<figure class="${n} margin">
  ${fig}
  <figcaption class="side">${captionBlock}</figcaption>
</figure>`);
  }

  const body =
    cap === "none"
      ? fig
      : rule === "above"
        ? `${ruleEl}${captionBlock}${fig}`
        : rule === "none"
          ? `${fig}<div style="height:12px"></div>${captionBlock}`
          : `${fig}${ruleEl}${captionBlock}`;

  return tidy(`<style>${plateCSS(o)}</style>
<figure class="${n}" style="margin:0">
  ${body}
</figure>`);
}

/* ---- multi-circle builders ---- */

function row(id: string, imgs: string[], opts: { ring?: number; ringColor?: string; cols?: number; caption?: boolean; sizes?: string[] }) {
  const n = `sfw-${id}`;
  const ring = opts.ring ?? 7;
  const ringColor = opts.ringColor ?? softRing;
  const cols = opts.cols ?? imgs.length;
  const cells = imgs
    .map(
      (src, i) => `  <figure class="cell"${opts.sizes ? ` style="width:${opts.sizes[i]}"` : ""}>
    <div class="plate"><div class="disc"><img src="${src}" alt="${CAP}"></div><div class="ring"></div></div>
    ${opts.caption === false ? "" : `<hr class="rule"><p class="cap">${CAP}</p><p class="sub">${CAP}</p>`}
  </figure>`,
    )
    .join("\n");
  return tidy(`<style>
.${n}{font-family:${F.b};color:${C.body};display:grid;grid-template-columns:repeat(${cols},1fr);gap:24px;align-items:start;}
.${n} .cell{margin:0;}
.${n} .plate{position:relative;aspect-ratio:1/1;box-shadow:inset 0 0 0 1px rgba(21,104,38,.22);overflow:hidden;background:${C.paper};}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 ${ring}px ${ringColor};pointer-events:none;}
.${n} .rule{height:1px;background:rgba(21,104,38,.30);border:0;margin:12px 0 8px;}
.${n} .cap{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};margin:0;}
.${n} .sub{font-size:11.5px;color:${C.green};margin:3px 0 0;}
${motion(`
.${n} .disc img{animation:${n}-d 30s ease-in-out infinite alternate;}
.${n} .cell:nth-child(even) .disc img{animation-duration:38s;animation-direction:alternate-reverse;}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-1.2%,1%,0);}100%{transform:scale(1.12) translate3d(1.4%,-1.2%,0);}}
`)}
</style>
<div class="${n}">
${cells}
</div>`);
}

export const microscopy: Family = {
  key: "microscopy",
  title: "Microscopy plates",
  blurb:
    "The approved plate, built exactly, then varied. A circle always means the field of view of a lens — microscopy imagery only.",
  blocks: [],
};

const B: Block[] = [];

B.push({
  id: "m01",
  title: "The plate — brightfield, canonical",
  note: "Science section, mechanism explainer. Exactly the approved construction: clip-path circle, 1.12 scale drift, soft green aperture ring at 10px, hairline rule below, italic serif caption over a small green descriptor.",
  html: plate({ id: "m01", img: IMG.mBright }),
});

B.push({
  id: "m02",
  title: "The plate — darkfield, deep green ring",
  note: "Same construction with the #22371F ring. Darkfield fields carry more black, so the heavier printed ring reads as ink rather than glow.",
  html: plate({ id: "m02", img: IMG.mDark, ringColor: C.deep, ring: 10 }),
});

B.push({
  id: "m03",
  title: "Hairline ring, 4px",
  note: "Research database listing thumbnails, where a heavy ring would crowd a dense page.",
  html: plate({ id: "m03", img: IMG.mProto, ring: 4 }),
});

B.push({
  id: "m04",
  title: "Heavy ring, 18px",
  note: "Single hero plate for a course landing block. The thick aperture makes a small image hold a wide column.",
  html: plate({ id: "m04", img: IMG.mFungi, ring: 18, ringColor: "rgba(34,55,31,.9)" }),
});

B.push({
  id: "m05",
  title: "Rule above the caption block",
  note: "Caption reads first, plate second. Useful in a Learn module list where the label is the scannable element.",
  html: plate({ id: "m05", img: IMG.mNema, rule: "above" }),
});

B.push({
  id: "m06",
  title: "Caption in the margin",
  note: "Article body figure. Caption sits in a right-hand column against a vertical hairline, the way a plated journal sets it.",
  html: plate({ id: "m06", img: IMG.mAmoeba, caption: "margin" }),
});

B.push({
  id: "m07",
  title: "Two circles side by side",
  note: "Before/after of a soil sample under the same lens. Two-up invites comparison without writing a comparison claim.",
  html: row("m07", [IMG.mBright, IMG.mDark], { cols: 2, ring: 8 }),
});

B.push({
  id: "m08",
  title: "Row of three",
  note: "Science overview: three organism groups across one band. Uncaptioned circles would float, so each keeps its rule.",
  html: row("m08", [IMG.mBact, IMG.mFungi, IMG.mProto], { cols: 3 }),
});

B.push({
  id: "m09",
  title: "Dense grid of six",
  note: "A survey plate. Reads as a contact sheet from a microscope session — the volume itself is the argument.",
  html: row("m09", MICRO.slice(0, 6), { cols: 3, ring: 6, caption: false }),
});

B.push({
  id: "m10",
  title: "Grid of eight, captioned small",
  note: "Research database index header. Eight fields with descriptors, set tight.",
  html: row("m10", MICRO, { cols: 4, ring: 5 }),
});

B.push({
  id: "m11",
  title: "Unequal circles on one row",
  note: "Editorial rhythm: a dominant field with two supporting ones. Breaks the grid without breaking the frame.",
  html: (() => {
    const n = "sfw-m11";
    return tidy(`<style>
.${n}{font-family:${F.b};display:flex;gap:26px;align-items:flex-end;}
.${n} figure{margin:0;}
.${n} .a{flex:0 0 300px;} .${n} .b{flex:0 0 170px;} .${n} .c{flex:0 0 116px;}
.${n} .plate{position:relative;aspect-ratio:1/1;box-shadow:inset 0 0 0 1px rgba(21,104,38,.22);overflow:hidden;}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;pointer-events:none;}
.${n} .a .ring{box-shadow:inset 0 0 0 12px rgba(89,166,108,.55);}
.${n} .b .ring{box-shadow:inset 0 0 0 7px rgba(34,55,31,.75);}
.${n} .c .ring{box-shadow:inset 0 0 0 5px rgba(89,166,108,.55);}
.${n} hr{height:1px;background:rgba(21,104,38,.30);border:0;margin:12px 0 8px;}
.${n} .cap{font-family:${F.s};font-style:italic;font-size:15px;color:${C.head};margin:0;}
.${n} .sub{font-size:11.5px;color:${C.green};margin:3px 0 0;}
${motion(`
.${n} .disc img{animation:${n}-d 34s ease-in-out infinite alternate;}
.${n} .b .disc img{animation-duration:44s;animation-direction:alternate-reverse;}
.${n} .c .disc img{animation-duration:52s;}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-1.5%,1.2%,0);}100%{transform:scale(1.12) translate3d(1.5%,-1.2%,0);}}
`)}
</style>
<div class="${n}">
  <figure class="a"><div class="plate"><div class="disc"><img src="${MICRO[1]}" alt="${CAP}"></div><div class="ring"></div></div><hr><p class="cap">${CAP}</p><p class="sub">${CAP}</p></figure>
  <figure class="b"><div class="plate"><div class="disc"><img src="${MICRO[2]}" alt="${CAP}"></div><div class="ring"></div></div><hr><p class="sub">${CAP}</p></figure>
  <figure class="c"><div class="plate"><div class="disc"><img src="${MICRO[3]}" alt="${CAP}"></div><div class="ring"></div></div><hr><p class="sub">${CAP}</p></figure>
</div>`);
  })(),
});

B.push({
  id: "m12",
  title: "Circle bleeding off the page edge",
  note: "Section opener. Half the field of view runs out of the right margin, so the page feels like a spread rather than a card.",
  html: (() => {
    const n = "sfw-m12";
    return tidy(`<style>
.${n}{position:relative;overflow:hidden;background:${C.paper};padding:56px 0;font-family:${F.b};}
.${n} .inner{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;}
.${n} .txt{max-width:34ch;}
.${n} h3{font-family:${F.h};font-weight:600;font-size:26px;line-height:1.25;color:${C.head};margin:0 0 12px;}
.${n} p{font-size:16px;line-height:1.6;color:${C.body};margin:0;}
.${n} hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:18px 0 0;width:120px;}
.${n} .plate{position:relative;aspect-ratio:1/1;margin-right:-22%;}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 14px rgba(34,55,31,.85);pointer-events:none;}
${motion(`
.${n} .disc img{animation:${n}-d 40s ease-in-out infinite alternate;}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-2%,1%,0);}100%{transform:scale(1.12) translate3d(1.8%,-1.4%,0);}}
`)}
@media(max-width:720px){.${n} .inner{grid-template-columns:1fr;}.${n} .plate{margin-right:-30%;}}
</style>
<section class="${n}">
  <div class="inner">
    <div class="txt"><h3>${CAP}</h3><p>${CAP}</p><hr></div>
    <div class="plate"><div class="disc"><img src="${MICRO[5]}" alt="${CAP}"></div><div class="ring"></div></div>
  </div>
</section>`);
  })(),
});

B.push({
  id: "m13",
  title: "Circle on a dark band",
  note: "Closing band of the Science section. Deep green ground, ring in the paper colour so the aperture reads as a cut rather than a light source.",
  dark: true,
  html: (() => {
    const n = "sfw-m13";
    return tidy(`<style>
.${n}{background:${C.deep};padding:52px 40px;font-family:${F.b};}
.${n} .wrap{display:grid;grid-template-columns:260px 1fr;gap:36px;align-items:center;}
.${n} .plate{position:relative;aspect-ratio:1/1;}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 9px rgba(244,241,234,.82);pointer-events:none;}
.${n} h3{font-family:${F.s};font-style:italic;font-weight:400;font-size:24px;line-height:1.4;color:${C.paper};margin:0 0 14px;}
.${n} hr{height:1px;border:0;background:rgba(89,166,108,.5);margin:0 0 14px;width:90px;}
.${n} p{font-size:14px;color:rgba(244,241,234,.72);margin:0;}
${motion(`
.${n} .disc img{animation:${n}-d 36s ease-in-out infinite alternate;}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-1.4%,1.2%,0);}100%{transform:scale(1.12) translate3d(1.6%,-1%,0);}}
`)}
@media(max-width:720px){.${n} .wrap{grid-template-columns:1fr;}}
</style>
<section class="${n}">
  <div class="wrap">
    <div class="plate"><div class="disc"><img src="${MICRO[4]}" alt="${CAP}"></div><div class="ring"></div></div>
    <div><hr><h3>${CAP}</h3><p>${CAP}</p></div>
  </div>
</section>`);
  })(),
});

B.push({
  id: "m14",
  title: "Plate with reserved scale-bar slot",
  note: "Where a real measurement will be added later by staff. The slot is drawn and labelled REPLACE_WITH_SCALE — no figure is invented.",
  html: (() => {
    const n = "sfw-m14";
    return tidy(`<style>
.${n}{font-family:${F.b};max-width:420px;}
.${n} .plate{position:relative;aspect-ratio:1/1;box-shadow:inset 0 0 0 1px rgba(21,104,38,.22);overflow:hidden;}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 10px rgba(89,166,108,.55);pointer-events:none;}
.${n} .slot{display:flex;align-items:center;gap:10px;margin:14px 0 0;}
.${n} .bar{width:78px;height:6px;box-shadow:inset 0 0 0 1px ${C.green};}
.${n} .slot span{font-size:11px;letter-spacing:.06em;color:${C.green};}
.${n} hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:12px 0 10px;}
.${n} .cap{font-family:${F.s};font-style:italic;font-size:16px;color:${C.head};margin:0;}
.${n} .sub{font-size:12.5px;color:${C.green};margin:4px 0 0;}
${motion(`
.${n} .disc img{animation:${n}-d 28s ease-in-out infinite alternate;}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-1.3%,1%,0);}100%{transform:scale(1.12) translate3d(1.4%,-1.2%,0);}}
`)}
</style>
<figure class="${n}" style="margin:0">
  <div class="plate"><div class="disc"><img src="${MICRO[7]}" alt="${CAP}"></div><div class="ring"></div></div>
  <div class="slot"><span class="bar"></span><span>${SCALE}</span></div>
  <hr>
  <p class="cap">${CAP}</p><p class="sub">${CAP}</p>
</figure>`);
  })(),
});

B.push({
  id: "m15",
  title: "Aperture breathing, single plate",
  note: "The ring itself breathes between two weights over a 24 second loop. Alive rather than animated; stops entirely under reduced motion.",
  html: (() => {
    const n = "sfw-m15";
    return tidy(`<style>
.${n}{font-family:${F.b};max-width:380px;}
.${n} .plate{position:relative;aspect-ratio:1/1;box-shadow:inset 0 0 0 1px rgba(21,104,38,.22);overflow:hidden;}
.${n} .disc{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.${n} .disc img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .ring{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 8px rgba(34,55,31,.8);pointer-events:none;}
.${n} hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:14px 0 10px;}
.${n} .cap{font-family:${F.s};font-style:italic;font-size:16px;color:${C.head};margin:0;}
.${n} .sub{font-size:12.5px;color:${C.green};margin:4px 0 0;}
${motion(`
.${n} .ring{animation:${n}-r 24s ease-in-out infinite alternate;}
.${n} .disc img{animation:${n}-d 32s ease-in-out infinite alternate;}
@keyframes ${n}-r{0%{box-shadow:inset 0 0 0 8px rgba(34,55,31,.8);}100%{box-shadow:inset 0 0 0 13px rgba(34,55,31,.62);}}
@keyframes ${n}-d{0%{transform:scale(1.12) translate3d(-1.2%,.9%,0);}100%{transform:scale(1.12) translate3d(1.3%,-1.1%,0);}}
`)}
</style>
<figure class="${n}" style="margin:0">
  <div class="plate"><div class="disc"><img src="${MICRO[0]}" alt="${CAP}"></div><div class="ring"></div></div>
  <hr><p class="cap">${CAP}</p><p class="sub">${CAP}</p>
</figure>`);
  })(),
});

B.push({
  id: "m16",
  title: "Plate strip, horizontal scroll-free band of five",
  note: "A quiet divider between two Science subsections. Five small fields on one hairline, no captions — texture, not content.",
  html: (() => {
    const n = "sfw-m16";
    const cells = MICRO.slice(0, 5)
      .map(
        (s, i) =>
          `  <span class="c" style="animation-delay:-${i * 5}s"><span class="d"><img src="${s}" alt="${CAP}"></span><span class="r"></span></span>`,
      )
      .join("\n");
    return tidy(`<style>
.${n}{border-top:1px solid rgba(21,104,38,.30);border-bottom:1px solid rgba(21,104,38,.30);padding:22px 0;display:flex;gap:22px;justify-content:center;align-items:center;font-family:${F.b};}
.${n} .c{position:relative;width:86px;height:86px;display:block;}
.${n} .d{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;display:block;}
.${n} .d img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.${n} .r{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 5px rgba(89,166,108,.55);}
${motion(`
.${n} .c{animation:${n}-b 26s ease-in-out infinite alternate;}
@keyframes ${n}-b{0%{opacity:.78;}100%{opacity:1;}}
`)}
</style>
<div class="${n}">
${cells}
</div>`);
  })(),
});

microscopy.blocks = B;
