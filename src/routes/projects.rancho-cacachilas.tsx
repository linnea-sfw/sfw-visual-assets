import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, VideoFrame, Shards } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony } from "@/components/site/organisms";

export const Route = createFileRoute("/projects/rancho-cacachilas")({
  head: () => ({
    meta: [
      { title: "Rancho Cacachilas — Case Study — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "A desert ranch in Baja California Sur rebuilt row by row: compost, cover, and a biology-first plan, filmed across five seasons.",
      },
      { property: "og:title", content: "Rancho Cacachilas — case study" },
      {
        property: "og:description",
        content: "A desert ranch rebuilt row by row with soil biology, filmed across five seasons.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  return (
    <Site>
      <section className="sec--tight">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "end",
            }}
          >
            <div className="stack">
              <span className="eyebrow">Case study · Baja California Sur</span>
              <h1 className="d1">Rancho Cacachilas</h1>
              <p className="lede">
                Placeholder standfirst. Dry ground, thin topsoil and a five-season plan built around
                compost and cover.
              </p>
            </div>
            <Photo src={PH.ranchAerial} ar="ar-tall" drift />
          </div>
        </div>
      </section>

      <section className="sec--tight">
        <div className="wrap">
          <VideoFrame src={PH.ranchRows} title="Case study film — Rancho Cacachilas" />
          <span className="cap">{CAPTION}</span>
        </div>
      </section>

      <section className="sec ovl">
        <div className="ovl__hy ovl__hy--r">
          <Hyphae seed={2024} width={360} height={520} from="right" tone="olive" />
        </div>
        <div className="wrap stack-6">
          <div className="g2">
            <Fig src={PH.ranchAgro8} ar="ar-4x3" caption="Before — REPLACE_WITH_CAPTION" />
            <Fig src={PH.ranchAgro2} ar="ar-4x3" caption="After — REPLACE_WITH_CAPTION" />
          </div>
          <SporeRule seed={83} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <div className="stack">
              <span className="eyebrow">What they did</span>
              <h2 className="d2">Compost first, then cover, then patience.</h2>
              <p>Placeholder paragraph on the sequence of interventions and the timeline.</p>
            </div>
            <Plate n="Plate LXX" title="Colony" note="Field sample, season five.">
              <Colony seed={5150} size={260} tone="head" />
            </Plate>
          </div>
        </div>
      </section>

      <section className="bleed">
        <Photo src={PH.ranchAerial2} ar="ar-band" drift />
      </section>

      <section className="sec">
        <div className="wrap">
          <div
            style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--s-5)", alignItems: "end" }}
          >
            <Shards src={PH.ranchRows} />
            <div className="stack">
              <blockquote className="quote" style={{ margin: 0 }}>
                “Placeholder quotation from the ranch manager.”
                <span className="quote__who">REPLACE_WITH_CAPTION</span>
              </blockquote>
              <Link to="/projects" className="btn">
                All projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Site>
  );
}
