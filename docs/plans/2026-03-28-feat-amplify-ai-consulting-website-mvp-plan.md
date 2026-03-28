---
title: "feat: Amplify AI Consulting Website MVP"
type: feat
status: active
date: 2026-03-28
origin: docs/brainstorms/2026-03-28-amplify-ai-consulting-website-brainstorm.md
feed_forward:
  risk: "6-day timeline with copy bottleneck while Alex also preps Film Festival Workshop on April 4"
  verify_first: true
---

# feat: Amplify AI Consulting Website MVP

## Overview

Build and launch a single-page credibility website for **Amplify AI** at `amplifyai.to` by April 4, 2026. The site establishes Alex Guillen's AI consulting brand for the SD Streaming Film Festival Workshop. It follows the proven HTML/CSS + GitHub Pages pattern from `07-website-hero.html`.

(see brainstorm: docs/brainstorms/2026-03-28-amplify-ai-consulting-website-brainstorm.md)

## What's Changing

A new GitHub repo (`amplifyai-website`) with a single-page static site deployed to `amplifyai.to` via GitHub Pages. No existing code is modified.

## What Must Not Change

- The existing Amplify Workshop landing page (`07-website-hero.html`) stays untouched
- The `amplify-workshop-assets` repo is not modified (this plan doc lives here temporarily during planning only)
- Brand voice rules from `context/brand-voice.md` apply to all copy
- No fabricated proof, stats, or testimonials. Only Heather Hilton's endorsement is approved.

## How We'll Know It Worked

All 7 success criteria from the brainstorm are met:

1. Site loads at `amplifyai.to` (or fallback GitHub Pages URL)
2. Mobile-responsive, looks professional on phone
3. All 6 sections have real copy (no placeholders)
4. Open Graph tags produce correct LinkedIn preview
5. Contact info clickable on mobile (tap-to-call, tap-to-email)
6. At least one workshop listed with accurate details
7. Copy passes brand-voice.md self-check

## Most Likely Way This Plan Is Wrong

The copy bottleneck. Alex must review and approve copy by March 31. If that slips, the build window (April 1-3) shrinks. Mitigation: Claude Code drafts copy March 29. If Alex has not reviewed by March 31, the site ships with only the verified-safe subset of copy (see Phase B: Copy Safety Tiers). Unreviewed sections are omitted, not published.

---

## Implementation Plan

### Phase A: Repo + DNS Setup (March 29, ~30 min)

**Owner:** Alex creates repo, Claude Code configures.

#### Deployment Strategy: Build First, Domain Second

The site is developed and verified on the GitHub Pages project URL first. The custom domain is attached only after the site works at the project URL.

1. **Create GitHub repo** `amplifyai-website` (public, on SDGuitarist account)
   - Files to create:
     - `README.md` (one-liner: "Amplify AI consulting website")
     - `.gitignore` (standard web: `.DS_Store`, `node_modules/`, `.env`)
   - **Do NOT add the `CNAME` file yet.** The site builds and verifies at `sdguitarist.github.io/amplifyai-website/` first.

2. **Enable GitHub Pages** in repo Settings > Pages > Source: main branch, root `/`

