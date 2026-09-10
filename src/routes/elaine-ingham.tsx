import { createFileRoute } from "@tanstack/react-router";
import { Site, Photo, Fig, Field, Masthead } from "@/components/site/shell";
import { PH, CAPTION } from "@/components/site/photos";
import { Hyphae, SporeRule, Plate, Colony } from "@/components/site/organisms";

export const Route = createFileRoute("/elaine-ingham")({
  head: () => ({
    meta: [
      { title: "Dr. Elaine Ingham — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "The microbiologist who taught the world to put soil under a microscope: her research, her teaching, and the method that carries her name.",
      },
      { property: "og:title", content: "Dr. Elaine Ingham" },
      {
        property: "og:description",
        content: "The scientist who taught the world to look at soil under a microscope.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Elaine,
});

function Elaine() {
  return (
    <Site>
      <section className="sec--tight">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "var(--s-6)",
              alignItems: "end",
            }}
          >
            <div className="stack">
              <span className="eyebrow">Founder · Microbiologist</span>
              <h1 className="d1">Dr. Elaine Ingham</h1>
              <p className="lede">
                Placeholder standfirst. She put a microscope between a farmer and their own soil,
                and the argument has not needed changing since.
              </p>
            </div>
            <Photo src={PH.elaineScope} ar="ar-4x3" drift />
          </div>
        </div>
      </section>

      {/* portraits beside microscopy */}
      <section className="sec">
        <div className="wrap stack-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "var(--s-5)",
              alignItems: "center",
            }}
          >
            <Fig src={PH.elaineScope2} ar="ar-tall" />
            <Field src={PH.microscopyField} />
            <Fig src={PH.elaineNematode} ar="ar-tall" />
          </div>
          <SporeRule seed={73} />
        </div>
      </section>

      <section className="sec band--deep ovl">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              alignItems: "center",
            }}
          >
            <blockquote className="quote" style={{ margin: 0 }}>
              “Placeholder quotation in her own words about what a microscope changes.”
              <span className="quote__who">REPLACE_WITH_CAPTION</span>
            </blockquote>
            <Photo src={PH.elaineTalking} ar="ar-4x3" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack-6">
          <div className="stack">
            <span className="eyebrow">The research</span>
            <h2 className="d2">Counting what is there, instead of guessing.</h2>
            <p>
              Placeholder paragraph on the assay work, the organism groups, and why the ratios
              matter to a grower.
            </p>
          </div>
          <div className="g3">
            <Plate n="Plate XX" title="Colony" note="First field.">
              <Colony seed={5} size={220} tone="olive" />
            </Plate>
            <Plate n="Plate XXI" title="Hyphae" note="Second field.">
              <Hyphae seed={97} width={220} height={220} from="bottom" tone="blue" />
            </Plate>
            <Plate n="Plate XXII" title="Colony" note="Third field.">
              <Colony seed={512} size={220} tone="head" />
            </Plate>
          </div>
        </div>
      </section>

      <section className="wrap sec--tight">
        <Photo src={PH.elaineSampleBag} ar="ar-band" drift />
        <span className="cap">{CAPTION}</span>
      </section>
    </Site>
  );
}
