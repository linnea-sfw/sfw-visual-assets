# Soil Visual Library

What this is

An asset catalogue for the Soil Food Web Foundation website rebuild. One page at /library. Its whole job is volume: I need a large, varied set of visual treatments I can pick from and paste into WordPress. Not a website, not navigation, not copy. A catalogue.

Every block is a self-contained HTML snippet with namespaced styles, shown at working size, with a copy button and a download button. No external stylesheet, no font call, no script. Someone who won't touch code pastes it into a WordPress custom HTML block and swaps the image.

The material

Read /public/img/ first. List what you find, then use every file. Reference images by public path, /img/filename.jpg, so the paths survive a copy-paste. Never import from src/assets. Never rename or move files.

The folder holds real photographs from the Foundation: hands in soil, compost, sampling equipment, lab glassware, microscopes, portraits of Dr. Elaine Ingham and staff, workshops, and microscopy fields. Filenames describe the subject. Use them to decide what treatment fits.

Generate nothing. No AI illustration, no ink line-work, no engraving pastiche, no vector organisms, no icons, no drawn diagrams. I have tried that route and it reads as AI on sight. If a treatment needs drawn material, skip it and invent a different one.

The register

This is a 501(c)(3) science education nonprofit that lost a Google Ad Grant for reading like a sales funnel. Forty years of teaching people to put soil under a microscope. Warm, serious, evidentiary. An old natural-history journal, printed on paper, plated and captioned. Grown rather than designed.

The microscopy plate, in detail, because it's the one thing already approved

Build this one exactly, then vary it:

Square container. The image is clipped with clip-path: circle(50%) and scaled to about 1.12 so it has room to drift inside the mask. A thin keyline in green at low opacity on the container. An aperture ring made with box-shadow: inset 0 0 0 10px, printed rather than glowing: a soft green mix for brightfield, deep green #22371F for darkfield. Below the circle, a hairline rule in green at low opacity, then a caption block: an italic serif line for the name, then a small green line beneath it for the descriptor. The image drifts slowly inside the circle on a long loop.

Then make many variants of it. Ring weights. Ring colours. Rule above instead of below. Caption in the margin instead of underneath. Two circles side by side. A row of three. A dense grid of six or eight. Circles at different sizes on one row. A circle bleeding off the page edge. A circle sitting on a dark band.

Circles are for microscopy only. A circle means the field of view of a lens. Never put a portrait or a photograph of hands in one.

Everything else, as a matrix

Cross these families against each other and against the photographs. Aim for eighty blocks or more. Where a combination is bad, drop it and make a better one.

Frames. Full-bleed rectangle. Tall portrait plate. Wide horizontal band. Square with keyline. Caption set in the margin. Photograph broken across a visible grid, magazine-spread style. Two-up comparison. Three-up row. Six-cell grid. Herbarium sheet with a data card. Edge sliver. Card topper.

Surfaces. Untouched. Duotone in deep green. Duotone in warm brown. Halftone at coarse dot. Halftone at fine dot. High-contrast plate tone. Paper grain overlay. Risograph misregistration with layers a millimetre apart. Letterpress bite at the edges.

Furniture. Hairline rule. Figure numbering. Eyebrow label. Caption block. Corner marks. Green keyline. Dark band behind. Pull quote set beside the image. Field note in the margin. Step markers. Timeline.

Page pieces. Section dividers. Horizontal strata bands stacked like a soil profile. Hero band. Dark closing band. Stat backing. Video frame.

Add families I haven't thought of. That's the point of the exercise.

Where these land, so you can see what's needed

The rebuilt site has six sections. Home. About, with mission, team, Dr. Elaine's research and contact. Learn, with courses, workshops, a calendar, webinars and scholarships. Science, with a six-mechanism explainer and a research database. Practice, with projects, case studies and a professional directory. Community, with a map, news and a join band.

So the catalogue needs range across: a homepage hero, a stats band, program cards, a testimonial, a partner marquee, an editorial article header, a research listing row, a team portrait grid, an event card, a legacy section for Dr. Elaine, and a donation band. Design for those shapes without writing any real copy.

Rules that don't bend

Colour lives in the type, the rules, the captions and the frames. Never a tint washed over a photograph. Duotone counts as a treatment and must keep real black in it. A mint filter over greyscale is exactly what I'm trying to get away from.

No decorative torn or irregular polygon masks. Circles and true rectangles. Where an image needs a non-rectangular edge, that edge follows the subject's own silhouette as a real cutout.

Never write a scale bar, a magnification figure or a Latin species name into any block. Not as placeholder, not as example, not as decoration. This is a science organization and a false measurement on the page is a real problem. Caption text is REPLACE_WITH_CAPTION throughout. If a block's design calls for a scale bar, leave the space and label it REPLACE_WITH_SCALE.

Motion is CSS only. No JavaScript, no scroll triggers. Sixteen seconds and longer per cycle. Slow drift, opacity breathing, a mask edge moving a few pixels. Alive rather than animated. It stops for prefers-reduced-motion. Put a copyable motion CSS block at the bottom of the page.

No gradients, glows, glassmorphism, blurred colour blobs, drop shadows, neon. No stock-photo look. No centred hero with two buttons. No identical rounded cards. No arrows on links. No all-caps letter-spaced eyebrows unless the block is specifically an eyebrow. No 01/02/03 numbering.

Brand

Montserrat headings, Source Sans 3 body. #156826 primary. #59A66C decorative only, never text. #3780B8 education accents. #4F3433 headings. #333130 body. #F4F1EA background. #22371F deep green for dark bands. #C9A227 reserved for a single donate button, so use it almost never.

How to build it

Group the catalogue by treatment family, with a count beside each heading. Short note on each block saying where it would sit and why the treatment suits that photograph. Build everything in one pass. Don't ask me anything, don't stop to check, and don't build a homepage.

Be inventive with the crossings. I want to be surprised by at least ten of these.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sfw-visual-assets.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da507e34-2548-41c0-85e6-358fc5b03030).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
