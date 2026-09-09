import { Block, Family, C, F, IMG, CAP, motion, tidy } from "./kit";

/* Duotone here is a real two-ink build: the photograph is desaturated and
 * multiplied over an ink ground, so black stays black. No tint is washed
 * over a colour photograph anywhere in this family. */

const B: Block[] = [];

B.push({
  id: "s01",
  title: "Untouched",
  note: "The default and the honest one. A Foundation photograph printed as it was taken, with nothing over it.",
  html: tidy(`<style>
.sfw-s01 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;}
</style>
<figure class="sfw-s01" style="margin:0"><img src="${IMG.field}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s02",
  title: "Duotone, deep green — black retained",
  note: "Greyscale multiplied over #156826. Whites take the ink, blacks stay black. For dark bands where a full-colour photograph would shout.",
  html: tidy(`<style>
.sfw-s02{position:relative;background:${C.green};overflow:hidden;}
.sfw-s02 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;filter:grayscale(1) contrast(1.12);mix-blend-mode:multiply;}
</style>
<figure class="sfw-s02" style="margin:0"><img src="${IMG.compostTurn}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s03",
  title: "Duotone, warm brown",
  note: "Same build over a soil brown. Suits compost and profile photographs, which already live in that range.",
  html: tidy(`<style>
.sfw-s03{position:relative;background:#6B4A2F;overflow:hidden;}
.sfw-s03 img{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;filter:grayscale(1) contrast(1.15);mix-blend-mode:multiply;}
</style>
<figure class="sfw-s03" style="margin:0"><img src="${IMG.soilProfile}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s04",
  title: "Duotone pair, two inks side by side",
  note: "One photograph in green, its neighbour in brown, on a shared hairline. Shows the two-ink system as a system.",
  html: tidy(`<style>
.sfw-s04{display:grid;grid-template-columns:1fr 1fr;gap:2px;border-top:1px solid rgba(21,104,38,.3);padding-top:14px;}
.sfw-s04 span{display:block;overflow:hidden;}
.sfw-s04 .g{background:${C.green};} .sfw-s04 .b{background:#6B4A2F;}
.sfw-s04 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;filter:grayscale(1) contrast(1.14);mix-blend-mode:multiply;}
</style>
<div class="sfw-s04"><span class="g"><img src="${IMG.glassware}" alt="${CAP}"></span><span class="b"><img src="${IMG.compost}" alt="${CAP}"></span></div>`),
});

B.push({
  id: "s05",
  title: "Halftone, coarse dot",
  note: "A screened plate. The photograph is masked by a coarse dot grid over paper, so it reads as newsprint rather than a filter.",
  html: tidy(`<style>
.sfw-s05{position:relative;background:${C.paper};overflow:hidden;aspect-ratio:3/2;}
.sfw-s05 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.35);
-webkit-mask-image:radial-gradient(circle at center, #000 46%, transparent 47%);mask-image:radial-gradient(circle at center, #000 46%, transparent 47%);
-webkit-mask-size:7px 7px;mask-size:7px 7px;}
</style>
<figure class="sfw-s05" style="margin:0"><img src="${IMG.handsTwo}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s06",
  title: "Halftone, fine dot",
  note: "The same screen at 3px. Holds detail on a microscope-at-work photograph where the coarse screen would destroy it.",
  html: tidy(`<style>
.sfw-s06{position:relative;background:${C.paper};overflow:hidden;aspect-ratio:3/2;}
.sfw-s06 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.25);
-webkit-mask-image:radial-gradient(circle at center, #000 48%, transparent 49%);mask-image:radial-gradient(circle at center, #000 48%, transparent 49%);
-webkit-mask-size:3px 3px;mask-size:3px 3px;}
</style>
<figure class="sfw-s06" style="margin:0"><img src="${IMG.scopeWork}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s07",
  title: "Halftone in green ink",
  note: "Screened, then multiplied over green. A two-step print: screen first, ink second. Good behind a stat band.",
  html: tidy(`<style>
.sfw-s07{position:relative;background:${C.green};overflow:hidden;aspect-ratio:16/6;}
.sfw-s07 .p{position:absolute;inset:0;background:${C.paper};}
.sfw-s07 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.3);mix-blend-mode:multiply;
-webkit-mask-image:radial-gradient(circle at center, #000 47%, transparent 48%);mask-image:radial-gradient(circle at center, #000 47%, transparent 48%);
-webkit-mask-size:5px 5px;mask-size:5px 5px;}
</style>
<figure class="sfw-s07" style="margin:0"><span class="p"></span><img src="${IMG.workshopField}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s08",
  title: "High-contrast plate tone",
  note: "Pushed to near-lithograph. For a hands-in-soil image used small, where midtones would turn to mud at thumbnail size.",
  html: tidy(`<style>
.sfw-s08 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;filter:grayscale(1) contrast(1.75) brightness(1.04);}
.sfw-s08{max-width:320px;box-shadow:inset 0 0 0 1px rgba(21,104,38,.28);}
</style>
<figure class="sfw-s08" style="margin:0"><img src="${IMG.hands}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s09",
  title: "Paper grain overlay",
  note: "A laid-paper texture multiplied over the photograph, so a digital image sits on the same stock as the page around it.",
  html: tidy(`<style>
.sfw-s09{position:relative;overflow:hidden;aspect-ratio:3/2;}
.sfw-s09 img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.sfw-s09 .g{position:absolute;inset:0;mix-blend-mode:multiply;opacity:.5;
background-image:repeating-linear-gradient(0deg,rgba(79,52,51,.11) 0 1px,transparent 1px 3px),repeating-linear-gradient(90deg,rgba(79,52,51,.08) 0 1px,transparent 1px 4px);}
</style>
<figure class="sfw-s09" style="margin:0"><img src="${IMG.workshop}" alt="${CAP}"><span class="g"></span></figure>`),
});

B.push({
  id: "s10",
  title: "Risograph misregistration",
  note: "Two ink passes a millimetre apart — green low, brown high, black plate on register. The slip is the point; it prints, it doesn't glow.",
  html: tidy(`<style>
.sfw-s10{position:relative;background:${C.paper};aspect-ratio:3/2;overflow:hidden;}
.sfw-s10 span{position:absolute;inset:0;overflow:hidden;}
.sfw-s10 span img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.2);}
.sfw-s10 .k{mix-blend-mode:multiply;opacity:.92;}
.sfw-s10 .a{background:${C.green};transform:translate(-1mm,.6mm);}
.sfw-s10 .a img{mix-blend-mode:multiply;opacity:.7;}
.sfw-s10 .b{background:#6B4A2F;transform:translate(1mm,-.6mm);mix-blend-mode:multiply;opacity:.55;}
.sfw-s10 .b img{mix-blend-mode:multiply;}
${motion(`
.sfw-s10 .a{animation:sfw-s10-a 26s ease-in-out infinite alternate;}
.sfw-s10 .b{animation:sfw-s10-b 34s ease-in-out infinite alternate;}
@keyframes sfw-s10-a{0%{transform:translate(-1mm,.6mm);}100%{transform:translate(-.4mm,.2mm);}}
@keyframes sfw-s10-b{0%{transform:translate(1mm,-.6mm);}100%{transform:translate(.4mm,-.2mm);}}
`)}
</style>
<figure class="sfw-s10" style="margin:0">
  <span class="a"><img src="${IMG.compost}" alt=""></span>
  <span class="b"><img src="${IMG.compost}" alt=""></span>
  <span class="k"><img src="${IMG.compost}" alt="${CAP}"></span>
</figure>`),
});

B.push({
  id: "s11",
  title: "Letterpress bite at the edges",
  note: "An inset impression around the plate edge, as if the block pressed into the sheet. Subtle at 100%, obvious in print terms.",
  html: tidy(`<style>
.sfw-s11{position:relative;max-width:420px;background:${C.paper};padding:10px;}
.sfw-s11 .i{position:relative;overflow:hidden;}
.sfw-s11 img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;}
.sfw-s11 .i::after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(79,52,51,.5),inset 0 0 6px rgba(79,52,51,.35);pointer-events:none;}
</style>
<figure class="sfw-s11" style="margin:0"><div class="i"><img src="${IMG.glassware}" alt="${CAP}"></div></figure>`),
});

B.push({
  id: "s12",
  title: "Registration slip on the keyline only",
  note: "The photograph is untouched; the frame misregisters. A cheaper, quieter riso reference — colour lives in the frame, as it should.",
  html: tidy(`<style>
