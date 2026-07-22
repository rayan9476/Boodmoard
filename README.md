# Nexlify — Creative Digital Agency Landing Page

A modern, high-performance agency landing page built with React, Vite, Tailwind CSS, Framer Motion, and GSAP. Designed as a sellable template — deliver to any client by swapping brand name, color, logo, and content. Built to convert visitors into clients with smooth animations, interactive modals, a working contact form, and a fully responsive layout.

---

## Live Demo

> [https://nexlify-bice.vercel.app/](https://nexlify-bice.vercel.app/)

---

## Screenshots

> Located in `src/assets/projects/nexlify/`

src/assets/projects/nexlify/
├── HeroSection.png
├── ServicesSection.png
├── ServicesSectionMobile.png
├── OurWorksSection.png
├── TestimonialsSection.png
├── InstagramSection.png
├── InstagramSectionMobile.png
├── CTASection.png
└── ContactSection.png

---

## Tech Stack

| Technology        | Version | Purpose                                            |
| ----------------- | ------- | -------------------------------------------------- |
| React             | 18      | UI framework                                       |
| Vite              | 5       | Build tool & dev server                            |
| Tailwind CSS      | v4      | Utility-first styling                              |
| Framer Motion     | latest  | Page & component animations, layoutId morphing     |
| GSAP              | latest  | Custom cursor, route transition, ticker animations |
| Lenis             | latest  | Smooth scroll                                      |
| React Router DOM  | v6      | Client-side routing                                |
| React Icons       | latest  | Icon library                                       |
| Google Sheets API | —       | Contact form submissions via Apps Script           |

---

## Project Structure

nexlify-landing/
├── public/
│ ├── favicon.ico
│ ├── favicon.svg
│ ├── favicon-16x16.png
│ ├── favicon-32x32.png
│ ├── favicon-48x48.png
│ ├── apple-touch-icon.png
│ ├── android-chrome-192x192.png
│ ├── android-chrome-512x512.png
│ ├── icon-256x256.png
│ ├── icons.svg
│ ├── nexlify-favicon-32x32.png
│ ├── nexlify-small-logo.png
│ ├── robots.txt
│ ├── sitemap.xml
│ └── site.webmanifest
├── src/
│ ├── assets/
│ │ ├── fonts/
│ │ │ └── InterVariable.woff2
│ │ ├── nexlify-transparent-cropped.png
│ │ ├── hero.png
│ │ └── nexlify-logo-transparent-bg.png
│ ├── components/
│ │ ├── common/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── GlobalUI.jsx
│ │ │ └── PageLoader.jsx
│ │ ├── context/
│ │ │ ├── LoaderContext.jsx
│ │ │ └── RouteChangeStairsContext.jsx
│ │ ├── hooks/
│ │ │ ├── useFakeScrollbar.js
│ │ │ ├── useScrollTo.js
│ │ │ ├── useCountUp.js
│ │ │ ├── useCustomCursor.js
│ │ │ └── useRouteChangeStairsAnimation.js
│ │ ├── HeroSection.jsx
│ │ ├── NavbarMenu.jsx
│ │ ├── ServicesSection.jsx
│ │ ├── ServiceModal.jsx
│ │ ├── OurWorks.jsx
│ │ ├── ProjectModal.jsx
│ │ ├── TestimonialsSection.jsx
│ │ ├── InstagramSection.jsx
│ │ ├── ReelModal.jsx
│ │ ├── ContactSection.jsx
│ │ ├── CTASection.jsx
│ │ ├── LenisProvider.jsx
│ │ ├── CustomCursor.jsx
│ │ └── RouteChangeStairs.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── PrivacyPolicy.jsx
│ │ └── TermsOfService.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
├── vercel.json
└── README.md

---

## Features

### Animations & Interactions

- **Page Loader** — GSAP timeline with logo reveal, progress bar, counter 0–100%, and staggered panel wipe on entry
- **Route Transition** — Two-layer GSAP stair animation: green layer drops top to bottom right to left, black layer rises bottom to top right to left
- **Custom Cursor** — GSAP ticker-driven smooth ball follower with hover scale effect, walks DOM tree to detect all `cursor: pointer` elements, disabled on touch devices
- **Smooth Scroll** — Lenis with `autoRaf: true`, exposed via `window.__lenis` for hooks
- **Fake Scrollbar** — Custom GSAP-animated scrollbar thumb synced to Lenis scroll position with fade in/out
- **Framer Motion layoutId** — Card-to-modal shared element animations for Services, Works, and Reels sections
- **Count-up animations** — Custom `useCountUp` hook with easing, smart duration scaling, supports `K`, `M`, `+` suffixes, scroll-triggered and onload modes
- **Scroll-triggered animations** — `whileInView` with `once: true` on all section cards and headings

### Sections

- **Navbar** — Fixed with backdrop blur, smooth scroll to all sections, animated hamburger mobile menu
- **Hero** — Animated tag badge, heading, description, dual CTA buttons, floating stat cards with count-up on load
- **Services** — 6 service cards with Framer Motion layoutId expand modal, deliverables list, availability badge, order CTA
- **Our Works** — 6 landing page type cards with layoutId expand modal, tech tags, deliverables, order CTA
- **Testimonials** — 3 client review cards with star ratings and scroll-triggered entrance
- **Instagram** — Profile card with animated stats count-up, reel grid with load-more, video modal with play/pause/seek/mute/progress controls
- **Contact** — Form with name/email/phone validation, service dropdown, budget pills, Google Sheets submission via Apps Script, success state
- **CTA** — Full-width call to action with glow effects and smooth scroll buttons
- **Footer** — Logo, social links, service/company nav links all with smooth scroll

### Pages

- `/` — Main landing page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/nexlify-landing.git
cd nexlify-landing

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

---

## Dependencies

### Install all at once

```bash
npm install lenis gsap framer-motion react-router-dom react-icons
```

```bash
npm install -D tailwindcss postcss autoprefixer @vitejs/plugin-react vite
```

### Full list

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.3.2",
    "framer-motion": "^12.42.2",
    "gsap": "^3.15.0",
    "hamburgers": "^1.2.1",
    "lenis": "^1.3.25",
    "lucide-react": "^1.23.0",
    "motion": "^12.42.2",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-icons": "^5.7.0",
    "react-router-dom": "^7.18.1",
    "tailwindcss": "^4.3.2"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "eslint": "^10.6.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "vite": "^8.1.1"
  }
}
```

---

## Environment Setup

No `.env` file needed. The Google Apps Script URL is hardcoded in `ContactSection.jsx`.

### Setting up your own Google Sheet

1. Create a new Google Sheet with columns: `Name | Email | Phone | Service | Budget | Message | Date`
2. Go to [script.google.com](https://script.google.com) and create a new project
3. Paste this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openByUrl(
    "YOUR_GOOGLE_SHEET_URL_HERE",
  ).getSheetByName("Sheet1");

  sheet.appendRow([
    e.parameter.name,
    e.parameter.email,
    e.parameter.phone,
    e.parameter.service,
    e.parameter.budget,
    e.parameter.message,
    new Date(),
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ success: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy → New Deployment**
5. Type: **Web App**
6. Execute as: **Me**
7. Who has access: **Anyone** ← must be Anyone, not "Anyone with Google account"
8. Click Deploy and copy the URL
9. Replace the URL in `ContactSection.jsx`

> ⚠️ Every time you edit the Apps Script, create a **New Deployment** — editing an existing one may not pick up changes.

---

## How to Deliver to a Client

This template is designed to be re-skinned and delivered to any client in 3–5 days.

**Step 1 — Clone and install**

```bash
git clone https://github.com/yourusername/nexlify-landing.git my-client-project
cd my-client-project
npm install
```

**Step 2 — Swap agency name globally**

Find & replace in your editor:

Nexlify → Client Agency Name
nexlify → clientagencyname

**Step 3 — Replace logo**

Drop client logo PNG into `src/assets/` and update the import in:

- `common/Navbar.jsx`
- `common/Footer.jsx`
- `common/PageLoader.jsx`
- `PrivacyPolicy.jsx`
- `TermsOfService.jsx`

**Step 4 — Replace brand color**

Find & replace globally:

#4CAF4F → client primary color

#43A047 → client hover color (slightly darker)

**Step 5 — Update all content**

All data lives at the top of each component as a plain array or object — no CMS needed:

| What to change    | File                      | Variable                |
| ----------------- | ------------------------- | ----------------------- |
| Hero text & stats | `HeroSection.jsx`         | `slide{}` + stats array |
| Services list     | `ServicesSection.jsx`     | `services[]`            |
| Works / portfolio | `OurWorks.jsx`            | `works[]`               |
| Testimonials      | `TestimonialsSection.jsx` | `testimonials[]`        |
| Instagram profile | `InstagramSection.jsx`    | `profile{}`             |
| Reel videos       | `InstagramSection.jsx`    | `allReels[]`            |
| Nav links         | `common/Navbar.jsx`       | `navLinks[]`            |
| Footer links      | `common/Footer.jsx`       | links arrays            |
| Contact info      | `ContactSection.jsx`      | `contactInfo[]`         |
| Social links      | `common/Footer.jsx`       | `socials[]`             |

**Step 6 — Update meta tags**

In `index.html` update:

- `<title>` — client name
- `meta description` — client description
- `og:url` — client live URL
- `og:image` — client OG image (1200×630px)
- Schema.org `name`, `url`, `email`, `address`, `sameAs`

**Step 7 — Set up client Google Sheet**

Follow the Environment Setup steps above with the client's Google account.

**Step 8 — Deploy**

```bash
# Push to GitHub then connect to Vercel
# Or deploy directly
npx vercel --prod
```

**Step 9 — Hand over**

Deliver:

- Live Vercel URL
- GitHub repo access
- Google Sheet access
- Short Loom video walkthrough of how to update content

---

## Performance Optimizations Applied

### CSS

- ✅ Removed `background-attachment: fixed` — was forcing full repaint on every scroll frame
- ✅ Removed inline SVG noise filter from `body` — was re-evaluated on every paint
- ✅ All blur overlay divs use `position: absolute` not `fixed` — renders once, not every frame
- ✅ `will-change: transform` on `section` elements — promotes to own GPU compositing layer
- ✅ `-webkit-font-smoothing: antialiased` on all floating/animated elements — prevents text flicker

### JavaScript

- ✅ All below-fold sections use `React.lazy` + `Suspense` — reduces initial JS bundle
- ✅ Custom cursor uses `lastTarget` cache — `getComputedStyle` only runs on element change
- ✅ Lenis `autoRaf: true` — single clean RAF loop, no double-ticking
- ✅ `useCountUp` cancels `requestAnimationFrame` on unmount — no setState on unmounted components
- ✅ `backfaceVisibility: hidden` on all Framer Motion floating elements — prevents sub-pixel flicker
- ✅ `overwrite: "auto"` on all GSAP tweens — prevents conflicting animations stacking

### Images & Media

- ✅ All Unsplash images use `?w=800` — prevents loading full resolution unnecessarily
- ✅ Video modal uses `poster` attribute — shows thumbnail while video loads
- ✅ Reel videos use Pexels CDN — agency-relevant stock clips, no placeholder content

---

## What to Update Before Going Live with Real Clients

### High Priority ❌

| Task                       | How                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| Replace stock images       | Use client's real work screenshots hosted on [Cloudinary](https://cloudinary.com) free tier |
| Replace stock videos       | Upload real agency reels to Cloudinary, replace Pexels URLs                                 |
| Real Instagram integration | Replace hardcoded reels with [Behold.so](https://behold.so) for auto-syncing real posts     |
| Real favicon               | Export logo icon at 32×32 and 192×192 PNG                                                   |
| Real OG image              | Create 1200×630px image in Canva with logo + tagline                                        |
| Real testimonials          | Replace placeholder reviews with real client feedback                                       |

### Medium Priority ⚠️

| Task                 | How                                                                         |
| -------------------- | --------------------------------------------------------------------------- |
| Form spam protection | Add honeypot field or [hCaptcha](https://www.hcaptcha.com)                  |
| Form error state     | Show error message if Google Sheets submission fails                        |
| Skeleton loaders     | Replace `Suspense fallback={null}` with skeleton UI for slow connections    |
| Compress logo        | Run through [Squoosh](https://squoosh.app) → convert to WebP (~70% smaller) |

### Lower Priority 💡

| Task                | How                                                       |
| ------------------- | --------------------------------------------------------- |
| Analytics           | Add [Plausible](https://plausible.io) or Google Analytics |
| Scroll progress bar | Thin green line at top showing scroll depth               |
| 404 page            | Add `<Route path="*" element={<NotFound />} />`           |
| Blog section        | 2–3 posts dramatically improve SEO for agency keywords    |

---

## Deployment

### Vercel (Recommended)

```bash
# Option 1 — CLI
npm i -g vercel
vercel

