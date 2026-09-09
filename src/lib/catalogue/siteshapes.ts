import { Block, Family, C, F, IMG, MICRO, CAP, motion, tidy } from "./kit";

const B: Block[] = [];

B.push({
  id: "x01",
  title: "Homepage hero — ledger hero",
  note: "Home. The photograph is the page; the type sits in a paper ledger strip at the foot with three ruled cells. No centred stack, no button pair.",
  html: tidy(`<style>
.sfw-x01{position:relative;font-family:${F.b};}
.sfw-x01 .i{position:relative;overflow:hidden;aspect-ratio:16/9;}
.sfw-x01 .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-x01 .l{background:${C.paper};display:grid;grid-template-columns:2fr 1fr 1fr;border-top:3px solid ${C.green};}
.sfw-x01 .c{padding:24px 26px;border-left:1px solid rgba(21,104,38,.25);}
.sfw-x01 .c:first-child{border-left:0;}
.sfw-x01 h1{font-family:${F.h};font-weight:600;font-size:clamp(24px,2.6vw,34px);line-height:1.16;color:${C.head};margin:0;max-width:20ch;}
.sfw-x01 b{font-family:${F.h};font-weight:600;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:${C.green};display:block;margin-bottom:8px;}
.sfw-x01 p{margin:0;font-size:15px;line-height:1.55;color:${C.body};}
${motion(`
.sfw-x01 .i img{transform:scale(1.06);animation:sfw-x01-d 54s ease-in-out infinite alternate;}
@keyframes sfw-x01-d{0%{transform:scale(1.06) translate3d(-1.1%,.5%,0);}100%{transform:scale(1.06) translate3d(1.1%,-.7%,0);}}
`)}
@media(max-width:760px){.sfw-x01 .l{grid-template-columns:1fr;}.sfw-x01 .c{border-left:0;border-top:1px solid rgba(21,104,38,.25);}}
</style>
<header class="sfw-x01">
  <div class="i"><img src="${IMG.hands}" alt="${CAP}"></div>
  <div class="l"><div class="c"><h1>${CAP}</h1></div><div class="c"><b>${CAP}</b><p>${CAP}</p></div><div class="c"><b>${CAP}</b><p>${CAP}</p></div></div>
</header>`),
});

B.push({
  id: "x02",
  title: "Stats band, ruled ledger",
  note: "Home or About. Figures set in a ruled row over paper, with a single duotone sliver at the left edge for weight.",
  html: tidy(`<style>
.sfw-x02{display:grid;grid-template-columns:120px 1fr;background:${C.paper};border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);font-family:${F.b};}
.sfw-x02 .s{background:${C.green};overflow:hidden;}
.sfw-x02 .s img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.2);mix-blend-mode:multiply;}
.sfw-x02 .g{display:grid;grid-template-columns:repeat(4,1fr);}
.sfw-x02 .c{padding:30px 22px;border-left:1px solid rgba(21,104,38,.22);}
.sfw-x02 b{display:block;font-family:${F.h};font-weight:600;font-size:32px;line-height:1;color:${C.head};}
.sfw-x02 span{display:block;margin-top:8px;font-size:12px;color:${C.green};}
@media(max-width:760px){.sfw-x02{grid-template-columns:1fr;}.sfw-x02 .s{height:70px;}.sfw-x02 .g{grid-template-columns:1fr 1fr;}}
</style>
<section class="sfw-x02"><div class="s"><img src="${IMG.roots}" alt=""></div>
<div class="g"><div class="c"><b>${CAP}</b><span>${CAP}</span></div><div class="c"><b>${CAP}</b><span>${CAP}</span></div><div class="c"><b>${CAP}</b><span>${CAP}</span></div><div class="c"><b>${CAP}</b><span>${CAP}</span></div></div></section>`),
});

