import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, Field, VideoFrame, Shards } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soil Food Web Foundation — Teaching the World to Read Living Soil" },
      {
        name: "description",
        content:
          "A 501(c)(3) science education nonprofit. Forty years of teaching farmers, restorers and teachers to put soil under a microscope and bring it back to life.",
      },
      { property: "og:title", content: "Soil Food Web Foundation" },
      {
        property: "og:description",
        content: "Forty years of teaching people to put soil under a microscope.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Site>
      {/* ---------- hero ---------- */}
      <section className="hero wrap">
        <div className="hero__hy">
          <Hyphae seed={23} width={460} height={620} from="bottom" draw tone="olive" />
        </div>
        <div className="hero__grid">
          <div className="stack">
            <span className="eyebrow">Soil Food Web Foundation · Since 1986</span>
            <h1 className="d1">
              The soil is alive.
              <br />
              We teach people to see it.
            </h1>
            <p className="lede">
              Placeholder standfirst. A nonprofit school for the biology under your feet — farmers,
              land restorers and teachers learning to look, count and rebuild.
            </p>
            <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
              <Link to="/learn" className="btn">
                Start learning
              </Link>
              <Link to="/science" className="btn">
                See the science
              </Link>
            </div>
          </div>
          <div>
            <VideoFrame
              src={PH.wildSoilsEvent}
              title="Field footage — New Mexico workshop"
              ar="ar-4x3"
            />
            <span className="cap">REPLACE_WITH_CAPTION</span>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ marginTop: "var(--s-6)" }}>
        <div className="overlap">
          <Photo src={PH.groupPlanting} ar="ar-band" drift alt="" />
          <span className="cap">REPLACE_WITH_CAPTION</span>
        </div>
      </section>

      {/* ---------- hands ---------- */}
      <section className="sec band--tint" style={{ paddingTop: "var(--s-8)" }}>
        <div className="wrap stack-6 ovl">
          <div className="ovl__hy ovl__hy--l">
            <Hyphae seed={5} width={380} height={520} from="left" tone="olive" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <div className="stack">
              <span className="eyebrow">What we are looking at</span>
              <h2 className="d2">A handful of soil holds more organisms than people on earth.</h2>
              <p>
                Placeholder paragraph. Bacteria, fungi, protozoa, nematodes and microarthropods, all
                trading nutrients with roots. When that web is intact, the plant is fed.
              </p>
            </div>
            <Photo src={PH.handsRoots} ar="ar-4x3" drift />
          </div>

          <div className="g3">
            <Fig src={PH.dirtyHands} ar="ar-1" />
            <Fig src={PH.handRootsFungi} ar="ar-1" />
            <Fig src={PH.handCompost} ar="ar-1" />
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBlock: "var(--s-6)" }}>
        <SporeRule seed={9} />
      </div>

      {/* ---------- four drawn specimens ---------- */}
      <section className="sec--tight band--tint">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">Plates I–IV</span>
            <h2 className="d3">Drawn from what shows up on the slide.</h2>
          </div>
          <div className="g4">
            <Plate n="Plate I" title="Bacterial colony" note="Density falling away to the rim.">
              <Colony seed={7} size={240} tone="olive" />
            </Plate>
            <Plate n="Plate II" title="Fungal hyphae" note="Recursive branching, spore tips.">
              <Hyphae seed={31} width={240} height={240} from="bottom" tone="head" />
            </Plate>
            <Plate n="Plate III" title="Soil aggregate" note="Concentric binding of particles.">
              <Aggregate seed={13} size={240} tone="blue" />
            </Plate>
            <Plate n="Plate IV" title="Colony, second field" note="A different seed, a new form.">
              <Colony seed={77} size={240} tone="moss" />
            </Plate>
          </div>
        </div>
      </section>

      {/* ---------- proof from the field ---------- */}
      <section className="sec">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">Proof from the field</span>
            <h2 className="d2">Land that was bare, five seasons on.</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "var(--s-5)",
              alignItems: "start",
            }}
          >
            <Fig src={PH.ranchRows} ar="ar-wide" drift />
            <div className="stack">
              <Photo src={PH.ranchAerial} ar="ar-tall" />
              <span className="cap">{CAPTION}</span>
            </div>
          </div>
          <div className="strip">
            <Photo src={PH.treePlanting1} ar="ar-1" />
            <Photo src={PH.treePlanting2} ar="ar-1" />
            <Photo src={PH.treePlanting3} ar="ar-1" />
            <Photo src={PH.vineyardCrew} ar="ar-1" />
            <Photo src={PH.panchamanaGarden} ar="ar-1" />
            <Photo src={PH.ranchAgro8} ar="ar-1" />
          </div>
        </div>
      </section>

      {/* ---------- stats on a dark band ---------- */}
      <section className="sec band--deep">
        <div className="wrap stack-6">
          <div className="g4">
            {[
              ["40", "years of teaching soil biology"],
              ["1986", "the year the work began"],
              ["REPLACE", "graduates working on land"],
              ["REPLACE", "countries represented"],
            ].map(([b, s]) => (
              <div className="stat" key={s}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <SporeRule seed={17} count={140} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <blockquote className="quote" style={{ margin: 0 }}>
              “Placeholder quotation from a graduate about what changed on their land.”
              <span className="quote__who">REPLACE_WITH_CAPTION</span>
            </blockquote>
            <div className="g3">
              <Plate n="Plate V" title="Colony">
                <Colony seed={101} size={200} tone="moss" />
              </Plate>
              <Plate n="Plate VI" title="Aggregate">
                <Aggregate seed={44} size={200} tone="moss" />
              </Plate>
              <Plate n="Plate VII" title="Hyphae">
                <Hyphae seed={202} width={200} height={200} from="bottom" tone="moss" />
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- legacy ---------- */}
      <section className="sec ovl">
        <div className="ovl__hy ovl__hy--r">
          <Hyphae seed={88} width={360} height={520} from="right" tone="olive" />
        </div>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <Photo src={PH.elainePortrait} ar="ar-tall" />
            <div className="stack">
              <span className="eyebrow">Legacy</span>
              <h2 className="d2">Dr. Elaine Ingham taught the world to look.</h2>
              <p>
                Placeholder paragraph on her research, the Soil Food Web method, and the teaching
                that followed it around the world.
              </p>
              <Link to="/elaine-ingham" className="btn">
                Her work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- audience split ---------- */}
      <section className="sec band--tint">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">Where do you come in</span>
            <h2 className="d2">Three ways in.</h2>
          </div>
          <div className="g3">
            <Link to="/learn" className="door">
              <img src={PH.vineyardCrew} alt="" loading="lazy" />
              <span className="door__t">
                <span className="door__k">Farm with biology</span>
                <span className="door__n">Growers, vineyards, market gardens</span>
              </span>
            </Link>
            <Link to="/projects" className="door">
              <img src={PH.treePlanting1} alt="" loading="lazy" />
              <span className="door__t">
                <span className="door__k">Restore your land</span>
                <span className="door__n">Degraded ground, reforestation, watersheds</span>
              </span>
            </Link>
            <Link to="/workshops" className="door">
              <img src={PH.studentCompostSqueeze} alt="" loading="lazy" />
              <span className="door__t">
                <span className="door__k">Bring it to your classroom</span>
                <span className="door__n">Teachers, students, community groups</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- one photograph, printed twice ---------- */}
      <section className="sec">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "var(--s-5)",
              alignItems: "end",
            }}
          >
            <div>
              <Photo src={PH.looseSoil} ar="ar-1" />
              <span className="cap">{CAPTION}</span>
            </div>
            <Shards src={PH.looseSoil} />
          </div>
        </div>
      </section>

      {/* ---------- donate band ---------- */}
      <section className="sec band--deep">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <div className="stack">
              <span className="eyebrow">Support the work</span>
              <h2 className="d2">Scholarships, field days, free curriculum.</h2>
              <p style={{ color: "var(--sage)" }}>
                Placeholder line about where a gift goes and who it reaches.
              </p>
              <div>
                <Link to="/donate" className="btn btn--give">
                  Donate
                </Link>
              </div>
            </div>
            <Field src={PH.microscopyField} moss />
          </div>
        </div>
      </section>
    </Site>
  );
}
