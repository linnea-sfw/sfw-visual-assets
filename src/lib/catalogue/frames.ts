import { Block, Family, C, F, IMG, CAP, motion, tidy } from "./kit";

const B: Block[] = [];

B.push({
  id: "f01",
  title: "Full-bleed rectangle",
  note: "Homepage or section opener. Hands in soil earn the full width — the subject is close enough that no frame is needed to hold it.",
  html: tidy(`<style>
.sfw-f01{position:relative;overflow:hidden;background:${C.paper};}
.sfw-f01 img{width:100%;height:clamp(280px,46vw,520px);object-fit:cover;display:block;}
${motion(`
.sfw-f01 img{transform:scale(1.06);animation:sfw-f01-d 44s ease-in-out infinite alternate;}
@keyframes sfw-f01-d{0%{transform:scale(1.06) translate3d(-1%,.6%,0);}100%{transform:scale(1.06) translate3d(1%,-.8%,0);}}
`)}
</style>
<figure class="sfw-f01" style="margin:0"><img src="${IMG.hands}" alt="${CAP}"></figure>`),
});

B.push({
  id: "f02",
  title: "Tall portrait plate",
  note: "Team member or Dr. Elaine. A 4:5 plate with a green keyline and a caption pinned under a hairline — a plated portrait, not a headshot tile.",
  html: tidy(`<style>
.sfw-f02{font-family:${F.b};max-width:340px;}
.sfw-f02 .p{position:relative;aspect-ratio:4/5;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(21,104,38,.28);}
.sfw-f02 img{width:100%;height:100%;object-fit:cover;display:block;}
.sfw-f02 hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:14px 0 10px;}
.sfw-f02 .n{font-family:${F.h};font-weight:600;font-size:17px;color:${C.head};margin:0;}
.sfw-f02 .r{font-size:13px;color:${C.green};margin:4px 0 0;}
${motion(`
.sfw-f02 img{transform:scale(1.05);animation:sfw-f02-d 38s ease-in-out infinite alternate;}
@keyframes sfw-f02-d{0%{transform:scale(1.05) translate3d(0,-.8%,0);}100%{transform:scale(1.05) translate3d(0,.8%,0);}}
`)}
</style>
<figure class="sfw-f02" style="margin:0">
  <div class="p"><img src="${IMG.elaine}" alt="${CAP}"></div>
  <hr><p class="n">${CAP}</p><p class="r">${CAP}</p>
</figure>`),
});

B.push({
  id: "f03",
  title: "Wide horizontal band",
  note: "A 21:9 slice of a workshop, used between sections. The extreme crop keeps a crowd photo from turning into stock.",
  html: tidy(`<style>
.sfw-f03{position:relative;overflow:hidden;}
.sfw-f03 img{width:100%;aspect-ratio:21/9;object-fit:cover;display:block;}
${motion(`
.sfw-f03 img{transform:scale(1.07);animation:sfw-f03-d 50s ease-in-out infinite alternate;}
@keyframes sfw-f03-d{0%{transform:scale(1.07) translate3d(-1.4%,0,0);}100%{transform:scale(1.07) translate3d(1.4%,0,0);}}
`)}
</style>
<figure class="sfw-f03" style="margin:0"><img src="${IMG.workshopField}" alt="${CAP}"></figure>`),
});

B.push({
  id: "f04",
  title: "Square with keyline and inner margin",
  note: "Program card topper. The photograph sits inside a paper margin so the keyline reads as the edge of a printed plate.",
  html: tidy(`<style>
.sfw-f04{background:${C.paper};padding:14px;box-shadow:inset 0 0 0 1px rgba(21,104,38,.28);max-width:380px;font-family:${F.b};}
.sfw-f04 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;}
.sfw-f04 p{font-family:${F.s};font-style:italic;font-size:15px;color:${C.head};margin:12px 2px 2px;}
</style>
<figure class="sfw-f04" style="margin:0"><img src="${IMG.compost}" alt="${CAP}"><p>${CAP}</p></figure>`),
});