B.push({
  id: "x03",
  title: "Program cards, deliberately unlike each other",
  note: "Learn: courses. Three cards that share a system but not a shape — different crops, different rule positions, one with the label above the image.",
  html: tidy(`<style>
.sfw-x03{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;font-family:${F.b};align-items:start;}
.sfw-x03 article{margin:0;}
.sfw-x03 img{width:100%;object-fit:cover;display:block;}
.sfw-x03 .a img{aspect-ratio:3/4;}
.sfw-x03 .b img{aspect-ratio:1/1;}
.sfw-x03 .c img{aspect-ratio:4/3;}
.sfw-x03 .e{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:${C.blue};margin:0 0 8px;}
.sfw-x03 h4{font-family:${F.h};font-weight:600;font-size:18px;line-height:1.3;color:${C.head};margin:12px 0 6px;}
.sfw-x03 p{font-size:14.5px;line-height:1.55;color:${C.body};margin:0;}
.sfw-x03 .a{border-top:2px solid ${C.green};padding-top:12px;}
.sfw-x03 .b{box-shadow:inset 0 0 0 1px rgba(21,104,38,.25);padding:12px;}
.sfw-x03 .c{border-bottom:1px solid rgba(21,104,38,.3);padding-bottom:14px;}
@media(max-width:760px){.sfw-x03{grid-template-columns:1fr;}}
</style>
<div class="sfw-x03">
  <article class="a"><p class="e">${CAP}</p><img src="${IMG.scopeWork}" alt="${CAP}"><h4>${CAP}</h4><p>${CAP}</p></article>
  <article class="b"><img src="${IMG.workshop}" alt="${CAP}"><h4>${CAP}</h4><p>${CAP}</p></article>
  <article class="c"><img src="${IMG.compost}" alt="${CAP}"><h4>${CAP}</h4><p>${CAP}</p></article>
</div>`),
});

B.push({
  id: "x04",
  title: "Testimonial, portrait in the margin",
  note: "Community. Serif italic testimony in the measure, a small square portrait hung in the left margin on a rule. No quote marks, no card.",
  html: tidy(`<style>
.sfw-x04{display:grid;grid-template-columns:96px 1fr;gap:22px;font-family:${F.b};align-items:start;border-top:1px solid rgba(21,104,38,.3);padding-top:20px;}
.sfw-x04 img{width:96px;height:96px;object-fit:cover;display:block;}
.sfw-x04 p{font-family:${F.s};font-style:italic;font-size:20px;line-height:1.5;color:${C.head};margin:0 0 14px;max-width:52ch;}
.sfw-x04 .w{font-size:12.5px;color:${C.green};}
</style>
<figure class="sfw-x04" style="margin:0"><img src="${IMG.staffTwo}" alt="${CAP}"><div><p>${CAP}</p><figcaption class="w">${CAP}</figcaption></div></figure>`),
});

B.push({
  id: "x05",
  title: "Partner marquee, slow rule crawl",
  note: "Partners. Names set on a hairline crawling slowly across a 60 second loop, CSS only. Text rather than logo tiles, so nothing looks like a sales page.",
  html: tidy(`<style>
.sfw-x05{overflow:hidden;border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);padding:16px 0;font-family:${F.b};}
.sfw-x05 .t{display:flex;gap:52px;width:max-content;}
.sfw-x05 span{font-family:${F.h};font-weight:600;font-size:13px;letter-spacing:.08em;color:${C.green};white-space:nowrap;}
${motion(`
.sfw-x05 .t{animation:sfw-x05-m 60s linear infinite;}
@keyframes sfw-x05-m{0%{transform:translate3d(0,0,0);}100%{transform:translate3d(-50%,0,0);}}
`)}
</style>
<div class="sfw-x05"><div class="t">
<span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span>
<span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span><span>${CAP}</span>
</div></div>`),
});

B.push({
  id: "x06",
  title: "Editorial article header",
  note: "Science article. Eyebrow, long serif-adjacent headline, byline on a rule, then a wide plate with a margin caption underneath.",
  html: tidy(`<style>
.sfw-x06{font-family:${F.b};max-width:820px;}
.sfw-x06 .e{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${C.blue};margin:0 0 14px;}
.sfw-x06 h1{font-family:${F.h};font-weight:600;font-size:clamp(28px,3.4vw,42px);line-height:1.14;color:${C.head};margin:0 0 18px;max-width:22ch;}
.sfw-x06 .by{display:flex;justify-content:space-between;border-top:1px solid rgba(21,104,38,.3);border-bottom:1px solid rgba(21,104,38,.3);padding:10px 0;font-size:12.5px;color:${C.green};margin-bottom:24px;}
.sfw-x06 img{width:100%;aspect-ratio:2/1;object-fit:cover;display:block;}
.sfw-x06 figcaption{display:grid;grid-template-columns:1fr 200px;gap:20px;margin-top:12px;font-size:13px;color:${C.body};}
.sfw-x06 figcaption em{font-family:${F.s};color:${C.head};}
</style>
<header class="sfw-x06">
  <p class="e">${CAP}</p><h1>${CAP}</h1>
  <div class="by"><span>${CAP}</span><span>${CAP}</span></div>
  <figure style="margin:0"><img src="${IMG.field}" alt="${CAP}"><figcaption><em>${CAP}</em><span>${CAP}</span></figcaption></figure>
</header>`),
});

