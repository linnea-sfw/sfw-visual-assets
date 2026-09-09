import { Block, Family, C, F, IMG, MICRO, CAP, SCALE, motion, tidy } from "./kit";

/* Families not asked for. This is where the crossings get strange. */

const B: Block[] = [];

B.push({
  id: "n01",
  title: "Contact sheet with an approval mark",
  note: "Darkroom furniture. Six frames in a strip with sprocket-style ticks and one frame ringed in green as the selected take. Archive credibility, no illustration.",
  html: tidy(`<style>
.sfw-n01{background:${C.paper};padding:14px 12px;font-family:${F.b};}
.sfw-n01 .strip{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;}
.sfw-n01 .f{position:relative;overflow:hidden;aspect-ratio:3/2;}
.sfw-n01 .f img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.1);}
.sfw-n01 .f.sel{box-shadow:inset 0 0 0 3px ${C.green};}
.sfw-n01 .f.sel img{filter:none;}
.sfw-n01 .ticks{display:grid;grid-template-columns:repeat(24,1fr);gap:4px;margin:8px 0;}
.sfw-n01 .ticks i{height:5px;background:rgba(79,52,51,.25);}
.sfw-n01 p{font-size:11.5px;color:${C.green};margin:8px 0 0;}
</style>
<figure class="sfw-n01" style="margin:0">
  <div class="ticks"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="strip">
    <span class="f"><img src="${IMG.workshop}" alt=""></span>
    <span class="f"><img src="${IMG.field}" alt=""></span>
    <span class="f sel"><img src="${IMG.hands}" alt="${CAP}"></span>
    <span class="f"><img src="${IMG.compost}" alt=""></span>
    <span class="f"><img src="${IMG.sampling}" alt=""></span>
    <span class="f"><img src="${IMG.glassware}" alt=""></span>
  </div>
  <div class="ticks"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  <p>${CAP}</p>
</figure>`),
});

B.push({
  id: "n02",
  title: "Specimen envelope",
  note: "A paper envelope with a die-cut window showing the photograph through it, and a ruled label field. Suits a case study index.",
  html: tidy(`<style>
.sfw-n02{background:${C.paper};box-shadow:inset 0 0 0 1px rgba(79,52,51,.4);padding:22px;max-width:400px;font-family:${F.b};}
.sfw-n02 .win{position:relative;aspect-ratio:3/2;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(79,52,51,.5);}
.sfw-n02 .win img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-n02 .lab{margin-top:18px;display:grid;gap:9px;}
.sfw-n02 .lab .row{display:grid;grid-template-columns:74px 1fr;align-items:end;gap:10px;}
.sfw-n02 .lab b{font-family:${F.h};font-weight:600;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:${C.green};}
.sfw-n02 .lab i{display:block;border-bottom:1px solid rgba(79,52,51,.35);height:17px;font-style:normal;font-family:${F.s};font-size:14px;color:${C.head};}
</style>
<figure class="sfw-n02" style="margin:0">
  <div class="win"><img src="${IMG.soilProfile}" alt="${CAP}"></div>
  <div class="lab">
    <div class="row"><b>${CAP}</b><i>${CAP}</i></div>
    <div class="row"><b>${CAP}</b><i>${CAP}</i></div>
    <div class="row"><b>${CAP}</b><i>${SCALE}</i></div>
  </div>
</figure>`),
});

B.push({
  id: "n03",
  title: "Two plates on a hinge",
  note: "A comparison that shows its own construction: two photographs meeting at a 2px green spine, captions turned outward to the margins.",
  html: tidy(`<style>
.sfw-n03{display:grid;grid-template-columns:1fr 2px 1fr;font-family:${F.b};}
.sfw-n03 .sp{background:${C.green};}
.sfw-n03 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;}
.sfw-n03 figcaption{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};padding-top:10px;}
.sfw-n03 .l figcaption{text-align:right;padding-right:10px;}
.sfw-n03 .r figcaption{padding-left:10px;}
</style>
<div class="sfw-n03">
  <figure class="l" style="margin:0"><img src="${IMG.compost}" alt="${CAP}"><figcaption>${CAP}</figcaption></figure>
  <span class="sp"></span>
  <figure class="r" style="margin:0"><img src="${IMG.roots}" alt="${CAP}"><figcaption>${CAP}</figcaption></figure>
</div>`),
});

