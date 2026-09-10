import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Pigment — three versions | Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "Three versions of the Pigment direction for the Soil Food Web Foundation, each balancing art and science differently: Assay, Horizon and Field Index.",
      },
      { property: "og:title", content: "Pigment — three versions" },
      {
        property: "og:description",
        content: "Colour taken out of the photograph itself, on white, with the rigour of a lab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Brand,
});

const I = {
  compost: "/img/hand-of-compost.jpg",
  roots: "/img/hand-soil-roots-fungi.jpg",
  worm: "/img/hand-wet-dirt-worm.jpg",
  fungi: "/img/fungi-in-under-grape-soil.jpg",
  spores: "/img/fungal-spores-in-suspension.jpg",
  york1: "/img/harringtons-organic-land-care-york-farms-1-768x1024.jpg",
  york2: "/img/harringtons-organic-land-care-brick-york-farms-2-768x1024.jpg",
  york3: "/img/harringtons-organic-land-care-brick-york-farms-3-768x1024.jpg",
  york4: "/img/harringtons-organic-land-care-brick-york-farms-4-768x1024.jpg",
  loose: "/img/handling-loose-soil.jpg",
  red: "/img/red-soil-hand.jpg",
  fist: "/img/fist-of-dry-soil.jpg",
  dirty: "/img/2-dirty-hands.jpg",
  clasped: "/img/2-hands-clasped-holding-plant-roots.jpg",
  garden: "/img/erc-panchamana-garden.jpg",
  rows: "/img/erc-rancho-cacachilas-agro.jpg",
  rows2: "/img/erc-rancho-cacachilas-agro2.jpg",
  aerial: "/img/erc-rancho-cacachilas-aerial-shot.jpg",
  aerial2: "/img/erc-rancho-cacachilas-aerial-2.jpg",
  planting: "/img/2-hands-planting-shrub.jpg",
  student: "/img/ctpfw-student-squeezing-compost-1.jpg",
  student2: "/img/ctpfw-student-moving-compost-1.jpg",
  scoop: "/img/hand-scooping-planter-bed-soil.jpg",
  tube: "/img/soil-sample-close-up-test-tube.jpg",
  kit: "/img/Sampling%20equipment.jpg",
  glass: "/img/Test%20tubes%20with%20sample_.jpg",
  scope: "/img/Dr%20Elaine%20Ingham%20with%20Microscope.jpg",
  vine: "/img/el-nino-2017-tractor-in-mud-in-vineyard.jpg",
  tree: "/img/erc-panchmana-treeplanting-fb-img-1666270907385.jpg",
  mulch: "/img/gloved-hands-red-bucket-mulch.jpg",
  plant: "/img/hvdb-inplanten-002.jpg",
};

