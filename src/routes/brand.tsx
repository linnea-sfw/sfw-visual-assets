import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Three visual directions — Soil Food Web Foundation" },
      {
        name: "description",
        content:
          "Three proposed visual directions for the Soil Food Web Foundation: a quiet photographic register, a bold graphic register, and a living slide.",
      },
      { property: "og:title", content: "Three visual directions — Soil Food Web Foundation" },
      {
        property: "og:description",
        content:
          "A quiet photographic register, a bold graphic register, and a living slide. Hero, colour, type, motion and social for each.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Brand,
});

const IMG = {
  hands: "/img/2-dirty-hands.jpg",
  compost: "/img/hand-of-compost.jpg",
  roots: "/img/hand-soil-roots-fungi.jpg",
  worm: "/img/hand-wet-dirt-worm.jpg",
  fungi: "/img/fungi-in-under-grape-soil.jpg",
  spores: "/img/fungal-spores-in-suspension.jpg",
  york2: "/img/harringtons-organic-land-care-brick-york-farms-2-768x1024.jpg",
  york4: "/img/harringtons-organic-land-care-brick-york-farms-4-768x1024.jpg",
  planting: "/img/hvdb-inplanten-002.jpg",
  shrub: "/img/2-hands-planting-shrub.jpg",
  garden: "/img/erc-panchamana-garden.jpg",
  aerial: "/img/erc-rancho-cacachilas-aerial-2.jpg",
  rows: "/img/erc-rancho-cacachilas-agro.jpg",
  elaine: "/img/Dr%20Elaine%20Ingham%20with%20Microscope.jpg",
  student: "/img/ctpfw-student-squeezing-compost-1.jpg",
  tubes: "/img/Test%20tubes%20with%20sample_.jpg",
  loose: "/img/handling-loose-soil.jpg",
};

