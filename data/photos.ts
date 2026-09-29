/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE ONE FILE TO EDIT.
 *  Every photo, caption, and collection on the site comes from here.
 *  See README.md → "Adding your photos".
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  Every entry below using `picsum(...)` is a PLACEHOLDER (random stock
 *  image, `placeholder: true`). The captions are realistic stand-ins so the
 *  typography and layout can be judged — they do not describe the images.
 */
import { picsum, RATIO } from "@/lib/placeholder";
import type { Collection, Photo } from "@/lib/types";

// To swap in a real photo, import it and use it as `image`:
//   import rainOn8th from "@/public/photos/rain-on-8th-ave.jpg";
//   ...
//   image: rainOn8th,

/**
 * Collections appear in the nav in this order. Adding a genre = add an entry
 * here, then tag photos with its slug. The route, nav link, and sitemap entry
 * are generated automatically.
 */
export const collections = [
  {
    slug: "street",
    title: "Street",
    description:
      "Calgary at street level. Downtown, the +15, the C-Train, and the neighbourhoods in between.",
  },
  {
    slug: "landscape",
    title: "Landscape",
    description: "The Rockies, the foothills, and the prairie that runs out from the city.",
  },
] as const satisfies readonly Collection[];

/** The single image under the M.F mark on the home page. */
export const heroSlug = "bow-valley-first-light";