B.push({
  id: "n04",
  title: "Marginalia stack",
  note: "One photograph, three notes at different heights in the outer margin, each tied to the image by its own short rule. Reads like an annotated offprint.",
  html: tidy(`<style>
.sfw-n04{display:grid;grid-template-columns:1fr 200px;gap:0;font-family:${F.b};}
.sfw-n04 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;}
.sfw-n04 .m{display:grid;align-content:space-between;padding:8px 0 8px 0;}
.sfw-n04 .m div{position:relative;padding-left:34px;}
.sfw-n04 .m div::before{content:"";position:absolute;left:0;top:9px;width:24px;height:1px;background:${C.green};}
.sfw-n04 .m b{display:block;font-family:${F.h};font-weight:600;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:${C.green};margin-bottom:4px;}
.sfw-n04 .m span{font-family:${F.s};font-style:italic;font-size:14px;line-height:1.45;color:${C.head};}
@media(max-width:640px){.sfw-n04{grid-template-columns:1fr;}}
</style>
<figure class="sfw-n04" style="margin:0">
  <img src="${IMG.scopeWork}" alt="${CAP}">
  <div class="m"><div><b>${CAP}</b><span>${CAP}</span></div><div><b>${CAP}</b><span>${CAP}</span></div><div><b>${CAP}</b><span>${CAP}</span></div></div>
</figure>`),
});

B.push({
  id: "n05",
  title: "Depth ruler beside a profile photograph",
  note: "A tall soil-profile image with an unlabelled tick ruler down its left edge — the space for real depths is drawn and left empty.",
  html: tidy(`<style>
.sfw-n05{display:grid;grid-template-columns:56px 1fr;gap:14px;font-family:${F.b};max-width:420px;}
.sfw-n05 .rule{display:grid;grid-template-rows:repeat(8,1fr);border-right:1px solid rgba(21,104,38,.4);}
.sfw-n05 .rule span{position:relative;font-size:10px;color:${C.green};text-align:right;padding-right:8px;}
.sfw-n05 .rule span::after{content:"";position:absolute;right:0;top:0;width:8px;height:1px;background:rgba(21,104,38,.5);}
.sfw-n05 img{width:100%;aspect-ratio:2/3;object-fit:cover;display:block;}
</style>
<figure class="sfw-n05" style="margin:0">
  <div class="rule"><span>${SCALE}</span><span></span><span>${SCALE}</span><span></span><span>${SCALE}</span><span></span><span>${SCALE}</span><span></span></div>
  <img src="${IMG.soilProfile}" alt="${CAP}">
</figure>`),
});

B.push({
  id: "n06",
  title: "Mask edge that walks",
  note: "The image is masked by a rectangle whose right edge moves four pixels over 34 seconds. Nothing else changes. You notice it on the second look.",
  html: tidy(`<style>
.sfw-n06{position:relative;max-width:460px;background:${C.paper};}
.sfw-n06 .w{position:relative;aspect-ratio:3/2;overflow:hidden;}
.sfw-n06 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-n06 .e{position:absolute;top:0;bottom:0;right:0;width:0;background:${C.paper};border-left:1px solid rgba(21,104,38,.35);}
${motion(`
.sfw-n06 .e{animation:sfw-n06-e 34s ease-in-out infinite alternate;}
@keyframes sfw-n06-e{0%{width:0;}100%{width:4px;}}
`)}
</style>
<figure class="sfw-n06" style="margin:0"><div class="w"><img src="${IMG.glassware}" alt="${CAP}"><span class="e"></span></div></figure>`),
});

B.push({
  id: "n07",
  title: "Ledger of six photographs, no gutters",
  note: "Six images butted edge to edge with hairlines instead of gaps, forming a single block of image. Dense, printed, unusually calm.",
  html: tidy(`<style>
.sfw-n07{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(21,104,38,.35);box-shadow:0 0 0 1px rgba(21,104,38,.35);}
.sfw-n07 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
</style>
<div class="sfw-n07">
  <img src="${IMG.hands}" alt="${CAP}"><img src="${IMG.compost}" alt="${CAP}"><img src="${IMG.roots}" alt="${CAP}">
  <img src="${IMG.sampling}" alt="${CAP}"><img src="${IMG.glassware}" alt="${CAP}"><img src="${IMG.scope}" alt="${CAP}">
</div>`),
});

