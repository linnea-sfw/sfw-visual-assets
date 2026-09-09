import { Block, Family, C, F, IMG, MICRO, CAP, motion, tidy } from "./kit";

const B: Block[] = [];

B.push({
  id: "p01",
  title: "Section divider, rule and label",
  note: "Between any two sections. A single hairline with a label sitting on it, paper showing behind the label.",
  html: tidy(`<style>
.sfw-p01{position:relative;text-align:center;padding:34px 0;font-family:${F.b};}
.sfw-p01::before{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(21,104,38,.30);}
.sfw-p01 span{position:relative;background:${C.paper};padding:0 18px;font-family:${F.h};font-weight:600;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${C.green};}
</style>
<div class="sfw-p01"><span>${CAP}</span></div>`),
});

B.push({
  id: "p02",
  title: "Section divider, photographic strip",
  note: "A 90px band of a soil profile between sections. Reads as a core sample laid across the page.",
  html: tidy(`<style>
.sfw-p02{position:relative;height:90px;overflow:hidden;border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);}
.sfw-p02 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
${motion(`
.sfw-p02 img{transform:scale(1.08);animation:sfw-p02-d 48s ease-in-out infinite alternate;}
@keyframes sfw-p02-d{0%{transform:scale(1.08) translate3d(-1.6%,0,0);}100%{transform:scale(1.08) translate3d(1.6%,0,0);}}
`)}
</style>
<div class="sfw-p02"><img src="${IMG.soilProfile}" alt="${CAP}"></div>`),
});

B.push({
  id: "p03",
  title: "Horizontal strata bands",
  note: "Four photographic bands stacked like a soil profile, each a different depth of the work — surface, root zone, compost, lab. Labels in the left margin.",
  html: tidy(`<style>
.sfw-p03{font-family:${F.b};}
.sfw-p03 .l{display:grid;grid-template-columns:130px 1fr;align-items:stretch;border-top:1px solid rgba(21,104,38,.25);}
.sfw-p03 .l:last-child{border-bottom:1px solid rgba(21,104,38,.25);}
.sfw-p03 .k{padding:16px 14px 16px 0;text-align:right;}
.sfw-p03 .k b{display:block;font-family:${F.h};font-weight:600;font-size:12px;color:${C.head};}
.sfw-p03 .k span{font-size:11.5px;color:${C.green};}
.sfw-p03 .i{position:relative;overflow:hidden;}
.sfw-p03 .l:nth-child(1) .i{height:96px;} .sfw-p03 .l:nth-child(2) .i{height:132px;}
.sfw-p03 .l:nth-child(3) .i{height:112px;} .sfw-p03 .l:nth-child(4) .i{height:150px;}
.sfw-p03 .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
</style>
<div class="sfw-p03">
  <div class="l"><div class="k"><b>${CAP}</b><span>${CAP}</span></div><div class="i"><img src="${IMG.hands}" alt="${CAP}"></div></div>
  <div class="l"><div class="k"><b>${CAP}</b><span>${CAP}</span></div><div class="i"><img src="${IMG.roots}" alt="${CAP}"></div></div>
  <div class="l"><div class="k"><b>${CAP}</b><span>${CAP}</span></div><div class="i"><img src="${IMG.compost}" alt="${CAP}"></div></div>
  <div class="l"><div class="k"><b>${CAP}</b><span>${CAP}</span></div><div class="i"><img src="${IMG.glassware}" alt="${CAP}"></div></div>
</div>`),
});

