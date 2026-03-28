# Brainstorm: Amplify AI Consulting Website

**Date:** 2026-03-28
**Status:** Ready for planning
**Origin:** Strategy session for AI consulting business website
**Revised:** Codex review findings applied

---

## What We're Building

A single-page credibility website for **Amplify AI**, Alex Guillen's AI consulting practice. The MVP launches by April 4 for the SD Streaming Film Festival Workshop. The full site expands by April 25 for the Amplify Workshop.

### Brand Identity
- **Brand name:** Amplify AI
- **Core methodology:** AI Dual Literacy (tagline/framework, not in the brand name)
- **Positioning:** Musician who builds real AI systems. Non-developer who codes with AI. Trust before automation. Human-led AI.
- **Domain:** `amplifyai.to` (primary, purchased via Porkbun March 28) + `amplifyai.me` (backup/redirect, purchased via GoDaddy $29.99/yr, renews March 28, 2027).

### Voice and Proof Guardrails (from brand-voice.md)

These are non-negotiable across all site copy:

1. **Peer-to-peer tone.** Alex talks like a colleague who's a few steps ahead, not a guru looking down. Warm but direct. Confident without being salesy. If it sounds like a LinkedIn influencer or a Canva template, rewrite it.
2. **Lead with Alex's real results.** Share what it's done for Alex. Don't promise outcomes for others. "I built five apps that run my business" is true. "This will transform your business" is not Alex's voice.
3. **Never fabricate proof.** No invented stats, no made-up testimonials, no claims Alex can't back up. The only approved testimonial is Heather Hilton's public endorsement. Do not invent additional ones.
4. **Confidence without overclaiming.** Confident about experience and work ethic. Never confident about perfection or guaranteed outcomes. "I've been reading rooms for 30 years" = yes. "I know exactly what to say to every client" = no.
5. **No banned vocabulary.** No em-dashes, no Tier 1 AI slop words (delve, leverage, unlock, seamless, transformative, etc.), no banned structural patterns. Max one exclamation mark per section. See brand-voice.md for the full list.
6. **Direct close.** Always end with a clear next step. Not pushy. "You in?" / "Want to talk?" / "Let me know." Assumes mutual respect.

---

## April 4 MVP: Single-Page Static Site

### Format
Single-page HTML/CSS, same pattern as `07-website-hero.html`. Deployed to GitHub Pages with `amplifyai.to` custom domain. No build tools, no frameworks, no JavaScript beyond minimal interaction (smooth scroll, mobile menu if needed).

### Required Sections (in scroll order)

Modeled on the proven section flow from `07-website-hero.html`:

1. **Hero** — Name "Amplify AI", tagline "AI Dual Literacy", one-line positioning ("I help creative businesses and small teams use AI the way I use it. As a collaborator, not a replacement."), professional photo of Alex, primary CTA ("Let's Talk" linking to contact section).

2. **The Story** — 3-4 paragraphs. Musician who built AI systems for his own business. 2,500+ events, 30 years, Berklee degree. Five apps running his business. The pivot from performer to AI practitioner. Client-facing framing: "I help..." not "Alex Guillen is..." Lead with results, not resume.

3. **What I Do** — 2-3 service cards with outcome-focused descriptions. For MVP, keep it simple:
   - **Workshops** — "Hands-on AI training for teams and groups. From 90 minutes to full-day."
   - **AI Strategy Sessions** — "A focused conversation about where AI fits in your business. No jargon, no pressure."
   - **Team Training** — "Custom AI onboarding for your team. Built around what you actually do."
   Each card links to the contact section CTA.

4. **Upcoming Workshops** — Cards for:
   - SD Streaming Film Festival Workshop (April 4, 90 min, details TBD from Alex)
   - Amplify Workshop (April 25, 10 AM-2 PM, Expressive Arts SD, $150)
   Link Amplify card to the existing landing page at `sdguitarist.github.io/amplify-workshop-assets/07-website-hero.html`.

5. **Social Proof** — Heather Hilton's full endorsement (the ONLY approved testimonial). Alex's credentials: 2,500+ events, Berklee, 5 AI apps, Pacific Flow Entertainment. No fabricated stats or implied client results.

6. **Contact / CTA** — "Want to talk about AI for your business? Let's start a conversation." Email link (`alex@alexguillenmusic.com`), phone (`619-755-3246`). No contact form (avoids backend and privacy policy). CTA phrasing: casual, peer-to-peer, not "Book a consultation."

### Explicit NOT in MVP

These are parked until Phase 2 (April 25) or later. Do not build, stub, or placeholder these:

