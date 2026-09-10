import { createFileRoute } from "@tanstack/react-router";
import { Site, Photo, Fig, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony, Aggregate } from "@/components/site/organisms";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — What Your Money Grows" },
      {
        name: "description",
        content:
          "Give to a 501(c)(3) science education nonprofit: scholarships, free field days, microscopes for classrooms and open curriculum.",
      },
      { property: "og:title", content: "Donate — what your money grows" },
      {
        property: "og:description",
        content: "Scholarships, field days, microscopes for classrooms and open curriculum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Donate,
});

function Donate() {
  return (
    <Site>
      <section className="sec--tight ovl">
        <div className="ovl__hy ovl__hy--r">
          <Hyphae seed={999} width={360} height={520} from="right" tone="gold" />
        </div>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "end",
            }}
          >
            <Masthead
              eyebrow="Donate"
              title="What your money grows."
              lede="Placeholder standfirst. Every gift buys teaching: a scholarship seat, a field day, a microscope that stays in a classroom."
            />
            <Photo src={PH.planting} ar="ar-4x3" drift />
          </div>
          <div style={{ marginTop: "var(--s-5)", display: "flex", gap: "var(--s-3)" }}>
            <a className="btn btn--give" href="#">
              Donate
            </a>
          </div>
        </div>
      </section>

      <section className="wrap sec--tight">
        <SporeRule seed={7} count={130} />
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <div className="g3">
            <Fig src={PH.handsRoots} ar="ar-1" caption="Seedlings — REPLACE_WITH_CAPTION" />
            <Fig src={PH.handScooping} ar="ar-1" caption="Hands — REPLACE_WITH_CAPTION" />
            <Fig src={PH.panchamanaGarden} ar="ar-1" caption="Green land — REPLACE_WITH_CAPTION" />
          </div>
        </div>
      </section>

      <section className="sec band--deep">
        <div className="wrap stack-6">
          <div className="g3">
            {[
              ["Scholarship seat", 12],
              ["A free field day", 424],
              ["A classroom microscope", 848],
            ].map(([t, seed]) => (
              <Plate
                key={t as string}
                n="Gift"
                title={t as string}
                note="Placeholder line on what this covers."
              >
                {(seed as number) % 2 ? (
                  <Colony seed={seed as number} size={220} tone="moss" />
                ) : (
                  <Aggregate seed={seed as number} size={220} tone="moss" />
                )}
              </Plate>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <blockquote className="quote" style={{ margin: 0 }}>
              “Placeholder line from someone whose seat was paid for.”
              <span className="quote__who">REPLACE_WITH_CAPTION</span>
            </blockquote>
            <Photo src={PH.treePlanting2} ar="ar-4x3" />
          </div>
        </div>
      </section>

      <section className="bleed">
        <Photo src={PH.ranchRows} ar="ar-band" drift />
      </section>
      <div className="wrap">
        <span className="cap">{CAPTION}</span>
      </div>
    </Site>
  );
}