function Chips({ set }: { set: [string, string][] }) {
  return (
    <div className="pg-chips">
      {set.map(([hex, name]) => (
        <div key={hex + name} className="pg-chip">
          <i style={{ background: hex }} />
          <b>{name}</b>
          <span>{hex.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

function Label({ k, v }: { k: string; v: string }) {
  return (
    <div className="pg-lab">
      <span>{k}</span>
      <b>{v}</b>
    </div>
  );
}

function FootageFrame({ src, note }: { src: string; note: string }) {
  return (
    <figure className="pg-foot">
      <div className="pg-foot__win">
        <img src={src} alt="" loading="lazy" />
        <span className="pg-foot__scan" />
        <span className="pg-foot__dot" />
      </div>
      <figcaption>
        <b>Footage frame — placeholder</b>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

function Brand() {
  return (
    <div className="pgm">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className="pgm-top">
        <div className="pgm-top__in">
          <b>Soil Food Web Foundation</b>
          <span>Pigment — three versions</span>
        </div>
      </header>

      {/* ============ 01 ASSAY ============ */}
      <section className="v v--assay">
        <div className="v-head">
          <span className="v-num">Version 01</span>
          <h2>Pigment / Assay</h2>
          <p>
            The most scientific of the three. White page, one measured grid, every photograph
            entered as a specimen with its colour read off and recorded beside it. Painterly colour,
            laboratory manners.
          </p>
        </div>

        {/* hero */}
        <div className="as-hero">
          <div className="as-hero__grid" />
          <div className="as-hero__l">
            <span className="as-kick">Reading colour from soil life</span>
            <h1>
              Every colour on this page
              <em> came out of the soil.</em>
            </h1>
            <p>
              Nothing here is tinted. Each swatch is lifted from the photograph beside it and
              recorded as it was found.
            </p>
            <div className="as-cta">
              <a href="#a">See the method</a>
              <a href="#a" className="ghost">
                Study with us
              </a>
            </div>
          </div>
          <div className="as-hero__r">
            <figure className="as-spec">
              <img src={I.compost} alt="A hand holding finished compost" />
              <span className="as-cross" />
              <div className="as-read">
                {["#5C4433", "#8B6A46", "#3A2A1E", "#A98B62"].map((h, n) => (
                  <i key={h} style={{ background: h, animationDelay: `${n * 4}s` }} />
                ))}
              </div>
            </figure>
            <div className="as-meta">
              <Label k="Specimen" v="Finished compost, in hand" />
              <Label k="Source" v="Foundation archive" />
              <Label k="Colour read" v="four points, live" />
            </div>
          </div>
        </div>

        {/* colour set */}
        <div className="v-block" id="a">
          <h3>Colour set</h3>
          <p className="v-note">
            White is the page. Beige is only ever a shape. The saturated colours are read off
            photographs of soil, fungi and roots.
          </p>
          <Chips
            set={[
              ["#FFFFFF", "Page white"],
              ["#EDE6DA", "Panel beige"],
              ["#156826", "Classic green"],
              ["#22371F", "Deep green"],
              ["#4F3433", "Soil brown"],
              ["#3780B8", "Education blue"],
              ["#C9A227", "Harvest gold"],
              ["#111111", "Record black"],
            ]}
          />
        </div>

        {/* beige panel binding three images */}
        <div className="v-block">
          <h3>Panel, binding three specimens</h3>
          <div className="as-panel">
            <div className="as-panel__bg" />
            <figure>
              <img src={I.york1} alt="Soil sample close up" />
              <figcaption>Plate i</figcaption>
            </figure>
            <figure>
              <img src={I.york3} alt="Soil sample close up" />
              <figcaption>Plate ii</figcaption>
            </figure>
            <figure>
              <img src={I.york4} alt="Soil sample close up" />
              <figcaption>Plate iii</figcaption>
            </figure>
          </div>
        </div>

        {/* type */}
        <div className="v-block">
          <h3>Type pairing</h3>
          <div className="as-type">
            <div>
              <span className="v-note">Headline — Bricolage Grotesque</span>
              <p className="as-type__a">Soil is not dirt. It is a population.</p>
            </div>
            <div>
              <span className="v-note">Text and data — Space Grotesk</span>
              <p className="as-type__b">
                Set tight, with numerals aligned. Labels in small caps, letterspaced, so a caption
                reads like a record rather than a caption.
              </p>
            </div>
          </div>
        </div>

        {/* animations */}
        <div className="v-block">
          <h3>Live animation</h3>
          <div className="as-anim">
            <div className="as-card">
              <div className="as-slide">
                <img src={I.spores} alt="Fungal spores in suspension" />
                <span className="as-slide__lens" />
              </div>
              <b>Focus pull</b>
              <span>The frame settles into focus, as through an objective. 18s.</span>
            </div>
            <div className="as-card">
              <div className="as-count">
                <span className="as-tick" />
                <em>Colour sampled</em>
                <div className="as-bars">
                  {[62, 41, 78, 33, 55].map((w, n) => (
                    <i key={n} style={{ ["--w" as string]: w + "%", animationDelay: `${n * 2}s` }} />
                  ))}
                </div>
              </div>
              <b>Read-out</b>
              <span>Bars extend and hold, like a slow instrument. 24s.</span>
            </div>
            <FootageFrame src={I.student} note="Workshop clip, silent loop, held inside the frame" />
          </div>
        </div>

        {/* instagram */}
        <div className="v-block">
          <h3>Instagram post</h3>
          <div className="as-ig">
            <div className="ig">
              <div className="ig__im">
                <img src={I.fungi} alt="Fungi in soil beneath grapevines" />
                <span className="ig__sweep" />
                <span className="ig__chipA" />
                <span className="ig__chipB" />
              </div>
              <div className="ig__cap">
                <b>Colour, read from the photograph</b>
                <span>Two points, sampled live.</span>
              </div>
            </div>
            <p className="v-note">
              A short silent loop: the sample points travel across the frame and the two chips take
              their colour from where they land.
            </p>
          </div>
        </div>

        {/* invented moments */}
        <div className="v-block">
          <h3>Two moments of our own</h3>
          <div className="as-inv">
            <div className="as-ledger">
              <div className="as-ledger__hd">
                <span>No.</span>
                <span>Specimen</span>
                <span>Colour</span>
              </div>
              {[
                ["001", "Roots and fungi, in hand", I.roots, "#6C4A2E"],
                ["002", "Dry soil, closed fist", I.fist, "#9A7550"],
                ["003", "Wet soil, earthworm", I.worm, "#4A3B2C"],
                ["004", "Loose soil, worked", I.loose, "#7B5F42"],
              ].map(([n, t, src, hex]) => (
                <div className="as-row" key={n}>
                  <span>{n}</span>
                  <b>{t}</b>
                  <i style={{ background: hex }} />
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
              <p className="v-note">
                Specimen ledger. Hovering a row brings its photograph out from behind the number —
                the archive answering back.
              </p>
            </div>
            <div className="as-cal">
              <div className="as-cal__im">
                <img src={I.scope} alt="Dr Elaine Ingham at a microscope" />
                <span className="as-cal__rule" />
              </div>
              <b>Calibration edge</b>
              <span>
                A measured rule travels the frame once a minute and stops, marking the crop rather
                than decorating it.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 HORIZON ============ */}
      <section className="v v--hor">
        <div className="v-head">
          <span className="v-num">Version 02</span>
          <h2>Pigment / Horizon</h2>
          <p>
            The middle balance. White above, and as you go down the page the ground behind the
            content darkens through the colours of a soil profile, then returns to white. Cinematic,
            but the labels never leave.
          </p>
        </div>

        <div className="hz-descent">
          <div className="hz-sky">
            <div className="hz-hero">
              <span className="hz-kick">Scroll: the ground changes colour beneath you</span>
              <h1>
                Down through the
                <br />
                <em>living horizon</em>
              </h1>
              <figure className="hz-hero__im">
                <img src={I.aerial} alt="Aerial view of restored ranch land" />
                <span className="hz-breathe" />
              </figure>
              <div className="hz-scale">
                {["Surface", "Rooting", "Weathering", "Parent"].map((s, n) => (
                  <div key={s}>
                    <i style={{ animationDelay: `${n * 3}s` }} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hz-layer hz-l1">
            <div className="hz-two">
              <figure>
                <img src={I.clasped} alt="Two hands holding plant roots" />
                <figcaption>Roots, held</figcaption>
              </figure>
              <div>
                <h3>Surface</h3>
                <p>
                  Litter and the first centimetres. Photographs keep their own colour; the ground
                  behind them takes the colour of the layer.
                </p>
                <Label k="Layer tone" v="#EFE7DA" />
              </div>
            </div>
          </div>

          <div className="hz-layer hz-l2">
            <div className="hz-wide">
              <figure>
                <img src={I.rows} alt="Rows of restored agricultural land" />
              </figure>
              <div className="hz-bind">
                <div className="hz-bind__bg" />
                <img src={I.tree} alt="Tree planting" />
                <img src={I.plant} alt="Group planting" />
                <img src={I.mulch} alt="Gloved hands with mulch" />
              </div>
            </div>
          </div>

          <div className="hz-layer hz-l3">
            <div className="hz-quiet">
              <figure>
                <img src={I.red} alt="Red soil in a hand" />
                <span className="hz-drift" />
              </figure>
              <p>
                One photograph, one sentence, a great deal of room. The colour of the page is the
                colour of the depth you have reached.
              </p>
            </div>
          </div>

          <div className="hz-layer hz-l4">
            <FootageFrame src={I.vine} note="Field clip, silent loop, contained" />
          </div>

          <div className="hz-return">
            <p>…and back to white.</p>
          </div>
        </div>

        <div className="v-block">
          <h3>Colour set</h3>
          <Chips
            set={[
              ["#FFFFFF", "Page white"],
              ["#EFE7DA", "Surface"],
              ["#C89B7B", "Natural tan"],
              ["#8B5E3C", "Weathering"],
              ["#4F3433", "Soil brown"],
              ["#22371F", "Deep green"],
              ["#156826", "Classic green"],
              ["#3780B8", "Education blue"],
            ]}
          />
        </div>

        <div className="v-block">
          <h3>Type pairing</h3>
          <div className="hz-type">
            <p className="hz-type__a">Newsreader, light, for the voice.</p>
            <p className="hz-type__b">
              DM Sans for everything that has to be exact: labels, sources, figures and buttons.
            </p>
          </div>
        </div>

        <div className="v-block">
          <h3>Live animation</h3>
          <div className="as-anim">
            <div className="as-card">
              <div className="hz-grass">
                <img src={I.garden} alt="Garden under restoration" />
                <span />
              </div>
              <b>Wind pass</b>
              <span>The frame breathes very slowly, as grass does. 40s.</span>
            </div>
            <div className="as-card">
              <div className="hz-core">
                <span className="hz-core__band b1" />
                <span className="hz-core__band b2" />
                <span className="hz-core__band b3" />
                <span className="hz-core__band b4" />
              </div>
              <b>Core sample</b>
              <span>Layers fill downward in sequence, then hold. 32s.</span>
            </div>
            <div className="as-card">
              <div className="hz-rev">
                <img src={I.scoop} alt="A hand scooping soil" />
                <span />
              </div>
              <b>Reveal</b>
              <span>The photograph arrives through a widening aperture. 20s.</span>
            </div>
          </div>
        </div>

        <div className="v-block">
          <h3>Instagram post</h3>
          <div className="as-ig">
            <div className="ig ig--hz">
              <div className="ig__im">
                <img src={I.york2} alt="Soil close up" />
                <span className="hz-ig__wipe" />
              </div>
              <div className="ig__cap">
                <b>One metre down</b>
                <span>The ground changes colour as you go.</span>
              </div>
            </div>
            <p className="v-note">
              The loop wipes the frame downward through the profile colours and resets to white.
            </p>
          </div>
        </div>

        <div className="v-block">
          <h3>Two moments of our own</h3>
          <div className="as-inv">
            <div className="hz-strat">
              {[I.york1, I.york3, I.york4, I.york2].map((s, n) => (
                <div key={s} style={{ animationDelay: `${n * 5}s` }}>
                  <img src={s} alt="" loading="lazy" />
                </div>
              ))}
              <p className="v-note">
                Strata band. Four photographs stacked as horizons, each drifting at its own pace so
                the wall never sits still.
              </p>
            </div>
            <div className="hz-weather">
              <img src={I.aerial2} alt="Aerial of restored land" />
              <div className="hz-weather__sky" />
              <b>Sky over land</b>
              <span>Light crosses the aerial once every 48 seconds, as a day would.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 FIELD INDEX ============ */}
      <section className="v v--idx">
        <div className="v-head">
          <span className="v-num">Version 03</span>
          <h2>Pigment / Field Index</h2>
          <p>
            The most painterly, held in check by an index. Enormous crops and full-bleed colour, but
            every single thing on the page is numbered, filed and cross-referenced.
          </p>
        </div>

        <div className="ix-hero">
          <div className="ix-hero__im">
            <img src={I.dirty} alt="Two hands covered in soil" />
            <span className="ix-hero__crop" />
          </div>
          <div className="ix-hero__t">
            <span className="ix-no">Fig. 001</span>
            <h1>
              We teach people
              <br />
              to <em>look</em>.
            </h1>
            <div className="ix-run">
              {["compost", "microscopy", "sampling", "restoration", "teaching"].map((w) => (
                <span key={w}>{w}</span>
              ))}
              {["compost", "microscopy", "sampling", "restoration", "teaching"].map((w) => (
                <span key={w + "2"}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="v-block">
          <h3>Colour set</h3>
          <Chips
            set={[
              ["#FFFFFF", "Page white"],
              ["#EDE6DA", "Panel beige"],
              ["#111111", "Index black"],
              ["#156826", "Classic green"],
              ["#59A66C", "Food web green"],
              ["#C9A227", "Harvest gold"],
              ["#4F3433", "Soil brown"],
              ["#3780B8", "Education blue"],
            ]}
          />
        </div>

        <div className="v-block">
          <h3>Type pairing</h3>
          <div className="ix-type">
            <p className="ix-type__a">Newsreader italic, very large, for a single held thought.</p>
            <p className="ix-type__b">
              MONTSERRAT, SMALL, LETTERSPACED — INDEX NUMBERS, SOURCES AND EVERY LABEL
            </p>
          </div>
        </div>

        <div className="v-block">
          <h3>Live animation</h3>
          <div className="as-anim">
            <div className="as-card">
              <div className="ix-pair">
                <img src={I.tube} alt="Soil sample in a test tube" />
                <img className="ix-pair__b" src={I.glass} alt="Test tubes with samples" />
              </div>
              <b>Cross-fade pair</b>
              <span>Two records of one act, exchanged slowly. 28s.</span>
            </div>
            <div className="as-card">
              <div className="ix-index">
                {[I.student2, I.kit, I.planting, I.rows2, I.worm, I.fist].map((s, n) => (
                  <img key={s} src={s} alt="" loading="lazy" style={{ animationDelay: `${n}s` }} />
                ))}
              </div>
              <b>Index cascade</b>
              <span>Entries arrive in file order as the section is reached. 22s.</span>
            </div>
            <FootageFrame src={I.student2} note="Compost turning, silent loop, contained" />
          </div>
        </div>

        <div className="v-block">
          <h3>Instagram post</h3>
          <div className="as-ig">
            <div className="ig ig--idx">
              <div className="ig__im">
                <img src={I.roots} alt="Roots and fungi in a hand" />
                <span className="ix-ig__num">001</span>
                <span className="ix-ig__band" />
              </div>
              <div className="ig__cap">
                <b>Filed under: roots</b>
                <span>One entry from the index.</span>
              </div>
            </div>
            <p className="v-note">
              A gold index band travels the frame and the number counts into place, then rests.
            </p>
          </div>
        </div>

        <div className="v-block">
          <h3>Two moments of our own</h3>
          <div className="as-inv">
            <div className="ix-colossal">
              <img src={I.aerial2} alt="Aerial of restored ranch land" />
              <div className="ix-colossal__tiny">
                <img src={I.planting} alt="Hands planting a shrub" />
                <span>Fig. 014 — the same ground, at arm's length</span>
              </div>
            </div>
            <div className="ix-swatchwall">
              <div className="ix-swatchwall__im">
                <img src={I.compost} alt="Compost in a hand" />
              </div>
              <div className="ix-swatchwall__c">
                {["#3A2A1E", "#5C4433", "#8B6A46", "#A98B62", "#C7A87C"].map((h, n) => (
                  <i key={h} style={{ background: h, animationDelay: `${n * 3}s` }} />
                ))}
              </div>
              <p className="v-note">
                Pigment wall. The column fills one chip at a time, each taken from the photograph
                beside it — painterly output, laboratory procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pgm-foot">
        <p>
          Three versions of one idea. All motion is CSS, all of it stops for reduced motion, and no
          footage exists yet — the marked frames are where it goes.
        </p>
      </footer>
    </div>
  );
}

const CSS = `
.pgm{--w:#fff;--beige:#EDE6DA;--g:#156826;--dg:#22371F;--lg:#59A66C;--br:#4F3433;--bl:#3780B8;--gold:#C9A227;--tan:#C89B7B;--ink:#111;
  background:var(--w);color:var(--ink);font-family:'Space Grotesk','DM Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
.pgm *{box-sizing:border-box;}
.pgm img{display:block;width:100%;height:100%;object-fit:cover;}
.pgm h1,.pgm h2,.pgm h3{margin:0;font-weight:600;}
.pgm p{margin:0;}

.pgm-top{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.92);backdrop-filter:blur(6px);border-bottom:1px solid #e6e2da;}
.pgm-top__in{max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;justify-content:space-between;align-items:baseline;}
.pgm-top b{font-family:Montserrat,sans-serif;font-size:.82rem;letter-spacing:.14em;text-transform:uppercase;}
.pgm-top span{font-size:.78rem;color:#7a756c;letter-spacing:.08em;}

.v{max-width:1240px;margin:0 auto;padding:96px 28px 40px;border-top:1px solid #e6e2da;}
.v:first-of-type{border-top:0;}
.v-head{max-width:720px;margin-bottom:64px;}
.v-num{font-family:Montserrat,sans-serif;font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;color:var(--g);}
.v-head h2{font-size:clamp(2rem,4vw,3.2rem);letter-spacing:-.02em;margin:10px 0 14px;}
.v-head p{color:#4a463f;font-size:1.02rem;line-height:1.6;max-width:60ch;}
.v-block{margin:84px 0;}
.v-block h3{font-family:Montserrat,sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:#8b857b;
  padding-bottom:10px;border-bottom:1px solid #e6e2da;margin-bottom:26px;}
.v-note{font-size:.82rem;color:#7a756c;line-height:1.55;max-width:56ch;}

.pg-chips{display:grid;grid-template-columns:repeat(8,1fr);gap:10px;}
.pg-chip i{display:block;height:96px;border:1px solid rgba(0,0,0,.1);}
.pg-chip b{display:block;font-size:.76rem;margin-top:8px;font-weight:600;}
.pg-chip span{display:block;font-size:.68rem;color:#8b857b;letter-spacing:.06em;}

.pg-lab{display:flex;justify-content:space-between;gap:16px;border-bottom:1px solid #e6e2da;padding:8px 0;font-size:.76rem;}
.pg-lab span{color:#8b857b;letter-spacing:.1em;text-transform:uppercase;font-size:.66rem;font-family:Montserrat,sans-serif;}
.pg-lab b{font-weight:500;}

/* footage frames */
.pg-foot{margin:0;}
.pg-foot__win{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid var(--ink);}
.pg-foot__win::after{content:"";position:absolute;inset:8px;border:1px dashed rgba(255,255,255,.55);pointer-events:none;}
.pg-foot__scan{position:absolute;left:0;right:0;height:34%;top:-34%;
  background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,.22),rgba(255,255,255,0));}
.pg-foot__dot{position:absolute;top:14px;right:14px;width:9px;height:9px;border-radius:50%;background:#e0483a;}
.pg-foot figcaption{margin-top:10px;}
.pg-foot figcaption b{display:block;font-family:Montserrat,sans-serif;font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);}
.pg-foot figcaption span{font-size:.8rem;color:#7a756c;}

/* ---------- 01 ASSAY ---------- */
.as-hero{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;position:relative;padding:48px 0 64px;}
.as-hero__grid{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(#f0ece4 1px,transparent 1px),linear-gradient(90deg,#f0ece4 1px,transparent 1px);
  background-size:56px 56px;mask-image:radial-gradient(120% 90% at 30% 40%,#000 40%,transparent 100%);}
.as-hero__l{position:relative;}
.as-kick{font-family:Montserrat,sans-serif;font-size:.68rem;letter-spacing:.24em;text-transform:uppercase;color:var(--g);}
.as-hero h1{font-family:'Bricolage Grotesque',Montserrat,sans-serif;font-size:clamp(2.4rem,5vw,4rem);line-height:1.02;letter-spacing:-.03em;margin:16px 0 18px;font-weight:800;}
.as-hero h1 em{font-style:normal;color:var(--g);display:block;}
.as-hero__l p{color:#4a463f;max-width:44ch;line-height:1.6;}
.as-cta{display:flex;gap:12px;margin-top:26px;}
.as-cta a{text-decoration:none;font-size:.82rem;letter-spacing:.04em;padding:12px 22px;background:var(--g);color:#fff;border:1px solid var(--g);}
.as-cta a.ghost{background:transparent;color:var(--ink);border-color:var(--ink);}
.as-spec{position:relative;margin:0;aspect-ratio:4/5;overflow:hidden;border:1px solid var(--ink);}
.as-cross{position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(rgba(255,255,255,.9),rgba(255,255,255,.9)) center/100% 1px no-repeat,
             linear-gradient(rgba(255,255,255,.9),rgba(255,255,255,.9)) center/1px 100% no-repeat;opacity:.5;}
.as-read{position:absolute;right:12px;bottom:12px;display:flex;gap:6px;}
.as-read i{width:34px;height:34px;border:1px solid rgba(255,255,255,.85);opacity:0;}
.as-meta{margin-top:16px;}

.as-panel{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:44px;}
.as-panel__bg{position:absolute;inset:0;background:var(--beige);}
.as-panel figure{position:relative;margin:0;}
.as-panel figure img{aspect-ratio:3/4;}
.as-panel figcaption{font-family:Montserrat,sans-serif;font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;margin-top:10px;color:#6c665c;}

.as-type{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
.as-type__a{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(1.6rem,3vw,2.6rem);line-height:1.05;letter-spacing:-.03em;margin-top:10px;}
.as-type__b{font-family:'Space Grotesk',sans-serif;line-height:1.65;color:#4a463f;margin-top:10px;}

.as-anim{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.as-card b{display:block;margin-top:12px;font-family:Montserrat,sans-serif;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);}
.as-card > span{display:block;font-size:.8rem;color:#7a756c;line-height:1.5;}
.as-slide{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid #e0dbd2;}
.as-slide img{filter:blur(6px) saturate(1.1);}
.as-slide__lens{position:absolute;inset:0;box-shadow:inset 0 0 0 10px rgba(255,255,255,.9);}
.as-count{aspect-ratio:4/3;border:1px solid #e0dbd2;padding:22px;display:flex;flex-direction:column;justify-content:center;gap:12px;position:relative;}
.as-count em{font-style:normal;font-family:Montserrat,sans-serif;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:#8b857b;}
.as-bars{display:grid;gap:9px;}
.as-bars i{display:block;height:10px;width:0;background:var(--dg);}
.as-tick{position:absolute;left:0;top:0;bottom:0;width:1px;background:var(--gold);}

.as-ig{display:grid;grid-template-columns:340px 1fr;gap:32px;align-items:start;}
.ig{border:1px solid #e0dbd2;background:#fff;max-width:340px;}
.ig__im{position:relative;aspect-ratio:1;overflow:hidden;}
.ig__sweep{position:absolute;left:0;top:0;width:1px;height:100%;background:rgba(255,255,255,.9);}
.ig__chipA,.ig__chipB{position:absolute;width:44px;height:44px;border:2px solid #fff;}
.ig__chipA{left:18px;bottom:18px;background:#6E4B2A;}
.ig__chipB{left:74px;bottom:18px;background:#2F4A2B;}
.ig__cap{padding:14px 16px;}
.ig__cap b{display:block;font-size:.88rem;}
.ig__cap span{font-size:.78rem;color:#7a756c;}

.as-inv{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:start;}
.as-ledger__hd,.as-row{display:grid;grid-template-columns:56px 1fr 34px 0px;gap:14px;align-items:center;
  border-bottom:1px solid #e6e2da;padding:14px 0;transition:grid-template-columns .5s ease;}
.as-ledger__hd{font-family:Montserrat,sans-serif;font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:#8b857b;border-bottom-color:var(--ink);}
.as-row span{font-family:Montserrat,sans-serif;font-size:.72rem;color:var(--g);}
.as-row b{font-weight:500;font-size:.94rem;}
.as-row i{display:block;width:34px;height:34px;}
.as-row img{width:0;height:64px;transition:width .5s ease;object-fit:cover;}
.as-row:hover{grid-template-columns:56px 1fr 34px 96px;}
.as-row:hover img{width:96px;}
.as-ledger .v-note{margin-top:14px;}
.as-cal__im{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid #e0dbd2;}
.as-cal__rule{position:absolute;left:0;top:0;bottom:0;width:22px;
  background:repeating-linear-gradient(to bottom,#fff 0 2px,transparent 2px 14px);opacity:.9;}
.as-cal b{display:block;margin-top:12px;font-family:Montserrat,sans-serif;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);}
.as-cal > span{font-size:.8rem;color:#7a756c;line-height:1.5;}

/* ---------- 02 HORIZON ---------- */
.v--hor h1,.v--hor h3{font-family:Newsreader,Georgia,serif;font-weight:300;}
.hz-descent{border:1px solid #e6e2da;}
.hz-sky{background:#fff;padding:72px 40px;}
.hz-kick{font-family:'DM Sans',sans-serif;font-size:.68rem;letter-spacing:.24em;text-transform:uppercase;color:var(--g);}
.hz-hero h1{font-size:clamp(2.6rem,6vw,5rem);line-height:1;letter-spacing:-.02em;margin:14px 0 30px;}
.hz-hero h1 em{font-style:italic;color:var(--br);}
.hz-hero__im{position:relative;margin:0;aspect-ratio:21/9;overflow:hidden;}
.hz-breathe{position:absolute;inset:0;background:linear-gradient(105deg,rgba(255,255,255,.28),rgba(255,255,255,0) 55%);}
.hz-scale{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px;}
.hz-scale div{border-top:1px solid var(--ink);padding-top:8px;position:relative;}
.hz-scale i{display:block;height:3px;width:0;background:var(--g);position:absolute;top:-2px;left:0;}
.hz-scale span{font-family:'DM Sans',sans-serif;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:#6c665c;}
.hz-layer{padding:88px 40px;}
.hz-l1{background:#EFE7DA;}
.hz-l2{background:#C89B7B;}
.hz-l3{background:#8B5E3C;}
.hz-l4{background:#4F3433;}
.hz-return{background:#fff;padding:72px 40px;text-align:center;}
.hz-return p{font-family:Newsreader,serif;font-size:1.5rem;color:#8b857b;font-style:italic;}
.hz-two{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;}
.hz-two figure{margin:0;aspect-ratio:4/3;overflow:hidden;}
.hz-two figcaption{font-family:'DM Sans',sans-serif;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;margin-top:8px;color:#5c564d;}
.hz-two h3{font-size:1.9rem;margin-bottom:10px;}
.hz-two p{line-height:1.65;color:#3e3831;max-width:44ch;margin-bottom:14px;}
.hz-wide{display:grid;gap:26px;}
.hz-wide > figure{margin:0;aspect-ratio:21/9;overflow:hidden;}
.hz-bind{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:32px;}
.hz-bind__bg{position:absolute;inset:0;background:var(--beige);}
.hz-bind img{position:relative;aspect-ratio:1;}
.hz-quiet{max-width:640px;margin:0 auto;text-align:center;}
.hz-quiet figure{position:relative;margin:0 0 24px;aspect-ratio:1;overflow:hidden;}
.hz-drift{position:absolute;inset:0;background:radial-gradient(60% 60% at 40% 40%,rgba(255,255,255,.18),transparent 70%);}
.hz-quiet p{color:#f6efe6;font-family:Newsreader,serif;font-size:1.25rem;line-height:1.6;}
.hz-l4 .pg-foot__win{border-color:#f6efe6;}
.hz-l4 .pg-foot figcaption b{color:var(--lg);}
.hz-l4 .pg-foot figcaption span{color:#d8cec2;}
.hz-type{display:grid;grid-template-columns:1fr 1fr;gap:40px;}
.hz-type__a{font-family:Newsreader,serif;font-weight:300;font-size:clamp(1.8rem,3.4vw,2.8rem);line-height:1.15;}
.hz-type__b{font-family:'DM Sans',sans-serif;line-height:1.7;color:#4a463f;}
.hz-grass,.hz-rev{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid #e0dbd2;}
.hz-grass span{position:absolute;inset:0;background:linear-gradient(100deg,rgba(255,255,255,.3),transparent 60%);}
.hz-rev span{position:absolute;inset:0;background:#fff;clip-path:inset(0 0 0 0);}
.hz-core{aspect-ratio:4/3;border:1px solid #e0dbd2;display:grid;grid-template-rows:repeat(4,1fr);}
.hz-core__band{display:block;width:0;}
.hz-core__band.b1{background:#EFE7DA;}
.hz-core__band.b2{background:#C89B7B;}
.hz-core__band.b3{background:#8B5E3C;}
.hz-core__band.b4{background:#4F3433;}
.hz-ig__wipe{position:absolute;left:0;right:0;top:0;height:0;
  background:linear-gradient(to bottom,#EFE7DA,#C89B7B,#8B5E3C,#4F3433);mix-blend-mode:multiply;}
.hz-strat > div{height:78px;overflow:hidden;}
.hz-strat > div img{height:170%;}
.hz-weather{position:relative;}
.hz-weather img{aspect-ratio:4/3;}
.hz-weather__sky{position:absolute;left:0;right:0;top:0;aspect-ratio:4/3;
  background:linear-gradient(100deg,rgba(255,255,255,.42),rgba(255,255,255,0) 45%);}
.hz-weather b{display:block;margin-top:12px;font-family:'DM Sans',sans-serif;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);}
.hz-weather > span{font-size:.8rem;color:#7a756c;}

/* ---------- 03 FIELD INDEX ---------- */
.ix-hero{display:grid;grid-template-columns:1.25fr 1fr;gap:0;border:1px solid var(--ink);}
.ix-hero__im{position:relative;overflow:hidden;min-height:520px;}
.ix-hero__crop{position:absolute;inset:0;box-shadow:inset 0 0 0 14px #fff;}
.ix-hero__t{padding:44px;display:flex;flex-direction:column;justify-content:space-between;border-left:1px solid var(--ink);}
.ix-no{font-family:Montserrat,sans-serif;font-size:.66rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);}
.ix-hero h1{font-family:Newsreader,serif;font-weight:300;font-size:clamp(2.4rem,4.6vw,4rem);line-height:1.02;margin:20px 0;}
.ix-hero h1 em{font-style:italic;color:var(--g);}
.ix-run{display:flex;gap:26px;overflow:hidden;border-top:1px solid var(--ink);padding-top:14px;white-space:nowrap;}
.ix-run span{font-family:Montserrat,sans-serif;font-size:.66rem;letter-spacing:.22em;text-transform:uppercase;color:#6c665c;}
.ix-type{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;}
.ix-type__a{font-family:Newsreader,serif;font-style:italic;font-weight:300;font-size:clamp(1.8rem,3.4vw,2.8rem);line-height:1.12;}
.ix-type__b{font-family:Montserrat,sans-serif;font-size:.74rem;letter-spacing:.2em;line-height:2;color:#4a463f;}
.ix-pair{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid #e0dbd2;}
.ix-pair img{position:absolute;inset:0;}
.ix-index{aspect-ratio:4/3;border:1px solid #e0dbd2;display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:1fr;gap:4px;padding:4px;}
.ix-index img{opacity:0;}
.ix-ig__num{position:absolute;left:16px;top:14px;font-family:Montserrat,sans-serif;font-size:.9rem;letter-spacing:.2em;color:#fff;}
.ix-ig__band{position:absolute;left:0;right:0;height:10px;top:0;background:var(--gold);}
.ix-colossal{position:relative;}
.ix-colossal > img{aspect-ratio:16/10;}
.ix-colossal__tiny{position:absolute;right:18px;bottom:18px;width:118px;background:#fff;padding:6px;}
.ix-colossal__tiny img{aspect-ratio:1;}
.ix-colossal__tiny span{display:block;font-family:Montserrat,sans-serif;font-size:.52rem;letter-spacing:.14em;text-transform:uppercase;margin-top:6px;color:#6c665c;}
.ix-swatchwall{display:grid;grid-template-columns:1fr 64px;gap:16px;align-items:start;}
.ix-swatchwall__im{aspect-ratio:3/4;overflow:hidden;}
.ix-swatchwall__c{display:grid;gap:6px;}
.ix-swatchwall__c i{display:block;height:64px;opacity:0;}
.ix-swatchwall .v-note{grid-column:1/-1;}

.pgm-foot{max-width:1240px;margin:0 auto;padding:60px 28px 120px;border-top:1px solid #e6e2da;}
.pgm-foot p{font-size:.84rem;color:#7a756c;max-width:60ch;line-height:1.6;}

@media (max-width:900px){
  .as-hero,.as-type,.as-inv,.as-ig,.hz-two,.hz-type,.ix-type,.ix-hero{grid-template-columns:1fr;}
  .as-anim,.as-panel,.hz-bind{grid-template-columns:1fr;}
  .pg-chips{grid-template-columns:repeat(4,1fr);}
  .ix-hero__im{min-height:340px;}
}

@media (prefers-reduced-motion: no-preference){
  @keyframes pgSweepDown{0%{top:-34%}100%{top:120%}}
  .pg-foot__scan{animation:pgSweepDown 18s linear infinite;}
  @keyframes pgRec{0%,45%{opacity:1}55%,100%{opacity:.15}}
  .pg-foot__dot{animation:pgRec 4s steps(1,end) infinite;}

  @keyframes asRead{0%,8%{opacity:0;transform:translateY(6px)}18%,88%{opacity:1;transform:none}100%{opacity:0}}
  .as-read i{animation:asRead 16s ease-in-out infinite;}
  @keyframes asFocus{0%,10%{filter:blur(7px) saturate(1)}45%,70%{filter:blur(0) saturate(1.05)}100%{filter:blur(7px) saturate(1)}}
  .as-slide img{animation:asFocus 18s ease-in-out infinite;}
  @keyframes asBar{0%,6%{width:0}30%,86%{width:var(--w)}100%{width:0}}
  .as-bars i{animation:asBar 24s cubic-bezier(.3,.7,.2,1) infinite;}
  @keyframes asTick{0%{left:0}50%{left:100%}100%{left:0}}
  .as-tick{animation:asTick 24s ease-in-out infinite;}
  @keyframes asRule{0%,10%{left:0}55%,75%{left:calc(100% - 22px)}100%{left:0}}
  .as-cal__rule{animation:asRule 60s ease-in-out infinite;}

  @keyframes igSweep{0%{left:0}48%{left:100%}52%{left:100%}100%{left:0}}
  .ig__sweep{animation:igSweep 20s ease-in-out infinite;}
  @keyframes chipA{0%,20%{background:#6E4B2A}50%{background:#3E2C1B}80%,100%{background:#6E4B2A}}
  @keyframes chipB{0%,20%{background:#2F4A2B}50%{background:#6F7A3A}80%,100%{background:#2F4A2B}}
  .ig__chipA{animation:chipA 20s ease-in-out infinite;}
  .ig__chipB{animation:chipB 20s ease-in-out infinite;}

  @keyframes hzScale{0%,10%{width:0}40%,90%{width:100%}100%{width:0}}
  .hz-scale i{animation:hzScale 28s ease-in-out infinite;}
  @keyframes hzBreathe{0%,100%{opacity:.2;transform:translateX(-2%)}50%{opacity:.5;transform:translateX(2%)}}
  .hz-breathe{animation:hzBreathe 44s ease-in-out infinite;}
  @keyframes hzZoom{0%,100%{transform:scale(1.04)}50%{transform:scale(1.11)}}
  .hz-hero__im img,.hz-quiet figure img{animation:hzZoom 52s ease-in-out infinite;}
  @keyframes hzGrass{0%,100%{transform:translateX(-3%) scale(1.06)}50%{transform:translateX(3%) scale(1.06)}}
  .hz-grass img{animation:hzGrass 40s ease-in-out infinite;}
  @keyframes hzWind{0%,100%{opacity:.15}50%{opacity:.45}}
  .hz-grass span{animation:hzWind 40s ease-in-out infinite;}
  @keyframes hzCore{0%,5%{width:0}35%,90%{width:100%}100%{width:0}}
  .hz-core__band{animation:hzCore 32s cubic-bezier(.4,.6,.2,1) infinite;}
  .hz-core__band.b2{animation-delay:2s}.hz-core__band.b3{animation-delay:4s}.hz-core__band.b4{animation-delay:6s}
  @keyframes hzRev{0%,8%{clip-path:inset(0 0 0 0)}45%,85%{clip-path:inset(50% 50% 50% 50%)}100%{clip-path:inset(0 0 0 0)}}
  .hz-rev span{animation:hzRev 20s cubic-bezier(.4,.6,.2,1) infinite;}
  @keyframes hzWipe{0%,6%{height:0}42%,72%{height:100%}96%,100%{height:0}}
  .hz-ig__wipe{animation:hzWipe 22s ease-in-out infinite;}
  @keyframes hzStrat{0%,100%{transform:translateY(0)}50%{transform:translateY(-24%)}}
  .hz-strat > div img{animation:hzStrat 46s ease-in-out infinite;}
  @keyframes hzDay{0%{opacity:.1;transform:translateX(-8%)}50%{opacity:.5;transform:translateX(8%)}100%{opacity:.1;transform:translateX(-8%)}}
  .hz-weather__sky{animation:hzDay 48s ease-in-out infinite;}
  @keyframes hzDrift{0%,100%{opacity:.25;transform:translate(-3%,2%)}50%{opacity:.6;transform:translate(3%,-2%)}}
  .hz-drift{animation:hzDrift 38s ease-in-out infinite;}

  @keyframes ixRun{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .ix-run{--x:0;}
  .ix-run span{animation:none;}
  .ix-run{mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);}
  .ix-hero__t .ix-run{display:flex;}
  .ix-run > span:first-child{animation:none;}
  .ix-run{overflow:hidden;}
  .ix-run{position:relative;}
  .ix-run{will-change:transform;}
  .ix-run span{flex:0 0 auto;animation:ixRun 40s linear infinite;}
  @keyframes ixPair{0%,42%{opacity:0}50%,92%{opacity:1}100%{opacity:0}}
  .ix-pair__b{animation:ixPair 28s ease-in-out infinite;}
  @keyframes ixIn{0%,4%{opacity:0;transform:scale(1.06)}22%,88%{opacity:1;transform:none}100%{opacity:0}}
  .ix-index img{animation:ixIn 22s ease-in-out infinite;}
  @keyframes ixBand{0%,8%{top:0}48%,60%{top:calc(100% - 10px)}100%{top:0}}
  .ix-ig__band{animation:ixBand 24s cubic-bezier(.4,.6,.2,1) infinite;}
  @keyframes ixNum{0%,10%{opacity:0;transform:translateY(-6px)}25%,88%{opacity:1;transform:none}100%{opacity:0}}
  .ix-ig__num{animation:ixNum 24s ease-in-out infinite;}
  @keyframes ixCrop{0%,100%{box-shadow:inset 0 0 0 14px #fff}50%{box-shadow:inset 0 0 0 40px #fff}}
  .ix-hero__crop{animation:ixCrop 36s ease-in-out infinite;}
  @keyframes ixSlow{0%,100%{transform:scale(1.05) translate(0,0)}50%{transform:scale(1.12) translate(-2%,1%)}}
  .ix-hero__im img,.ix-colossal > img{animation:ixSlow 56s ease-in-out infinite;}
  @keyframes ixChip{0%,6%{opacity:0}20%,90%{opacity:1}100%{opacity:0}}
  .ix-swatchwall__c i{animation:ixChip 24s ease-in-out infinite;}
}
`;