B.push({
  id: "n08",
  title: "Errata slip over a plate",
  note: "A small paper slip laid across the lower corner of a photograph, set in the correction register of a printed journal. Useful for updated research entries.",
  html: tidy(`<style>
.sfw-n08{position:relative;max-width:440px;font-family:${F.b};}
.sfw-n08 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-n08 .slip{position:absolute;left:18px;bottom:-14px;right:64px;background:${C.paper};box-shadow:inset 0 0 0 1px rgba(79,52,51,.4);padding:12px 16px;}
.sfw-n08 b{font-family:${F.h};font-weight:600;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${C.green};display:block;margin-bottom:4px;}
.sfw-n08 span{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};}
</style>
<figure class="sfw-n08" style="margin:0 0 22px"><img src="${IMG.field}" alt="${CAP}"><div class="slip"><b>${CAP}</b><span>${CAP}</span></div></figure>`),
});

B.push({
  id: "n09",
  title: "Registration target row",
  note: "Prepress targets as a divider: four concentric-ring marks in green on a hairline. Circles here are printing marks, not fields of view, and carry no photograph.",
  html: tidy(`<style>
.sfw-n09{display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);padding:14px 30px;}
.sfw-n09 i{width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1px ${C.green},inset 0 0 0 5px transparent,inset 0 0 0 6px ${C.green};position:relative;}
.sfw-n09 i::before,.sfw-n09 i::after{content:"";position:absolute;background:${C.green};}
.sfw-n09 i::before{left:50%;top:-6px;bottom:-6px;width:1px;margin-left:-.5px;}
.sfw-n09 i::after{top:50%;left:-6px;right:-6px;height:1px;margin-top:-.5px;}
</style>
<div class="sfw-n09"><i></i><i></i><i></i><i></i><i></i></div>`),
});

B.push({
  id: "n10",
  title: "Photograph as a column rule",
  note: "A 14px vertical band of image running between two text columns, replacing the rule entirely. The photograph becomes typographic furniture.",
  html: tidy(`<style>
.sfw-n10{display:grid;grid-template-columns:1fr 14px 1fr;gap:26px;font-family:${F.b};}
.sfw-n10 .r{position:relative;overflow:hidden;}
.sfw-n10 .r img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-n10 p{font-size:15.5px;line-height:1.68;color:${C.body};margin:0 0 12px;}
.sfw-n10 h4{font-family:${F.h};font-weight:600;font-size:17px;color:${C.head};margin:0 0 10px;}
</style>
<section class="sfw-n10">
  <div><h4>${CAP}</h4><p>${CAP}</p><p>${CAP}</p></div>
  <div class="r"><img src="${IMG.roots}" alt=""></div>
  <div><h4>${CAP}</h4><p>${CAP}</p><p>${CAP}</p></div>
</section>`),
});

B.push({
  id: "n11",
  title: "Sample-tag row",
  note: "Photographs hung under paper tags with a punched hole and a tie rule, the way field samples are labelled. Fits the Practice project index.",
  html: tidy(`<style>
.sfw-n11{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;font-family:${F.b};}
.sfw-n11 figure{margin:0;}
.sfw-n11 .tag{background:${C.paper};box-shadow:inset 0 0 0 1px rgba(79,52,51,.35);padding:10px 12px 10px 30px;position:relative;}
.sfw-n11 .tag::before{content:"";position:absolute;left:11px;top:50%;width:9px;height:9px;margin-top:-4.5px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(79,52,51,.6);}
.sfw-n11 .tag b{font-family:${F.h};font-weight:600;font-size:11.5px;color:${C.head};display:block;}
.sfw-n11 .tag span{font-size:11px;color:${C.green};}
.sfw-n11 .tie{width:1px;height:16px;background:rgba(79,52,51,.4);margin:0 auto;}
.sfw-n11 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;}
@media(max-width:700px){.sfw-n11{grid-template-columns:1fr;}}
</style>
<div class="sfw-n11">
  <figure><div class="tag"><b>${CAP}</b><span>${CAP}</span></div><div class="tie"></div><img src="${IMG.compostTurn}" alt="${CAP}"></figure>
  <figure><div class="tag"><b>${CAP}</b><span>${CAP}</span></div><div class="tie"></div><img src="${IMG.field}" alt="${CAP}"></figure>
  <figure><div class="tag"><b>${CAP}</b><span>${CAP}</span></div><div class="tie"></div><img src="${IMG.sampling}" alt="${CAP}"></figure>
</div>`),
});