B.push({
  id: "f05",
  title: "Caption set in the margin",
  note: "Long-form article figure. Sampling equipment with the caption in a narrow left column, hairline between.",
  html: tidy(`<style>
.sfw-f05{display:grid;grid-template-columns:140px 1fr;gap:20px;font-family:${F.b};align-items:start;}
.sfw-f05 .m{border-right:1px solid rgba(21,104,38,.30);padding-right:14px;text-align:right;}
.sfw-f05 .m b{display:block;font-family:${F.h};font-weight:600;font-size:12px;letter-spacing:.04em;color:${C.green};margin-bottom:6px;}
.sfw-f05 .m span{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};}
.sfw-f05 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
@media(max-width:640px){.sfw-f05{grid-template-columns:1fr;}.sfw-f05 .m{border:0;text-align:left;padding:0;}}
</style>
<figure class="sfw-f05" style="margin:0">
  <div class="m"><b>${CAP}</b><span>${CAP}</span></div>
  <img src="${IMG.sampling}" alt="${CAP}">
</figure>`),
});

B.push({
  id: "f06",
  title: "Photograph broken across a visible grid",
  note: "Magazine-spread treatment. One image split into six cells with paper gutters showing through — good for a wide compost-turning shot.",
  html: tidy(`<style>
.sfw-f06{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:6px;background:${C.paper};aspect-ratio:3/2;}
.sfw-f06 span{position:relative;overflow:hidden;display:block;}
.sfw-f06 span::before{content:"";position:absolute;inset:0;background-image:url(${IMG.compostTurn});background-size:calc(300% + 12px) calc(200% + 6px);}
.sfw-f06 span:nth-child(1)::before{background-position:0 0;}
.sfw-f06 span:nth-child(2)::before{background-position:50% 0;}
.sfw-f06 span:nth-child(3)::before{background-position:100% 0;}
.sfw-f06 span:nth-child(4)::before{background-position:0 100%;}
.sfw-f06 span:nth-child(5)::before{background-position:50% 100%;}
.sfw-f06 span:nth-child(6)::before{background-position:100% 100%;}
${motion(`
.sfw-f06 span::before{animation:sfw-f06-b 30s ease-in-out infinite alternate;}
.sfw-f06 span:nth-child(2n)::before{animation-duration:42s;animation-direction:alternate-reverse;}
@keyframes sfw-f06-b{0%{opacity:.9;}100%{opacity:1;}}
`)}
</style>
<figure class="sfw-f06" style="margin:0"><span></span><span></span><span></span><span></span><span></span><span></span></figure>`),
});

B.push({
  id: "f07",
  title: "Two-up comparison, shared baseline",
  note: "Practice case studies. Two field photographs on one hairline with margin labels — comparison implied by structure, not by a claim.",
  html: tidy(`<style>
.sfw-f07{display:grid;grid-template-columns:1fr 1fr;gap:2px;font-family:${F.b};border-top:1px solid rgba(21,104,38,.30);}
.sfw-f07 figure{margin:0;padding-top:14px;}
.sfw-f07 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.sfw-f07 figcaption{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};margin-top:10px;}
.sfw-f07 figcaption em{display:block;font-family:${F.b};font-style:normal;font-size:12px;color:${C.green};margin-top:3px;}
</style>
<div class="sfw-f07">
  <figure><img src="${IMG.soilProfile}" alt="${CAP}"><figcaption>${CAP}<em>${CAP}</em></figcaption></figure>
  <figure><img src="${IMG.roots}" alt="${CAP}"><figcaption>${CAP}<em>${CAP}</em></figcaption></figure>
</div>`),
});

