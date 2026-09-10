// Shared authoring helpers for the asset catalogue.
// Every builder returns a STANDALONE HTML snippet string:
// namespaced classes, inline <style>, no external stylesheet, no font call, no script.

export type Block = {
  id: string;
  title: string;
  note: string;
  html: string;
  /** preview background: paper (default) or dark */
  dark?: boolean;
};

export type Family = {
  key: string;
  title: string;
  blurb: string;
  blocks: Block[];
};

/* ---- brand ---- */
export const C = {
  green: "#156826",
  leaf: "#59A66C",
  blue: "#3780B8",
  head: "#4F3433",
  body: "#333130",
  paper: "#F4F1EA",
  deep: "#22371F",
  gold: "#C9A227",
};

export const F = {
  h: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
  b: "'Source Sans 3', 'Source Sans Pro', -apple-system, system-ui, sans-serif",
  s: "'Iowan Old Style', 'Palatino Linotype', 'Times New Roman', Georgia, serif",
};

/* ---- image library ----
 * Real photographs from /public/img, referenced by exact public path so a
 * pasted snippet keeps working. Spaces are percent-encoded. Nothing renamed.
 */
export const IMG = {
  hands: "/img/2-dirty-hands.jpg",
  handsTwo: "/img/handling-loose-soil.jpg",
  handsThree: "/img/red-soil-hand.jpg",
  handsFour: "/img/hand-scooping-planter-bed-soil.jpg",
  fist: "/img/fist-of-dry-soil.jpg",
  worm: "/img/hand-wet-dirt-worm.jpg",
  compost: "/img/hand-of-compost.jpg",
  compostTurn: "/img/ctpfw-student-moving-compost-1.jpg",
  mulch: "/img/gloved-hands-red-bucket-mulch.jpg",
  sampling: "/img/Sampling%20equipment.jpg",
  field: "/img/soil-sample-shovel-and-bag.jpg",
  tube: "/img/soil-sample-close-up-test-tube.jpg",
  glassware: "/img/Test%20tubes%20with%20sample_.jpg",
  scope: "/img/Dr%20Elaine%20Ingham%20with%20Microscope.jpg",
  scopeWork: "/img/Elaine%20Flower%20Shirt%20Microscope.png",
  elaine: "/img/copy-of-9.jpg",
  elaineTeaching: "/img/copy-of-17.jpg",
  elaineTalking: "/img/Elaine%20Smile%20talking.png",
  elaineNematode: "/img/Elaine%20and%20nematode%20extraction.png",
  elaineBag: "/img/Elaine%20with%20Sample%20bag.png",
  staff: "/img/Elaine%20Smile%20talking.png",
  staffTwo: "/img/Carla-Nicks%20Son-Nick-ERI-Wild%20Soils%20Event-11-2024.jpg",
  workshop: "/img/ctpfw-student-squeezing-compost-1.jpg",
  workshopField: "/img/hvdb-inplanten-002.jpg",
  planting: "/img/2-hands-planting-shrub.jpg",
  treePlanting: "/img/erc-panchmana-treeplanting-fb-img-1666270907385.jpg",
  treePlantingTwo: "/img/erc-panchamana-treeplanting-2-fb-img-1666270988322.jpg",
  treePlantingThree: "/img/erc-panchamana-treeplanting-3-fb-img-1666271008784.jpg",
  garden: "/img/erc-panchamana-garden.jpg",
  vineyard: "/img/el-nino-2017-tractor-in-mud-in-vineyard.jpg",
  vineyardCrew: "/img/el-nino-2017-tractor-in-mud-w-crew.jpg",
  aerial: "/img/erc-rancho-cacachilas-aerial-shot.jpg",
  aerialTwo: "/img/erc-rancho-cacachilas-aerial-2.jpg",
  rows: "/img/erc-rancho-cacachilas-agro.jpg",
  rowsTwo: "/img/erc-rancho-cacachilas-agro2.jpg",
  rowsThree: "/img/erc-rancho-cacachilas-agro8.jpg",
  roots: "/img/2-hands-clasped-holding-plant-roots.jpg",
  rootsFungi: "/img/hand-soil-roots-fungi.jpg",
  soilProfile: "/img/harringtons-organic-land-care-brick-york-farms-3-768x1024.jpg",
  /* circles: microscopy and fungi only */
  mBact: "/img/fungal-spores-in-suspension.jpg",
  mFungi: "/img/fungi-in-under-grape-soil.jpg",
  mProto: "/img/harringtons-organic-land-care-brick-york-farms-2-768x1024.jpg",
  mNema: "/img/harringtons-organic-land-care-york-farms-1-768x1024.jpg",
  mAmoeba: "/img/harringtons-organic-land-care-brick-york-farms-4-768x1024.jpg",
  mDark: "/img/fungal-spores-in-suspension.jpg",
  mBright: "/img/fungi-in-under-grape-soil.jpg",
  mAggregate: "/img/hand-soil-roots-fungi.jpg",
};

export const MICRO = [
  IMG.mBact,
  IMG.mFungi,
  IMG.mProto,
  IMG.mNema,
  IMG.mAmoeba,
  IMG.mDark,
  IMG.mBright,
  IMG.mAggregate,
];

export const CAP = "REPLACE_WITH_CAPTION";
export const SCALE = "REPLACE_WITH_SCALE";

/** wrap animation rules so they only run when motion is welcome */
export function motion(css: string) {
  return `@media (prefers-reduced-motion: no-preference){${css}}`;
}

/** collapse authoring whitespace without breaking the snippet */
export function tidy(html: string) {
  return html.replace(/\n\s*\n/g, "\n").trim();
}