export const photos: Photo[] = [
  // ── Street ───────────────────────────────────────────────────────────────
  {
    slug: "rain-on-8th-ave",
    title: "Rain on 8th Ave",
    alt: "A lone pedestrian with a black umbrella crossing a rain-slick downtown street at dusk",
    collection: "street",
    location: "Calgary, AB",
    year: 2026,
    image: picsum("mf-rain-8th", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "plus-15-noon",
    title: "+15, Noon",
    alt: "Office workers silhouetted in a glass skywalk above a downtown street",
    collection: "street",
    location: "Calgary, AB",
    year: 2025,
    image: picsum("mf-plus15", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "city-hall-station",
    title: "City Hall Station",
    alt: "A C-Train pulling into an elevated platform, a commuter waiting in long winter light",
    collection: "street",
    location: "Calgary, AB",
    year: 2026,
    image: picsum("mf-cityhall", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "centre-street-chinatown",
    title: "Centre Street, Chinatown",
    alt: "Neon shop signs reflected in a bakery window with a figure passing behind the glass",
    collection: "street",
    location: "Calgary, AB",
    year: 2024,
    image: picsum("mf-chinatown", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "stephen-avenue-shadows",
    title: "Stephen Avenue Shadows",
    alt: "Long hard-edged shadows of pedestrians stretching across sandstone pavement",
    collection: "street",
    location: "Calgary, AB",
    year: 2025,
    image: picsum("mf-stephen", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "kensington-crosswalk",
    title: "Kensington Crosswalk",
    alt: "A cyclist and two pedestrians mid-crosswalk in front of a row of old brick storefronts",
    collection: "street",
    location: "Calgary, AB",
    year: 2025,
    image: picsum("mf-kensington", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "inglewood-barber",
    title: "Inglewood Barber",
    alt: "A barber seen through a shop window, mid-cut, under a single warm pendant light",
    collection: "street",
    location: "Calgary, AB",
    year: 2024,
    image: picsum("mf-inglewood", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "peace-bridge-fog",
    title: "Peace Bridge, Fog",
    alt: "The red helix of a pedestrian bridge fading into morning fog over the river",
    collection: "street",
    location: "Calgary, AB",
    year: 2026,
    image: picsum("mf-peacebridge", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "seventeenth-ave-late",
    title: "17th Ave, Late",
    alt: "Taillights streaking past a couple waiting outside a bar on a busy night street",
    collection: "street",
    location: "Calgary, AB",
    year: 2025,
    image: picsum("mf-17thave", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "stampede-grounds-after-close",
    title: "Stampede Grounds, After Close",
    alt: "An empty midway with a darkened ferris wheel and a single worker sweeping",
    collection: "street",
    location: "Calgary, AB",
    year: 2024,
    image: picsum("mf-stampede", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "bow-river-pathway",
    title: "Bow River Pathway",
    alt: "A runner in a red jacket passing bare poplars on a frosted riverside path",
    collection: "street",
    location: "Calgary, AB",
    year: 2026,
    image: picsum("mf-bowpath", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "chinook-arch-downtown",
    title: "Chinook Arch over Downtown",
    alt: "A clean band of clear sky beneath heavy cloud above the downtown towers, seen from a parking deck",
    collection: "street",
    location: "Calgary, AB",
    year: 2025,
    image: picsum("mf-chinook", ...RATIO.landscape3x2),
    placeholder: true,
  },

  // ── Landscape ────────────────────────────────────────────────────────────
  {
    slug: "bow-valley-first-light",
    title: "Bow Valley, First Light",
    alt: "First sun catching a line of limestone peaks above a still, shadowed valley floor",
    collection: "landscape",
    location: "Canmore, AB",
    year: 2026,
    image: picsum("mf-bowvalley", ...RATIO.wide16x9),
    featured: true,
    placeholder: true,
  },
  {
    slug: "abraham-lake-ice",
    title: "Abraham Lake Ice",
    alt: "Frozen methane bubbles suspended in clear dark lake ice, mountains beyond",
    collection: "landscape",
    location: "Clearwater County, AB",
    year: 2025,
    image: picsum("mf-abraham", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "icefields-parkway-panorama",
    title: "Icefields Parkway",
    alt: "A wide panorama of glaciated peaks and a braided grey river running the length of a valley",
    collection: "landscape",
    location: "Jasper National Park, AB",
    year: 2025,
    image: picsum("mf-icefields", ...RATIO.panorama3x1),
    featured: true,
    placeholder: true,
  },
  {
    slug: "vermilion-lakes-dawn",
    title: "Vermilion Lakes, Dawn",
    alt: "Mist lifting off shallow water with a mountain reflected in a narrow ribbon of calm",
    collection: "landscape",
    location: "Banff National Park, AB",
    year: 2024,
    image: picsum("mf-vermilion", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "horseshoe-canyon",
    title: "Horseshoe Canyon",
    alt: "Striped badland hoodoos under a flat white overcast sky",
    collection: "landscape",
    location: "Drumheller, AB",
    year: 2025,
    image: picsum("mf-horseshoe", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "prairie-storm-cell",
    title: "Prairie Storm Cell",
    alt: "A dark supercell towering over flat canola fields and a single grain elevator",
    collection: "landscape",
    location: "Rocky View County, AB",
    year: 2026,
    image: picsum("mf-prairiestorm", ...RATIO.wide16x9),
    placeholder: true,
  },
  {
    slug: "kananaskis-ridge",
    title: "Kananaskis Ridge",
    alt: "Overlapping blue ridgelines receding into haze, each paler than the last",
    collection: "landscape",
    location: "Kananaskis Country, AB",
    year: 2024,
    image: picsum("mf-kananaskis", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "lake-minnewanka-winter",
    title: "Lake Minnewanka, Winter",
    alt: "Wind-scoured snow on a frozen lake with dark shoreline trees",
    collection: "landscape",
    location: "Banff National Park, AB",
    year: 2025,
    image: picsum("mf-minnewanka", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "waterton-wind",
    title: "Waterton Wind",
    alt: "Whitecaps on a long lake funnelled between steep mountains under racing cloud",
    collection: "landscape",
    location: "Waterton Lakes National Park, AB",
    year: 2023,
    image: picsum("mf-waterton", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "foothills-panorama",
    title: "Foothills, Late Harvest",
    alt: "A panorama of rolling cut fields and round bales below the distant front range",
    collection: "landscape",
    location: "Foothills County, AB",
    year: 2024,
    image: picsum("mf-foothills", ...RATIO.panorama3x1),
    placeholder: true,
  },
  {
    slug: "moraine-before-the-crowds",
    title: "Moraine, Before the Crowds",
    alt: "Blue-green glacial water below a row of ten snow-streaked peaks in cold early light",
    collection: "landscape",
    location: "Banff National Park, AB",
    year: 2023,
    image: picsum("mf-moraine", ...RATIO.wide16x9),
    placeholder: true,
  },
];
