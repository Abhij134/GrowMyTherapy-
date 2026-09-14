# Dr. Maya Reynolds, PsyD — Therapy Homepage

A Next.js therapy homepage built as part of the Grow My Therapy internship assignment.

## Live URL
> Deploy to Vercel and update this link.

## Stack
- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`)
- **Playfair Display** (headings) + **Inter** (body) via `next/font/google`
- `next/image` for all images

## Clone Reference
Structural clone of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
Layout verified at 1280px via screenshot before coding.

## Profile Source
All copy sourced from Dr. Maya Reynolds' profile document. Zero fabricated facts.
Contact details (phone, email) are clearly labeled placeholders in `lib/content.ts`.

## Design Theme
| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#2C6E8A` | Trust, CTAs, teal accents |
| `--color-secondary` | `#F7F3EE` | Body background, warm cream |
| `--color-accent` | `#C8856A` | Warm human details |
| `--color-ink` | `#1C2B35` | Body text |
| `--color-muted` | `#5C6B75` | Subtext, captions |

## Section Order (matches reference)
1. Navbar — About · Specialties ▾ · Methods ▾ · FAQs · CONTACT pill
2. Hero — image LEFT (42%) / copy RIGHT (58%)
3. Empathy — centered paragraph
4. How I Can Help — 3 service cards (image → title → description)
5. Quote Banner — full-width image overlay
6. Expertise Tags — 2-column tag list
7. How I Work — copy 2-col left, portrait right, tan bg
8. **Our Office** ← new section
9. Specialties — 2×2 grid
10. Book CTA — flanking images + pill button
11. Footer

## Decisions Log
See `implementation_plan.md` for the full decisions log. Key substitutions:

| Decision | Reason |
|---|---|
| Office photos → Unsplash stand-ins | Google Drive folder requires auth; aesthetics matched to profile |
| Contact details → placeholders | Fictional therapist; swap in `lib/content.ts` |
| "Our Team" nav removed | Solo practitioner — no team page to populate |
| "Who We Help" → "How I Can Help" | Profile is service-focused, not population-focused |
| Quote banner → image overlay | Verified from reference screenshot — not a solid dark band |

## Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production Build
```bash
npm run build
npm start
```

## Deploy to Vercel
```bash
npx vercel --prod
```

## To-do Before Submission
- [ ] Replace placeholder phone/email in `lib/content.ts`
- [ ] Add real booking URL (Calendly / Psychology Today) in `lib/content.ts`
- [ ] Add real office images if available (drop into `public/images/`, update `lib/content.ts`)
- [ ] Push to public GitHub repo
- [ ] Record Loom walkthrough video
- [ ] Add live Vercel URL above
