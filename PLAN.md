---
name: DHS AP Site Makeover
overview: Denmark HS AP Ambassadors static site remake—one-page home with anchor nav, separate alumni year pages, agency-grade UI. Chosen stack is Astro + Tailwind CSS (no backend).
todos:
  - id: confirm-alumni-ia
    content: Confirm how Alumni coexists with one-page scrolling (year subsections vs separate static pages).
    status: completed
  - id: pick-stack
    content: "Chosen stack: Astro (static) + Tailwind CSS + small charts (Chart.js client island or SVG/CSS for minimal metrics)."
    status: completed
  - id: scaffold-and-sections
    content: Scaffold Astro + Tailwind project, implement anchor nav + smooth scroll + all required sections + compact contact footer.
    status: completed
  - id: content-migration
    content: Enter finalized copy, image assets, chart data, and Apply/Contact details consistent with current site.
    status: completed
  - id: a11y-perf
    content: Mobile navigation, accessibility, image lazy-loading, and static hosting deploy config.
    status: completed
---

# DHS AP Ambassadors website makeover (stored requirements + tech direction)

## Source material

- Existing Google Sites content (screenshots already reviewed): mission, about copy, application process, impact stories/stats, contact emails/Instagram, imagery.
- New **Website Makeover Notes/Requirements** (checklist screenshot): structure, sections, and emphasis below.

## Stored content and format requirements

### Information architecture

- **Primary experience:** a **single long, scrollable page** (one-page site).
- **Primary navigation:** a **top navigation bar** whose items **jump/scroll** to the corresponding section (in-page anchors + smooth scroll behavior).

### Sections (in-page), with required content

1. **About**
   - Mission statement
   - **Who** (organization / members)
   - **What** (activities)
   - **Why** (purpose / goals)

2. **Our Impact**
   - Must include **graphs and numeric statistics** (not only paragraphs) to show reach/success.

3. **In Action** (replaces / subsumes “Ambassadors in Action” style content)
   - Treat as a **gallery or list of events**.
   - For **each event:** short description, stated **goal**, and **photos**.

4. **Alumni** (new emphasis)
   - **Primary page:** include an **Alumni** section on the one-pager that introduces the program and links out to **separate lightweight static pages per class year** (archive-style: keep prior years without turning the main page into an endless scroll).
   - Each alumni entry should support: **photo**, **college commitment**, optional **quote / takeaway**.

5. **Apply**
   - Preserve the **same substantive content** as the current site: **Qualifications**, **Selection Process**, **Responsibilities**, and an **application send-out** (link and/or instructions—still no backend required if it remains an external form/link/mailto).

6. **Contact**
   - Keep this **compact** as a **footer** at the bottom (emails, Instagram, copyright-style line as appropriate).

### Engineering constraints (stated)

- **Frontend-only** static site: **no backend**, no server-side rendering requirement, no database.

### Design bar (updated priority)

- The site should read as **high-end / agency-grade**: disciplined typography and spacing, refined responsive behavior, tasteful motion (scroll-linked or micro-interactions), strong photography treatment (composition, overlays, grids), and cohesive brand execution using the **stored branding kit** (navy / mid blue / light blue palette + approved typefaces—elevated, not “template default”).
- **Maintainer ergonomics are explicitly de-prioritized for now** (still avoid unnecessary complexity, but not at the expense of visual craft).

## Branding kit (stored)

Official palette and typography options for Denmark HS AP Ambassadors digital work. Implemented in Tailwind (`tailwind.config.mjs`), global styles, and font loading in `src/layouts/BaseLayout.astro`.

### Colors (hex)

| Token | Hex | Role on site |
|-------|-----|----------------|
| Navy (deepest) | `#112249` | Page background, hero overlays, primary surfaces (`ink`) |
| Mid blue | `#3b5b83` | Secondary panels, cards, borders (`sea`) |
| Light blue | `#81bde5` | Accents, links, highlights, charts (`accent`); paired tints for muted labels (`sea.mist`) |

### Typography (approved options)

Use only these families from the kit (loaded via Google Fonts + CDNFonts in the site; **verify licensing** with your district if self-hosting or swapping CDNs):

| Font | Typical use on this build |
|------|---------------------------|
| **League Spartan** | Headings (`h1`–`h6`), nav emphasis, stat titles (`font-display`) |
| **Quicksand** | Body copy, lists, descriptions (`font-sans`) |
| **Lovelo** | Uppercase kickers / small labels (`font-label`) |
| **Glacial Indifference** | Mission block, editorial subheads (`font-alt`) |
| **Brittany** | Hero tagline “In Pursuit of Excellence” (`font-script`) |

**Self-host option:** place licensed `.woff2` files under `public/fonts/` and replace CDN `<link>`s with `@font-face` rules in `src/styles/global.css` if required by policy.

## Chosen stack (confirmed)

**Build with:** [Astro](https://astro.build/) **(static output)** + [Tailwind CSS](https://tailwindcss.com/) **+ a small chart layer** for “Our Impact.”

**Charts:** prefer **Chart.js** on a **tiny Astro client island** when you want quick, readable graphs; use **SVG/CSS** if the metric set stays very small.

**Why this stack**

- **Layouts/components** keep one polished design system across the long home page and **per-year alumni pages** (shared nav/footer, section rhythm, repeatable cards).
- **Tailwind** supports consistent spacing, type scale, responsive grids, and refined interactive states without shipping a heavy SPA.
- **Mostly static HTML/CSS** output; add small JS only where it helps (mobile menu, scroll polish, charts, optional lightbox).
- **Astro image** handling supports photography-heavy pages (lazy loading, sizing discipline).

## Reference: other options considered (not selected)

- **Plain HTML/CSS:** viable for visual quality, but higher risk of inconsistent UI across many sections and multiple alumni pages without component tooling.
- **Vite + Tailwind (no Astro):** acceptable alternative with fewer framework concepts; not chosen.
- **React/Next:** unnecessary scope for this static marketing/gallery site.

### Deployment note (non-binding)

- Static output can be hosted on GitHub Pages, Netlify, Vercel static, or school hosting if it allows static files; final choice depends on DNS and district policy.

## Implementation todos

- Alumni IA: **confirmed** — mostly one-page site + **per-year static alumni pages** linked from the Alumni section (shared chrome: same top nav/footer pattern as the home page where practical).
- **Stack:** **confirmed** — **Astro + Tailwind CSS** (+ charts as above).
- Scaffold project, define design tokens (see **Branding kit**), build sections + anchor nav + footer.
- Migrate/copy text from current site + place images; add chart datasets.
- Accessibility pass (focus states, keyboard nav, alt text), mobile nav pattern, performance (lazy images).
