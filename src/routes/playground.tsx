import { createFileRoute } from "@tanstack/react-router";
import { PH, CAPTION } from "@/components/site/photos";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "A visual sketchbook of photographic treatments from the Soil Food Web Foundation archive.",
      },
      { property: "og:title", content: "Playground — Soil Food Web Foundation" },
      {
        property: "og:description",
        content: "Photographic treatments from the Soil Food Web Foundation archive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Playground,
});

function Mark({ n, right }: { n: string; right: string }) {
  return (
    <div className="pg-mark">
      <span>{n}</span>
      <span>{right}</span>
    </div>
  );
}

const sheet = [
  PH.dirtyHands,
  PH.handCompost,
  PH.studentCompostMoving,
  PH.microscopyField,
  PH.handRootsFungi,
  PH.testTubes,
  PH.elaineScope,
  PH.handWorm,
  PH.treePlanting1,
  PH.fistDrySoil,
  PH.samplingKit,
  PH.looseSoil,
  PH.vineyardFungus,
  PH.studentCompostSqueeze,
  PH.redSoilHand,
  PH.hyphaeInSoil,
  PH.sampleTube,
  PH.groupPlanting,
];

function Playground() {
  return (
    <div className="pg">
      {/* masthead */}
      <section className="pg-screen">
        <Mark n="Plate I" right="Sketchbook" />
        <div className="pg-mast">
          <h1>
            Under
            <br />
            foot,
            <br />
            <em>everything</em>
          </h1>
          <div className="pg-hair" />
          <div className="pg-mast__foot">
            <p>
              A sketchbook of photographic treatments, drawn only from the Foundation archive.
            </p>
            <span className="pg-desc">Paper, olive, deep green</span>
          </div>
        </div>
      </section>

      {/* contact sheet */}
      <section className="pg-screen pg-screen--flush">
        <Mark n="Plate II" right="Contact sheet" />
        <div className="pg-sheet">
          {sheet.map((src, i) => (
            <figure key={src + i}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <img src={src} alt={CAPTION} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* the quiet screen */}
      <section className="pg-screen">
        <Mark n="Plate III" right="One specimen" />
        <div className="pg-quiet">
          <figure className="pg-drift-slow">
            <img src={PH.handCompost} alt={CAPTION} loading="lazy" />
          </figure>
          <span className="pg-cap">{CAPTION}</span>
        </div>
      </section>

      {/* deep band, duotone with real black */}
      <section className="pg-screen pg-screen--deep pg-screen--flush">
        <Mark n="Plate IV" right="Duotone" />
        <div className="pg-duo pg-duo--deep pg-drift" style={{ aspectRatio: "16/7" }}>
          <img src={PH.vineyardCrew} alt={CAPTION} loading="lazy" />
        </div>
        <div style={{ padding: "36px var(--gut) 0" }}>
          <h2 style={{ fontSize: "clamp(2rem,6vw,5rem)" }}>Print it in one ink</h2>
          <p style={{ marginTop: 16 }}>
            Deep green over a true black plate. The blacks stay black, the highlights take the ink.
          </p>
        </div>
      </section>

      {/* scale contrast */}
      <section className="pg-screen">
        <Mark n="Plate V" right="Scale" />
        <div className="pg-scale">
          <figure>
            <div className="pg-scale__sm">
              <img src={PH.sampleTube} alt={CAPTION} loading="lazy" />
            </div>
            <figcaption className="pg-cap">{CAPTION}</figcaption>
          </figure>
          <figure>
            <div className="pg-scale__lg pg-drift-slow">
              <img src={PH.ranchAerial} alt={CAPTION} loading="lazy" />
            </div>
            <figcaption className="pg-cap">{CAPTION}</figcaption>
          </figure>
        </div>
      </section>

      {/* mood one */}
      <section className="pg-screen pg-mood pg-mood--gold">
        <Mark n="Plate VI" right="Mood one · green & gold" />
        <h2>
          Deep green,
          <br />
          <em>struck in gold</em>
        </h2>
        <div className="pg-mood__row">
          <figure className="pg-drift">
            <img src={PH.vineyardTractor} alt={CAPTION} loading="lazy" />
          </figure>
          <figure>
            <img src={PH.shovelBag} alt={CAPTION} loading="lazy" />
          </figure>
          <figure className="pg-drift-slow">
            <img src={PH.treePlanting2} alt={CAPTION} loading="lazy" />
          </figure>
        </div>
        <div className="swatches">
          {["#22371f", "#156826", "#59a66c", "#c9a227", "#f4f1ea"].map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </section>

      {/* mood two */}
      <section className="pg-screen pg-mood pg-mood--brown">
        <Mark n="Plate VII" right="Mood two · brown & cream" />
        <div className="pg-dip">
          <figure>
            <img src={PH.redSoilHand} alt={CAPTION} loading="lazy" />
          </figure>
          <div className="pg-dip__rule" />
          <div>
            <h2>
              Brown ground,
              <br />
              <em>cream paper</em>
            </h2>
            <p style={{ marginTop: 18 }}>
              Warm and printed. Tan carries the rules, cream carries the words, and the photograph
              keeps its own colour.
            </p>
            <div className="pg-hair" style={{ marginTop: 26 }} />
            <span className="pg-cap">{CAPTION}</span>
          </div>
        </div>
        <div className="swatches">
          {["#4f3433", "#c89b7b", "#f4f1ea", "#156826", "#22371f"].map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </section>

      {/* mood three */}
      <section className="pg-screen pg-mood pg-mood--blue">
        <Mark n="Plate VIII" right="Mood three · cream & blue" />
        <h2>
          Daylight,
          <br />
          teaching blue
        </h2>
        <div className="pg-mood__row">
          <figure>
            <img src={PH.studentCompostMoving} alt={CAPTION} loading="lazy" />
          </figure>
          <figure className="pg-drift">
            <img src={PH.wildSoilsEvent} alt={CAPTION} loading="lazy" />
          </figure>
          <figure>
            <img src={PH.elaineTeaching} alt={CAPTION} loading="lazy" />
          </figure>
        </div>
        <div className="swatches">
          {["#f4f1ea", "#3780b8", "#156826", "#6b4c7a", "#4f3433"].map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </section>

      {/* filmstrip */}
      <section className="pg-screen pg-screen--flush">
        <div style={{ padding: "0 var(--gut) 24px" }}>
          <Mark n="Plate IX" right="Filmstrip" />
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3.4rem)" }}>Everything on one roll</h2>
        </div>
        <div className="pg-strip">
          {[
            PH.mulchBucket,
            PH.handScooping,
            PH.treePlanting3,
            PH.vineyardCrew,
            PH.samplingKit,
            PH.panchamanaGarden,
            PH.dirtyHands,
            PH.ranchAgro2,
            PH.planting,
            PH.soilClose4,
          ].map((src, i) => (
            <figure key={src + i}>
              <img src={src} alt={CAPTION} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* index with photographs in the margin */}
      <section className="pg-screen">
        <Mark n="Plate X" right="Index" />
        <div className="pg-index">
          {[
            [PH.handWorm, "A worm in a wet hand", "Field"],
            [PH.looseSoil, "Loose soil, falling", "Hands"],
            [PH.testTubes, "Tubes with samples", "Lab"],
            [PH.ranchRows, "Rows under repair", "Land"],
            [PH.elaineSampleBag, "The sample bag", "Legacy"],
            [PH.studentCompostSqueeze, "The squeeze test", "Teaching"],
            [PH.hyphaeInSoil, "Hyphae in the crumb", "Soil"],
          ].map(([src, t, tag]) => (
            <div className="pg-index__row" key={t}>
              <figure>
                <img src={src} alt={CAPTION} loading="lazy" />
              </figure>
              <h3>{t}</h3>
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* diptych */}
      <section className="pg-screen">
        <Mark n="Plate XI" right="Diptych" />
        <div className="pg-dip">
          <figure className="pg-drift">
            <img src={PH.fistDrySoil} alt={CAPTION} loading="lazy" />
          </figure>
          <div className="pg-dip__rule" />
          <figure className="pg-drift-slow">
            <img src={PH.handCompost} alt={CAPTION} loading="lazy" />
          </figure>
        </div>
      </section>

      {/* one photograph carries the screen */}
      <section className="pg-screen pg-screen--colossal">
        <div className="pg-colossal pg-drift-slow">
          <img src={PH.ranchAerial2} alt={CAPTION} loading="lazy" />
        </div>
        <Mark n="Plate XII" right="Colossal" />
        <h2>Ten thousand acres, one frame</h2>
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* a sequence */}
      <section className="pg-screen">
        <Mark n="Plate XIII" right="Sequence" />
        <div className="pg-seq">
          {[
            [PH.treePlanting1, "i"],
            [PH.treePlanting2, "ii"],
            [PH.treePlanting3, "iii"],
            [PH.panchamanaGarden, "iv"],
          ].map(([src, n]) => (
            <figure key={n}>
              <div>
                <img src={src} alt={CAPTION} loading="lazy" />
              </div>
              <figcaption>
                {n} · {CAPTION}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ledger grid */}
      <section className="pg-screen">
        <Mark n="Plate XIV" right="Ledger" />
        <div className="pg-ledger">
          {[
            [PH.elaineTalking, "01"],
            [PH.groupPlanting, "02"],
            [PH.vineyardFungus, "03"],
            [PH.sampleTube, "04"],
            [PH.ranchAgro8, "05"],
            [PH.worm, "06"],
            [PH.elainePortrait, "07"],
            [PH.studentCompostMoving, "08"],
            [PH.handsRoots, "09"],
          ].map(([src, n]) => (
            <figure key={n}>
              <div>
                <img src={src} alt={CAPTION} loading="lazy" />
              </div>
              <figcaption>
                <span>{n}</span>
                <span>{CAPTION}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