function Swatches({ set }: { set: [string, string][] }) {
  return (
    <div className="bd-sw">
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
        <span>Three visual directions</span>
      </header>

      {/* ─────────── ONE ─────────── */}
      <section className="bd-dir bd-a">
        <div className="bd-num">
          <b>01</b>
          <span>Quiet · photographic</span>
        </div>
        <h2 className="bd-name">Field Notes</h2>
        <p className="bd-lede">
          One photograph at a time, given the room a print deserves. The page behaves like paper:
          wide margins, hairlines, a caption in italic serif. Nothing shouts, everything breathes.
        </p>

        <div className="bd-label">Website hero</div>
        <div className="bd-a-hero">
          <div className="bd-a-hero__img">
            <img src={IMG.compost} alt="A hand holding finished compost" />
          </div>
          <div className="bd-a-hero__txt">
            <h3>
              A teaspoon of this
              <br />
              <em>holds more life</em>
              <br />
              than you can count.
            </h3>
            <p>
              We teach people to look at soil under a microscope, grow the life they find, and put
              it back into the ground.
            </p>
            <div className="bd-a-cta">
              <a href="#one">Learn to look</a>
              <span>Since 1986 · taught in over 100 countries</span>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Colour</div>
            <Swatches
              set={[
                ["#f4f1ea", "Paper"],
                ["#22371f", "Deep leaf"],
                ["#156826", "Classic green"],
                ["#4f3433", "Soil brown"],
                ["#c89b7b", "Tan"],
                ["#8a9a5b", "Lichen"],
              ]}
            />
            <p className="bd-note">
              Paper first. The photographs carry every other colour; ink stays dark and quiet.
            </p>
          </div>
          <div>
            <div className="bd-label">Type</div>
            <div className="bd-type bd-type--a">
              <b>Fraunces</b>
              <p className="bd-spec">Aa Bb Cc — headlines, soft serif, optical sizes</p>
              <b className="bd-second">DM Sans</b>
              <p className="bd-spec bd-spec--sans">
                Aa Bb Cc — body, captions, labels. Set small, set generously.
              </p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Live animation · slow reveal</div>
            <div className="bd-a-anim">
              <img src={IMG.roots} alt="Roots, soil and fungal threads in a hand" />
              <span className="bd-a-anim__wipe" />
              <figcaption>A photograph arriving the way a print develops. 24s loop.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label">Instagram</div>
            <div className="bd-ig bd-ig--a">
              <img src={IMG.worm} alt="An earthworm in a wet hand" />
              <div className="bd-ig--a__cap">
                <em>Field note</em>
                <p>The worm is the last link in a chain that starts too small to see.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TWO ─────────── */}
      <section className="bd-dir bd-b">
        <div className="bd-num">
          <b>02</b>
          <span>Bold · graphic</span>
        </div>
        <h2 className="bd-name">Spore Print</h2>
        <p className="bd-lede">
          Built like a poster. Enormous type, hard-edged colour blocks lifted from real organisms —
          turkey tail rust, slime-mould ochre, lichen teal — and photographs used as flat plates.
        </p>

        <div className="bd-label bd-label--on">Website hero</div>
        <div className="bd-b-hero">
          <div className="bd-b-hero__bands">
            <i />
            <i />
            <i />
            <i />
          </div>
          <h3>
            SOIL
            <br />
            IS NOT
            <br />
            DIRT
          </h3>
          <div className="bd-b-hero__plate">
            <img src={IMG.fungi} alt="Fungal growth in vineyard soil" />
          </div>
          <p className="bd-b-hero__sub">
            Bacteria. Fungi. Protozoa. Nematodes. A web you can see with a microscope and rebuild
            with compost.
          </p>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label bd-label--on">Colour</div>
            <Swatches
              set={[
                ["#0f1410", "Spore black"],
                ["#156826", "Classic green"],
                ["#59a66c", "Food web green"],
                ["#c9532a", "Turkey tail rust"],
                ["#e0a020", "Ochre"],
                ["#2e6e6b", "Lichen teal"],
              ]}
            />
            <p className="bd-note bd-note--on">
              Black ground. Every accent is the colour of something that actually grows.
            </p>
          </div>
          <div>
            <div className="bd-label bd-label--on">Type</div>
            <div className="bd-type bd-type--b">
              <b>Space Grotesk</b>
              <p className="bd-spec">AA BB CC — display, set tight and huge</p>
              <b className="bd-second">DM Sans</b>
              <p className="bd-spec bd-spec--sans">Aa Bb Cc — body, small caps labels, data</p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label bd-label--on">Live animation · colour bands</div>
            <div className="bd-b-anim">
              <img src={IMG.york4} alt="A close view of living soil" />
              <span className="bd-b-anim__a" />
              <span className="bd-b-anim__b" />
              <figcaption>Two ink bands passing across the plate. 28s loop.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label bd-label--on">Instagram</div>
            <div className="bd-ig bd-ig--b">
              <img src={IMG.student} alt="A student squeezing compost in the field" />
              <b>
                SQUEEZE
                <br />
                TEST
              </b>
              <span>Soil Food Web Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── THREE ─────────── */}
      <section className="bd-dir bd-c">
        <div className="bd-num">
          <b>03</b>
          <span>Unexpected · a living slide</span>
        </div>
        <h2 className="bd-name">Wet Mount</h2>
        <p className="bd-lede">
          The whole page is a slide under a lens. Soft translucent organisms drift across the
          photographs, changing shape as they go, and the type sits under them like a label written
          on glass. Colour comes from fungi and slime moulds, never from an eco-green palette.
        </p>

        <div className="bd-label">Website hero</div>
        <div className="bd-c-hero">
          <div className="bd-c-hero__field">
            <img src={IMG.spores} alt="Fungal spores in suspension under the microscope" />
            <span className="bd-org bd-org--1" />
            <span className="bd-org bd-org--2" />
            <span className="bd-org bd-org--3" />
            <span className="bd-org bd-org--4" />
          </div>
          <div className="bd-c-hero__txt">
            <h3>
              <em>Look closer.</em>
              <br />
              It is moving.
            </h3>
            <p>
              Everything on this page drifts, because everything in a drop of soil water drifts. The
              brand is a live specimen, not a diagram.
            </p>
            <a href="#three">Open the slide</a>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Colour</div>
            <Swatches
              set={[
                ["#efe7dd", "Slide cream"],
                ["#6b4c7a", "Fungal purple"],
                ["#d2622a", "Slug orange"],
                ["#2e6e6b", "Turkey teal"],
                ["#b8306a", "Wax cap"],
                ["#1b2a1e", "Wet dark"],
              ]}
            />
            <p className="bd-note">
              Six hues taken from living things. They are allowed to overlap and mix on screen.
            </p>
          </div>
          <div>
            <div className="bd-label">Type</div>
            <div className="bd-type bd-type--c">
              <b>Instrument Serif</b>
              <p className="bd-spec">Aa Bb Cc — italic headlines, thin and strange</p>
              <b className="bd-second">Space Grotesk</b>
              <p className="bd-spec bd-spec--sans">AA BB CC — labels, letterspaced, tiny</p>
            </div>
          </div>
        </div>

        <div className="bd-grid2">
          <div>
            <div className="bd-label">Live animation · drifting organisms</div>
            <div className="bd-c-anim">
              <img src={IMG.york2} alt="Living soil seen close up" />
              <span className="bd-org bd-org--5" />
              <span className="bd-org bd-org--6" />
              <figcaption>Shapes morph and drift over the plate. 34s and 46s loops.</figcaption>
            </div>
          </div>
          <div>
            <div className="bd-label">Instagram</div>
            <div className="bd-ig bd-ig--c">
              <div className="bd-ig--c__lens">
                <img src={IMG.york4} alt="A field of view of living soil" />
                <span className="bd-org bd-org--7" />
                <span className="bd-org bd-org--8" />
              </div>
              <em>What is in one drop?</em>
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
.bd{--paper:#f4f1ea;--ink:#22371f;--green:#156826;--leaf:#59a66c;--brown:#4f3433;--tan:#c89b7b;
  background:var(--paper);color:var(--ink);font-family:'DM Sans',system-ui,sans-serif;
  -webkit-font-smoothing:antialiased;}