# Option 2 — Connect GitHub repo to vercel.com
# Automatic redeploy on every git push
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to netlify.com/drop
```

Add `public/_redirects` for React Router to work:

/\* /index.html 200

---

## Browser Support

| Browser       | Support | Notes                       |
| ------------- | ------- | --------------------------- |
| Chrome 90+    | ✅ Full | —                           |
| Firefox 88+   | ✅ Full | —                           |
| Safari 14+    | ✅ Full | —                           |
| Edge 90+      | ✅ Full | —                           |
| Mobile Chrome | ✅ Full | Custom cursor auto-disabled |
| Mobile Safari | ✅ Full | Custom cursor auto-disabled |

> Custom cursor is disabled on touch/mobile devices via `(pointer: fine)` CSS media query — no code changes needed.

---

## Known Issues

- Pexels reel videos may load slowly on slow connections — move to Cloudinary for production
- Instagram section uses hardcoded data — replace with Behold.so for real auto-syncing posts
- Testimonials are placeholder — replace before delivering to real clients
- `backdrop-filter` blur on modals may cause slight performance drop on older Android devices

---

## License

This project is a commercial template for selling web development services. You may:

- ✅ Use for client projects
- ✅ Modify and rebrand freely
- ✅ Sell websites built from this template
- ❌ Resell or redistribute this template itself as a product

---

## Author

Built by **Rayyan** — Full Stack Developer based in Karachi, Pakistan.

- Fiverr: [fiverr.com/yourusername](https://fiverr.com/yourusername)
- GitHub: [github.com/yourusername](https://github.com/yourusername)
- Email: your-email@gmail.com

---

## Changelog

### v1.0.0 — Initial Release

- Hero with GSAP count-up and Framer Motion entrance animations
- Services section with layoutId modal expand
- Works section with project type modals and order CTA
- Testimonials with scroll-triggered cards
- Instagram reel section with video player modal
- Contact form with validation and Google Sheets integration
- Two-layer GSAP stair route transition animation
- GSAP ticker custom cursor with DOM tree hover detection
- Lenis smooth scroll with fake scrollbar
- GSAP page loader with progress counter
- Privacy Policy and Terms of Service pages
- Full SEO — meta tags, OG, Twitter Card, Schema.org, sitemap, robots.txt
- Performance optimized — lazy loading, GPU compositing, RAF cleanup

---

> Built with React + Vite + Tailwind CSS + Framer Motion + GSAP + Lenis
