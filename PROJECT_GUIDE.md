# Aaliyan Mansoor Portfolio — Complete Project Guide

> **For AI assistants (Claude Code, Cursor, etc.):** Read this file first. It explains the
> entire project — architecture, content system, deployment, and known gotchas. Nearly all
> content updates happen in ONE file: `lib/data.ts`. Start there for any content change.

Last updated: July 2026

---

## 1. Quick Facts

| Item | Value |
|---|---|
| Live site | https://aaliyan-mansoor.vercel.app |
| GitHub repo | https://github.com/Aaliyan28/Aaliyan-Mansoor-Portfolio-Website |
| Owner | Aaliyan Mansoor (GitHub: Aaliyan28, email: aaliyan.mansoor28@gmail.com) |
| Framework | Next.js 16 (App Router, Turbopack) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config in `app/globals.css`) |
| Animation | Framer Motion 12 + Lenis (smooth scroll) + custom canvas particles |
| Hosting | Vercel (Hobby plan) — auto-deploys on every push to `main` |
| Contact email | Resend API (production) with FormSubmit.co fallback (local dev) |
| Fonts | Archivo (display), Space Grotesk (body), JetBrains Mono (labels) |

**Deploy workflow:** edit code → `git commit` → `git push` → Vercel builds and ships in ~1 minute. That's it.

---

## 2. What This Site Is

A dark, cinematic, scroll-driven narrative portfolio. The design concept is
"a journey, not a grid": the visitor scrolls through Aaliyan's story chronologically —
O Levels → A Levels → NED University → NCAI internship → FPGA Final Year Project →
graduation — followed by experience, projects, research publications, professional
writing samples, skills, and a contact form.