B.push({
  id: "p04",
  title: "Hero band, asymmetric",
  note: "Homepage. Photograph left at two thirds, type right against the margin, one hairline. Not centred, no button pair.",
  html: tidy(`<style>
.sfw-p04{display:grid;grid-template-columns:1.7fr 1fr;gap:40px;align-items:end;background:${C.paper};font-family:${F.b};}
.sfw-p04 .i{position:relative;overflow:hidden;aspect-ratio:16/10;}
.sfw-p04 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-p04 h1{font-family:${F.h};font-weight:600;font-size:clamp(28px,3.4vw,44px);line-height:1.14;color:${C.head};margin:0 0 16px;}
.sfw-p04 p{font-size:17px;line-height:1.6;color:${C.body};margin:0 0 20px;max-width:34ch;}
.sfw-p04 hr{height:1px;border:0;background:rgba(21,104,38,.30);margin:0 0 20px;}
.sfw-p04 a{font-family:${F.h};font-weight:600;font-size:13px;color:${C.green};text-decoration:none;border-bottom:2px solid ${C.leaf};padding-bottom:3px;}
${motion(`
.sfw-p04 img{transform:scale(1.06);animation:sfw-p04-d 52s ease-in-out infinite alternate;}
@keyframes sfw-p04-d{0%{transform:scale(1.06) translate3d(-1%,.6%,0);}100%{transform:scale(1.06) translate3d(1%,-.6%,0);}}
`)}
@media(max-width:800px){.sfw-p04{grid-template-columns:1fr;}}
</style>
<section class="sfw-p04">
  <div class="i"><img src="${IMG.handsTwo}" alt="${CAP}"></div>
  <div><hr><h1>${CAP}</h1><p>${CAP}</p><a href="#">${CAP}</a></div>
</section>`),
});

B.push({
  id: "p05",
  title: "Dark closing band with duotone photograph",
  note: "Foot of a section. Deep green ground, a duotone photograph bled to the right edge, type in paper colour.",
  dark: true,
  html: tidy(`<style>
.sfw-p05{background:${C.deep};display:grid;grid-template-columns:1fr 1fr;align-items:stretch;font-family:${F.b};}
.sfw-p05 .t{padding:48px 40px;}
.sfw-p05 h3{font-family:${F.h};font-weight:600;font-size:28px;line-height:1.2;color:${C.paper};margin:0 0 14px;}
.sfw-p05 p{font-size:16px;line-height:1.6;color:rgba(244,241,234,.74);margin:0 0 20px;max-width:38ch;}
.sfw-p05 a{font-family:${F.h};font-weight:600;font-size:13px;color:${C.paper};text-decoration:none;border-bottom:2px solid ${C.leaf};padding-bottom:3px;}
.sfw-p05 .i{position:relative;overflow:hidden;background:${C.green};min-height:280px;}
.sfw-p05 .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15);mix-blend-mode:multiply;}
@media(max-width:760px){.sfw-p05{grid-template-columns:1fr;}}
</style>
<section class="sfw-p05"><div class="t"><h3>${CAP}</h3><p>${CAP}</p><a href="#">${CAP}</a></div><div class="i"><img src="${IMG.workshopField}" alt="${CAP}"></div></section>`),
});

B.push({
  id: "p06",
  title: "Stat backing, photograph behind a ruled table",
  note: "A halftoned photograph sits behind figures held in a ruled grid, so the number is legible and the image is texture.",
  html: tidy(`<style>
.sfw-p06{position:relative;background:${C.paper};overflow:hidden;font-family:${F.b};}
.sfw-p06 .bg{position:absolute;inset:0;}
.sfw-p06 .bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.3);opacity:.5;
-webkit-mask-image:radial-gradient(circle at center,#000 46%,transparent 47%);mask-image:radial-gradient(circle at center,#000 46%,transparent 47%);
-webkit-mask-size:5px 5px;mask-size:5px 5px;}
.sfw-p06 .g{position:relative;display:grid;grid-template-columns:repeat(3,1fr);}
.sfw-p06 .c{padding:38px 26px;border-left:1px solid rgba(21,104,38,.3);}
.sfw-p06 .c:first-child{border-left:0;}
.sfw-p06 b{display:block;font-family:${F.h};font-weight:600;font-size:40px;line-height:1;color:${C.head};}
.sfw-p06 span{display:block;margin-top:10px;font-size:12.5px;color:${C.green};}
</style>
<section class="sfw-p06"><div class="bg"><img src="${IMG.compostTurn}" alt=""></div>
<div class="g"><div class="c"><b>${CAP}</b><span>${CAP}</span></div><div class="c"><b>${CAP}</b><span>${CAP}</span></div><div class="c"><b>${CAP}</b><span>${CAP}</span></div></div></section>`),
});

