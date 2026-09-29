# M.F — matt-friesen.ca

Portfolio site for Matt Friesen, street and landscape photographer, Calgary.
Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel Hobby.

Every page is pre-rendered as static HTML at build time. There is no database,
no CMS, and no auth.

---

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                 | What it does                               |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Dev server with hot reload                 |
| `npm run build`        | Production build (run before deploying)    |
| `npm run start`        | Serve the production build locally         |
| `npm run lint`         | ESLint (Next.js core-web-vitals + TS)      |
| `npm run typecheck`    | Generate route types, then `tsc --noEmit`  |
| `npm run format`       | Prettier, including Tailwind class sorting |
| `npm run format:check` | Prettier in check mode (for CI)            |

---

## Project layout

```
data/photos.ts        ← THE content file: collections, photos, captions, hero
lib/types.ts          Photo / Collection types
lib/site.ts           Name, URL, email, Instagram
lib/photos.ts         Read-only queries over data/photos.ts
lib/placeholder.ts    picsum helper (delete once all photos are real)
components/           Header, footer, grid, image, caption
app/                  Routes:
  page.tsx              /                 Home: M.F mark, hero, Selected Work
  [collection]/         /street, /landscape (one route per collection)
  photos/[slug]/        /photos/<slug>    Photo detail
  about/  contact/      /about, /contact
public/photos/        Put your real image files here
```

---

## Adding your photos

All photo content lives in **`data/photos.ts`**. You never need to touch a
component to add, remove, or reorder work.

### 1. Export your files

- JPEG, sRGB, **long edge 2400–3000px**, quality ~85. Next.js generates the
  smaller sizes and AVIF/WebP versions itself, so larger files only slow the build.
- Use kebab-case file names: `rain-on-8th-ave.jpg`.
- Drop them into `public/photos/`.

### 2. Import each file and add an entry

At the top of `data/photos.ts`:

```ts
import rainOn8th from "@/public/photos/rain-on-8th-ave.jpg";
```

Then, inside the `photos` array, replace a placeholder entry or add a new one:

```ts
{
  slug: "rain-on-8th-ave",              // URL: /photos/rain-on-8th-ave — must be unique
  title: "Rain on 8th Ave",
  alt: "A lone pedestrian with a black umbrella crossing a rain-slick street at dusk",
  collection: "street",                 // must match a slug in `collections`
  location: "Calgary, AB",
  year: 2026,
  image: rainOn8th,                     // ← the import
  featured: true,                       // optional: show in Selected Work on the home page
},
```

Importing the file (instead of writing a URL string) gets you three things
automatically: the exact width and height, so the layout never shifts; a real
blurred preview of the photo while it loads; and a build error if the file is
missing.

Some notes:

- **Order**: photos appear in galleries in the same order as the array.
- **Hero**: set `heroSlug` to the slug of the image you want under the M.F mark.
  A 16:9 or 3:2 horizontal works best.
- **Alt text**: required. Describe what's in the frame, not the title.
- **Panoramas**: anything 2.2:1 or wider automatically spans a full grid row.
- **Wrong slugs**: a duplicate slug or an unknown `collection` stops the build
  with a clear error.

### 3. Remove the placeholders

Once every photo is real:

1. Delete the remaining `picsum(...)` entries and the `picsum`/`RATIO` import in `data/photos.ts`.
2. Delete `lib/placeholder.ts`.
3. Remove the `remotePatterns` block from `next.config.ts`.
4. Update `email` and `instagram` in `lib/site.ts`, and the bio in `app/about/page.tsx`.

### Adding a new collection (e.g. "Portraits")

Add one entry to `collections` in `data/photos.ts`:

```ts
{ slug: "portraits", title: "Portraits", description: "…" },
```

Then tag photos with `collection: "portraits"`. The `/portraits` page, the nav
link, and the sitemap entry are all generated from that one entry.

---

## Deploying to Vercel (Hobby / free)

1. Push this folder to a GitHub repository:
   ```bash
   git init && git add -A && git commit -m "Initial site"
   gh repo create matt-friesen-portfolio --private --source=. --push
   ```
2. At [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects
   Next.js automatically, so leave the build settings at their defaults. You
   don't need any environment variables.
3. Click **Deploy**. You get a `*.vercel.app` URL within a minute or so.
4. **Custom domain:** go to Project → Settings → Domains and add `matt-friesen.ca`
   and `www.matt-friesen.ca`. At your registrar, create the DNS records that
   Vercel shows you (usually an `A` record for the apex and a `CNAME` for `www`
   pointing to `cname.vercel-dns.com`). Vercel issues HTTPS certificates automatically.
5. After that, every push to `main` redeploys production, and pushes to other
   branches get preview URLs.

**Hobby-tier notes:** The Hobby plan is for personal, non-commercial use, which
a portfolio fits. Image optimization on Hobby has a
monthly quota of source images. A portfolio of a few hundred photos stays well
inside it, because each source image is transformed once and then cached.
