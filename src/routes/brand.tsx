import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Three visual directions — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "Three museum-grade visual directions for the Soil Food Web Foundation: a gallery wall, a screenprint in organism inks, and a wall of pigment taken from soil life.",
      },
      { property: "og:title", content: "Three visual directions — Soil Food Web Foundation" },
      {
        property: "og:description",
        content:
          "A gallery wall, a screenprint in organism inks, and a wall of pigment taken from soil life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Brand,
});

const IMG = {
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
  garden: "/img/erc-panchamana-garden.jpg",
  rows: "/img/erc-rancho-cacachilas-agro.jpg",
  planting: "/img/2-hands-planting-shrub.jpg",
  student: "/img/ctpfw-student-squeezing-compost-1.jpg",
};

function Swatches({ set, dark }: { set: [string, string][]; dark?: boolean }) {
  return (
    <div className={"bd-sw" + (dark ? " bd-sw--dark" : "")}>
      {set.map(([hex, name]) => (
        <div key={hex}>
          <i style={{ background: hex }} />
          <b>{name}</b>
          <span>{hex.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

function Brand() {
  return (
    <div className="bd">
      <style>{CSS}</style>

      <header className="bd-top">
        <span>Soil Food Web Foundation</span>
        <span>Three visual directions · second set</span>
      </header>

      {/* ═══════════ 01 VITRINE ═══════════ */}
      <section className="bd-dir bd-v">
        <div className="bd-num">
          <b>01</b>
          <span>The gallery wall</span>
        </div>
        <h2 className="bd-name">Vitrine</h2>
        <p className="bd-lede">
          The site is hung, not laid out. A warm dark room, one object at a time, an enormous amount
          of air around it, and a wall label set the way a museum sets one. Nothing competes with
          the specimen. The photograph is lit rather than animated: a slow raking light crosses it
          the way daylight crosses a gallery in an afternoon.
        </p>

        <div className="bd-label">Website hero</div>
        <div className="bd-v-hero">
          <div className="bd-v-wall">
            <div className="bd-v-frame">
              <img src={IMG.york4} alt="Living soil seen very close" />
              <span className="bd-v-rake" />
            </div>
            <div className="bd-v-label">
              <b>Soil, held still</b>
              <em>Photograph, Foundation archive</em>
              <p>
                Roots, fungal threads, mineral grains, water. A handful of ground, given the
                attention we would give an object in a case.
              </p>
            </div>
          </div>
          <div className="bd-v-title">
            <h3>
              Life at this scale
              <br />
              has never been
              <br />
              <em>put on show.</em>
            </h3>
            <a href="#v">Enter the room</a>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Colour</div>
            <Swatches
              dark
              set={[
                ["#16120e", "Room dark"],
                ["#e8e0d1", "Plaster"],
                ["#c8b58f", "Oyster"],
                ["#8a3b24", "Iron oxide"],
                ["#6e7f4e", "Lichen"],
                ["#3a4f55", "Slate wet"],
              ]}
            />
            <p className="bd-note bd-note--on">
              A dark room, but a warm one: the black has brown in it, the light has clay in it. No
              black-on-black, no neon.
            </p>
          </div>
          <div>
            <div className="bd-label">Type</div>
            <div className="bd-type bd-type--v">
              <b>Newsreader</b>
              <p className="bd-spec">Aa Bb Cc — light serif, set large and loose, the object title</p>
              <b className="bd-second">Space Grotesk</b>
              <p className="bd-spec bd-spec--sans">
                A A B B C C — wall labels, letterspaced, very small, never louder than the object
              </p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Live animation · raking light</div>
            <div className="bd-v-anim">
              <img src={IMG.york2} alt="Fungal threads through soil" />
              <span className="bd-v-rake bd-v-rake--slow" />
              <figcaption>Light crossing the surface. 44s, once each way.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label">Instagram</div>
            <div className="bd-ig bd-ig--v">
              <div className="bd-ig--v__hang">
                <img src={IMG.worm} alt="An earthworm in a wet hand" />
                <span className="bd-v-rake" />
              </div>
              <div className="bd-ig--v__lab">
                <b>On view</b>
                <em>Soil Food Web Foundation</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 02 THREE PASSES ═══════════ */}
      <section className="bd-dir bd-p">
        <div className="bd-num">
          <b>02</b>
          <span>Printed in organism inks</span>
        </div>
        <h2 className="bd-name">Three Passes</h2>
        <p className="bd-lede">
          Every photograph is printed three times, in three inks taken from things that actually
          grow: fungal violet, slug orange, lichen teal. The passes sit a millimetre out of
          register, so the image is never quite one image — it shimmers at the edges the way a
          living thing does under a lens. Nothing is drawn. The strangeness comes from the printing.
        </p>

        <div className="bd-label">Website hero</div>
        <div className="bd-p-hero">
          <div className="bd-p-plate bd-p-plate--big">
            <img className="bd-p-i bd-p-i--a" src={IMG.fungi} alt="Fungi growing in vineyard soil" />
            <img
              className="bd-p-i bd-p-i--b"
              src={IMG.fungi}
              alt=""
              aria-hidden="true"
            />
            <img
              className="bd-p-i bd-p-i--c"
              src={IMG.fungi}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="bd-p-txt">
            <h3>
              Three inks.
              <br />
              One organism.
            </h3>
            <p>
              Colour does not sit on top of the photograph — it is the photograph, separated and
              laid back down slightly wrong, the way a hand-pulled print always is.
            </p>
            <div className="bd-p-inks">
              <i style={{ background: "#5b3a7e" }} />
              <i style={{ background: "#d2622a" }} />
              <i style={{ background: "#1f6f6a" }} />
              <span>violet · orange · teal</span>
            </div>
          </div>
        </div>

        <div className="bd-p-row">
          <div className="bd-p-plate">
            <img className="bd-p-i bd-p-i--a" src={IMG.roots} alt="Roots and fungal threads" />
            <img className="bd-p-i bd-p-i--b" src={IMG.roots} alt="" aria-hidden="true" />
            <img className="bd-p-i bd-p-i--c" src={IMG.roots} alt="" aria-hidden="true" />
          </div>
          <div className="bd-p-plate">
            <img className="bd-p-i bd-p-i--a" src={IMG.york1} alt="Soil surface with residue" />
            <img className="bd-p-i bd-p-i--b" src={IMG.york1} alt="" aria-hidden="true" />
            <img className="bd-p-i bd-p-i--c" src={IMG.york1} alt="" aria-hidden="true" />
          </div>
          <div className="bd-p-plate">
            <img className="bd-p-i bd-p-i--a" src={IMG.spores} alt="Spores in suspension" />
            <img className="bd-p-i bd-p-i--b" src={IMG.spores} alt="" aria-hidden="true" />
            <img className="bd-p-i bd-p-i--c" src={IMG.spores} alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Colour</div>
            <Swatches
              set={[
                ["#efe9dc", "Newsprint"],
                ["#5b3a7e", "Fungal violet"],
                ["#d2622a", "Slug orange"],
                ["#1f6f6a", "Lichen teal"],
                ["#1a1714", "Press black"],
                ["#b9c27a", "Young leaf"],
              ]}
            />
            <p className="bd-note">
              Three inks plus black. Black is always in the print, so the photographs keep their
              weight instead of turning into a tint.
            </p>
          </div>
          <div>
            <div className="bd-label">Type</div>
            <div className="bd-type bd-type--p">
              <b>Bricolage Grotesque</b>
              <p className="bd-spec">Aa Bb Cc — headlines, slightly irregular, printed not designed</p>
              <b className="bd-second">DM Sans</b>
              <p className="bd-spec bd-spec--sans">Aa Bb Cc — body and captions, plain and calm</p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Live animation · registration drift</div>
            <div className="bd-p-plate bd-p-plate--anim">
              <img className="bd-p-i bd-p-i--a" src={IMG.york3} alt="A soil profile in section" />
              <img className="bd-p-i bd-p-i--b bd-p-i--move" src={IMG.york3} alt="" aria-hidden="true" />
              <img className="bd-p-i bd-p-i--c bd-p-i--move2" src={IMG.york3} alt="" aria-hidden="true" />
              <figcaption>The passes creep apart and back. 32s and 46s.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label">Instagram</div>
            <div className="bd-ig bd-ig--p">
              <div className="bd-p-plate">
                <img className="bd-p-i bd-p-i--a" src={IMG.york2} alt="Fungal threads in soil" />
                <img className="bd-p-i bd-p-i--b bd-p-i--move" src={IMG.york2} alt="" aria-hidden="true" />
                <img className="bd-p-i bd-p-i--c" src={IMG.york2} alt="" aria-hidden="true" />
              </div>
              <b>Out of register, on purpose</b>
              <span>Soil Food Web Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 03 PIGMENT ═══════════ */}
      <section className="bd-dir bd-g">
        <div className="bd-num">
          <b>03</b>
          <span>Colour taken from the ground</span>
        </div>
        <h2 className="bd-name">Pigment</h2>
        <p className="bd-lede">
          Crop far enough into a photograph of soil and it stops being soil: it becomes a field of
          colour, closer to a painting than a picture. This direction builds the whole identity out
          of those crops. Beside each one runs a column of the colours found inside it — the brand
          palette is literally lifted from the ground, and it changes from page to page.
        </p>

        <div className="bd-label">Website hero</div>
        <div className="bd-g-hero">
          <div className="bd-g-field">
            <img src={IMG.red} alt="Red soil held in a hand, cropped close" />
          </div>
          <div className="bd-g-col">
            <i style={{ background: "#8f3f22" }} />
            <i style={{ background: "#c98b52" }} />
            <i style={{ background: "#5c3a2a" }} />
            <i style={{ background: "#2f2a22" }} />
            <i style={{ background: "#d9c3a1" }} />
          </div>
          <div className="bd-g-txt">
            <h3>
              <em>Every colour here</em> came out of the ground in this photograph.
            </h3>
            <p>
              No palette was chosen. The ground chose it. Beside every image sits the column of
              hues taken from it, printed like a set of pigment chips.
            </p>
            <div className="bd-g-scale">
              <span>Full frame</span>
              <div className="bd-g-tiny">
                <img src={IMG.red} alt="The same photograph, uncropped and small" />
              </div>
              <span>The crop above is a thumbnail of it</span>
            </div>
          </div>
        </div>

        <div className="bd-g-wall">
          <figure>
            <div>
              <img src={IMG.loose} alt="Loose soil in two hands, cropped close" />
            </div>
            <div className="bd-g-chips">
              <i style={{ background: "#4a3a2b" }} />
              <i style={{ background: "#8a7350" }} />
              <i style={{ background: "#c2b393" }} />
            </div>
          </figure>
          <figure>
            <div>
              <img src={IMG.garden} alt="A restored garden, cropped close" />
            </div>
            <div className="bd-g-chips">
              <i style={{ background: "#3f5c2b" }} />
              <i style={{ background: "#7f9a45" }} />
              <i style={{ background: "#cbb96a" }} />
            </div>
          </figure>
          <figure>
            <div>
              <img src={IMG.fist} alt="A fist of dry soil, cropped close" />
            </div>
            <div className="bd-g-chips">
              <i style={{ background: "#6b4a30" }} />
              <i style={{ background: "#a98757" }} />
              <i style={{ background: "#e0d3b8" }} />
            </div>
          </figure>
          <figure>
            <div>
              <img src={IMG.rows} alt="Planted rows on restored land, cropped close" />
            </div>
            <div className="bd-g-chips">
              <i style={{ background: "#2c4130" }} />
              <i style={{ background: "#6e8f57" }} />
              <i style={{ background: "#b8a06a" }} />
            </div>
          </figure>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Colour</div>
            <Swatches
              set={[
                ["#f1ece1", "Raw paper"],
                ["#8f3f22", "Oxide red"],
                ["#c98b52", "Clay"],
                ["#3f5c2b", "Wet leaf"],
                ["#2f2a22", "Humus"],
                ["#cbb96a", "Straw"],
              ]}
            />
            <p className="bd-note">
              A starting set, not a rule. Each page is allowed to be recoloured by the photograph it
              carries, as long as the type stays dark and legible.
            </p>
          </div>
          <div>
            <div className="bd-label">Type</div>
            <div className="bd-type bd-type--g">
              <b>Newsreader Italic</b>
              <p className="bd-spec">Aa Bb Cc — headlines, quiet and painterly</p>
              <b className="bd-second">Bricolage Grotesque</b>
              <p className="bd-spec bd-spec--sans">
                Aa Bb Cc — labels, chip captions, numbers
              </p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Live animation · the crop travelling</div>
            <div className="bd-g-anim">
              <img src={IMG.york3} alt="A soil surface, travelling slowly under the frame" />
              <figcaption>The frame stays still, the ground moves through it. 58s.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label">Instagram</div>
            <div className="bd-ig bd-ig--g">
              <div className="bd-ig--g__img">
                <img src={IMG.compost} alt="Finished compost held in a hand" />
              </div>
              <div className="bd-ig--g__chips">
                <i style={{ background: "#3c2a1d" }} />
                <i style={{ background: "#7c5a35" }} />
                <i style={{ background: "#b89a62" }} />
                <i style={{ background: "#d8c8a6" }} />
              </div>
              <em>Four colours, one handful</em>
              <span>Soil Food Web Foundation</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bd-foot">
        <span>Pick one and I will build the full guide from it.</span>
        <span>Photographs: Foundation archive</span>
      </footer>
    </div>
  );
}

const CSS = `
.bd{background:#f1ece1;color:#221c16;font-family:'DM Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
.bd img{display:block;width:100%;height:100%;object-fit:cover;}
.bd-top{display:flex;justify-content:space-between;padding:18px 5vw;border-bottom:1px solid rgba(34,28,22,.18);
  font-size:11px;letter-spacing:.22em;text-transform:uppercase;}
.bd-dir{padding:10vh 5vw 12vh;}
.bd-num{display:flex;align-items:baseline;gap:16px;font-size:11px;letter-spacing:.24em;text-transform:uppercase;opacity:.7;}
.bd-name{font-family:'Newsreader',Georgia,serif;font-weight:300;font-size:clamp(2.8rem,8vw,6.6rem);line-height:.96;margin:14px 0 0;}
.bd-lede{max-width:64ch;margin:20px 0 40px;font-size:clamp(1rem,1.4vw,1.12rem);line-height:1.7;opacity:.82;}
.bd-label{font-size:10px;letter-spacing:.26em;text-transform:uppercase;opacity:.55;margin:48px 0 14px;}
.bd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:6vw;}
@media(max-width:860px){.bd-grid2{grid-template-columns:1fr;}}
.bd-sw{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.bd-sw i{display:block;height:78px;box-shadow:inset 0 0 0 1px rgba(128,128,128,.4);}
.bd-sw b{display:block;margin-top:9px;font-size:12px;font-weight:500;}
.bd-sw span{font-size:10px;letter-spacing:.12em;opacity:.6;}
.bd-sw--dark b,.bd-sw--dark span{color:#e8e0d1;}
.bd-note{margin-top:18px;font-size:13.5px;line-height:1.65;opacity:.75;max-width:46ch;}
.bd-note--on{color:#d7cfc0;opacity:.9;}
.bd-type b{display:block;font-size:clamp(1.6rem,3.4vw,2.7rem);font-weight:400;}
.bd-type .bd-second{margin-top:28px;}
.bd-spec{margin-top:7px;font-size:14px;line-height:1.55;opacity:.72;max-width:44ch;}
.bd-type--v b{font-family:'Newsreader',serif;font-weight:300;}
.bd-type--v .bd-second{font-family:'Space Grotesk',sans-serif;letter-spacing:.14em;font-size:clamp(1.1rem,2.2vw,1.6rem);}
.bd-type--p b{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-.02em;}
.bd-type--p .bd-second{font-family:'DM Sans',sans-serif;font-weight:500;letter-spacing:0;}
.bd-type--g b{font-family:'Newsreader',serif;font-style:italic;font-weight:300;}
.bd-type--g .bd-second{font-family:'Bricolage Grotesque',sans-serif;font-style:normal;font-weight:600;}
.bd-ig{aspect-ratio:1/1;position:relative;overflow:hidden;}
.bd-foot{display:flex;justify-content:space-between;padding:28px 5vw 64px;font-size:11px;
  letter-spacing:.18em;text-transform:uppercase;opacity:.6;border-top:1px solid rgba(34,28,22,.18);}

/* ── 01 Vitrine ── */
.bd-v{background:#16120e;color:#e8e0d1;}
.bd-v .bd-name{color:#e8e0d1;}
.bd-v .bd-lede{color:#cdc4b3;opacity:1;}
.bd-v .bd-label{color:#cdc4b3;opacity:.65;}
.bd-v .bd-num{color:#cdc4b3;}
.bd-v-hero{display:grid;grid-template-columns:1.15fr 1fr;gap:6vw;align-items:center;
  padding:9vh 4vw;background:#100d0a;box-shadow:inset 0 0 0 1px rgba(232,224,209,.09);}
@media(max-width:860px){.bd-v-hero{grid-template-columns:1fr;}}
.bd-v-wall{display:flex;flex-direction:column;align-items:center;gap:26px;padding:6% 12%;}
.bd-v-frame{position:relative;width:min(320px,70%);aspect-ratio:3/4;overflow:hidden;
  box-shadow:inset 0 0 0 1px rgba(232,224,209,.35);}
.bd-v-frame img{animation:bd-approach 48s ease-in-out infinite alternate;}
.bd-v-rake{position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(105deg,rgba(255,244,222,0) 34%,rgba(255,244,222,.16) 50%,rgba(255,244,222,0) 66%);
  transform:translate3d(-60%,0,0);animation:bd-rake 44s ease-in-out infinite alternate;}
.bd-v-rake--slow{animation-duration:56s;}
.bd-v-label{max-width:34ch;text-align:left;border-left:1px solid rgba(232,224,209,.3);padding-left:16px;}
.bd-v-label b{display:block;font-family:'Newsreader',serif;font-weight:400;font-size:17px;}
.bd-v-label em{display:block;margin-top:2px;font-family:'Space Grotesk',sans-serif;font-style:normal;
  font-size:9.5px;letter-spacing:.24em;text-transform:uppercase;opacity:.65;}
.bd-v-label p{margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.72;}
.bd-v-title h3{font-family:'Newsreader',serif;font-weight:300;font-size:clamp(2rem,4.4vw,3.7rem);
  line-height:1.12;margin:0;}
.bd-v-title h3 em{font-style:italic;color:#c8b58f;}
.bd-v-title a{display:inline-block;margin-top:30px;font-family:'Space Grotesk',sans-serif;font-size:10px;
  letter-spacing:.28em;text-transform:uppercase;text-decoration:none;color:#16120e;background:#c8b58f;padding:14px 26px;}
.bd-v-anim{position:relative;aspect-ratio:4/3;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(232,224,209,.25);}
.bd-v-anim figcaption{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;font-size:10px;
  letter-spacing:.18em;text-transform:uppercase;background:rgba(16,13,10,.82);color:#e8e0d1;}
.bd-ig--v{background:#100d0a;display:grid;grid-template-rows:1fr auto;gap:14px;padding:9%;
  box-shadow:inset 0 0 0 1px rgba(232,224,209,.14);}
.bd-ig--v__hang{position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(232,224,209,.3);}
.bd-ig--v__lab b{display:block;font-family:'Newsreader',serif;font-weight:400;font-size:15px;color:#e8e0d1;}
.bd-ig--v__lab em{display:block;font-family:'Space Grotesk',sans-serif;font-style:normal;font-size:9px;
  letter-spacing:.26em;text-transform:uppercase;color:#c8b58f;margin-top:3px;}

/* ── 02 Three Passes ── */
.bd-p{background:#efe9dc;}
.bd-p .bd-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-.035em;color:#1a1714;}
.bd-p-hero{display:grid;grid-template-columns:1.2fr 1fr;gap:5vw;align-items:center;}
@media(max-width:860px){.bd-p-hero{grid-template-columns:1fr;}}
.bd-p-plate{position:relative;aspect-ratio:4/3;overflow:hidden;background:#efe9dc;isolation:isolate;}
.bd-p-plate--big{aspect-ratio:5/4;}
.bd-p-i{position:absolute;inset:0;}
.bd-p-i--a{filter:grayscale(1) contrast(1.15);mix-blend-mode:multiply;}
.bd-p-i--b{filter:grayscale(1) contrast(1.05) sepia(1) hue-rotate(215deg) saturate(3.2);
  mix-blend-mode:multiply;opacity:.62;translate:-4px 3px;}
.bd-p-i--c{filter:grayscale(1) contrast(1.05) sepia(1) hue-rotate(-25deg) saturate(3.4);
  mix-blend-mode:multiply;opacity:.5;translate:5px -3px;}
.bd-p-i--move{animation:bd-reg 32s ease-in-out infinite alternate;}
.bd-p-i--move2{animation:bd-reg2 46s ease-in-out infinite alternate;}
.bd-p-txt h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-.03em;
  font-size:clamp(2rem,4.6vw,3.6rem);line-height:.98;margin:0;}
.bd-p-txt p{margin:20px 0 0;max-width:38ch;line-height:1.65;opacity:.8;}
.bd-p-inks{display:flex;align-items:center;gap:8px;margin-top:26px;}
.bd-p-inks i{width:34px;height:34px;display:block;}
.bd-p-inks span{margin-left:8px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;opacity:.6;}
.bd-p-row{display:grid;grid-template-columns:repeat(3,1fr);gap:2vw;margin-top:5vh;}
@media(max-width:860px){.bd-p-row{grid-template-columns:1fr;}}
.bd-p-plate--anim figcaption{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:10px 14px;
  font-size:10px;letter-spacing:.18em;text-transform:uppercase;background:rgba(239,233,220,.9);}
.bd-ig--p{background:#efe9dc;display:grid;grid-template-rows:1fr auto auto;gap:10px;padding:7%;
  box-shadow:inset 0 0 0 1px rgba(26,23,20,.2);}
.bd-ig--p .bd-p-plate{aspect-ratio:auto;height:100%;}
.bd-ig--p b{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:clamp(1rem,2.6vw,1.5rem);
  letter-spacing:-.02em;color:#5b3a7e;}
.bd-ig--p span{font-size:9px;letter-spacing:.26em;text-transform:uppercase;opacity:.6;}

/* ── 03 Pigment ── */
.bd-g{background:#f1ece1;}
.bd-g .bd-name{font-style:italic;}
.bd-g-hero{display:grid;grid-template-columns:1.4fr 46px 1fr;gap:3vw;align-items:stretch;}
@media(max-width:860px){.bd-g-hero{grid-template-columns:1fr;}}
.bd-g-field{aspect-ratio:1/1;overflow:hidden;}
.bd-g-field img{object-position:50% 55%;transform:scale(2.4);
  animation:bd-travel 58s ease-in-out infinite alternate;}
.bd-g-col{display:flex;flex-direction:column;}
.bd-g-col i{flex:1;display:block;}
@media(max-width:860px){.bd-g-col{flex-direction:row;height:44px;}}
.bd-g-txt{display:flex;flex-direction:column;justify-content:center;}
.bd-g-txt h3{font-family:'Newsreader',serif;font-weight:300;font-size:clamp(1.6rem,3vw,2.5rem);
  line-height:1.2;margin:0;}
.bd-g-txt h3 em{font-style:italic;color:#8f3f22;}
.bd-g-txt p{margin:18px 0 0;line-height:1.65;opacity:.8;max-width:36ch;}
.bd-g-scale{margin-top:32px;display:flex;align-items:center;gap:12px;}
.bd-g-scale span{font-family:'Bricolage Grotesque',sans-serif;font-size:9.5px;letter-spacing:.2em;
  text-transform:uppercase;opacity:.6;max-width:12ch;}
.bd-g-tiny{width:64px;aspect-ratio:3/4;overflow:hidden;flex:none;box-shadow:inset 0 0 0 1px rgba(34,28,22,.3);}
.bd-g-wall{display:grid;grid-template-columns:repeat(4,1fr);gap:2vw;margin-top:6vh;}
@media(max-width:860px){.bd-g-wall{grid-template-columns:1fr 1fr;}}
.bd-g-wall figure{margin:0;}
.bd-g-wall figure>div:first-child{aspect-ratio:3/4;overflow:hidden;}
.bd-g-wall figure img{transform:scale(2.1);animation:bd-travel 64s ease-in-out infinite alternate;}
.bd-g-wall figure:nth-child(2) img{animation-duration:72s;animation-direction:alternate-reverse;}
.bd-g-wall figure:nth-child(3) img{animation-duration:80s;}
.bd-g-wall figure:nth-child(4) img{animation-duration:68s;animation-direction:alternate-reverse;}
.bd-g-chips{display:flex;height:14px;margin-top:8px;}
.bd-g-chips i{flex:1;display:block;}
.bd-g-anim{position:relative;aspect-ratio:4/3;overflow:hidden;}
.bd-g-anim img{transform:scale(2.2);animation:bd-travel 58s ease-in-out infinite alternate;}
.bd-g-anim figcaption{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;font-size:10px;
  letter-spacing:.18em;text-transform:uppercase;background:rgba(241,236,225,.9);}
.bd-ig--g{background:#f1ece1;display:grid;grid-template-rows:1fr auto auto auto;gap:10px;padding:7%;
  box-shadow:inset 0 0 0 1px rgba(34,28,22,.18);}
.bd-ig--g__img{overflow:hidden;}
.bd-ig--g__img img{transform:scale(1.6);animation:bd-travel 62s ease-in-out infinite alternate;}
.bd-ig--g__chips{display:flex;height:16px;}
.bd-ig--g__chips i{flex:1;display:block;}
.bd-ig--g em{font-family:'Newsreader',serif;font-style:italic;font-size:clamp(1rem,2.6vw,1.4rem);}
.bd-ig--g span{font-family:'Bricolage Grotesque',sans-serif;font-size:9px;letter-spacing:.24em;
  text-transform:uppercase;opacity:.6;}

@keyframes bd-approach{0%{transform:scale(1);}100%{transform:scale(1.07);}}
@keyframes bd-rake{0%{transform:translate3d(-70%,0,0);}100%{transform:translate3d(70%,0,0);}}
@keyframes bd-reg{0%{translate:-6px 4px;}100%{translate:2px -3px;}}
@keyframes bd-reg2{0%{translate:7px -4px;}100%{translate:-3px 4px;}}
@keyframes bd-travel{0%{transform:scale(2.2) translate3d(-4%,3%,0);}100%{transform:scale(2.2) translate3d(4%,-4%,0);}}
@media(prefers-reduced-motion:reduce){.bd *{animation:none !important;}}
`;
