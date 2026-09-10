import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, Slot, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Foundation — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "A 501(c)(3) science education nonprofit with forty years of history, a small team, and one mission: teach people to read living soil.",
      },
      { property: "og:title", content: "About the Soil Food Web Foundation" },
      {
        property: "og:description",
        content: "Forty years, a small team, and one mission: teach people to read living soil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const TEAM = [
  { src: PH.elainePortrait, role: "Founder" },
  { src: PH.elaineTeaching, role: "Teaching" },
  { src: PH.elaineNematode, role: "Laboratory" },
  { src: PH.studentCompostMoving, role: "Field programs" },
  { src: PH.wildSoilsEvent, role: "Community" },
  { src: PH.mulchBucket, role: "Operations" },
];

function About() {
  return (
    <Site>
      <section className="sec--tight ovl">
        <div className="ovl__hy ovl__hy--l">
          <Hyphae seed={61} width={380} height={560} from="left" tone="olive" />
        </div>
        <div className="wrap">
          <Masthead
            eyebrow="About"
            title="A small nonprofit with a forty-year argument."
            lede="Placeholder standfirst. Founded on the observation that most soil problems are biological, and that anyone with a microscope can check."
          />
        </div>
      </section>

      <section className="wrap">
        <Photo src={PH.elaineTeaching} ar="ar-band" drift />
        <span className="cap">{CAPTION}</span>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
            <div className="stack">
              <span className="eyebrow">Mission</span>
              <h2 className="d3">Teach the method, then get out of the way.</h2>
              <p>
                Placeholder paragraph on the mission: education first, no products, no prescriptions
                — a repeatable way of looking.
              </p>
              <p>Placeholder second paragraph on independence and the 501(c)(3) structure.</p>
            </div>
            <div className="stack">
              <span className="eyebrow">History</span>
              {["1986", "1996", "2010", "Today"].map((y, i) => (
                <div
                  key={y}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "88px 1fr",
                    gap: "var(--s-4)",
                    paddingBlock: "var(--s-3)",
                    borderTop: i === 0 ? "1px solid var(--rule)" : undefined,
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <span className="tag">{y}</span>
                  <p style={{ fontSize: "0.96rem" }}>Placeholder milestone line.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <SporeRule seed={27} />
      </div>

      <section className="sec">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">The team</span>
            <h2 className="d2">People, not a brand.</h2>
          </div>
          <div className="g3">
            {TEAM.map((t, i) => (
              <figure className="fig" key={i}>
                <Photo src={t.src} ar="ar-tall" />
                <figcaption className="cap">
                  <strong style={{ fontStyle: "normal", fontFamily: "var(--ff-h)" }}>
                    REPLACE_WITH_CAPTION
                  </strong>
                  <br />
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec band--tint">
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
              <span className="eyebrow">Research</span>
              <h2 className="d3">Dr. Elaine Ingham’s research sits at the centre of the method.</h2>
              <p>Placeholder paragraph pointing to her page and the research database.</p>
              <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
                <Link to="/elaine-ingham" className="btn">
                  Dr. Elaine Ingham
                </Link>
                <Link to="/science" className="btn">
                  Science
                </Link>
              </div>
            </div>
            <Plate n="Plate XI" title="Aggregate" note="Drawn, not photographed.">
              <Aggregate seed={311} size={260} tone="head" />
            </Plate>
          </div>
          <Slot label="Programs overview graphic — owned elsewhere" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
            <div className="stack">
              <span className="eyebrow">Contact</span>
              <h2 className="d3">Write to us.</h2>
              <p>REPLACE_WITH_CAPTION — postal address, email and press contact.</p>
            </div>
            <Fig src={PH.samplingKit} ar="ar-4x3" />
          </div>
        </div>
      </section>
    </Site>
  );
}