.bd img{display:block;width:100%;height:100%;object-fit:cover;}
.bd-top{display:flex;justify-content:space-between;padding:18px 5vw;border-bottom:1px solid rgba(34,55,31,.18);
  font-size:11px;letter-spacing:.22em;text-transform:uppercase;}
.bd-dir{padding:9vh 5vw 11vh;border-bottom:1px solid rgba(34,55,31,.18);}
.bd-num{display:flex;align-items:baseline;gap:16px;font-size:11px;letter-spacing:.22em;text-transform:uppercase;}
.bd-num b{font-size:13px;}
.bd-name{font-family:'Fraunces',Georgia,serif;font-size:clamp(2.6rem,8vw,6.5rem);line-height:.95;margin:14px 0 0;font-weight:400;}
.bd-lede{max-width:60ch;margin:18px 0 46px;font-size:clamp(1rem,1.5vw,1.15rem);line-height:1.6;opacity:.85;}
.bd-label{font-size:10px;letter-spacing:.24em;text-transform:uppercase;opacity:.6;margin:44px 0 12px;}
.bd-label--on{opacity:.7;color:#e6e2d6;}
.bd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:6vw;}
@media(max-width:820px){.bd-grid2{grid-template-columns:1fr;}}
.bd-sw{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.bd-sw i{display:block;height:74px;border-radius:2px;}
.bd-sw b{display:block;margin-top:8px;font-size:12px;font-weight:500;}
.bd-sw span{font-size:10px;letter-spacing:.12em;opacity:.6;}
.bd-note{margin-top:16px;font-size:13px;line-height:1.6;opacity:.75;max-width:44ch;}
.bd-note--on{color:#cfd6c8;opacity:.85;}
.bd-type b{display:block;font-size:clamp(1.6rem,3.4vw,2.6rem);font-weight:400;}
.bd-type .bd-second{margin-top:26px;}
.bd-spec{margin-top:6px;font-size:14px;opacity:.72;}
.bd-type--a b{font-family:'Fraunces',serif;}
.bd-type--a .bd-second{font-family:'DM Sans',sans-serif;font-weight:500;}
.bd-type--b b{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.03em;}
.bd-type--b .bd-second{font-family:'DM Sans',sans-serif;letter-spacing:0;font-weight:500;}
.bd-type--c b{font-family:'Instrument Serif',serif;font-style:italic;}
.bd-type--c .bd-second{font-family:'Space Grotesk',sans-serif;font-style:normal;letter-spacing:.06em;}
.bd-ig{aspect-ratio:1/1;position:relative;overflow:hidden;}

/* ── 01 Field Notes ── */
.bd-a-hero{display:grid;grid-template-columns:1.25fr 1fr;gap:5vw;align-items:end;}
@media(max-width:820px){.bd-a-hero{grid-template-columns:1fr;}}
.bd-a-hero__img{aspect-ratio:5/6;overflow:hidden;background:#e8e3d8;}
.bd-a-hero__img img{animation:bd-breathe 30s ease-in-out infinite alternate;}
.bd-a-hero__txt h3{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(1.8rem,3.6vw,3.1rem);line-height:1.08;margin:0;}
.bd-a-hero__txt h3 em{color:var(--green);}
.bd-a-hero__txt p{margin:22px 0 0;max-width:38ch;line-height:1.65;opacity:.82;}
.bd-a-cta{margin-top:28px;display:flex;flex-direction:column;gap:12px;align-items:flex-start;}
.bd-a-cta a{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--paper);
  background:var(--green);padding:14px 26px;text-decoration:none;}
.bd-a-cta span{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.55;}
.bd-a-anim{position:relative;aspect-ratio:4/3;overflow:hidden;background:#e8e3d8;}
.bd-a-anim__wipe{position:absolute;inset:0;background:var(--paper);animation:bd-wipe 24s ease-in-out infinite;}
.bd-a-anim figcaption{position:absolute;left:0;bottom:0;right:0;padding:10px 14px;font-size:11px;
  letter-spacing:.1em;text-transform:uppercase;background:rgba(244,241,234,.9);}
.bd-ig--a{background:#e8e3d8;}
.bd-ig--a__cap{position:absolute;left:0;right:0;bottom:0;padding:18px 20px;background:var(--paper);
  border-top:2px solid var(--green);}
.bd-ig--a__cap em{font-family:'Fraunces',serif;font-size:13px;letter-spacing:.06em;color:var(--green);}
.bd-ig--a__cap p{margin:6px 0 0;font-size:14px;line-height:1.45;}
.bd-ig--a img{height:100%;}

/* ── 02 Spore Print ── */
.bd-b{background:#0f1410;color:#e6e2d6;}
.bd-b .bd-name{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.04em;color:#e6e2d6;}
.bd-b .bd-lede{opacity:.7;}
.bd-b .bd-sw span,.bd-b .bd-sw b{color:#e6e2d6;}
.bd-b-hero{position:relative;background:#0f1410;padding:6vh 0 0;overflow:hidden;}
.bd-b-hero__bands{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);}
.bd-b-hero__bands i:nth-child(1){background:#c9532a;opacity:.16;}
.bd-b-hero__bands i:nth-child(2){background:#e0a020;opacity:.14;}
.bd-b-hero__bands i:nth-child(3){background:#2e6e6b;opacity:.18;}
.bd-b-hero__bands i:nth-child(4){background:#59a66c;opacity:.14;}
.bd-b-hero h3{position:relative;font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-.05em;
  font-size:clamp(3.4rem,15vw,12rem);line-height:.82;margin:0;color:#e6e2d6;}
.bd-b-hero__plate{position:relative;margin:-6% 0 0 auto;width:min(52%,520px);aspect-ratio:4/5;overflow:hidden;
  border:2px solid #e0a020;}
.bd-b-hero__plate img{filter:contrast(1.25) saturate(1.15);animation:bd-slowzoom 40s ease-in-out infinite alternate;}
.bd-b-hero__sub{position:relative;max-width:34ch;margin:-8% 0 6vh;font-size:15px;line-height:1.6;color:#cfd6c8;}
.bd-b-anim{position:relative;aspect-ratio:4/3;overflow:hidden;background:#000;}
.bd-b-anim img{filter:contrast(1.2) saturate(.9);}
.bd-b-anim__a{position:absolute;inset:0;background:#c9532a;mix-blend-mode:multiply;
  clip-path:inset(0 70% 0 0);animation:bd-band 28s ease-in-out infinite alternate;}
.bd-b-anim__b{position:absolute;inset:0;background:#2e6e6b;mix-blend-mode:screen;opacity:.5;
  clip-path:inset(60% 0 0 0);animation:bd-band2 34s ease-in-out infinite alternate;}
.bd-b-anim figcaption{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;font-size:11px;
  letter-spacing:.1em;text-transform:uppercase;background:rgba(15,20,16,.85);color:#e6e2d6;}
.bd-ig--b{background:#0f1410;}
.bd-ig--b img{filter:contrast(1.15);}
.bd-ig--b b{position:absolute;left:6%;bottom:12%;font-family:'Space Grotesk',sans-serif;font-weight:700;
  font-size:clamp(2rem,7vw,3.4rem);line-height:.86;letter-spacing:-.04em;color:#e0a020;}
.bd-ig--b span{position:absolute;left:6%;top:6%;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:#e6e2d6;}

/* ── 03 Wet Mount ── */
.bd-c{background:#efe7dd;}
.bd-c .bd-name{font-family:'Instrument Serif',serif;font-style:italic;color:#6b4c7a;}
.bd-c-hero{display:grid;grid-template-columns:1.3fr 1fr;gap:5vw;align-items:center;}
@media(max-width:820px){.bd-c-hero{grid-template-columns:1fr;}}
.bd-c-hero__field{position:relative;aspect-ratio:1/1;overflow:hidden;border-radius:50%;
  box-shadow:inset 0 0 0 10px rgba(107,76,122,.55);}
.bd-c-hero__field img{animation:bd-slowzoom 46s ease-in-out infinite alternate;}
.bd-c-hero__txt h3{font-family:'Instrument Serif',serif;font-size:clamp(2.2rem,5vw,4rem);line-height:1.02;margin:0;font-weight:400;}
.bd-c-hero__txt h3 em{color:#d2622a;}
.bd-c-hero__txt p{margin:20px 0 0;max-width:36ch;line-height:1.65;opacity:.8;}
.bd-c-hero__txt a{display:inline-block;margin-top:26px;font-family:'Space Grotesk',sans-serif;font-size:11px;
  letter-spacing:.22em;text-transform:uppercase;text-decoration:none;color:#efe7dd;background:#6b4c7a;padding:13px 24px;}
.bd-org{position:absolute;mix-blend-mode:multiply;pointer-events:none;}
.bd-org--1{width:46%;height:46%;left:6%;top:10%;background:rgba(107,76,122,.5);
  border-radius:58% 42% 47% 53%/44% 57% 43% 56%;animation:bd-morph 34s ease-in-out infinite alternate,bd-float 41s ease-in-out infinite alternate;}
.bd-org--2{width:34%;height:34%;right:8%;top:22%;background:rgba(210,98,42,.45);
  border-radius:44% 56% 63% 37%/52% 41% 59% 48%;animation:bd-morph 46s ease-in-out infinite alternate-reverse,bd-float2 38s ease-in-out infinite alternate;}
.bd-org--3{width:28%;height:28%;left:30%;bottom:8%;background:rgba(46,110,107,.45);
  border-radius:61% 39% 35% 65%/48% 62% 38% 52%;animation:bd-morph 52s ease-in-out infinite alternate,bd-float 33s ease-in-out infinite alternate-reverse;}
.bd-org--4{width:18%;height:18%;right:24%;bottom:16%;background:rgba(184,48,106,.4);
  border-radius:50% 50% 42% 58%/56% 44% 56% 44%;animation:bd-morph 29s ease-in-out infinite alternate-reverse;}
.bd-org--5{width:52%;height:52%;left:4%;top:12%;background:rgba(107,76,122,.5);
  border-radius:55% 45% 40% 60%/50% 55% 45% 50%;animation:bd-morph 34s ease-in-out infinite alternate,bd-float2 44s ease-in-out infinite alternate;}
.bd-org--6{width:36%;height:36%;right:8%;bottom:10%;background:rgba(210,98,42,.45);
  border-radius:48% 52% 58% 42%/60% 40% 60% 40%;animation:bd-morph 46s ease-in-out infinite alternate-reverse;}
.bd-org--7{width:50%;height:50%;left:8%;top:14%;background:rgba(46,110,107,.5);
  border-radius:57% 43% 46% 54%/45% 58% 42% 55%;animation:bd-morph 38s ease-in-out infinite alternate,bd-float 47s ease-in-out infinite alternate;}
.bd-org--8{width:30%;height:30%;right:12%;bottom:14%;background:rgba(184,48,106,.42);
  border-radius:42% 58% 55% 45%/58% 46% 54% 42%;animation:bd-morph 50s ease-in-out infinite alternate-reverse;}
.bd-c-anim{position:relative;aspect-ratio:4/3;overflow:hidden;background:#e5dccf;}
.bd-c-anim figcaption{position:absolute;left:0;right:0;bottom:0;padding:10px 14px;font-size:11px;
  letter-spacing:.1em;text-transform:uppercase;background:rgba(239,231,221,.9);}
.bd-ig--c{background:#efe7dd;display:grid;place-items:center;gap:14px;padding:8%;
  box-shadow:inset 0 0 0 1px rgba(107,76,122,.35);}
.bd-ig--c__lens{position:relative;width:78%;aspect-ratio:1/1;border-radius:50%;overflow:hidden;
  box-shadow:inset 0 0 0 8px rgba(107,76,122,.5);}
.bd-ig--c em{font-family:'Instrument Serif',serif;font-style:italic;font-size:clamp(1.1rem,3vw,1.7rem);color:#6b4c7a;}
.bd-ig--c span{font-family:'Space Grotesk',sans-serif;font-size:9px;letter-spacing:.24em;text-transform:uppercase;opacity:.6;}

.bd-foot{display:flex;justify-content:space-between;padding:26px 5vw 60px;font-size:11px;
  letter-spacing:.18em;text-transform:uppercase;opacity:.6;}

@keyframes bd-breathe{0%{transform:scale(1.04) translate3d(-1%,.6%,0);}100%{transform:scale(1.1) translate3d(1%,-.8%,0);}}
@keyframes bd-slowzoom{0%{transform:scale(1.05);}100%{transform:scale(1.14);}}
@keyframes bd-wipe{0%{transform:translate3d(0,0,0);}35%,100%{transform:translate3d(0,-101%,0);}}
@keyframes bd-band{0%{clip-path:inset(0 78% 0 0);}100%{clip-path:inset(0 0 0 74%);}}
@keyframes bd-band2{0%{clip-path:inset(72% 0 0 0);}100%{clip-path:inset(0 0 78% 0);}}
@keyframes bd-morph{
  0%{border-radius:58% 42% 47% 53%/44% 57% 43% 56%;transform:rotate(0deg) scale(1);}
  100%{border-radius:40% 60% 62% 38%/58% 41% 59% 42%;transform:rotate(14deg) scale(1.08);}}
@keyframes bd-float{0%{translate:-3% 2%;}100%{translate:4% -3%;}}
@keyframes bd-float2{0%{translate:3% -2%;}100%{translate:-4% 3%;}}
@media(prefers-reduced-motion:reduce){
  .bd *{animation:none !important;}
  .bd-a-anim__wipe{display:none;}
}
`;
