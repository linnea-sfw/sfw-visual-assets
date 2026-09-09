import { Block, Family, C, F, IMG, MICRO, CAP, SCALE, motion, tidy } from "./kit";

const B: Block[] = [];

B.push({
  id: "u01",
  title: "Hairline rule, three weights",
  note: "The connective tissue of the whole system. Full-width hairline, short 120px rule, and a double rule for section ends.",
  html: tidy(`<style>
.sfw-u01{font-family:${F.b};display:grid;gap:26px;}
.sfw-u01 .a{height:1px;background:rgba(21,104,38,.30);}
.sfw-u01 .b{height:1px;width:120px;background:${C.green};}
.sfw-u01 .c{height:4px;border-top:1px solid rgba(21,104,38,.30);border-bottom:2px solid ${C.green};}
</style>
<div class="sfw-u01"><span class="a"></span><span class="b"></span><span class="c"></span></div>`),
});

B.push({
  id: "u02",
  title: "Figure numbering beside a plate",
  note: "Journal furniture: a small figure mark set in the margin against the top edge of the image. Numbering by figure, never 01/02/03 as decoration.",
  html: tidy(`<style>
.sfw-u02{display:grid;grid-template-columns:62px 1fr;gap:16px;font-family:${F.b};align-items:start;}
.sfw-u02 .fig{font-family:${F.h};font-weight:600;font-size:11px;letter-spacing:.08em;color:${C.green};padding-top:2px;border-top:2px solid ${C.green};}
.sfw-u02 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-u02 figcaption{font-family:${F.s};font-style:italic;font-size:15px;color:${C.head};margin-top:10px;}
</style>
<figure class="sfw-u02" style="margin:0">
  <div class="fig">FIG. ${CAP}</div>
  <div><img src="${IMG.sampling}" alt="${CAP}"><figcaption>${CAP}</figcaption></div>
</figure>`),
});

B.push({
  id: "u03",
  title: "Eyebrow label over a plate",
  note: "The one place letter-spaced caps are allowed, because the block is specifically an eyebrow. Sits above a hairline, above the image.",
  html: tidy(`<style>
.sfw-u03{font-family:${F.b};max-width:520px;}
.sfw-u03 .e{font-family:${F.h};font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${C.green};margin:0 0 8px;}
.sfw-u03 hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:0 0 16px;}
.sfw-u03 img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;}
</style>
<figure class="sfw-u03" style="margin:0"><p class="e">${CAP}</p><hr><img src="${IMG.workshop}" alt="${CAP}"></figure>`),
});

B.push({
  id: "u04",
  title: "Caption block, full journal set",
  note: "The complete caption unit: rule, italic serif title line, green descriptor, and a right-aligned credit. Reusable under any frame.",
  html: tidy(`<style>
.sfw-u04{font-family:${F.b};max-width:520px;}
.sfw-u04 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-u04 hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:14px 0 10px;}
.sfw-u04 .r{display:flex;justify-content:space-between;align-items:baseline;gap:20px;}
.sfw-u04 .t{font-family:${F.s};font-style:italic;font-size:16px;color:${C.head};margin:0;}
.sfw-u04 .d{font-size:12.5px;color:${C.green};margin:5px 0 0;}
.sfw-u04 .cr{font-size:11px;color:rgba(51,49,48,.6);white-space:nowrap;}
</style>
<figure class="sfw-u04" style="margin:0">
  <img src="${IMG.field}" alt="${CAP}"><hr>
  <div class="r"><div><p class="t">${CAP}</p><p class="d">${CAP}</p></div><span class="cr">${CAP}</span></div>
</figure>`),
});

B.push({
  id: "u05",
  title: "Corner marks",
  note: "Crop marks at the four corners of a plate. Prepress furniture, used sparingly — one per page at most.",
  html: tidy(`<style>
.sfw-u05{position:relative;padding:16px;max-width:420px;}
.sfw-u05 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;}
.sfw-u05 i{position:absolute;width:14px;height:14px;}
.sfw-u05 i:nth-child(1){top:0;left:0;border-top:1px solid ${C.green};border-left:1px solid ${C.green};}
.sfw-u05 i:nth-child(2){top:0;right:0;border-top:1px solid ${C.green};border-right:1px solid ${C.green};}
.sfw-u05 i:nth-child(3){bottom:0;left:0;border-bottom:1px solid ${C.green};border-left:1px solid ${C.green};}
.sfw-u05 i:nth-child(4){bottom:0;right:0;border-bottom:1px solid ${C.green};border-right:1px solid ${C.green};}
</style>
<figure class="sfw-u05" style="margin:0"><i></i><i></i><i></i><i></i><img src="${IMG.scope}" alt="${CAP}"></figure>`),
});

B.push({
  id: "u06",
  title: "Green keyline, offset",
  note: "The keyline is drawn 12px outside the photograph rather than on it, so the frame is clearly a separate mark on the sheet.",
  html: tidy(`<style>
.sfw-u06{position:relative;max-width:400px;padding:12px;}
.sfw-u06::before{content:"";position:absolute;inset:0;box-shadow:inset 0 0 0 1px ${C.green};}
.sfw-u06 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;position:relative;}
</style>
<figure class="sfw-u06" style="margin:0"><img src="${IMG.staff}" alt="${CAP}"></figure>`),
});