- "For Businesses" dedicated B2B page
- Projects / Portfolio section
- Blog / News / Articles
- Free Resources / Courses
- Link Hub
- Detailed service pages with pricing
- Contact form with backend
- CMS or content management
- Analytics beyond basic (add Google Analytics in Phase 2)
- Custom animations, parallax, or complex CSS
- Multiple pages (MVP is single-page only)
- Pricing for consulting services (pricing conversations happen in calls)

### Technical Checklist (from 07-website-hero.html pattern)

- [ ] Open Graph meta tags (og:title, og:description, og:image, og:url) for LinkedIn sharing
- [ ] Twitter Card meta tags
- [ ] Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Single `<h1>` per page
- [ ] `alt` text on all images
- [ ] Mobile-first responsive (breakpoints at 768px, 1024px per existing pattern)
- [ ] Google Fonts: display font + body font (choose during plan phase, timebox to 30 min)
- [ ] `CNAME` file in repo root with `amplifyai.to`
- [ ] `robots.txt` and `sitemap.xml`
- [ ] JSON-LD structured data for ProfessionalService
- [ ] Preload hero image with `fetchpriority="high"`
- [ ] `loading="lazy"` on below-fold images
- [ ] WebP format for images where possible

---

## Target Market Strategy

**Hybrid model:** Creatives fill workshops (lead gen), businesses pay for consulting (revenue).

| Tier | Audience | Entry Point | Revenue |
|------|----------|-------------|---------|
| Lead gen | Creatives, solopreneurs | Public workshops ($100-200/person) | Low |
| Primary | Small biz (10-50 employees) | Private workshops + AI audits ($2.5K-5K) | Core revenue |
| Growth | Mid-market (50-250 employees) | Multi-week training + advisory ($10K-50K) | Scale |

**Priority industries (San Diego):**
1. Hospitality / Events / Tourism — Alex works in this industry, natural fit
2. Creative Agencies / Film & Media — agencies have budgets artists don't
3. Nonprofits — 92% adopted AI, only 7% see impact, massive education gap

**Competitive gap:** Every SD AI consultant is a technical implementation firm. Nobody does AI education + trust-building for non-technical teams. That's Alex's lane.

**Musicians/artists as primary consulting clients:** Not viable. Limited budgets ($500-2K/year). They work as workshop attendees and word-of-mouth amplifiers, not as consulting revenue.

### B2B Credibility Strategy (Pre-Case-Study)

Alex does not have business consulting clients yet. The "For Businesses" page is Phase 2 (April 25). Here is how to handle the credibility gap honestly:

**What Alex CAN claim (true, verifiable):**
- Built 5 AI apps that run his own business (Pacific Flow Entertainment)
- 2,500+ events, 30 years in hospitality/events industry
- Designed and delivered the Amplify Workshop curriculum
- Berklee College of Music degree (signals discipline and expertise)
- Compound engineering methodology (documented, systematic approach)

**What Alex CANNOT claim (no evidence yet):**
- Client business results or ROI
- Testimonials from business consulting engagements
- Case studies of team training outcomes

**First offer for businesses (low-risk entry):**
The MVP "What I Do" section frames services as conversations, not contracts:
- "AI Strategy Session" = free or low-cost discovery call. No commitment, no pressure. Alex learns their business, they learn his approach. If there's a fit, discuss next steps.
- "Team Training" = custom private workshop. This is the Amplify format adapted for a single company. Alex has already built and delivered this curriculum.
- No pricing on the site. Pricing happens in the conversation, after Alex understands the need.

**The honest framing:** "I built this for myself first. Now I'm teaching what worked." This is true. It matches brand-voice.md's rule: "Lead with results, not pitched benefits. Share what it's done for Alex."

---

## Phased Launch Plan

### Phase 1: MVP (March 29 - April 3, launch April 4)
- Single-page site at `amplifyai.to`
- Sections: Hero, Story, What I Do, Workshops, Social Proof, Contact
- Deployed to GitHub Pages with custom domain
- **Owner:** Alex writes copy (with Claude Code help). Claude Code builds HTML/CSS.

### Phase 2: Full Site (April 5 - April 25)
- Add "For Businesses" page with industry-specific messaging
- Add Projects/Portfolio (Pacific Flow system showcase)
- Design research and polish (timebox: 2 hours total)
- Enhanced social proof as workshop results come in
- Google Analytics

