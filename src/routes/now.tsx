import { createFileRoute } from "@tanstack/react-router";
import { Site, Photo, Fig, VideoFrame, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { SporeRule } from "@/components/site/organisms";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — What the Network Is Doing This Month" },
      {
        name: "description",
        content:
          "A running page of recent workshops, field days and events from the Soil Food Web Foundation and the wider network.",
      },
      { property: "og:title", content: "Now" },
      {
        property: "og:description",
        content: "Recent workshops, field days and events from across the network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Now,
});

const FEED = [
  PH.wildSoilsEvent,
  PH.groupPlanting,
  PH.treePlanting1,
  PH.studentCompostSqueeze,
  PH.vineyardCrew,
  PH.treePlanting3,
  PH.mulchBucket,
  PH.panchamanaGarden,
];

function Now() {
  return (
    <Site>
      <section className="sec--tight">
        <div className="wrap">
          <Masthead
            eyebrow="Now"
            title="This month, on the ground."
            lede="Placeholder standfirst. A running record of what the network has been doing, most recent first."
          />
        </div>
      </section>

      <section className="wrap sec--tight">
        <VideoFrame src={PH.wildSoilsEvent} title="Field footage — New Mexico workshop" />
        <span className="cap">{CAPTION}</span>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <SporeRule seed={11} />
          <div className="strip">
            {FEED.map((src, i) => (
              <Photo key={i} src={src} ar="ar-1" />
            ))}
          </div>
          <div className="g3">
            {FEED.slice(0, 6).map((src, i) => (
              <article className="card" key={i}>
                <Fig src={src} ar={i % 3 === 1 ? "ar-tall" : "ar-4x3"} />
                <span className="tag">REPLACE — date</span>
                <h3>Placeholder note from the field</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Site>
  );
}