B.push({
  id: "u07",
  title: "Dark band behind a plate",
  note: "The photograph sits partly over a #22371F band, partly over paper. Weight without a shadow.",
  html: tidy(`<style>
.sfw-u07{position:relative;padding:0 0 40px;}
.sfw-u07 .band{position:absolute;left:0;right:0;top:46px;bottom:0;background:${C.deep};}
.sfw-u07 .in{position:relative;padding:0 40px;}
.sfw-u07 img{width:100%;aspect-ratio:16/7;object-fit:cover;display:block;}
.sfw-u07 p{font-family:${F.b};font-size:13px;color:rgba(244,241,234,.75);margin:16px 0 0;}
</style>
<section class="sfw-u07"><span class="band"></span><div class="in"><img src="${IMG.compostTurn}" alt="${CAP}"><p>${CAP}</p></div></section>`),
});

B.push({
  id: "u08",
  title: "Pull quote set beside the image",
  note: "About: Dr. Elaine's research. Serif italic quote in the left column, hairline between, portrait right. No quotation-mark ornament.",
  html: tidy(`<style>
.sfw-u08{display:grid;grid-template-columns:1fr 300px;gap:36px;align-items:center;font-family:${F.b};}
.sfw-u08 blockquote{margin:0;padding-right:32px;border-right:1px solid rgba(21,104,38,.30);}
.sfw-u08 blockquote p{font-family:${F.s};font-style:italic;font-size:24px;line-height:1.45;color:${C.head};margin:0 0 14px;}
.sfw-u08 cite{font-style:normal;font-size:12.5px;color:${C.green};}
.sfw-u08 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;}
@media(max-width:720px){.sfw-u08{grid-template-columns:1fr;}.sfw-u08 blockquote{border:0;padding:0;}}
</style>
<section class="sfw-u08">
  <blockquote><p>${CAP}</p><cite>${CAP}</cite></blockquote>
  <img src="${IMG.elaine}" alt="${CAP}">
</section>`),
});

B.push({
  id: "u09",
  title: "Field note in the margin",
  note: "A handwritten-register note — set in italic serif, not a script font — pinned in the outer margin beside a field photograph.",
  html: tidy(`<style>
.sfw-u09{display:grid;grid-template-columns:1fr 180px;gap:24px;font-family:${F.b};align-items:start;}
.sfw-u09 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-u09 aside{font-family:${F.s};font-style:italic;font-size:14.5px;line-height:1.55;color:${C.head};border-top:2px solid ${C.leaf};padding-top:10px;}
.sfw-u09 aside b{display:block;font-family:${F.b};font-style:normal;font-weight:600;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:${C.green};margin-bottom:6px;}
@media(max-width:640px){.sfw-u09{grid-template-columns:1fr;}}
</style>
<section class="sfw-u09"><img src="${IMG.field}" alt="${CAP}"><aside><b>${CAP}</b>${CAP}</aside></section>`),
});

B.push({
  id: "u10",
  title: "Step markers down a photo column",
  note: "Practice: a project method. Steps marked by lettered rules down the left edge of a stacked image column — sequence without a numbered card set.",
  html: tidy(`<style>
.sfw-u10{font-family:${F.b};display:grid;gap:0;}
.sfw-u10 .s{display:grid;grid-template-columns:96px 1fr;gap:20px;padding:18px 0;border-top:1px solid rgba(21,104,38,.25);}
.sfw-u10 .s:last-child{border-bottom:1px solid rgba(21,104,38,.25);}
.sfw-u10 .k{font-family:${F.h};font-weight:600;font-size:11px;letter-spacing:.1em;color:${C.green};}
.sfw-u10 .k em{display:block;font-style:normal;font-size:34px;line-height:1;color:rgba(89,166,108,.55);margin-top:6px;}
.sfw-u10 .c{display:grid;grid-template-columns:180px 1fr;gap:18px;align-items:start;}
.sfw-u10 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.sfw-u10 p{margin:0;font-size:15px;line-height:1.6;color:${C.body};}
@media(max-width:680px){.sfw-u10 .s,.sfw-u10 .c{grid-template-columns:1fr;}}
</style>
<div class="sfw-u10">
  <div class="s"><div class="k">STEP<em>A</em></div><div class="c"><img src="${IMG.sampling}" alt="${CAP}"><p>${CAP}</p></div></div>
  <div class="s"><div class="k">STEP<em>B</em></div><div class="c"><img src="${IMG.glassware}" alt="${CAP}"><p>${CAP}</p></div></div>
  <div class="s"><div class="k">STEP<em>C</em></div><div class="c"><img src="${IMG.scopeWork}" alt="${CAP}"><p>${CAP}</p></div></div>
</div>`),
});

