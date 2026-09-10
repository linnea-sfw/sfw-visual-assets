import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, VideoFrame, Masthead, Slot } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { SporeRule, Plate, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — It Works on Real Land" },
      {
        name: "description",
        content:
          "Farms, vineyards, reforestation and watershed projects using soil biology, with field records and filmed case studies.",
      },
      { property: "og:title", content: "Projects — it works on real land" },
      {
        property: "og:description",
        content: "Farms, vineyards and reforestation projects rebuilt with soil biology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Site>
      <section className="sec--tight">
        <div className="wrap">
          <Masthead
            eyebrow="Projects"
            title="It works on real land."
            lede="Placeholder standfirst. Deserts, vineyards, market gardens and railway verges — the same method, different ground."
          />
        </div>
      </section>

      <section className="bleed">
        <Photo src={PH.ranchAerial2} ar="ar-band" drift />
      </section>
      <div className="wrap">
        <span className="cap">{CAPTION}</span>
      </div>

      <section className="sec">
        <div className="wrap stack-6">
          <div className="g2">
            <Link to="/projects/rancho-cacachilas" className="card">
              <Photo src={PH.ranchRows} ar="ar-4x3" />
              <span className="tag">Baja California Sur</span>
              <h3 className="d3">Rancho Cacachilas</h3>
              <p>Placeholder line on the desert agroforestry work.</p>
            </Link>
            <article className="card">
              <Photo src={PH.panchamanaGarden} ar="ar-4x3" />
              <span className="tag">Reforestation</span>
              <h3 className="d3">Panchamana</h3>
              <p>Placeholder line on tree planting and establishment.</p>
            </article>
          </div>

          <SporeRule seed={64} />

          <div className="g3">
            <Fig src={PH.vineyardTractor} ar="ar-4x3" />
            <Fig src={PH.vineyardFungus} ar="ar-4x3" />
            <Fig src={PH.ranchAgro2} ar="ar-4x3" />
          </div>
        </div>
      </section>

      <section className="sec band--tint">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">Case studies</span>
            <h2 className="d2">Filmed on the ground.</h2>
          </div>
          <div className="g2">
            <VideoFrame src={PH.ranchAerial} title="Rancho Cacachilas — five seasons" ar="ar-4x3" />
            <VideoFrame src={PH.treePlanting3} title="Panchamana — planting out" ar="ar-4x3" />
          </div>
          <Slot label="Consultant paths — owned elsewhere" />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <Plate n="Plate LX" title="Aggregate" note="What good structure looks like drawn.">
              <Aggregate seed={606} size={260} tone="olive" />
            </Plate>
            <div className="stack">
              <span className="eyebrow">Professional directory</span>
              <h2 className="d3">Find someone near you.</h2>
              <p>Placeholder line about trained practitioners and how to reach them.</p>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
}