Design language: near-black background (`#05060b`), cyan (`#67e8f9`) and violet
(`#a78bfa`) accents, gold (`#fbbf24`) for achievements, glassmorphism cards, film-grain
overlay, aurora gradient blobs, and a neural-network particle field in the hero
(a nod to the owner's AI/computer-vision work).

---

## 3. Repository Layout

The repo root **is** the Next.js app (there is no nested folder on GitHub). On the
owner's machine it lives at `D:\Projects\Aaliyan Portfolio website\site\`, with source
materials (CV drafts, certificates, raw photos) in the parent folder — those are NOT
in the repo and must never be committed.

```
site/
├── app/
│   ├── layout.tsx          # Root layout: fonts (next/font), <Metadata> SEO, grain overlay
│   ├── page.tsx            # Home page: assembles all section components in order
│   ├── globals.css         # ALL design tokens + Tailwind v4 theme + custom utilities
│   ├── icon.svg            # Favicon ("AM." monogram, auto-served by Next)
│   └── api/contact/route.ts # Contact form endpoint (validation, anti-spam, email send)
├── components/             # One file per UI piece (see section 5)
├── lib/data.ts             # ★ SINGLE SOURCE OF TRUTH for all site content
├── public/
│   ├── Aaliyan-Mansoor-CV.pdf        # CV served by the "Download CV" buttons
│   ├── images/             # All photos (pic1–pic7, profile-pic, fyp-poster.png)
│   ├── papers/             # Published research paper PDF
│   └── writing/            # Four freelance article PDFs
├── .claude/launch.json     # Dev-server config for Claude Code preview tools
├── AGENTS.md / CLAUDE.md   # Points AI agents at bundled Next.js 16 docs
└── PROJECT_GUIDE.md        # This file
```

---

## 4. The Content System — `lib/data.ts` (READ THIS FIRST FOR ANY CONTENT EDIT)

Every word, date, link, photo path, and metric displayed on the site comes from typed
exports in `lib/data.ts`. Components only render what this file provides. **To change
site content you almost never need to touch a component.**

| Export | Drives | Notes |
|---|---|---|
| `site` | Name, tagline, summary, GitHub/LinkedIn URLs, CV path | Used in Hero, Contact, Footer, Navbar |
| `heroRoles` | Typewriter titles cycling in the hero | Plain string array |
| `heroCarousel` | Photos crossfading on the hero's right (desktop only) | `{src, alt}`; files in `public/images/` |
| `stats` | Four stat cards in About | `{value, label}` |
| `journey` | The six-chapter timeline | See `Chapter` type; `image` optional — chapters without one show a big ghost number instead |
| `experience` | Job cards | `{role, org, period, location, points[], tags[]}` |
| `projects` | Project cards | `featured: true` renders the big spotlight card (exactly ONE project should be featured); `poster` adds a download button; omitted `github` shows "Private client engagement" |
| `publications` | Research papers | `status` is `"Published"` or `"Under review"`; `doi` adds "Read on ASTRJ" button; `pdf` adds "Download PDF" button |
| `writingPieces` | Freelance article cards | `pdf` is required; files live in `public/writing/` |
| `skillGroups` | Three skill columns | `{name, skills[]}` |
| `certifications` | Scrolling marquee cards | `{name, issuer, year}` |
| `awards` | Honors under Publications | `{name, detail, year}` |
| `navLinks` | Navbar + footer links | `{href: "#section-id", label}` |

### Recipes for common updates

**Add a new project:** append an object to `projects` in `lib/data.ts`. Give it a unique
`slug`, and only set `featured: true` if it should replace the current spotlight (then
remove `featured` from the old one — the Projects component expects exactly one).

**Add a publication:** append to `publications`. When a paper gets published, flip
`status` to `"Published"`, add the `doi` URL, and optionally copy its PDF into
`public/papers/` and set the `pdf` field. (This is exactly what to do when the
CW 2026 paper "Secure Edge Deployment of Machine Vision System on FPGA Platform"
gets accepted — it's currently listed as "Under review".)

**Update the CV:** replace `public/Aaliyan-Mansoor-CV.pdf` with the new file
(same filename = zero code changes).

**Change hero carousel photos:** drop images into `public/images/`, then edit the
`heroCarousel` array. Keep meaningful `alt` text.

**Change the timeline:** edit `journey`. Chapters render alternating left/right on
desktop. A chapter with an `image` shows the photo; without one it shows the chapter
number in outline style.

---

## 5. Components Reference

All in `components/`. Server components unless marked `"use client"`.

| Component | Type | Purpose |
|---|---|---|
| `SmoothScroll` | client | Wraps the page in Lenis smooth scrolling; disabled for reduced-motion users |
| `ScrollProgress` | client | Thin gradient progress bar fixed to the top of the viewport |
| `CursorGlow` | client | Soft radial glow trailing the cursor; desktop pointer devices only |
| `Navbar` | client | Floating glass navbar; turns solid on scroll; hamburger + slide-down menu on mobile; "Download CV" button |
| `Hero` | client | Full-viewport opener: aurora blobs, `ParticleField`, kinetic name, typewriter roles (`useTypewriter` hook), CTA buttons, social icons, scroll cue, `HeroCarousel` on lg+ screens |
| `ParticleField` | client | Canvas 2D neural-network particles; ~110 max, DPR capped at 2, cursor repulsion, pauses when tab hidden, skipped entirely under reduced motion |
| `HeroCarousel` | client | Crossfading photo frame; ALL images stay mounted (opacity-only animation → no loading flash); clickable progress dots; gentle float |
| `About` | server | Portrait in glass frame + intro copy + stat cards |
| `Journey` | client | The timeline: scroll-linked gradient line (`useScroll` on the track), glowing nodes, alternating chapters |
| `Experience` | server | Job cards with bullet points and tech tags |
| `Projects` | server | Featured spotlight card (image, metrics grid, gold badge) + 2-col grid of other projects; GitHub / poster-download links |
| `Publications` | server | Paper cards with status badges (green=published, gold=under review), DOI + PDF buttons, awards grid |
| `Writing` | server | Editorial-styled section (serif italic titles, violet accents) with per-article "Read PDF" buttons |
| `Skills` | server | Three numbered skill columns + infinite certification marquee (pauses on hover) |
| `Contact` | client | Form with honeypot field, posts JSON to `/api/contact`, aria-live status messages |
| `Footer` | server | Logo, nav links, copyright |
| `Reveal` | client | Shared scroll-reveal wrapper (fade+rise via `whileInView`) — used by every section |
| `SectionHeading` | server | Shared kicker + title + intro block |
| `Magnetic` | client | Makes buttons subtly stick to the cursor on hover |

### Design tokens (in `app/globals.css`)

Tailwind v4 CSS-first config. Colors are CSS variables mapped into the Tailwind theme:
`bg` (#05060b), `surface`, `surface-2`, `line` (borders), `ink` (text), `muted`,
`accent` (cyan #67e8f9), `accent-2` (violet #a78bfa), `gold` (#fbbf24).
Use them as Tailwind classes: `bg-bg`, `text-ink`, `text-accent`, `border-line`, etc.

Custom utility classes defined there: `.glass` (glassmorphism card), `.kicker`
(mono uppercase section label), `.text-gradient` (white→cyan→violet headline),
`.text-outline` (ghost outline numbers), `.aurora` (drifting blur blob),
`.grain` (film-grain overlay on `<body>`), `.animate-marquee`, `.caret` (typewriter
cursor), `.animate-scroll-cue`. A `prefers-reduced-motion` block disables all of it
for accessibility — keep that intact when adding new animations.

**Animation rule:** only animate `transform` and `opacity` (GPU-composited). Never
animate width/height/top/left.

---

## 6. Contact Form Pipeline (IMPORTANT — has history)

**Flow:** `Contact.tsx` → POST JSON `{name, email, message, company}` → `app/api/contact/route.ts`

The route, in order:
1. **Honeypot** — hidden `company` field; if filled, returns fake success (bots learn nothing)
2. **Validation** — required fields, length caps, email regex
3. **Rate limit** — in-memory, 5 requests / 10 min / IP (resets on redeploy; fine for a portfolio)
4. **Send** — if `RESEND_API_KEY` env var exists → **Resend** (`from: onboarding@resend.dev`,
   `to: aaliyan.mansoor28@gmail.com`, `replyTo` = visitor). Otherwise → FormSubmit.co relay.

**Production uses Resend.** The API key is set in Vercel → Project → Settings →
Environment Variables → `RESEND_API_KEY` (Resend account: aaliyan.mansoor28@gmail.com).
Env-var changes require a **Redeploy** to take effect.

**Critical constraints (learned the hard way):**
- **FormSubmit.co DOES NOT WORK from Vercel** — Cloudflare bot protection 403-blocks
  requests from datacenter IPs. It works from residential IPs (local dev) only.
  Do not "fix" the form by switching production back to FormSubmit.
- FormSubmit requires browser-style `Origin`/`Referer` headers on server-side calls,
  and requires a one-time email activation **per domain**.
- Resend free tier without a verified custom domain can only deliver TO the Resend
  account owner's own email — which is exactly our setup, so it works. If the
  recipient ever changes, verify a sending domain in Resend first.
- The recipient address lives ONLY in the server route — never expose it in client code
  (anti-spam requirement from the owner).

---

## 7. Local Development

```bash
cd site            # (repo root on a fresh clone)
npm install
npm run dev        # http://localhost:3000 (Turbopack)
npm run lint       # ESLint
npm run build      # production build — ALWAYS run before pushing big changes
```

- `.claude/launch.json` (in both the parent folder and `site/`) lets Claude Code's
  preview tools start the dev server automatically (config name: `portfolio-dev`).
- `.env.local` (git-ignored, currently not present) can hold `RESEND_API_KEY` to test
  Resend locally; without it, local dev falls back to FormSubmit.
- **Never commit `.env.local` or any API key.**

### Known gotchas

| Symptom | Cause | Fix |
|---|---|---|
| New Tailwind class (e.g. `lg:block`) has no effect in dev | Turbopack serving stale generated CSS | Delete `site/.next`, restart dev server |
| Contact form 502 in production | See section 6 | Check `RESEND_API_KEY` exists in Vercel + redeploy; check Vercel function logs |
| Contact form works locally but not deployed | FormSubmit/Cloudflare blocks datacenter IPs | Expected — production must use Resend |
| Hero name overflows its column | Fixed via `lg:text-[clamp(4rem,8.3vw,7.5rem)]` on the `<h1>` | Keep the clamp if editing hero sizes |
| Images flash during carousel crossfade | Solved: all slides stay mounted, opacity-only | Keep that pattern if editing `HeroCarousel` |

---

## 8. Deployment (Vercel)

- Project: `aaliyan-mansoor-portfolio-website` under the "Aaliyan Mansoor's projects" team (Hobby).
- **Every push to `main` auto-deploys to production.** Pushing a different branch creates a preview URL.
- Domain: `aaliyan-mansoor.vercel.app` (renamed from the long default).
- Rollback: Vercel → Deployments → pick an older one → "Instant Rollback".
- Env vars: Settings → Environment Variables (currently just `RESEND_API_KEY`). Redeploy after changing.

### Adding a custom domain later
1. Buy a domain (Porkbun / Namecheap / Cloudflare, ~$10/yr) — or get a free `.me` for a
   year via the GitHub Student Developer Pack if a student email still validates.
2. Vercel → Project → Settings → Domains → Add → follow the DNS instructions (A record
   or CNAME at the registrar). HTTPS is automatic.
3. No code changes needed. The contact form (Resend) is domain-independent.

---

## 9. Build History (what was done, in order)

1. **Planning** — content gathered from CV/Europass PDFs, certificates, publication PDF,
   photos, writing samples; design direction chosen (dark cinematic, scroll storytelling,
   Next.js + Tailwind + Framer Motion) via the ui-ux-pro-max design system skill.
2. **Scaffold** — `create-next-app` (Next 16, TS, Tailwind v4, App Router) + framer-motion,
   lenis, resend; photos/CV copied into `public/`.
3. **Design system** — tokens, fonts, utilities in `globals.css`; core interactive
   components (particles, smooth scroll, cursor glow, navbar, reveal, magnetic).
4. **Sections** — Hero, About, Journey, Experience, Projects, Publications, Writing,
   Skills, Contact, Footer — all content centralized in `lib/data.ts`.
5. **Contact API** — validation, honeypot, rate limiting, Resend + FormSubmit dual path.
6. **Iterations from owner feedback** — O Levels naming/dates; chapter-3 photo swap;
   publication DOI + PDF buttons (DOI: 10.12913/22998624/212538, ASTRJ 2026 20(3) 29–46,
   CC-BY 4.0 so self-hosting the PDF is legal); writing PDF downloads; FYP poster
   download + badge text; portrait overlay text removed; "AI / Computer Vision Researcher"
   typewriter role; hero photo carousel (pic3/pic5/pic7); larger navbar logo; chapter 5
   ghost number instead of photo.
7. **QA** — responsive verification at 375/768/1024/1440 (fixed hero-name overflow at
   1024), animation audit (transform/opacity only), reduced-motion support, LCP fix for
   carousel, custom AM favicon, ESLint + production build clean.
8. **Deployment** — GitHub repo created and pushed; Vercel import; domain renamed;
   FormSubmit-on-Vercel failure diagnosed (Cloudflare 403) and solved with Resend via
   `RESEND_API_KEY`; end-to-end email delivery verified from production.

---

## 10. Instructions for Future AI Sessions

1. **Read this file and `lib/data.ts` before changing anything.**
2. Content edits (text, dates, links, photos, new projects/papers) → `lib/data.ts` and
   `public/` only. Component edits are for layout/behavior changes.
3. After changes: `npm run lint` and `npm run build` must pass; verify visually in the
   dev server (respect the existing 375/768/1024/1440 responsive checkpoints).
4. Deploy = `git push` to `main`. Ask the owner before pushing; never force-push.
5. Never commit secrets, `.env.local`, or files from the parent folder (raw CV drafts,
   certificates, personal documents).
6. Keep accessibility: alt text on images, labels on inputs, `prefers-reduced-motion`
   support, 44px+ touch targets, WCAG-reasonable contrast on the dark theme.
7. Keep the visual language consistent: use existing tokens/utilities (`.glass`,
   `.kicker`, accent colors) rather than inventing new ones.