B.push({
  id: "x07",
  title: "Research listing row",
  note: "Science: research database. A ruled row with a small circular field of view, title, and metadata columns. Scans like a bibliography.",
  html: tidy(`<style>
.sfw-x07{font-family:${F.b};border-top:1px solid rgba(21,104,38,.25);}
.sfw-x07 .r{display:grid;grid-template-columns:64px 1fr 140px 120px;gap:20px;align-items:center;padding:16px 0;border-bottom:1px solid rgba(21,104,38,.25);}
.sfw-x07 .p{position:relative;width:64px;height:64px;}
.sfw-x07 .d{position:absolute;inset:0;-webkit-clip-path:circle(50%);clip-path:circle(50%);overflow:hidden;}
.sfw-x07 .d img{width:100%;height:100%;object-fit:cover;transform:scale(1.12);display:block;}
.sfw-x07 .k{position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 4px rgba(89,166,108,.55);}
.sfw-x07 h5{font-family:${F.h};font-weight:600;font-size:15.5px;color:${C.head};margin:0 0 4px;}
.sfw-x07 .s{font-size:13px;color:${C.body};margin:0;}
.sfw-x07 .m{font-size:12px;color:${C.green};}
@media(max-width:720px){.sfw-x07 .r{grid-template-columns:64px 1fr;}.sfw-x07 .m{display:none;}}
</style>
<div class="sfw-x07">
  <div class="r"><div class="p"><div class="d"><img src="${MICRO[0]}" alt=""></div><div class="k"></div></div><div><h5>${CAP}</h5><p class="s">${CAP}</p></div><span class="m">${CAP}</span><span class="m">${CAP}</span></div>
  <div class="r"><div class="p"><div class="d"><img src="${MICRO[1]}" alt=""></div><div class="k"></div></div><div><h5>${CAP}</h5><p class="s">${CAP}</p></div><span class="m">${CAP}</span><span class="m">${CAP}</span></div>
  <div class="r"><div class="p"><div class="d"><img src="${MICRO[2]}" alt=""></div><div class="k"></div></div><div><h5>${CAP}</h5><p class="s">${CAP}</p></div><span class="m">${CAP}</span><span class="m">${CAP}</span></div>
</div>`),
});

B.push({
  id: "x08",
  title: "Team portrait grid, plated",
  note: "About: team. Tall portraits on a shared baseline grid, each with a hairline and a green role line. Rectangles only — never a circle on a face.",
  html: tidy(`<style>
.sfw-x08{display:grid;grid-template-columns:repeat(4,1fr);gap:22px 20px;font-family:${F.b};}
.sfw-x08 figure{margin:0;}
.sfw-x08 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;filter:grayscale(1) contrast(1.06);}
.sfw-x08 figure:hover img{filter:none;}
.sfw-x08 hr{height:1px;border:0;background:rgba(21,104,38,.3);margin:10px 0 7px;}
.sfw-x08 b{font-family:${F.h};font-weight:600;font-size:14px;color:${C.head};display:block;}
.sfw-x08 span{font-size:12px;color:${C.green};}
@media(max-width:760px){.sfw-x08{grid-template-columns:1fr 1fr;}}
</style>
<div class="sfw-x08">
  <figure><img src="${IMG.staff}" alt="${CAP}"><hr><b>${CAP}</b><span>${CAP}</span></figure>
  <figure><img src="${IMG.staffTwo}" alt="${CAP}"><hr><b>${CAP}</b><span>${CAP}</span></figure>
  <figure><img src="${IMG.elaine}" alt="${CAP}"><hr><b>${CAP}</b><span>${CAP}</span></figure>
  <figure><img src="${IMG.staff}" alt="${CAP}"><hr><b>${CAP}</b><span>${CAP}</span></figure>
</div>`),
});

