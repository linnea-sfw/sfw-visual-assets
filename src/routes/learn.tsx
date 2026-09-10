import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, Slot, Masthead, Shards } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony } from "@/components/site/organisms";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn Soil Biology — Courses, Webinars and Scholarships" },
      {
        name: "description",
        content:
          "You can learn this with your own hands: courses, webinars, workshops and scholarships in soil biology, composting and microscopy.",
      },
      { property: "og:title", content: "Learn soil biology with your own hands" },
      {
        property: "og:description",
        content: "Courses, webinars, workshops and scholarships from the Soil Food Web Foundation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Learn,
});

const COURSES = [
  { t: "Foundations of the soil food web", img: PH.studentCompostSqueeze, k: "Self-paced" },
  { t: "Compost, made properly", img: PH.studentCompostMoving, k: "6 weeks" },
  { t: "Sampling and assessment", img: PH.shovelBag, k: "4 weeks" },
  { t: "Microscopy, first term", img: PH.testTubes, k: "8 weeks" },
];

function Learn() {
  return (
    <Site>
      <section className="sec--tight ovl">
        <div className="ovl__hy ovl__hy--r">
          <Hyphae seed={144} width={380} height={560} from="right" tone="olive" />
        </div>
        <div className="wrap">
          <Masthead
            eyebrow="Learn"
            title="You can learn this with your own hands."
            lede="Placeholder standfirst. Everything we teach is something you can do on a kitchen table, a compost heap or a field edge."
          />
        </div>
      </section>

      <section className="wrap sec--tight">
        <Photo src={PH.studentCompostMoving} ar="ar-band" drift />
        <span className="cap">{CAPTION}</span>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <h2 className="d3">Courses</h2>
          <div className="g4">
            {COURSES.map((c) => (
              <article className="card" key={c.t}>
                <Photo src={c.img} ar="ar-4x3" />
                <span className="tag">{c.k}</span>
                <h3>{c.t}</h3>
                <p>Placeholder course description, two short lines at most.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <SporeRule seed={55} />
      </div>

      <section className="sec band--tint">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <Shards src={PH.studentCompostSqueeze} />
            <div className="stack">
              <span className="eyebrow">How it is taught</span>
              <h2 className="d2">Look first. Then read. Then act.</h2>
              <p>
                Placeholder paragraph on the teaching sequence and the fact that every module ends
                with something you did outdoors.
              </p>
              <Link to="/workshops" className="btn">
                Workshops in the field
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
            <div className="stack">
              <span className="eyebrow">Webinars</span>
              <h3 className="d3">Free, monthly, recorded.</h3>
              <Fig src={PH.elaineTeaching} ar="ar-wide" />
            </div>
            <div className="stack">
              <span className="eyebrow">Scholarships</span>
              <h3 className="d3">Nobody is priced out.</h3>
              <p>Placeholder paragraph on eligibility and how to apply.</p>
              <Plate n="Plate XXX" title="Colony" note="Riso olive on paper.">
                <Colony seed={1234} size={220} tone="gold" />
              </Plate>
            </div>
          </div>
          <Slot label="Consultant paths — owned elsewhere" />
        </div>
      </section>
    </Site>
  );
}
