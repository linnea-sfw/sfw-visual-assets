import { Family } from "./kit";
import { microscopy } from "./microscopy";
import { frames } from "./frames";
import { surfaces } from "./surfaces";
import { furniture } from "./furniture";
import { pagepieces } from "./pagepieces";
import { siteshapes } from "./siteshapes";
import { invented } from "./invented";

export const families: Family[] = [
  microscopy,
  frames,
  surfaces,
  furniture,
  pagepieces,
  siteshapes,
  invented,
];

export const totalBlocks = families.reduce((n, f) => n + f.blocks.length, 0);

/** The shared motion layer, offered as its own copyable block. */
export const motionCSS = `<style>
/* Soil Food Web Foundation — motion layer.
   CSS only. No JavaScript, no scroll triggers. Every cycle 16s or longer.
   All of it stops for prefers-reduced-motion. */
@media (prefers-reduced-motion: no-preference){

  /* slow drift inside a mask (microscopy plates) */
  @keyframes sfw-drift{
    0%  {transform:scale(1.12) translate3d(-1.4%, 1.1%,0);}
    100%{transform:scale(1.12) translate3d( 1.6%,-1.3%,0);}
  }
  /* wide, shallow pan for full-bleed photographs */
  @keyframes sfw-pan{
    0%  {transform:scale(1.06) translate3d(-1.1%,.5%,0);}
    100%{transform:scale(1.06) translate3d( 1.1%,-.7%,0);}
  }
  /* opacity breathing */
  @keyframes sfw-breathe{ 0%{opacity:.82;} 100%{opacity:1;} }
  /* aperture ring weight */
  @keyframes sfw-aperture{
    0%  {box-shadow:inset 0 0 0 8px rgba(34,55,31,.80);}
    100%{box-shadow:inset 0 0 0 13px rgba(34,55,31,.62);}
  }
  /* a mask edge walking a few pixels */
  @keyframes sfw-edge{ 0%{width:0;} 100%{width:4px;} }
  /* one-time settle, no loop */
  @keyframes sfw-arrive{
    0%  {transform:translate3d(0,2px,0);opacity:.86;}
    100%{transform:none;opacity:1;}
  }

  .sfw-drift    {animation:sfw-drift    26s ease-in-out infinite alternate;}
  .sfw-drift-2  {animation:sfw-drift    38s ease-in-out infinite alternate-reverse;}
  .sfw-pan      {animation:sfw-pan      52s ease-in-out infinite alternate;}
  .sfw-breathe  {animation:sfw-breathe  40s ease-in-out infinite alternate;}
  .sfw-aperture {animation:sfw-aperture 24s ease-in-out infinite alternate;}
  .sfw-edge     {animation:sfw-edge     34s ease-in-out infinite alternate;}
  .sfw-arrive   {animation:sfw-arrive   18s cubic-bezier(.16,.7,.2,1) 1 both;}
}
</style>`;

export * from "./kit";
