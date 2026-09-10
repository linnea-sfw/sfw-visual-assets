import { createFileRoute } from "@tanstack/react-router";
import { Site, Photo, Fig, VideoFrame, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { SporeRule, Plate, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Field Workshops — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "Two and three day field workshops: building compost, sampling ground, mapping a site and reading slides, taught outdoors with your hands in it.",
      },
      { property: "og:title", content: "Field workshops" },
      {
        property: "og:description",
        content: "Compost, sampling, mapping and microscopy, taught outdoors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Workshops,
});

const DATES = [
  { img: PH.wildSoilsEvent, t: "Wild Soils field day" },
  { img: PH.groupPlanting, t: "Planting and establishment" },
  { img: PH.studentCompostMoving, t: "Compost intensive" },
  { img: PH.vineyardCrew, t: "Vineyard workshop" },
];

function Workshops() {
  return (
    <Site>
      <section className="sec--tight">
        <div className="wrap">
          <Masthead
            eyebrow="Workshops"
            title="Outdoors, with your hands in it."
            lede="Placeholder standfirst. Small groups, real ground, and a microscope on the table by the end of the second day."
          />
        </div>
      </section>

      <section className="wrap">
        <VideoFrame src={PH.wildSoilsEvent} title="Field footage — New Mexico workshop" />
        <span className="cap">{CAPTION}</span>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <div className="g3">
            <Fig src={PH.studentCompostSqueeze} ar="ar-tall" />
            <Fig src={PH.mulchBucket} ar="ar-tall" />
            <Fig src={PH.planting} ar="ar-tall" />
          </div>
          <SporeRule seed={121} />
          <h2 className="d3">Upcoming</h2>
          <div className="rows">
            {DATES.map((d) => (
              <div className="row" key={d.t}>
                <Photo src={d.img} ar="ar-4x3" />
                <div>
                  <h3 style={{ fontSize: "1.1rem" }}>{d.t}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    REPLACE_WITH_CAPTION — place and dates.
                  </p>
                </div>
                <a className="btn" href="#">
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec band--deep">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <div className="stack">
              <span className="eyebrow">What you take home</span>
              <h2 className="d2">A method you can repeat without us.</h2>
              <p style={{ color: "var(--sage)" }}>Placeholder list of outcomes, three short lines.</p>
            </div>
            <Plate n="Plate XL" title="Aggregate" note="Drawn on the day.">
              <Aggregate seed={909} size={240} tone="moss" />
            </Plate>
          </div>
        </div>
      </section>
    </Site>
  );
}
