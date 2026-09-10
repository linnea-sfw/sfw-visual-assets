/**
 * The Foundation photo library, read from /public/img and referenced by
 * exact public path. Nothing here is renamed, moved or imported from src.
 * Files containing "shutterstock" are excluded by policy — none are present.
 */

const p = (f: string) => `/img/${f}`;

export const PH = {
  /* — people doing the work outdoors — */
  groupPlanting: p("hvdb-inplanten-002.jpg"),
  wildSoilsEvent: p("Carla-Nicks Son-Nick-ERI-Wild Soils Event-11-2024.jpg"),
  studentCompostMoving: p("ctpfw-student-moving-compost-1.jpg"),
  studentCompostSqueeze: p("ctpfw-student-squeezing-compost-1.jpg"),
  treePlanting1: p("erc-panchmana-treeplanting-fb-img-1666270907385.jpg"),
  treePlanting2: p("erc-panchamana-treeplanting-2-fb-img-1666270988322.jpg"),
  treePlanting3: p("erc-panchamana-treeplanting-3-fb-img-1666271008784.jpg"),
  vineyardCrew: p("el-nino-2017-tractor-in-mud-w-crew.jpg"),
  vineyardTractor: p("el-nino-2017-tractor-in-mud-in-vineyard.jpg"),
  planting: p("2-hands-planting-shrub.jpg"),
  mulchBucket: p("gloved-hands-red-bucket-mulch.jpg"),

  /* — Dr Elaine Ingham — */
  elaineScope: p("Dr Elaine Ingham with Microscope.jpg"),
  elaineScope2: p("Elaine Flower Shirt Microscope.png"),
  elaineTalking: p("Elaine Smile talking.png"),
  elaineNematode: p("Elaine and nematode extraction.png"),
  elaineSampleBag: p("Elaine with Sample bag.png"),
  elainePortrait: p("copy-of-9.jpg"),
  elaineTeaching: p("copy-of-17.jpg"),

  /* — hands and living soil — */
  dirtyHands: p("2-dirty-hands.jpg"),
  handsRoots: p("2-hands-clasped-holding-plant-roots.jpg"),
  fistDrySoil: p("fist-of-dry-soil.jpg"),
  handCompost: p("hand-of-compost.jpg"),
  handScooping: p("hand-scooping-planter-bed-soil.jpg"),
  handRootsFungi: p("hand-soil-roots-fungi.jpg"),
  handWorm: p("hand-wet-dirt-worm.jpg"),
  looseSoil: p("handling-loose-soil.jpg"),
  redSoilHand: p("red-soil-hand.jpg"),

  /* — sampling and lab — */
  samplingKit: p("Sampling equipment.jpg"),
  testTubes: p("Test tubes with sample_.jpg"),
  sampleTube: p("soil-sample-close-up-test-tube.jpg"),
  shovelBag: p("soil-sample-shovel-and-bag.jpg"),

  /* — the soil itself — */
  microscopyField: p("fungal-spores-in-suspension.jpg"),
  vineyardFungus: p("fungi-in-under-grape-soil.jpg"),
  worm: p("harringtons-organic-land-care-york-farms-1-768x1024.jpg"),
  hyphaeInSoil: p("harringtons-organic-land-care-brick-york-farms-2-768x1024.jpg"),
  soilClose3: p("harringtons-organic-land-care-brick-york-farms-3-768x1024.jpg"),
  soilClose4: p("harringtons-organic-land-care-brick-york-farms-4-768x1024.jpg"),

  /* — land under restoration — */
  ranchAerial: p("erc-rancho-cacachilas-aerial-shot.jpg"),
  ranchAerial2: p("erc-rancho-cacachilas-aerial-2.jpg"),
  ranchRows: p("erc-rancho-cacachilas-agro.jpg"),
  ranchAgro2: p("erc-rancho-cacachilas-agro2.jpg"),
  ranchAgro8: p("erc-rancho-cacachilas-agro8.jpg"),
  panchamanaGarden: p("erc-panchamana-garden.jpg"),
} as const;

export const CAPTION = "REPLACE_WITH_CAPTION";