3. **Configure DNS at Porkbun** for `amplifyai.to` (can happen in parallel with build):
   - Delete any existing records
   - Add 4 A records (host: blank/`@`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: host `www`, answer `sdguitarist.github.io`

4. **DNS propagation check** on April 2:
   ```bash
   dig amplifyai.to +short
   # Should return GitHub's IPs
   ```

5. **Attach custom domain (April 2-3, only after site is verified at project URL):**
   - Add `CNAME` file containing `amplifyai.to` to the repo
   - Enable "Enforce HTTPS" in GitHub Pages settings
   - Run the URL switchover (see Phase E)

#### URL Strategy

All development and initial verification happens at the **project URL**: `sdguitarist.github.io/amplifyai-website/`

All absolute URLs in the codebase use a single variable approach so switchover is a one-commit change:

| File | What changes on domain switchover |
|------|----------------------------------|
| `index.html` og:url | `https://sdguitarist.github.io/amplifyai-website/` -> `https://amplifyai.to/` |
| `index.html` og:image | Path must work at both URLs (use relative path `/images/og-image.jpg` during dev, absolute on switchover) |
| `index.html` JSON-LD `url` | Same as og:url |
| `robots.txt` Sitemap line | `https://sdguitarist.github.io/amplifyai-website/sitemap.xml` -> `https://amplifyai.to/sitemap.xml` |
| `sitemap.xml` `<loc>` | `https://sdguitarist.github.io/amplifyai-website/` -> `https://amplifyai.to/` |
| `CNAME` | Does not exist during dev. Added on switchover. |

**GitHub Pages subpath note:** When serving from `sdguitarist.github.io/amplifyai-website/`, all asset paths (CSS, images, fonts) must use relative paths (e.g., `./styles.css`, `./images/alex-headshot.webp`), not root-relative paths (e.g., `/styles.css`). Root-relative paths break on the project URL subpath.

**Switchover is one commit:** Add `CNAME` file + update the 5 absolute URLs listed above. All other paths are relative and work at either URL.

**Launch decision on April 3:**
- If `dig amplifyai.to` returns GitHub IPs: do the switchover commit, launch at `amplifyai.to`
- If DNS is not resolving: launch at `sdguitarist.github.io/amplifyai-website/` as-is. Do the switchover commit when DNS propagates (could be hours or days later). The site is live either way.

#### Files created in Phase A
- `README.md`
- `.gitignore`

---

### Phase B: Copy Drafting (March 29, ~2 hours)

**Owner:** Claude Code drafts, Alex reviews and approves.

Draft all site copy in a single plain text file before touching HTML. This separates the content bottleneck from the build.

#### File: `content/site-copy.md`

```
## Hero Section
- Headline: "Amplify AI"
- Tagline: "AI Dual Literacy"
- Positioning line (1 sentence, client-facing: "I help...")
- Primary CTA text + link target

## The Story (3-4 paragraphs)
- Para 1: The problem (musician losing deals to admin overhead)
- Para 2: What Alex built (5 apps, Pacific Flow, real systems)
- Para 3: The insight (AI made him more consistent, not faster)
- Para 4: The pivot (now teaching what worked)

## What I Do (3 cards)
- Card 1: Workshops (outcome-focused, 1-2 sentences)
- Card 2: AI Strategy Sessions (outcome-focused, 1-2 sentences)
- Card 3: Team Training (outcome-focused, 1-2 sentences)

## Upcoming Workshops
- Film Festival Workshop: date, time, location, format, registration
  (PENDING from Alex — fallback: omit this card)
- Amplify Workshop: April 25, 10 AM-2 PM, Expressive Arts SD, $150
  Link to existing landing page

## Social Proof
- Heather Hilton endorsement (full quote from brand-voice.md)
- Alex's credentials: 2,500+ events, Berklee, 5 AI apps, Pacific Flow

## Contact
- Heading: conversational, peer-to-peer
- Email: alex@alexguillenmusic.com
- Phone: 619-755-3246
- CTA phrasing: casual, not "Book a consultation"
```

#### Voice checklist (apply to every paragraph)
- [ ] No em-dashes
- [ ] No Tier 1 banned words (delve, leverage, unlock, seamless, transformative...)
- [ ] No banned structural patterns (false binary, FOMO framing, cinematic setup...)
- [ ] Max 1 exclamation mark per section
- [ ] Reads like Alex talking to a peer, not a marketing department
- [ ] Leads with results, not pitched benefits
- [ ] No fabricated claims

#### Copy Safety Tiers

Alex owns the voice. If Alex has not reviewed copy by March 31, the site does NOT ship with full unreviewed messaging. Instead, it ships with only the **verified-safe** tier:

**Tier 1 — Ship without review (all verifiable facts, no positioning claims):**
- Hero: "Amplify AI" + "AI Dual Literacy" (brand name and tagline, already decided)
- Credentials: "2,500+ events. 30 years. Berklee College of Music. 5 AI apps." (verifiable facts)
- Heather Hilton's endorsement (approved public quote, already in brand-voice.md)
- Workshop details (dates, times, locations, prices — factual)
- Contact info (email, phone — factual)

**Tier 2 — Requires Alex review before publishing:**
- The Story section (narrative framing of Alex's journey — voice-sensitive)
- What I Do service descriptions (positioning claims about what Alex offers)
- Hero positioning line ("I help..." — defines the brand promise)
- Any CTA phrasing beyond simple contact info

**If March 31 passes without review:** Ship a narrower page with only Tier 1 content. This means: Hero with name/tagline/photo, credentials list, Heather's quote, workshop cards, contact info. No story section, no service cards, no positioning claims. A credibility page with only true facts is better than a full page with unreviewed voice.

**Alex can review after launch** and the missing sections get added in a follow-up commit. The site grows from narrow-and-safe to full-and-approved.

#### Copy deadline
- **March 29:** Claude Code delivers full draft in `content/site-copy.md`
- **March 31 EOD:** Alex approves or edits. If no response, ship Tier 1 only.

#### Files created
- `content/site-copy.md`

---

### Phase C: Design Setup (March 30, ~1 hour)

**Owner:** Claude Code, with Alex's input on reference sites.

#### Design Research (timebox: 1 hour HARD LIMIT)

1. Find 2-3 reference consulting/portfolio sites (spend max 30 min)
2. Screenshot specific elements to replicate (layout, typography, color approach)
3. Choose fonts: 1 display font + 1 body font from Google Fonts (spend max 15 min)
4. Define color palette (max 15 min):
   - If Alex has a preference, use it
   - If not, start with warm editorial palette (brainstorm recommendation)
   - Fallback: clean white background, dark text, one accent color

**ADHD guardrail:** If not done in 1 hour, stop. Ship with: white background, Inter body font, Georgia display font, dark text, one warm accent. Polish in Phase 2.

#### Design decisions to document

Record in `content/design-decisions.md`:
- Chosen fonts (display + body)
- Color palette (primary, accent, text, background)
- Reference sites used (max 3 URLs + what was taken from each)

#### Files created
- `content/design-decisions.md`

---

### Phase D: Build (April 1-2, ~4-6 hours across 2 sessions)

**Owner:** Claude Code builds. Commit after each meaningful piece of work (~50-100 lines is a guideline, not a rule).

#### File: `index.html` + `styles.css`

Separate stylesheet produces cleaner diffs than inline styles.

**Section structure** (modeled on `07-website-hero.html` patterns):

```
<!DOCTYPE html>
<html lang="en">
<head>
  - charset, viewport
  - <title>Amplify AI | AI Dual Literacy</title>
  - Open Graph meta tags (og:title, og:description, og:image, og:url)
  - Twitter Card meta tags
  - Google Fonts link (display + body font)
  - <link rel="stylesheet" href="./styles.css">
  - JSON-LD structured data (ProfessionalService)
</head>
<body>
  <header>  — nav with "Amplify AI" logo text + anchor links
  <main>
    <section id="hero">      — hero with photo, headline, tagline, CTA
    <section id="story">      — 3-4 paragraphs, Alex's journey
    <section id="services">   — 3 cards (Workshops, Strategy, Training)
    <section id="workshops">  — upcoming workshop cards
    <section id="proof">      — Heather quote + credentials
    <section id="contact">    — email, phone, CTA text
  </main>
  <footer> — copyright, minimal
</body>
</html>
```

**If shipping Tier 1 only (copy not reviewed):** omit `<section id="story">` and `<section id="services">`. The page flows directly from Hero to Workshops to Proof to Contact. These sections get added when Alex approves the copy.

**All asset paths use relative URLs** (e.g., `./styles.css`, `./images/alex-headshot.webp`) so the site works at both the project URL and the custom domain without changes.

#### CSS approach

- Mobile-first responsive (breakpoints at 768px, 1024px)
- CSS custom properties for colors, fonts, spacing
- No CSS framework (no Bootstrap, no Tailwind)
- Reuse patterns from `07-website-hero.html`:
  - `.hero` section with gradient background
  - Responsive flex layout (column on mobile, row on desktop)
  - Card grid for services and workshops
  - `background-clip: text` for gradient text if it fits the design
- Smooth scroll: `html { scroll-behavior: smooth; }`

#### Images

- Copy `alex-headshot.jpeg` from `amplify-workshop-assets/images/` into the new repo
- Convert to WebP if quality is maintained: `cwebp alex-headshot.jpeg -o alex-headshot.webp`
- Hero image: `fetchpriority="high"`, explicit `width` and `height`
- OG image: create a 1200x630 card with brand name + tagline (can be a simple HTML-to-screenshot)

#### Supporting files

- `robots.txt` (use project URL during dev, update on domain switchover):
  ```
  User-agent: *
  Allow: /
  Sitemap: https://sdguitarist.github.io/amplifyai-website/sitemap.xml
  ```
- `sitemap.xml` (use project URL during dev, update on domain switchover):
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://sdguitarist.github.io/amplifyai-website/</loc>
      <lastmod>2026-03-28</lastmod>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

#### Suggested build order

This is guidance for logical sequencing, not a rigid commit schedule:

1. HTML skeleton + meta tags + robots.txt + sitemap.xml
2. Hero section (HTML + CSS)
3. Story section (if Tier 2 copy approved)
4. Services cards section (if Tier 2 copy approved)
5. Workshops section
6. Social proof section
7. Contact section + footer
8. Responsive polish + mobile testing
9. OG image + final meta tag values

#### Files created
- `index.html`
- `styles.css`
- `images/alex-headshot.webp` (or .jpeg)
- `images/og-image.jpg`
- `robots.txt`
- `sitemap.xml`

---

### Phase E: Pre-Launch Verification (April 2-3, ~1 hour)

**Owner:** Claude Code runs checks, Alex does visual review.

#### Step 1: Verify at project URL

Before touching the custom domain, confirm the site works at `sdguitarist.github.io/amplifyai-website/`:

- [ ] Site loads without errors
- [ ] All images load (no broken icons)
- [ ] CSS loads (page is styled, not unstyled HTML)
- [ ] All relative paths work (`./styles.css`, `./images/...`)
- [ ] Anchor links scroll to correct sections
- [ ] Mobile responsive: test at 375px, 768px, 1024px
- [ ] Tap-to-call works: `<a href="tel:6197553246">`
- [ ] Tap-to-email works: `<a href="mailto:alex@alexguillenmusic.com">`
- [ ] Amplify Workshop link goes to correct landing page
- [ ] Page loads under 3 seconds on mobile

#### Step 2: Domain switchover (only if DNS is ready)

Check DNS:
```bash
dig amplifyai.to +short
# Must return: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

If DNS is resolving, make the switchover commit:
- [ ] Add `CNAME` file containing `amplifyai.to`
- [ ] Update `og:url` to `https://amplifyai.to/`
- [ ] Update `og:image` to absolute URL at `https://amplifyai.to/images/og-image.jpg`
- [ ] Update JSON-LD `url` to `https://amplifyai.to/`
- [ ] Update `robots.txt` Sitemap line to `https://amplifyai.to/sitemap.xml`
- [ ] Update `sitemap.xml` `<loc>` to `https://amplifyai.to/`
- [ ] Enable "Enforce HTTPS" in GitHub Pages settings
- [ ] Verify site loads at `https://amplifyai.to/`

If DNS is NOT resolving by April 3 evening:
- [ ] Launch at `sdguitarist.github.io/amplifyai-website/` as-is
- [ ] Do the switchover commit later when DNS propagates
- [ ] Share the project URL at the Film Festival

#### Step 3: Social and SEO verification (at whichever URL is live)

- [ ] Open Graph preview: test at LinkedIn Post Inspector
- [ ] Title tag: "Amplify AI | AI Dual Literacy"
- [ ] Meta description under 160 characters
- [ ] JSON-LD validates at Google Rich Results Test
- [ ] `robots.txt` accessible at live URL
- [ ] `sitemap.xml` accessible at live URL

#### Step 4: Voice verification

- [ ] Read all copy aloud. Does it sound like Alex talking to a peer?
- [ ] No Tier 1 banned words (grep for: delve, leverage, unlock, seamless, transformative, harness, elevate, foster, beacon)
- [ ] No em-dashes anywhere
- [ ] Max 1 exclamation mark per section
- [ ] No overclaiming (no "transform your business," no guaranteed outcomes)
- [ ] Only Heather Hilton's testimonial used (no invented quotes)
- [ ] If shipping Tier 1 only: confirm no Tier 2 copy is on the page

---

## Business Credibility: MVP and Phase 2 Gate

### MVP (April 4): Risk reduced by exclusion

The brainstorm identified a credibility gap: Alex has no business consulting clients or case studies yet. The MVP reduces this risk by **not including** the "For Businesses" B2B page. The MVP site shows:

- What Alex built for himself (verifiable)
- What Alex teaches (workshops, verifiable)
- One approved testimonial (Heather Hilton, verifiable)
- A casual invitation to talk ("Let's start a conversation")

It does NOT make claims about business consulting outcomes, team training results, or ROI. This is honest and matches brand-voice.md: "Lead with results, not pitched benefits. Share what it's done for Alex. Don't promise outcomes for others."

### Phase 2 Gate: Business messaging requires evidence

The "For Businesses" page (Phase 2, by April 25) must NOT publish harder business claims until Alex has approved proof. Specifically:

- **No business testimonials** until a real client provides one and approves its use
- **No case study claims** ("we helped Company X achieve Y") until a real engagement is documented
- **No ROI numbers** unless they come from Alex's own business (Pacific Flow) and are verifiable
- **Service descriptions** must follow the brainstorm's honest framing: "I built this for myself first. Now I'm teaching what worked."
- **First business offer** stays low-risk: discovery call or private workshop. Not a $5K audit without prior proof.

This gate carries forward the brainstorm's Feed-Forward risk and ensures it is addressed in Phase 2, not ignored.

(see brainstorm: B2B Credibility Strategy section)

---

## Timeline Summary

| Date | Phase | Owner | Deliverable |
|------|-------|-------|------------|
| March 29 | A: Repo + DNS | Alex + Claude Code | Repo created, DNS configured |
| March 29 | B: Copy draft | Claude Code | `content/site-copy.md` delivered |
| March 30 | C: Design | Claude Code | Fonts, colors, references chosen |
| March 30-31 | B: Copy review | Alex | Copy approved (or Tier 1 fallback) |
| April 1-2 | D: Build | Claude Code | Site complete at project URL |
| April 2-3 | E: Verify + switchover | Both | All checks pass, domain attached if DNS ready |
| **April 4** | **Launch** | **Both** | **Site live (custom domain or project URL)** |

## NOT in This Plan (Scope Fence)

These items are explicitly excluded. If any appear during the build, stop and defer to Phase 2.

- "For Businesses" B2B page (Phase 2, requires evidence gate)
- Projects / Portfolio section
- Blog / News / Articles
- Free Resources / Courses
- Link Hub
- Contact form with backend
- Analytics (Google Analytics)
- Custom animations or parallax
- Multiple pages
- Pricing for consulting services
- CMS or content management
- Custom domain email
- `amplifyai.me` redirect setup
- Design research beyond 1 hour

(see brainstorm: Scope Control table for full rationale)

## Unresolved Dependencies

| Dependency | Owner | Deadline | Fallback |
|-----------|-------|----------|----------|
| GitHub repo creation | Alex | March 29 | Claude Code can create via `gh` CLI if Alex provides access |
| Copy review/approval | Alex | March 31 EOD | Ship Tier 1 copy only (verified facts, no positioning) |
| Film Festival Workshop details | Alex | March 31 | Show only Amplify Workshop card |
| DNS propagation | Porkbun/GitHub | April 3 | Launch at GitHub Pages project URL |
| Professional photo | Alex | March 30 | Reuse existing `alex-headshot.jpeg` |

## Risks

1. **Copy review doesn't happen by March 31.** Alex is prepping Film Festival Workshop AND reviewing copy. Mitigation: ship Tier 1 only (verified facts, credentials, Heather's quote, workshop details, contact). A narrow site with only true claims is safer than a broader site with unreviewed voice. Alex adds the story and service descriptions after review.

2. **Design research exceeds 1 hour.** Mitigation: hard stop. Ship with minimal design. Clean and professional beats fancy and late.

3. **DNS doesn't propagate by April 4.** Mitigation: site is already live and verified at the GitHub Pages project URL. Custom domain switchover happens when DNS resolves. One commit swaps all absolute URLs.

4. **Scope creep during build.** Mitigation: the NOT in This Plan list is the contract. If a section or feature is on that list, it waits for Phase 2.

## Acceptance Criteria

- [ ] New repo `amplifyai-website` exists on GitHub with GitHub Pages enabled
- [ ] Site loads at project URL `sdguitarist.github.io/amplifyai-website/` (and at `amplifyai.to` if DNS is ready)
- [ ] Single-page site with sections matching the approved copy tier (all 6 if reviewed, Tier 1 subset if not)
- [ ] All published copy is either Alex-approved or limited to verifiable facts (Tier 1)
- [ ] Mobile-responsive at 375px, 768px, 1024px
- [ ] Open Graph tags produce correct LinkedIn preview card at the live URL
- [ ] Contact links are tap-friendly on mobile
- [ ] Copy passes brand-voice.md self-check (no banned words, peer-to-peer tone)
- [ ] Only Heather Hilton's testimonial used (no fabricated proof)
- [ ] Page loads under 3 seconds on mobile
- [ ] `robots.txt` and `sitemap.xml` present and valid with correct URLs
- [ ] JSON-LD structured data present for ProfessionalService with correct URL
- [ ] All asset paths are relative (work at both project URL and custom domain)

## Sources

- **Origin brainstorm:** [docs/brainstorms/2026-03-28-amplify-ai-consulting-website-brainstorm.md](docs/brainstorms/2026-03-28-amplify-ai-consulting-website-brainstorm.md) — Key decisions carried forward: single-page MVP, HTML/CSS + GitHub Pages, Amplify AI brand + AI Dual Literacy methodology, phased launch, honest B2B credibility framing, `amplifyai.to` domain.
- **Voice rules:** [context/brand-voice.md](context/brand-voice.md) — peer-to-peer tone, banned vocabulary, confidence calibration, Heather Hilton endorsement
- **Reference pattern:** [07-website-hero.html](07-website-hero.html) — proven section flow, CSS patterns, responsive breakpoints, OG tag implementation

---

## Feed-Forward

- **Hardest decision:** How to handle the copy fallback safely. The original plan said "ship Claude Code's draft if Alex doesn't review." Codex correctly flagged this as unsafe for a credibility site. The revised approach (Copy Safety Tiers) ships only verifiable facts without review, and holds all positioning/voice claims for Alex's approval. This is narrower but honest.
- **Rejected alternatives:** Building a multi-page site (more sections = more content needed = more time), using a CSS framework (adds complexity for a single page), building a contact form (needs backend or third-party service), shipping full unreviewed copy ("it's based on voice samples" is not the same as Alex approving it), attaching the custom domain before the site is verified (creates a window where the domain points to a broken or empty page).
- **Least confident:** Whether the Tier 1-only fallback page (name, credentials, quote, workshops, contact) is "enough" for a credibility site. It's safe and true, but it lacks the story that makes Alex memorable. The risk is someone visits a facts-only page and leaves without understanding why Alex is different. The mitigation is speed: get Alex to review the story section as soon as possible after launch, even if it's April 5.
