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
 * NOTE: /public/img/ is currently empty. These are the subject-named paths the
 * catalogue expects. Replace the filenames with the real ones once uploaded.
 */
export const IMG = {
  hands: "/img/hands-soil.jpg",
  handsTwo: "/img/hands-holding-soil.jpg",
  compost: "/img/compost-pile.jpg",
  compostTurn: "/img/compost-turning.jpg",
  sampling: "/img/sampling-equipment.jpg",
  field: "/img/field-sampling.jpg",
  glassware: "/img/lab-glassware.jpg",
  scope: "/img/microscope.jpg",
  scopeWork: "/img/microscope-at-work.jpg",
  elaine: "/img/elaine-ingham.jpg",
  elaineTeaching: "/img/elaine-ingham-teaching.jpg",
  staff: "/img/staff-portrait.jpg",
  staffTwo: "/img/staff-portrait-two.jpg",
  workshop: "/img/workshop.jpg",
  workshopField: "/img/workshop-field.jpg",
  roots: "/img/roots.jpg",
  soilProfile: "/img/soil-profile.jpg",
  mBact: "/img/microscopy-bacteria.jpg",
  mFungi: "/img/microscopy-fungal-hyphae.jpg",
  mProto: "/img/microscopy-protozoa.jpg",
  mNema: "/img/microscopy-nematode.jpg",
  mAmoeba: "/img/microscopy-amoeba.jpg",
  mDark: "/img/microscopy-darkfield.jpg",
  mBright: "/img/microscopy-brightfield.jpg",
  mAggregate: "/img/microscopy-aggregate.jpg",
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