B.push({
  id: "x09",
  title: "Event card, date in the margin",
  note: "Learn: calendar. The date block sits outside the photograph in a ruled margin column, so the card needs no rounded chrome.",
  html: tidy(`<style>
.sfw-x09{display:grid;grid-template-columns:88px 200px 1fr;gap:22px;align-items:start;font-family:${F.b};border-top:2px solid ${C.green};padding-top:16px;max-width:660px;}
.sfw-x09 .dt{font-family:${F.h};font-weight:600;color:${C.head};}
.sfw-x09 .dt em{display:block;font-style:normal;font-size:34px;line-height:1;}
.sfw-x09 .dt span{display:block;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${C.green};margin-top:6px;}
.sfw-x09 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.sfw-x09 h4{font-family:${F.h};font-weight:600;font-size:18px;color:${C.head};margin:0 0 6px;}
.sfw-x09 p{font-size:14.5px;line-height:1.55;color:${C.body};margin:0 0 10px;}
.sfw-x09 .l{font-size:12.5px;color:${C.blue};}
@media(max-width:680px){.sfw-x09{grid-template-columns:1fr;}}
</style>
<article class="sfw-x09">
  <div class="dt"><em>${CAP}</em><span>${CAP}</span></div>
  <img src="${IMG.workshopField}" alt="${CAP}">
  <div><h4>${CAP}</h4><p>${CAP}</p><span class="l">${CAP}</span></div>
</article>`),
});

B.push({
  id: "x10",
  title: "Legacy section for Dr. Elaine",
  note: "About: research. A tall portrait held against a wide paper margin, with a serif standfirst and a ruled note column — a frontispiece, not a bio card.",
  html: tidy(`<style>
.sfw-x10{display:grid;grid-template-columns:320px 1fr;gap:48px;background:${C.paper};padding:44px 40px;font-family:${F.b};align-items:start;}
.sfw-x10 .f img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;}
.sfw-x10 .f figcaption{font-family:${F.s};font-style:italic;font-size:14px;color:${C.head};border-top:1px solid rgba(21,104,38,.3);margin-top:12px;padding-top:8px;}
.sfw-x10 .e{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${C.green};margin:0 0 12px;}
.sfw-x10 h2{font-family:${F.s};font-style:italic;font-weight:400;font-size:30px;line-height:1.34;color:${C.head};margin:0 0 20px;max-width:26ch;}
.sfw-x10 p{font-size:16px;line-height:1.68;color:${C.body};margin:0 0 14px;max-width:52ch;}
.sfw-x10 .n{margin-top:24px;border-top:1px solid rgba(21,104,38,.3);padding-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.sfw-x10 .n span{font-size:12.5px;color:${C.green};}
@media(max-width:780px){.sfw-x10{grid-template-columns:1fr;padding:28px 20px;}}
</style>
<section class="sfw-x10">
  <figure class="f" style="margin:0"><img src="${IMG.elaine}" alt="${CAP}"><figcaption>${CAP}</figcaption></figure>
  <div><p class="e">${CAP}</p><h2>${CAP}</h2><p>${CAP}</p><p>${CAP}</p><div class="n"><span>${CAP}</span><span>${CAP}</span></div></div>
</section>`),
});

B.push({
  id: "x11",
  title: "Donation band — the single gold moment",
  note: "The one place #C9A227 appears, and only on the button. Deep green ground, duotone photograph left, one action. Nowhere else in the catalogue uses gold.",
  dark: true,
  html: tidy(`<style>
.sfw-x11{background:${C.deep};display:grid;grid-template-columns:280px 1fr;align-items:center;gap:36px;padding:0;font-family:${F.b};}
.sfw-x11 .i{background:${C.green};overflow:hidden;align-self:stretch;min-height:220px;position:relative;}
.sfw-x11 .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.18);mix-blend-mode:multiply;}
.sfw-x11 .t{padding:36px 40px 36px 0;}
.sfw-x11 h3{font-family:${F.h};font-weight:600;font-size:26px;line-height:1.22;color:${C.paper};margin:0 0 12px;max-width:24ch;}
.sfw-x11 p{font-size:15.5px;line-height:1.6;color:rgba(244,241,234,.74);margin:0 0 22px;max-width:46ch;}
.sfw-x11 a{display:inline-block;background:${C.gold};color:#22371F;font-family:${F.h};font-weight:600;font-size:13.5px;letter-spacing:.03em;padding:13px 26px;text-decoration:none;}
@media(max-width:760px){.sfw-x11{grid-template-columns:1fr;}.sfw-x11 .t{padding:28px 24px;}}
</style>
<section class="sfw-x11"><div class="i"><img src="${IMG.handsTwo}" alt="${CAP}"></div><div class="t"><h3>${CAP}</h3><p>${CAP}</p><a href="#">${CAP}</a></div></section>`),
});