B.push({
  id: "p07",
  title: "Video frame, plated",
  note: "Webinar embed. A 16:9 well with a green keyline and a caption block below, so an embedded player sits in the same system as the plates.",
  html: tidy(`<style>
.sfw-p07{max-width:640px;font-family:${F.b};}
.sfw-p07 .w{position:relative;aspect-ratio:16/9;background:${C.deep};box-shadow:inset 0 0 0 1px ${C.green};overflow:hidden;}
.sfw-p07 .w img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.9;}
.sfw-p07 .w i{position:absolute;left:50%;top:50%;width:66px;height:66px;margin:-33px 0 0 -33px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(244,241,234,.9);}
.sfw-p07 hr{height:1px;border:0;background:rgba(21,104,38,.3);margin:14px 0 10px;}
.sfw-p07 p{font-family:${F.s};font-style:italic;font-size:16px;color:${C.head};margin:0;}
.sfw-p07 span{font-size:12.5px;color:${C.green};}
${motion(`
.sfw-p07 .w i{animation:sfw-p07-b 20s ease-in-out infinite alternate;}
@keyframes sfw-p07-b{0%{opacity:.7;}100%{opacity:1;}}
`)}
</style>
<figure class="sfw-p07" style="margin:0"><div class="w"><img src="${IMG.elaineTeaching}" alt="${CAP}"><i></i></div><hr><p>${CAP}</p><span>${CAP}</span></figure>`),
});

B.push({
  id: "p08",
  title: "Two-column opener with a bled plate",
  note: "Section opener for Practice. Text column sets against a photograph that bleeds off the left margin.",
  html: tidy(`<style>
.sfw-p08{display:grid;grid-template-columns:1fr 1.1fr;gap:44px;align-items:center;overflow:hidden;font-family:${F.b};}
.sfw-p08 .i{position:relative;aspect-ratio:4/3;margin-left:-8%;overflow:hidden;}
.sfw-p08 .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-p08 h2{font-family:${F.h};font-weight:600;font-size:30px;line-height:1.2;color:${C.head};margin:0 0 14px;}
.sfw-p08 p{font-size:16px;line-height:1.65;color:${C.body};margin:0;max-width:44ch;}
.sfw-p08 hr{height:1px;border:0;background:${C.green};width:90px;margin:18px 0 0;}
@media(max-width:760px){.sfw-p08{grid-template-columns:1fr;}.sfw-p08 .i{margin-left:0;}}
</style>
<section class="sfw-p08"><div class="i"><img src="${IMG.workshop}" alt="${CAP}"></div><div><h2>${CAP}</h2><p>${CAP}</p><hr></div></section>`),
});

B.push({
  id: "p09",
  title: "Full-width quiet band, single photograph, no type",
  note: "A breath between two dense sections. One wide photograph, hairlines top and bottom, nothing written on it.",
  html: tidy(`<style>
.sfw-p09{border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);}
.sfw-p09 img{width:100%;aspect-ratio:24/7;object-fit:cover;display:block;}
${motion(`
.sfw-p09 img{transform:scale(1.05);animation:sfw-p09-d 56s ease-in-out infinite alternate;}
@keyframes sfw-p09-d{0%{transform:scale(1.05) translate3d(-1%,0,0);}100%{transform:scale(1.05) translate3d(1%,0,0);}}
`)}
</style>
<div class="sfw-p09"><img src="${IMG.field}" alt="${CAP}"></div>`),
});

