/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE ONE FILE TO EDIT.
 *  Every photo and collection on the site comes from here.
 *  See README.md → "Adding your photos".
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  Every entry below using `picsum(...)` is a PLACEHOLDER (random stock
 *  image, `placeholder: true`). Alt text and locations are stand-ins and do
 *  not describe the images.
 */
import { picsum, RATIO } from "@/lib/placeholder";
import type { Collection, Photo } from "@/lib/types";

// To swap in a real photo, import it and use it as `image`:
//   import street01 from "@/public/photos/street-01.jpg";
//   ...
//   image: street01,

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
export const heroSlug = "landscape-01";

export const photos: Photo[] = [
  // ── Street ───────────────────────────────────────────────────────────────
  {
    slug: "street-01",
    alt: "A lone pedestrian with a black umbrella crossing a rain-slick downtown street at dusk",
    collection: "street",
    location: "8th Avenue, Calgary",
    image: picsum("mf-rain-8th", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "street-02",
    alt: "Office workers silhouetted in a glass skywalk above a downtown street",
    collection: "street",
    location: "Downtown, Calgary",
    image: picsum("mf-plus15", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "street-03",
    alt: "A C-Train pulling into an elevated platform, a commuter waiting in long winter light",
    collection: "street",
    location: "City Hall Station, Calgary",
    image: picsum("mf-cityhall", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "street-04",
    alt: "Neon shop signs reflected in a bakery window with a figure passing behind the glass",
    collection: "street",
    location: "Chinatown, Calgary",
    image: picsum("mf-chinatown", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "street-05",
    alt: "Long hard-edged shadows of pedestrians stretching across sandstone pavement",
    collection: "street",
    location: "Stephen Avenue, Calgary",
    image: picsum("mf-stephen", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "street-06",
    alt: "A cyclist and two pedestrians mid-crosswalk in front of a row of old brick storefronts",
    collection: "street",
    location: "Kensington, Calgary",
    image: picsum("mf-kensington", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "street-07",
    alt: "A barber seen through a shop window, mid-cut, under a single warm pendant light",
    collection: "street",
    location: "Inglewood, Calgary",
    image: picsum("mf-inglewood", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "street-08",
    alt: "The red helix of a pedestrian bridge fading into morning fog over the river",
    collection: "street",
    location: "Peace Bridge, Calgary",
    image: picsum("mf-peacebridge", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "street-09",
    alt: "Taillights streaking past a couple waiting outside a bar on a busy night street",
    collection: "street",
    location: "17th Avenue, Calgary",
    image: picsum("mf-17thave", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "street-10",
    alt: "An empty midway with a darkened ferris wheel and a single worker sweeping",
    collection: "street",
    location: "Stampede Park, Calgary",
    image: picsum("mf-stampede", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "street-11",
    alt: "A runner in a red jacket passing bare poplars on a frosted riverside path",
    collection: "street",
    image: picsum("mf-bowpath", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "street-12",
    alt: "A clean band of clear sky beneath heavy cloud above the downtown towers, seen from a parking deck",
    collection: "street",
    location: "Calgary",
    image: picsum("mf-chinook", ...RATIO.landscape3x2),
    placeholder: true,
  },

  // ── Landscape ────────────────────────────────────────────────────────────
  {
    slug: "landscape-01",
    alt: "First sun catching a line of limestone peaks above a still, shadowed valley floor",
    collection: "landscape",
    location: "Canmore, AB",
    image: picsum("mf-bowvalley", ...RATIO.wide16x9),
    featured: true,
    placeholder: true,
  },
  {
    slug: "landscape-02",
    alt: "Frozen methane bubbles suspended in clear dark lake ice, mountains beyond",
    collection: "landscape",
    location: "Abraham Lake, AB",
    image: picsum("mf-abraham", ...RATIO.landscape3x2),
    featured: true,
    placeholder: true,
  },
  {
    slug: "landscape-03",
    alt: "A wide panorama of glaciated peaks and a braided grey river running the length of a valley",
    collection: "landscape",
    location: "Icefields Parkway, AB",
    image: picsum("mf-icefields", ...RATIO.panorama3x1),
    featured: true,
    placeholder: true,
  },
  {
    slug: "landscape-04",
    alt: "Mist lifting off shallow water with a mountain reflected in a narrow ribbon of calm",
    collection: "landscape",
    location: "Vermilion Lakes, Banff",
    image: picsum("mf-vermilion", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "landscape-05",
    alt: "Striped badland hoodoos under a flat white overcast sky",
    collection: "landscape",
    location: "Horseshoe Canyon, AB",
    image: picsum("mf-horseshoe", ...RATIO.portrait2x3),
    featured: true,
    placeholder: true,
  },
  {
    slug: "landscape-06",
    alt: "A dark supercell towering over flat canola fields and a single grain elevator",
    collection: "landscape",
    location: "Rocky View County, AB",
    image: picsum("mf-prairiestorm", ...RATIO.wide16x9),
    placeholder: true,
  },
  {
    slug: "landscape-07",
    alt: "Overlapping blue ridgelines receding into haze, each paler than the last",
    collection: "landscape",
    location: "Kananaskis Country, AB",
    image: picsum("mf-kananaskis", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "landscape-08",
    alt: "Wind-scoured snow on a frozen lake with dark shoreline trees",
    collection: "landscape",
    image: picsum("mf-minnewanka", ...RATIO.portrait2x3),
    placeholder: true,
  },
  {
    slug: "landscape-09",
    alt: "Whitecaps on a long lake funnelled between steep mountains under racing cloud",
    collection: "landscape",
    location: "Waterton Lakes, AB",
    image: picsum("mf-waterton", ...RATIO.landscape3x2),
    placeholder: true,
  },
  {
    slug: "landscape-10",
    alt: "A panorama of rolling cut fields and round bales below the distant front range",
    collection: "landscape",
    location: "Foothills County, AB",
    image: picsum("mf-foothills", ...RATIO.panorama3x1),
    placeholder: true,
  },
  {
    slug: "landscape-11",
    alt: "Blue-green glacial water below a row of ten snow-streaked peaks in cold early light",
    collection: "landscape",
    location: "Moraine Lake, Banff",
    image: picsum("mf-moraine", ...RATIO.wide16x9),
    placeholder: true,
  },
];