B.push({
  id: "x12",
  title: "Professional directory entry",
  note: "Practice: directory. A ruled entry with a small square portrait, region column and a hairline separating each record.",
  html: tidy(`<style>
.sfw-x12{font-family:${F.b};border-top:1px solid rgba(21,104,38,.25);}
.sfw-x12 .r{display:grid;grid-template-columns:72px 1fr 160px;gap:20px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(21,104,38,.25);}
.sfw-x12 img{width:72px;height:72px;object-fit:cover;display:block;}
.sfw-x12 b{font-family:${F.h};font-weight:600;font-size:15px;color:${C.head};display:block;}
.sfw-x12 span{font-size:13px;color:${C.body};}
.sfw-x12 .g{font-size:12.5px;color:${C.green};text-align:right;}
</style>
<div class="sfw-x12">
  <div class="r"><img src="${IMG.staff}" alt="${CAP}"><div><b>${CAP}</b><span>${CAP}</span></div><span class="g">${CAP}</span></div>
  <div class="r"><img src="${IMG.staffTwo}" alt="${CAP}"><div><b>${CAP}</b><span>${CAP}</span></div><span class="g">${CAP}</span></div>
</div>`),
});

B.push({
  id: "x13",
  title: "Community join band, photographic left rail",
  note: "Community. A tall sliver of a workshop photograph runs the full height of the band beside a short join form layout.",
  html: tidy(`<style>
.sfw-x13{display:grid;grid-template-columns:150px 1fr;background:${C.paper};box-shadow:inset 0 0 0 1px rgba(21,104,38,.25);font-family:${F.b};}
.sfw-x13 .rail{position:relative;overflow:hidden;min-height:200px;}
.sfw-x13 .rail img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-x13 .t{padding:30px 32px;}
.sfw-x13 h3{font-family:${F.h};font-weight:600;font-size:22px;color:${C.head};margin:0 0 10px;}
.sfw-x13 p{font-size:15px;line-height:1.6;color:${C.body};margin:0 0 18px;max-width:48ch;}
.sfw-x13 .f{display:flex;gap:0;max-width:420px;}
.sfw-x13 .f i{flex:1;height:44px;box-shadow:inset 0 0 0 1px rgba(21,104,38,.4);}
.sfw-x13 .f a{background:${C.green};color:${C.paper};font-family:${F.h};font-weight:600;font-size:13px;padding:13px 22px;text-decoration:none;}
${motion(`
.sfw-x13 .rail img{transform:scale(1.1);animation:sfw-x13-d 46s ease-in-out infinite alternate;}
@keyframes sfw-x13-d{0%{transform:scale(1.1) translate3d(0,-2%,0);}100%{transform:scale(1.1) translate3d(0,2%,0);}}
`)}
@media(max-width:700px){.sfw-x13{grid-template-columns:1fr;}.sfw-x13 .rail{min-height:110px;}}
</style>
<section class="sfw-x13"><div class="rail"><img src="${IMG.workshop}" alt="${CAP}"></div><div class="t"><h3>${CAP}</h3><p>${CAP}</p><div class="f"><i></i><a href="#">${CAP}</a></div></div></section>`),
});

B.push({
  id: "x14",
  title: "Scholarship notice, blue accent",
  note: "Learn: scholarships. The only family that uses #3780B8, kept to a rule and a label so education accents stay distinct from the green system.",
  html: tidy(`<style>
.sfw-x14{display:grid;grid-template-columns:1fr 220px;gap:26px;border-left:3px solid ${C.blue};padding:18px 0 18px 22px;font-family:${F.b};align-items:center;}
.sfw-x14 b{font-family:${F.h};font-weight:600;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:${C.blue};display:block;margin-bottom:8px;}
.sfw-x14 h4{font-family:${F.h};font-weight:600;font-size:19px;color:${C.head};margin:0 0 8px;}
.sfw-x14 p{font-size:15px;line-height:1.6;color:${C.body};margin:0;max-width:48ch;}
.sfw-x14 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;}
@media(max-width:680px){.sfw-x14{grid-template-columns:1fr;}}
</style>
<section class="sfw-x14"><div><b>${CAP}</b><h4>${CAP}</h4><p>${CAP}</p></div><img src="${IMG.scope}" alt="${CAP}"></section>`),
});

export const siteshapes: Family = {
  key: "siteshapes",
  title: "Site shapes",
  blurb:
    "The eleven page shapes the rebuild needs, built as treatments rather than as copy: hero, stats, programs, testimonial, marquee, article header, research row, team grid, event, legacy, donation.",
  blocks: B,
};