.sfw-s12{position:relative;max-width:420px;padding:6px;}
.sfw-s12::before,.sfw-s12::after{content:"";position:absolute;inset:0;pointer-events:none;}
.sfw-s12::before{box-shadow:inset 0 0 0 2px ${C.leaf};transform:translate(-3px,2px);}
.sfw-s12::after{box-shadow:inset 0 0 0 2px rgba(107,74,47,.7);transform:translate(3px,-2px);}
.sfw-s12 img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;position:relative;}
${motion(`
.sfw-s12::before{animation:sfw-s12-a 28s ease-in-out infinite alternate;}
.sfw-s12::after{animation:sfw-s12-b 36s ease-in-out infinite alternate;}
@keyframes sfw-s12-a{0%{transform:translate(-3px,2px);}100%{transform:translate(-1px,1px);}}
@keyframes sfw-s12-b{0%{transform:translate(3px,-2px);}100%{transform:translate(1px,-1px);}}
`)}
</style>
<figure class="sfw-s12" style="margin:0"><img src="${IMG.sampling}" alt="${CAP}"></figure>`),
});

B.push({
  id: "s13",
  title: "Duotone hold-out: colour photograph, ink frame",
  note: "The rule made visible. Two neighbours: one duotone plate, one untouched colour plate. Nothing is tinted; the ink is a decision, not a filter.",
  html: tidy(`<style>
.sfw-s13{display:grid;grid-template-columns:1fr 1fr;gap:16px;font-family:${F.b};}
.sfw-s13 figure{margin:0;}
.sfw-s13 .d{background:${C.deep};overflow:hidden;}
.sfw-s13 .d img{filter:grayscale(1) contrast(1.15);mix-blend-mode:multiply;}
.sfw-s13 img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;}
.sfw-s13 .u{box-shadow:inset 0 0 0 2px ${C.green};}
.sfw-s13 figcaption{font-size:12px;color:${C.green};margin-top:8px;}
</style>
<div class="sfw-s13">
  <figure><span class="d" style="display:block"><img src="${IMG.roots}" alt="${CAP}"></span><figcaption>${CAP}</figcaption></figure>
  <figure><span class="u" style="display:block"><img src="${IMG.roots}" alt="${CAP}"></span><figcaption>${CAP}</figcaption></figure>
</div>`),
});

export const surfaces: Family = {
  key: "surfaces",
  title: "Surfaces",
  blurb:
    "Ink treatments applied to the photograph itself. Duotone is a two-ink build that keeps real black. No tint is ever washed over a colour image.",
  blocks: B,
};
