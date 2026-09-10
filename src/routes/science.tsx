import { createFileRoute } from "@tanstack/react-router";
import { Site, Photo, Fig, Field, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "The Science — Six Mechanisms of a Living Soil" },
      {
        name: "description",
        content:
          "Nutrient cycling, structure, disease suppression, water, root partnerships and carbon: the six mechanisms by which soil biology feeds a plant.",
      },
      { property: "og:title", content: "The science of a living soil" },
      {
        property: "og:description",
        content: "Six mechanisms by which soil biology feeds a plant, with the evidence.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Science,
});

const MECH = [
  { t: "Nutrient cycling", seed: 3, kind: "colony", tone: "olive" as const },
  { t: "Soil structure", seed: 42, kind: "aggregate", tone: "head" as const },
  { t: "Disease suppression", seed: 137, kind: "colony", tone: "blue" as const },
  { t: "Water holding", seed: 256, kind: "aggregate", tone: "olive" as const },
  { t: "Root partnerships", seed: 401, kind: "hyphae", tone: "head" as const },
  { t: "Carbon", seed: 733, kind: "hyphae", tone: "gold" as const },
];

function Science() {
  return (
    <Site>
      <section className="sec--tight ovl">
        <div className="ovl__hy ovl__hy--l">
          <Hyphae seed={7} width={400} height={600} from="left" tone="olive" />
        </div>
        <div className="wrap">
          <Masthead
            eyebrow="Science"
            title="The soil is alive. Here is what it looks like."
            lede="Placeholder standfirst. Six mechanisms, each observable, each testable on your own ground."
          />
        </div>
      </section>

      <section className="sec--tight">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--s-5)",
              alignItems: "center",
            }}
          >
            <Field src={PH.microscopyField} />
            <Field src={PH.microscopyField} moss />
            <Field src={PH.microscopyField} />
          </div>
          <span className="cap">{CAPTION}</span>
        </div>
      </section>

      <div className="wrap sec--tight">
        <SporeRule seed={31} count={150} />
      </div>

      <section className="sec">
        <div className="wrap stack-6">
          <h2 className="d2">Six mechanisms.</h2>
          <div className="g3">
            {MECH.map((m, i) => (
              <Plate
                key={m.t}
                n={`Mechanism ${i + 1}`}
                title={m.t}
                note="Placeholder note on what this does for the plant."
              >
                {m.kind === "colony" ? (
                  <Colony seed={m.seed} size={220} tone={m.tone} />
                ) : m.kind === "aggregate" ? (
                  <Aggregate seed={m.seed} size={220} tone={m.tone} />
                ) : (
                  <Hyphae seed={m.seed} width={220} height={220} from="bottom" tone={m.tone} />
                )}
              </Plate>
            ))}
          </div>
        </div>
      </section>

      {/* strata: horizontal bands stacked like a soil profile */}
      <section className="strata">
        {[PH.hyphaeInSoil, PH.soilClose3, PH.soilClose4, PH.worm].map((src, i) => (
          <div key={i} style={{ height: `${[130, 96, 118, 150][i]}px` }}>
            <img src={src} alt="" loading="lazy" className={i % 2 ? "slow-2 slow" : "slow"} />
          </div>
        ))}
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <div className="stack">
              <span className="eyebrow">Who lives there</span>
              <h2 className="d2">Fungi, roots, worms, and a great deal you cannot see.</h2>
              <p>Placeholder paragraph on the organism groups and how they are counted.</p>
            </div>
            <Fig src={PH.handRootsFungi} ar="ar-4x3" drift />
          </div>
          <div className="g3">
            <Fig src={PH.worm} ar="ar-tall" />
            <Fig src={PH.vineyardFungus} ar="ar-tall" />
            <Fig src={PH.hyphaeInSoil} ar="ar-tall" />
          </div>
        </div>
      </section>

      <section className="sec band--deep">
        <div className="wrap stack-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
            <div className="stack">
              <span className="eyebrow">Research database</span>
              <h2 className="d2">Papers, assays and field records.</h2>
              <p style={{ color: "var(--sage)" }}>Placeholder line about the searchable archive.</p>
            </div>
            <Photo src={PH.testTubes} ar="ar-4x3" />
          </div>
          <div className="rows" style={{ borderTopColor: "var(--deep-rule)" }}>
            {[1, 2, 3, 4].map((i) => (
              <div className="row" key={i} style={{ borderBottomColor: "var(--deep-rule)" }}>
                <span className="tag">REPLACE</span>
                <div>
                  <h3 style={{ color: "var(--paper)", fontSize: "1.05rem" }}>
                    Placeholder paper title
                  </h3>
                  <p style={{ color: "var(--sage)", fontSize: "0.92rem" }}>REPLACE_WITH_CAPTION</p>
                </div>
                <a className="btn btn--onDeep" href="#">
                  Read
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Site>
  );
}