B.push({
  id: "f08",
  title: "Three-up row, staggered heights",
  note: "Community news. Staggering the plates by a few dozen pixels keeps three photographs from reading as identical cards.",
  html: tidy(`<style>
.sfw-f08{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;align-items:start;font-family:${F.b};}
.sfw-f08 figure{margin:0;}
.sfw-f08 figure:nth-child(2){margin-top:34px;}
.sfw-f08 figure:nth-child(3){margin-top:14px;}
.sfw-f08 img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;}
.sfw-f08 hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:12px 0 8px;}
.sfw-f08 p{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};margin:0;}
@media(max-width:700px){.sfw-f08{grid-template-columns:1fr;}.sfw-f08 figure{margin-top:0!important;}}
</style>
<div class="sfw-f08">
  <figure><img src="${IMG.workshop}" alt="${CAP}"><hr><p>${CAP}</p></figure>
  <figure><img src="${IMG.glassware}" alt="${CAP}"><hr><p>${CAP}</p></figure>
  <figure><img src="${IMG.field}" alt="${CAP}"><hr><p>${CAP}</p></figure>
</div>`),
});

B.push({
  id: "f09",
  title: "Six-cell grid, mixed crops",
  note: "Community map page or a gallery band. Six different photographs, one grid, alternating aspect ratios so it breathes.",
  html: tidy(`<style>
.sfw-f09{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.sfw-f09 img{width:100%;height:100%;object-fit:cover;display:block;}
.sfw-f09 span{display:block;overflow:hidden;}
.sfw-f09 span:nth-child(1){grid-row:span 2;}
.sfw-f09 span:nth-child(6){grid-column:span 2;}
.sfw-f09 span:nth-child(n+2){aspect-ratio:4/3;}
</style>
<div class="sfw-f09">
  <span><img src="${IMG.handsTwo}" alt="${CAP}"></span>
  <span><img src="${IMG.scope}" alt="${CAP}"></span>
  <span><img src="${IMG.compost}" alt="${CAP}"></span>
  <span><img src="${IMG.glassware}" alt="${CAP}"></span>
  <span><img src="${IMG.sampling}" alt="${CAP}"></span>
  <span><img src="${IMG.workshopField}" alt="${CAP}"></span>
</div>`),
});

B.push({
  id: "f10",
  title: "Herbarium sheet with data card",
  note: "Research database entry. The photograph is mounted with generous paper margins and a typed data card bottom-right, the way a pressed specimen sheet is annotated.",
  html: tidy(`<style>
.sfw-f10{background:${C.paper};box-shadow:inset 0 0 0 1px rgba(79,52,51,.22);padding:34px;font-family:${F.b};position:relative;}
.sfw-f10 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.sfw-f10 .card{margin-top:26px;margin-left:auto;width:min(320px,100%);box-shadow:inset 0 0 0 1px rgba(79,52,51,.35);padding:14px 16px;}
.sfw-f10 .card dl{margin:0;display:grid;grid-template-columns:88px 1fr;gap:6px 12px;}
.sfw-f10 dt{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.05em;color:${C.green};padding-top:2px;}
.sfw-f10 dd{margin:0;font-family:${F.s};font-size:14px;color:${C.head};}
</style>
<figure class="sfw-f10" style="margin:0">
  <img src="${IMG.roots}" alt="${CAP}">
  <div class="card"><dl>
    <dt>${CAP}</dt><dd>${CAP}</dd>
    <dt>${CAP}</dt><dd>${CAP}</dd>
    <dt>${CAP}</dt><dd>${CAP}</dd>
  </dl></div>
</figure>`),
});

B.push({
  id: "f11",
  title: "Edge sliver",
  note: "A 120px vertical strip of a photograph running down the side of a text column. Presence without occupying the page.",
  html: tidy(`<style>
.sfw-f11{display:grid;grid-template-columns:120px 1fr;gap:28px;font-family:${F.b};align-items:stretch;}
.sfw-f11 .s{position:relative;overflow:hidden;min-height:280px;}
.sfw-f11 .s img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-f11 h3{font-family:${F.h};font-weight:600;font-size:22px;color:${C.head};margin:0 0 10px;}
.sfw-f11 p{font-size:16px;line-height:1.65;color:${C.body};margin:0 0 12px;max-width:56ch;}
${motion(`
.sfw-f11 .s img{transform:scale(1.1);animation:sfw-f11-d 46s ease-in-out infinite alternate;}
@keyframes sfw-f11-d{0%{transform:scale(1.1) translate3d(0,-2%,0);}100%{transform:scale(1.1) translate3d(0,2%,0);}}
`)}
</style>
<section class="sfw-f11">
  <div class="s"><img src="${IMG.soilProfile}" alt="${CAP}"></div>
  <div><h3>${CAP}</h3><p>${CAP}</p><p>${CAP}</p></div>
</section>`),
});