B.push({
  id: "p10",
  title: "Masthead band for a section front",
  note: "Learn front. Full-bleed photograph with a paper strip laid across the lower third carrying the section name and a rule.",
  html: tidy(`<style>
.sfw-p10{position:relative;overflow:hidden;font-family:${F.b};}
.sfw-p10 img{width:100%;aspect-ratio:16/8;object-fit:cover;display:block;}
.sfw-p10 .s{position:absolute;left:0;right:0;bottom:0;background:${C.paper};padding:20px 32px;display:flex;justify-content:space-between;align-items:baseline;gap:24px;border-top:2px solid ${C.green};}
.sfw-p10 h2{font-family:${F.h};font-weight:600;font-size:26px;color:${C.head};margin:0;}
.sfw-p10 span{font-family:${F.s};font-style:italic;font-size:15px;color:${C.green};}
</style>
<header class="sfw-p10"><img src="${IMG.workshopField}" alt="${CAP}"><div class="s"><h2>${CAP}</h2><span>${CAP}</span></div></header>`),
});

B.push({
  id: "p11",
  title: "Dark band with a row of three circles",
  note: "Closing band for Science. Three fields of view on deep green with paper rings and one hairline above.",
  dark: true,
  html: tidy(`<style>
.sfw-p11{background:${C.deep};padding:44px 36px;font-family:${F.b};}
.sfw-p11 hr{height:1px;border:0;background:rgba(89,166,108,.45);margin:0 0 30px;}
.sfw-p11 .r{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
.sfw-p11 .p{position:relative;aspect-ratio:1/1;}
.sfw-p11 .d{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.sfw-p11 .d img{width:100%;height:100%;object-fit:cover;transform:scale(1.12);display:block;}
.sfw-p11 .k{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 8px rgba(244,241,234,.8);}
.sfw-p11 p{margin:14px 0 0;font-family:${F.s};font-style:italic;font-size:15px;color:${C.paper};}
.sfw-p11 span{font-size:12px;color:rgba(89,166,108,.95);}
${motion(`
.sfw-p11 .d img{animation:sfw-p11-d 34s ease-in-out infinite alternate;}
.sfw-p11 figure:nth-child(2) .d img{animation-duration:44s;animation-direction:alternate-reverse;}
@keyframes sfw-p11-d{0%{transform:scale(1.12) translate3d(-1.3%,1%,0);}100%{transform:scale(1.12) translate3d(1.3%,-1%,0);}}
`)}
</style>
<section class="sfw-p11"><hr><div class="r">
  <figure style="margin:0"><div class="p"><div class="d"><img src="${MICRO[0]}" alt="${CAP}"></div><div class="k"></div></div><p>${CAP}</p><span>${CAP}</span></figure>
  <figure style="margin:0"><div class="p"><div class="d"><img src="${MICRO[1]}" alt="${CAP}"></div><div class="k"></div></div><p>${CAP}</p><span>${CAP}</span></figure>
  <figure style="margin:0"><div class="p"><div class="d"><img src="${MICRO[3]}" alt="${CAP}"></div><div class="k"></div></div><p>${CAP}</p><span>${CAP}</span></figure>
</div></section>`),
});

B.push({
  id: "p12",
  title: "Footer band, photographic sliver over deep green",
  note: "Site foot. A 70px band of a compost photograph in duotone above the deep green footer field.",
  dark: true,
  html: tidy(`<style>
.sfw-p12{font-family:${F.b};}
.sfw-p12 .s{height:70px;overflow:hidden;background:${C.green};}
.sfw-p12 .s img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.2);mix-blend-mode:multiply;}
.sfw-p12 .f{background:${C.deep};padding:34px 32px;display:flex;justify-content:space-between;gap:28px;flex-wrap:wrap;}
.sfw-p12 .f span{font-size:13px;color:rgba(244,241,234,.7);}
.sfw-p12 .f b{font-family:${F.h};font-weight:600;font-size:13px;color:${C.paper};}
</style>
<footer class="sfw-p12"><div class="s"><img src="${IMG.compost}" alt=""></div><div class="f"><b>${CAP}</b><span>${CAP}</span><span>${CAP}</span></div></footer>`),
});

export const pagepieces: Family = {
  key: "pagepieces",
  title: "Page pieces",
  blurb: "Whole bands and dividers: the pieces that structure a page rather than hold a single photograph.",
  blocks: B,
};