### Phase 3: Content Platform (Post April 25)
- Blog / Articles (republish LinkedIn content)
- Free Resources / Courses (written guides + video)
- Link Hub
- Mid-market expansion strategy
- Case studies from first business clients
- `amplifyai.me` redirect to `amplifyai.to`

---

## Scope Control: Parked Items

The following are valid ideas that do NOT belong in the MVP or Phase 2 unless a documented prior strategy proves otherwise:

| Item | Earliest Phase | Why Parked |
|------|---------------|------------|
| Blog / Articles | Phase 3 | LinkedIn is the content engine for now. No CMS needed. |
| Free Resources / Courses | Phase 3 | No courses exist yet. Build content first, host it later. |
| Link Hub | Phase 3 | Only needed when there are enough links to justify it. |
| Mid-market expansion ($10K-50K) | Phase 3+ | Needs 3-5 small business case studies first. |
| Pricing page | Never (on site) | Consulting pricing belongs in conversations, not on a website. |
| CMS / WordPress | Phase 3+ | Only if content volume justifies the complexity. |
| Squarespace migration | Phase 3+ | Only if GitHub Pages becomes a bottleneck. |
| Custom domain email | Phase 2 | alex@amplifyai.to would be professional but not essential for MVP. |

---

## Open Questions (Must Resolve Before Planning)

1. **Copy ownership and deadline.** Alex must write or approve all site copy by **March 31** (3 days). Claude Code can draft, but Alex owns the voice. Estimated effort: 3-4 hours. If copy is not ready by March 31, the build cannot start in time.

2. **Repo setup.** New repo (`amplifyai-website` or similar) on Alex's GitHub. Must be created before the build starts. **Owner:** Alex creates the repo. Claude Code sets up GitHub Pages and DNS.

3. **DNS configuration timing.** Domain purchased March 28. DNS A records + CNAME must be configured by **March 30** for propagation before April 4. **Fallback:** If custom domain is not resolving by April 3, launch at `sdguitarist.github.io/amplifyai-website/` and switch to custom domain when DNS propagates. Share the GitHub Pages URL at the Film Festival if needed.

4. **Film Festival Workshop details.** The Workshops section needs: date, time, location, format, registration method. Alex must provide these details. If not available by March 31, show only the Amplify Workshop on the MVP and add the Film Festival workshop card when details are confirmed.

5. **Contact CTA path.** MVP uses email + phone (no contact form, no Calendly). If Alex wants a Calendly link for booking strategy sessions, that can be added during Phase 2. For MVP: `mailto:alex@alexguillenmusic.com` and `tel:619-755-3246`.

6. **Professional photo.** The existing headshot (`images/alex-headshot.jpeg`) from the Amplify Workshop landing page can be reused. Does Alex want a different photo for the consulting brand? If not decided by March 30, reuse the existing one.

---

## Success Criteria: MVP Ready by April 4

The MVP is "ready" when ALL of the following are true:

1. Single-page site loads at `amplifyai.to` (or fallback GitHub Pages URL)
2. Site is mobile-responsive and looks professional on phone (Film Festival attendees will check on mobile)
3. All 6 sections are present with real copy (not placeholder text)
4. Open Graph tags work (LinkedIn preview shows title, description, and image)
5. Contact info (email + phone) is correct and clickable on mobile (tap-to-call, tap-to-email)
6. At least one workshop is listed with accurate details
7. Copy passes brand-voice.md self-check: no banned words, no overclaiming, peer-to-peer tone, read-aloud test

### Most Likely Failure Modes

1. **Copy not written in time.** Content writing is the bottleneck, not coding. If Alex doesn't write/approve copy by March 31, the April 4 launch slips. **Mitigation:** Claude Code drafts all copy by March 29. Alex reviews and edits March 30-31.
2. **DNS propagation delay.** Custom domain may not resolve in time. **Mitigation:** Fallback to GitHub Pages URL. Share that URL if needed.
3. **Design research rabbit hole.** "Study modern web designs" can eat unlimited time. **Mitigation:** Timebox to 1 hour. Pick 2-3 reference sites max. If not done by March 30, ship with clean minimal design (white background, quality fonts, generous spacing). Polish in Phase 2.
4. **Film Festival Workshop details missing.** If Alex doesn't have confirmed details, the Workshops section can't show that event. **Mitigation:** Show only Amplify Workshop. Add Film Festival card when details are confirmed.
5. **Scope creep into Phase 2 items.** "While we're here" additions during the build. **Mitigation:** The NOT in MVP list is the contract. If it's on that list, it waits.

---

## Key Decisions