B.push({
  id: "n12",
  title: "Plate that arrives, once",
  note: "On load the photograph rises two pixels and settles over 18 seconds, then never moves again. No loop, no scroll trigger — one breath and stillness.",
  html: tidy(`<style>
.sfw-n12{max-width:440px;font-family:${F.b};}
.sfw-n12 .w{overflow:hidden;}
.sfw-n12 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-n12 hr{height:1px;border:0;background:rgba(21,104,38,.3);margin:12px 0 8px;}
.sfw-n12 p{font-family:${F.s};font-style:italic;font-size:15px;color:${C.head};margin:0;}
${motion(`
.sfw-n12 img{animation:sfw-n12-a 18s cubic-bezier(.16,.7,.2,1) 1 both;}
@keyframes sfw-n12-a{0%{transform:translate3d(0,2px,0);opacity:.86;}100%{transform:none;opacity:1;}}
`)}
</style>
<figure class="sfw-n12" style="margin:0"><div class="w"><img src="${IMG.handsTwo}" alt="${CAP}"></div><hr><p>${CAP}</p></figure>`),
});

B.push({
  id: "n13",
  title: "Field of view keyed into body text",
  note: "A 34px circular thumbnail set inline in a paragraph, on the baseline, keying a sentence to the plate it refers to. Small, strange, very journal.",
  html: tidy(`<style>
.sfw-n13{font-family:${F.b};max-width:60ch;font-size:16.5px;line-height:1.8;color:${C.body};}
.sfw-n13 .k{display:inline-block;width:34px;height:34px;vertical-align:-11px;position:relative;margin:0 3px;}
.sfw-n13 .k .d{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.sfw-n13 .k img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.12);}
.sfw-n13 .k .r{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 3px rgba(89,166,108,.6);}
</style>
<p class="sfw-n13">${CAP} <span class="k"><span class="d"><img src="${MICRO[1]}" alt=""></span><span class="r"></span></span> ${CAP} <span class="k"><span class="d"><img src="${MICRO[3]}" alt=""></span><span class="r"></span></span> ${CAP}</p>`),
});

B.push({
  id: "n14",
  title: "Dark plate with a paper caption card",
  note: "A photograph on a deep green field with the caption on a paper card overlapping the lower edge — an object placed on the page, not a text overlay.",
  dark: true,
  html: tidy(`<style>
.sfw-n14{background:${C.deep};padding:38px 38px 58px;position:relative;max-width:520px;font-family:${F.b};}
.sfw-n14 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
.sfw-n14 .card{position:absolute;left:38px;right:120px;bottom:22px;background:${C.paper};padding:14px 18px;border-top:2px solid ${C.green};}
.sfw-n14 b{font-family:${F.s};font-style:italic;font-weight:400;font-size:16px;color:${C.head};display:block;}
.sfw-n14 span{font-size:12px;color:${C.green};}
</style>
<figure class="sfw-n14" style="margin:0"><img src="${IMG.elaineTeaching}" alt="${CAP}"><div class="card"><b>${CAP}</b><span>${CAP}</span></div></figure>`),
});

B.push({
  id: "n15",
  title: "Long-exposure opacity breathing across three plates",
  note: "Three photographs at slightly different opacities, cycling on 40, 48 and 56 second loops so they never sync. The wall is alive without anything moving.",
  html: tidy(`<style>
.sfw-n15{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.sfw-n15 img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;}
${motion(`
.sfw-n15 img{animation:sfw-n15-b 40s ease-in-out infinite alternate;}
.sfw-n15 img:nth-child(2){animation-duration:48s;animation-direction:alternate-reverse;}
.sfw-n15 img:nth-child(3){animation-duration:56s;}
@keyframes sfw-n15-b{0%{opacity:.82;}100%{opacity:1;}}
`)}
</style>
<div class="sfw-n15"><img src="${IMG.workshop}" alt="${CAP}"><img src="${IMG.hands}" alt="${CAP}"><img src="${IMG.glassware}" alt="${CAP}"></div>`),
});

B.push({
  id: "n16",
  title: "Bound edge",
  note: "A left binding margin of ruled paper stitching against a full-bleed photograph, so a web section reads as a page torn from a bound volume — without a torn edge.",
  html: tidy(`<style>
.sfw-n16{display:grid;grid-template-columns:34px 1fr;background:${C.paper};}
.sfw-n16 .b{background-image:repeating-linear-gradient(180deg,rgba(21,104,38,.45) 0 10px,transparent 10px 22px);background-position:center;background-size:1px 100%;background-repeat:no-repeat;}
.sfw-n16 img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;}
</style>
<div class="sfw-n16"><div class="b"></div><img src="${IMG.workshopField}" alt="${CAP}"></div>`),
});

export const invented: Family = {
  key: "invented",
  title: "Invented families",
  blurb:
    "Crossings that were not on the brief: darkroom furniture, specimen packaging, prepress marks, images used as typographic rules, and motion that happens once.",
  blocks: B,
};
