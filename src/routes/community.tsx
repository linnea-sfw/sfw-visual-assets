import { createFileRoute, Link } from "@tanstack/react-router";
import { Site, Photo, Fig, Slot, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony } from "@/components/site/organisms";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — People Everywhere Are Doing This" },
      {
        name: "description",
        content:
          "A world map of practitioners, recent field days, news from the network, and an open invitation to join in.",
      },
      { property: "og:title", content: "Community" },
      {
        property: "og:description",
        content: "A world map of practitioners, recent field days, and an open invitation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <Site>
      <section className="sec--tight ovl">
        <div className="ovl__hy ovl__hy--l">
          <Hyphae seed={321} width={360} height={520} from="left" tone="olive" />
        </div>
        <div className="wrap">
          <Masthead
            eyebrow="Community"
            title="People everywhere are doing this right now."
            lede="Placeholder standfirst. Field days, compost heaps, borrowed microscopes and a network that keeps growing."
          />
        </div>
      </section>

      <section className="wrap sec--tight">
        <Photo src={PH.groupPlanting} ar="ar-band" drift />
        <span className="cap">{CAPTION}</span>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <Slot label="Practitioner map — owned elsewhere" />
          <SporeRule seed={19} />
          <div className="g3">
            <Fig src={PH.wildSoilsEvent} ar="ar-4x3" />
            <Fig src={PH.treePlanting2} ar="ar-4x3" />
            <Fig src={PH.studentCompostMoving} ar="ar-4x3" />
          </div>
        </div>
      </section>

      <section className="marq">
        <div className="wrap">
          <div className="marq__t">
            {Array.from({ length: 2 }, (_, r) => (
              <span key={r} style={{ display: "flex", gap: "var(--s-6)" }}>
                {Array.from({ length: 8 }, (_, i) => (
                  <span key={i}>REPLACE — partner name</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <h2 className="d3">News from the network</h2>
          <div className="rows">
            {[PH.panchamanaGarden, PH.vineyardCrew, PH.planting, PH.mulchBucket].map((src, i) => (
              <div className="row" key={i}>
                <Photo src={src} ar="ar-4x3" />
                <div>
                  <h3 style={{ fontSize: "1.1rem" }}>Placeholder headline for a network story</h3>
                  <p style={{ fontSize: "0.94rem", color: "var(--ink-soft)" }}>
                    REPLACE_WITH_CAPTION
                  </p>
                </div>
                <Link to="/now" className="btn">
                  Read
                </Link>
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
              <span className="eyebrow">Join</span>
              <h2 className="d2">Put your ground on the map.</h2>
              <p style={{ color: "var(--sage)" }}>Placeholder line on how to join the network.</p>
              <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
                <a className="btn btn--onDeep" href="#">
                  Join the network
                </a>
                <Link to="/donate" className="btn btn--give">
                  Donate
                </Link>
              </div>
            </div>
            <Plate n="Plate XC" title="Colony" note="One heap, one week in.">
              <Colony seed={4242} size={240} tone="moss" />
            </Plate>
          </div>
        </div>
      </section>
    </Site>
  );
}