B.push({
  id: "f12",
  title: "Card topper with hairline shoulder",
  note: "Learn: course card. A 16:9 topper, a green hairline directly beneath, then the card body — no rounded corner, no shadow.",
  html: tidy(`<style>
.sfw-f12{max-width:380px;font-family:${F.b};background:${C.paper};}
.sfw-f12 img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;}
.sfw-f12 .bar{height:2px;background:${C.green};}
.sfw-f12 .body{padding:18px 20px 22px;box-shadow:inset 0 -1px 0 rgba(79,52,51,.18),inset -1px 0 0 rgba(79,52,51,.18),inset 1px 0 0 rgba(79,52,51,.18);}
.sfw-f12 h4{font-family:${F.h};font-weight:600;font-size:18px;color:${C.head};margin:0 0 8px;}
.sfw-f12 p{font-size:15px;line-height:1.6;color:${C.body};margin:0;}
</style>
<article class="sfw-f12">
  <img src="${IMG.scopeWork}" alt="${CAP}"><div class="bar"></div>
  <div class="body"><h4>${CAP}</h4><p>${CAP}</p></div>
</article>`),
});

B.push({
  id: "f13",
  title: "Silhouette cutout on paper",
  note: "Where an image needs a non-rectangular edge, the edge follows the subject. Requires a real cutout PNG of the subject — no decorative mask is applied.",
  html: tidy(`<style>
.sfw-f13{background:${C.paper};display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:end;padding:30px 0;font-family:${F.b};}
.sfw-f13 .cut{position:relative;}
.sfw-f13 .cut img{width:100%;display:block;}
.sfw-f13 .note{font-size:12px;color:${C.green};margin-top:10px;padding-top:8px;border-top:1px solid rgba(21,104,38,.30);}
.sfw-f13 h3{font-family:${F.s};font-style:italic;font-size:26px;line-height:1.35;color:${C.head};margin:0 0 12px;}
.sfw-f13 p{font-size:16px;line-height:1.6;margin:0;color:${C.body};}
</style>
<section class="sfw-f13">
  <div class="cut"><img src="/img/cutout-subject.png" alt="${CAP}"><p class="note">${CAP}</p></div>
  <div><h3>${CAP}</h3><p>${CAP}</p></div>
</section>`),
});

B.push({
  id: "f14",
  title: "Plate within a plate",
  note: "About: mission. A small square photograph inset on a larger paper field with a wide, uneven margin — bottom-heavy, like a mounted print.",
  html: tidy(`<style>
.sfw-f14{background:${C.paper};box-shadow:inset 0 0 0 1px rgba(21,104,38,.25);padding:26px 26px 64px;max-width:420px;font-family:${F.b};}
.sfw-f14 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;}
.sfw-f14 .c{margin-top:20px;padding-top:12px;border-top:1px solid rgba(21,104,38,.30);}
.sfw-f14 .c b{font-family:${F.s};font-style:italic;font-weight:400;font-size:16px;color:${C.head};display:block;}
.sfw-f14 .c span{font-size:12.5px;color:${C.green};}
</style>
<figure class="sfw-f14" style="margin:0"><img src="${IMG.handsTwo}" alt="${CAP}"><div class="c"><b>${CAP}</b><span>${CAP}</span></div></figure>`),
});

export const frames: Family = {
  key: "frames",
  title: "Frames",
  blurb: "How a photograph is held: bleed, plate, band, grid, sheet, sliver, cutout.",
  blocks: B,
};
