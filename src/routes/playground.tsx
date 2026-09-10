import { createFileRoute } from "@tanstack/react-router";
import { PH, CAPTION } from "@/components/site/photos";
import { Colony, Aggregate, Hyphae, SporeRule } from "@/components/site/organisms";
import { RootArch, TrophicWeb, SoilProfile } from "@/components/site/forms";

export const Route = createFileRoute("/playground")({
  head: () => ({
    meta: [
      { title: "Playground — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "A visual sketchbook: photographs from the Foundation archive set against code-drawn specimen plates, colonies, hyphae and soil profiles.",
      },
      { property: "og:title", content: "Playground — Soil Food Web Foundation" },
      {
        property: "og:description",
        content:
          "Photographs from the Foundation archive set against code-drawn specimen plates, colonies, hyphae and soil profiles.",
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
      {/* 01 — masthead */}
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
          <SporeRule seed={9} count={120} />
          <div className="pg-mast__foot">
            <p>
              A sketchbook of treatments. Photographs from the archive, plates drawn in code, set
              together until something looks alive.
            </p>
            <span className="pg-desc">Fourteen plates · paper, olive, deep green</span>
          </div>
        </div>
        <div className="pg-mast__hy">
          <Hyphae seed={41} width={620} height={520} from="bottom" draw tone="moss" />
        </div>
      </section>

      {/* 02 — contact sheet */}
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

      {/* 03 — type cut from a photograph */}
      <section className="pg-screen">
        <Mark n="Plate III" right="Image into type" />
        <h2
          className="pg-type pg-type--ring"
          style={{ backgroundImage: `url("${PH.handRootsFungi}")` }}
        >
          SOIL
          <br />
          IS ALIVE
        </h2>
        <div className="pg-hair" style={{ marginTop: 28 }} />
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* 04 — overlap until you lose the edge */}
      <section className="pg-screen">
        <Mark n="Plate IV" right="Overlap" />
        <div className="pg-lap">
          <figure className="pg-lap__a pg-drift" style={{ margin: 0, overflow: "hidden" }}>
            <img src={PH.elaineScope} alt={CAPTION} loading="lazy" />
          </figure>
          <div className="pg-lap__b pg-duo" style={{ overflow: "hidden" }}>
            <img src={PH.microscopyField} alt={CAPTION} loading="lazy" />
          </div>
          <div className="pg-lap__c" style={{ overflow: "hidden" }}>
            <img src={PH.hyphaeInSoil} alt={CAPTION} loading="lazy" />
          </div>
          <div className="pg-lap__p1 pg-breathe">
            <Hyphae seed={77} width={420} height={380} from="top" tone="olive" />
          </div>
          <div className="pg-lap__p2">
            <Colony seed={123} size={320} tone="head" />
          </div>
        </div>
      </section>

      {/* 05 — the quiet screen */}
      <section className="pg-screen">
        <Mark n="Plate V" right="One specimen" />
        <div className="pg-quiet">
          <figure className="pg-drift-slow">
            <img src={PH.handCompost} alt={CAPTION} loading="lazy" />
          </figure>
          <span className="pg-cap">{CAPTION}</span>
        </div>
      </section>

      {/* 06 — a plate of new organisms */}
      <section className="pg-screen">
        <Mark n="Plate VI" right="Drawn specimens" />
        <div className="pg-plates">
          {[
            { c: <Colony seed={301} size={220} />, t: "a" },
            { c: <Aggregate seed={302} size={220} tone="head" />, t: "b" },
            { c: <Colony seed={303} size={220} tone="moss" />, t: "c" },
            { c: <Aggregate seed={304} size={220} />, t: "d" },
            { c: <Hyphae seed={305} width={220} height={220} from="bottom" />, t: "e" },
            { c: <Colony seed={306} size={220} tone="blue" />, t: "f" },
            { c: <Hyphae seed={307} width={220} height={220} from="left" tone="head" />, t: "g" },
            { c: <Aggregate seed={308} size={220} tone="moss" />, t: "h" },
          ].map((o) => (
            <figure key={o.t}>
              <div>{o.c}</div>
              <figcaption>Fig. {o.t}</figcaption>
            </figure>
          ))}
        </div>
        <div className="pg-hair" style={{ marginTop: 32 }} />
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* 07 — the deep band, duotone with real black */}
      <section className="pg-screen pg-screen--deep pg-screen--flush">
        <Mark n="Plate VII" right="Duotone" />
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

      {/* 08 — scale contrast */}
      <section className="pg-screen">
        <Mark n="Plate VIII" right="Scale" />
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

      {/* 09 — soil profile, stippled, against the real thing */}
      <section className="pg-screen">
        <Mark n="Plate IX" right="Profile" />
        <div className="pg-prof">
          <div>
            <SoilProfile seed={91} />
          </div>
          <div>
            <img src={PH.soilClose3} alt={CAPTION} loading="lazy" />
          </div>
          <div className="pg-prof__labels">
            {["Litter", "Surface", "Rooting", "Weathering", "Parent"].map((l) => (
              <div key={l}>
                <div className="pg-desc">{l}</div>
                <div className="pg-hair" style={{ marginTop: 8 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — trophic web as an old chart */}
      <section className="pg-screen">
        <Mark n="Plate X" right="The web" />
        <div className="pg-marg">
          <div className="pg-marg__side">
            <span className="pg-desc">Chart</span>
            <p className="pg-cap" style={{ maxWidth: "none" }}>
              {CAPTION}
            </p>
            <div className="pg-hair" />
            <Aggregate seed={555} size={140} tone="moss" />
          </div>
          <div>
            <TrophicWeb seed={64} />
            <div className="pg-hair" />
            <p className="pg-cap">{CAPTION}</p>
          </div>
        </div>
      </section>

      {/* 11 — one photograph broken across a grid */}
      <section className="pg-screen">
        <Mark n="Plate XI" right="Broken plate" />
        <div
          className="pg-break"
          style={{ ["--pg-src" as string]: `url("${PH.groupPlanting}")` }}
        >
          {Array.from({ length: 15 }, (_, i) => {
            const col = i % 5;
            const row = Math.floor(i / 5);
            const cls = i === 7 ? "gone" : i === 3 || i === 11 ? "off" : undefined;
            return (
              <i
                key={i}
                className={cls}
                style={{ backgroundPosition: `${(col / 4) * 100}% ${(row / 2) * 100}%` }}
              />
            );
          })}
        </div>
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* 12 — printed twice, a millimetre apart */}
      <section className="pg-screen">
        <Mark n="Plate XII" right="Misregistration" />
        <div className="pg-twice">
          <div>
            <img src={PH.studentCompostSqueeze} alt={CAPTION} loading="lazy" />
          </div>
          <div>
            <img src={PH.studentCompostSqueeze} alt="" loading="lazy" />
          </div>
        </div>
        <p className="pg-cap" style={{ textAlign: "center", marginInline: "auto" }}>
          {CAPTION}
        </p>
      </section>

      {/* 13 — roots: the drawing and the photograph */}
      <section className="pg-screen">
        <Mark n="Plate XIII" right="Root architecture" />
        <div className="pg-roots">
          <figure className="pg-drift">
            <img src={PH.handsRoots} alt={CAPTION} loading="lazy" />
          </figure>
          <div className="pg-roots__draw">
            <RootArch seed={188} width={520} height={760} draw />
          </div>
        </div>
      </section>

      {/* 14 — mood one: deep green and harvest gold */}
      <section className="pg-screen pg-mood pg-mood--gold">
        <Mark n="Plate XIV" right="Mood one · green & gold" />
        <h2>
          Deep green,
          <br />
          <em>struck in gold</em>
        </h2>
        <p style={{ marginTop: 20 }}>
          The evening register. Classic green pushed to its darkest, harvest gold used only as a
          keyline and a word.
        </p>
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

      {/* 15 — mood two: soil brown and cream */}
      <section className="pg-screen pg-mood pg-mood--brown">
        <Mark n="Plate XV" right="Mood two · brown & cream" />
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

      {/* 16 — mood three: cream, education blue, one purple */}
      <section className="pg-screen pg-mood pg-mood--blue">
        <Mark n="Plate XVI" right="Mood three · cream & blue" />
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
        <div className="pg-legacy">
          <b>Legacy — Dr. Elaine Ingham only</b>
          <p style={{ marginTop: 8 }}>
            The purple sits on her material and nowhere else: one rule, one frame, never a wash.
          </p>
        </div>
        <div className="swatches">
          {["#f4f1ea", "#3780b8", "#156826", "#6b4c7a", "#4f3433"].map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </section>

      {/* 17 — filmstrip bleeding both edges */}
      <section className="pg-screen pg-screen--flush">
        <div style={{ padding: "0 var(--gut) 24px" }}>
          <Mark n="Plate XVII" right="Filmstrip" />
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

      {/* 18 — index with photographs in the margin */}
      <section className="pg-screen">
        <Mark n="Plate XVIII" right="Index" />
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

      {/* 19 — diptych in conversation */}
      <section className="pg-screen">
        <Mark n="Plate XIX" right="Diptych" />
        <div className="pg-dip">
          <figure className="pg-drift">
            <img src={PH.fistDrySoil} alt={CAPTION} loading="lazy" />
          </figure>
          <div className="pg-dip__rule" />
          <figure className="pg-drift-slow">
            <img src={PH.handCompost} alt={CAPTION} loading="lazy" />
          </figure>
        </div>
        <p className="pg-cap" style={{ textAlign: "center", marginInline: "auto", marginTop: 22 }}>
          {CAPTION}
        </p>
      </section>

      {/* 20 — one photograph carries the screen */}
      <section className="pg-screen pg-screen--colossal">
        <div className="pg-colossal pg-drift-slow">
          <img src={PH.ranchAerial2} alt={CAPTION} loading="lazy" />
        </div>
        <Mark n="Plate XX" right="Colossal" />
        <h2>Ten thousand acres, one frame</h2>
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* 21 — strata, each band a different photograph */}
      <section className="pg-screen">
        <Mark n="Plate XXI" right="Strata" />
        <div className="pg-strata">
          {[
            [PH.panchamanaGarden, "Litter"],
            [PH.handRootsFungi, "Surface"],
            [PH.soilClose3, "Rooting"],
            [PH.hyphaeInSoil, "Weathering"],
            [PH.fistDrySoil, "Parent"],
          ].map(([src, l]) => (
            <div key={l}>
              <img src={src} alt={CAPTION} loading="lazy" />
              <b>{l}</b>
            </div>
          ))}
        </div>
        <p className="pg-cap">{CAPTION}</p>
      </section>

      {/* 22 — a sequence */}
      <section className="pg-screen">
        <Mark n="Plate XXII" right="Sequence" />
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
        <div className="pg-hair" style={{ marginTop: 30 }} />
      </section>

      {/* 23 — ledger grid with a gold column */}
      <section className="pg-screen">
        <Mark n="Plate XXIII" right="Ledger" />
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

      {/* 24 — closing deep field */}
      <section className="pg-screen pg-screen--deep">
        <Mark n="Plate XXIV" right="End of sheet" />
        <div style={{ display: "grid", gap: 28, justifyItems: "center", textAlign: "center" }}>
          <Hyphae seed={909} width={520} height={300} from="bottom" draw tone="moss" />
          <h2 style={{ fontSize: "clamp(2rem,7vw,6rem)" }}>Grown, not designed</h2>
          <SporeRule seed={17} count={140} />
          <span className="pg-desc" style={{ color: "var(--gold)" }}>
            End of sheet
          </span>
        </div>
      </section>
    </div>
  );
}