1. **Brand name is Amplify AI** — AI Dual Literacy is the methodology/tagline, not the name
2. **HTML/CSS + GitHub Pages for launch** — migrate to a platform later when there's a clear reason
3. **Phased launch** — single-page MVP by April 4, full site by April 25, content platform after
4. **Single-page MVP** — Hero, Story, What I Do, Workshops, Social Proof, Contact. Nothing else.
5. **Domains purchased** — `amplifyai.to` (primary) + `amplifyai.me` (backup), both secured March 28
6. **Separate project repo** — not part of amplify-workshop-assets
7. **B2B credibility handled honestly** — lead with Alex's own results, offer low-risk entry (strategy sessions), no fabricated proof. Full B2B page deferred to Phase 2.
8. **No pricing on site** — consulting pricing belongs in conversations
9. **Contact path is email + phone** — no form, no Calendly for MVP

## Resolved Questions

1. **Film Festival Workshop** — Same Amplify format (Human-Led AI), adapted for film/streaming audience, compacted to 90 minutes. April 4, 2026. Details (time, location, registration) still needed from Alex.
2. **Design inspiration** — Timebox to 1 hour during plan phase. Pick 2-3 reference sites. If not done by March 30, ship minimal.
3. **Existing Amplify Workshop landing page** — Coexists. New site links to it. Decide on migration in Phase 2.
4. **Consulting services** — Full menu (workshops, strategy sessions, team training, audits, implementation, advisory). MVP shows 3 outcome-focused cards with no pricing. Detailed service pages come in Phase 2+.
5. **Target market** — Hybrid model. Creatives for workshop lead gen, small businesses for consulting revenue. Musicians/artists not viable as primary consulting clients.
6. **Domain** — Both purchased March 28, 2026. Primary: `amplifyai.to`. Backup: `amplifyai.me`.

---

## Research Findings (from 4 parallel agents)

### Design Best Practices
- MVP can be a single page with 4-6 sections: Hero, Story, What I Do, Social Proof + CTA
- Make the site about the CLIENT, not Alex ("I help..." not "Alex Guillen is...")
- Don't hide the music background — it's the differentiator
- Warm editorial aesthetic (magazine feel, not SaaS). Serif display + sans-serif body. Generous whitespace.
- Testimonials woven throughout, not on a separate page
- "You ARE the case study" — Pacific Flow is the portfolio

### Deployment / Technical
- GitHub Pages for MVP, Cloudflare Pages if you outgrow it
- Must-haves: Open Graph tags (LinkedIn previews), JSON-LD structured data, semantic HTML
- Performance: preload fonts (woff2), WebP images, `loading="lazy"`, `font-display: swap`

### Feasibility Analysis
- **Content writing is the real bottleneck** (~3-4 hours of copy needed before touching HTML)
- Timebox design research to 1 hour max (ADHD research loop risk)
- Fallback: GitHub Pages URL if custom domain isn't ready; minimal design if research runs long
- Define the "I just met Alex at Film Festival" user flow — that's the #1 MVP journey

### Target Market
- Creatives = lead gen (workshops), businesses = revenue (consulting)
- Primary: small biz (10-50 employees) in hospitality, creative agencies, nonprofits
- SD gap: every competitor is a technical implementation firm. Nobody does AI education + trust-building.
- Pricing ladder: $150/person workshop -> $3K-5K private -> $2.5K-5K audit -> $5K-15K implementation -> $2K-5K/month retainer

---

## Feed-Forward

- **Hardest decision:** Target market pivot. Alex's natural audience (musicians/artists) can't sustain a consulting practice. The hybrid model (creatives for lead gen, businesses for revenue) resolves this but means even the MVP needs to speak credibly to business decision-makers without business client proof. The honest framing ("I built this for myself first, now I'm teaching what worked") is the bridge, but it's untested with business audiences.
- **Rejected alternatives:** Putting AI Dual Literacy in the brand name (too conceptual, dilutes simplicity), targeting only creatives (budget-limited), building full site by April 4 (unrealistic), starting on Squarespace (adds cost before knowing needs), `.ai` domain ($140+ upfront, 2-year minimum), including pricing on the site (consulting pricing belongs in conversations, not on a static page), contact form for MVP (adds backend complexity and privacy policy requirements).
- **Least confident:** Whether 6 days (March 29 - April 3) is enough to write copy, research design, build the page, and configure DNS, given that Alex is also preparing for the Film Festival Workshop itself on April 4. The copy bottleneck is the most likely failure mode. If Claude Code drafts copy by March 29 and Alex can review by March 31, the build fits in April 1-3. If copy review slips, everything slips.