B.push({
  id: "u11",
  title: "Timeline on a rule",
  note: "Forty years of the Foundation. Markers sit on one horizontal hairline with small plates hung above alternate points.",
  html: tidy(`<style>
.sfw-u11{position:relative;font-family:${F.b};padding:0 0 42px;}
.sfw-u11 .t{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(21,104,38,.35);}
.sfw-u11 .n{position:relative;padding:0 14px 16px;}
.sfw-u11 .n::after{content:"";position:absolute;left:14px;bottom:-4px;width:7px;height:7px;background:${C.green};}
.sfw-u11 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;margin-bottom:12px;}
.sfw-u11 .n:nth-child(even) img{display:none;}
.sfw-u11 .n:nth-child(even){align-self:end;}
.sfw-u11 b{font-family:${F.h};font-weight:600;font-size:13px;color:${C.head};display:block;}
.sfw-u11 span{font-size:12.5px;color:${C.green};}
</style>
<div class="sfw-u11"><div class="t">
  <div class="n"><img src="${IMG.elaineTeaching}" alt="${CAP}"><b>${CAP}</b><span>${CAP}</span></div>
  <div class="n"><b>${CAP}</b><span>${CAP}</span></div>
  <div class="n"><img src="${IMG.workshop}" alt="${CAP}"><b>${CAP}</b><span>${CAP}</span></div>
  <div class="n"><b>${CAP}</b><span>${CAP}</span></div>
</div></div>`),
});

B.push({
  id: "u12",
  title: "Running head and folio",
  note: "Page furniture for long Science articles: section name left, folio right, hairline under, image below.",
  html: tidy(`<style>
.sfw-u12{font-family:${F.b};}
.sfw-u12 .h{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(21,104,38,.30);padding-bottom:8px;}
.sfw-u12 .h span{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${C.green};}
.sfw-u12 .h em{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};}
.sfw-u12 img{width:100%;aspect-ratio:2/1;object-fit:cover;display:block;margin-top:20px;}
</style>
<div class="sfw-u12"><div class="h"><span>${CAP}</span><em>${CAP}</em></div><img src="${IMG.roots}" alt="${CAP}"></div>`),
});

B.push({
  id: "u13",
  title: "Reserved scale slot, standalone",
  note: "A drop-in unit for any plate that will later carry a real measurement. The bar is drawn empty and labelled REPLACE_WITH_SCALE.",
  html: tidy(`<style>
.sfw-u13{display:inline-flex;align-items:center;gap:10px;font-family:${F.b};padding:6px 0;}
.sfw-u13 .b{width:96px;height:7px;box-shadow:inset 0 0 0 1px ${C.green};}
.sfw-u13 span{font-size:11px;letter-spacing:.06em;color:${C.green};}
</style>
<div class="sfw-u13"><span class="b"></span><span>${SCALE}</span></div>`),
});

B.push({
  id: "u14",
  title: "Index tab down the outer edge",
  note: "A vertical section marker running up the right edge of a plate. Helps a long Learn page tell you where you are without navigation.",
  html: tidy(`<style>
.sfw-u14{display:grid;grid-template-columns:1fr 34px;gap:14px;font-family:${F.b};}
.sfw-u14 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-u14 .tab{writing-mode:vertical-rl;transform:rotate(180deg);font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:${C.green};border-left:1px solid rgba(21,104,38,.3);padding-left:10px;text-align:right;}
</style>
<div class="sfw-u14"><img src="${IMG.workshopField}" alt="${CAP}"><div class="tab">${CAP}</div></div>`),
});

B.push({
  id: "u15",
  title: "Plate key: circle thumbnail beside a text list",
  note: "Science mechanism explainer. A small field of view keyed to a list of points, each on its own rule.",
  html: tidy(`<style>
.sfw-u15{display:grid;grid-template-columns:150px 1fr;gap:26px;font-family:${F.b};align-items:start;}
.sfw-u15 .p{position:relative;aspect-ratio:1/1;}
.sfw-u15 .d{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.sfw-u15 .d img{width:100%;height:100%;object-fit:cover;transform:scale(1.12);display:block;}
.sfw-u15 .r{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 7px rgba(89,166,108,.55);}
.sfw-u15 ul{list-style:none;margin:0;padding:0;}
.sfw-u15 li{border-top:1px solid rgba(21,104,38,.25);padding:10px 0;font-size:15px;color:${C.body};}
.sfw-u15 li:last-child{border-bottom:1px solid rgba(21,104,38,.25);}
${motion(`
.sfw-u15 .d img{animation:sfw-u15-d 30s ease-in-out infinite alternate;}
@keyframes sfw-u15-d{0%{transform:scale(1.12) translate3d(-1.2%,1%,0);}100%{transform:scale(1.12) translate3d(1.2%,-1%,0);}}
`)}
</style>
<section class="sfw-u15">
  <div class="p"><div class="d"><img src="${MICRO[2]}" alt="${CAP}"></div><div class="r"></div></div>
  <ul><li>${CAP}</li><li>${CAP}</li><li>${CAP}</li></ul>
</section>`),
});

export const furniture: Family = {
  key: "furniture",
  title: "Furniture",
  blurb: "Rules, marks, labels and captions — the printed apparatus that turns a photograph into a plate.",
  blocks: B,
};
