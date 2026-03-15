# Amplify Workshop — Content Pipeline Handoff

**Date:** 2026-03-13
**Branch:** main
**Phase:** Content generation (Week 1 complete, Week 2 next)
**Last session:** Mood variant system build, URL migration, graphic feedback round 1

---

## Current State

Content pipeline fully operational. 48 cron jobs installed. 7 posts generated and formatted (Mar 13 launch x3, Mar 14 x2, Mar 17 x2). Mood variant system built (5 moods x 2 intensities). Per-post graphics created for all Week 1 posts. `/promo-post` command updated with mood auto-assignment and new tinyurl.

### What Was Done This Session (Mar 13)

1. **Instagram bio simplified** — 2 lines: `🎸 Immersive Event Entertainment` / `🎯 AI Workshop Apr 25 → Link Below!`
2. **Linktree removed** — replaced with direct link `https://tinyurl.com/Amplify-AI`
3. **All URLs migrated** — 15 files updated from GitHub Pages URL to `https://tinyurl.com/Amplify-AI`
4. **Removed "All Assets" link** from landing page (07-website-hero.html)
5. **Mood variant system built** — 5 moods (launch, framework, bts, urgency, trust) x 2 intensities (subtle, bold) in `styles-shared.css`
6. **Mood map created** (`context/mood-map.md`) — all 44 posts mapped to mood + intensity
7. **`/promo-post` updated** — auto-assigns mood, adds GRAPHIC: line and MOOD: to QA summary
8. **Per-post graphics created** (`output/graphics/`) — 6 real + 2 samples
9. **First feedback round applied** — price badge sizing, AI visibility, overclaiming fix

---

## RESOLVED (Mar 13, Session 2)

All 7 graphic fixes from Session 1 are complete:
1. BTS Facebook bg: inline gradient replaced with cream BTS gradient + badge swapped to light bg
2. Trust "AI" visibility: subtitle changed to "AI that assists, not replaces."
3. Trust/BTS price badge: dark text overrides in shared CSS + inline styles
4. Trust $150: intentional, no change needed
5. Urgency "Today Only": bumped to 16px, weight 900, double text-shadow
6. Global light-bg price badge: handled in styles-shared.css
7. AI mention rule: validation step added to /promo-post command

---

## Done (Full Inventory)

### Context Files
- `context/brand-voice.md` — voice DNA, samples, banned words, confidence calibration
- `context/content-calendar.md` — 6-week schedule, 48 posts mapped
- `context/mood-map.md` — every post → mood + intensity + rationale
- `context/workshop-arc-v2.md` — curriculum frameworks
- `context/voice-reference-extracts.md` — persuasion patterns (read-only reference)

### Design System
- `styles-shared.css` — palette + mood variants (launch/framework/bts/urgency/trust) + bold modifiers
- `mood-preview.html` — side-by-side visual reference for all 10 mood/intensity combos

### Templates
- `templates/instagram-square.html` — 1080x1080
- `templates/instagram-story.html` — 1080x1920
- `templates/linkedin-card.html` — 1200x628

### Per-Post Graphics (`output/graphics/`)
- `2026-03-13-instagram-launch.html` — launch bold
- `2026-03-13-linkedin-launch.html` — launch bold
- `2026-03-13-facebook-launch.html` — launch bold
- `2026-03-14-facebook-bts.html` — bts subtle (BROKEN: needs background fix)
- `2026-03-17-instagram-why-i-built-this.html` — framework subtle
- `2026-03-17-linkedin-market-gap.html` — framework bold
- `sample-urgency-bold.html` — urgency bold (needs label fix)
- `sample-trust-bold.html` — trust bold (needs AI mention + label fix)

### Posts (`output/`)
All 7 posts have `GRAPHIC:` metadata line:
- `2026-03-13-linkedin-launch.txt`
- `2026-03-13-facebook-launch.txt`
- `2026-03-13-instagram-launch.txt`
- `2026-03-14-facebook-bts.txt`
- `2026-03-14-instagram-bts-story.txt`
- `2026-03-17-instagram-why-i-built-this.txt`
- `2026-03-17-linkedin-market-gap.txt`

### Command
- `.claude/commands/promo-post.md` — generates post + assigns mood + saves with GRAPHIC: line

### Cron
- 48 cron jobs installed, auto-open posts 15 min before posting time
- `output/cron-schedule.md` — reference for all jobs
- `sudo pmset -c sleep 0` keeps Mac awake

---

## Next Actions (Priority Order)

### P0 — Credibility Portfolio (COMPLETE)
Portfolio complete and moved to its own project: `~/Projects/every-outreach/`

The credibility portfolio, all 6 outreach commands, voice rules, custom tools doc, and pitch targets now live in the every-outreach repo. This project retains pointer files at:
- `context/credibility-portfolio.md` (pointer to canonical source)
- `.claude/commands/credibility.md` (pointer to canonical source)

### P1 — Content Pipeline
1. **Generate Week 2 posts before Mar 20** — 6 posts (Three Questions x2, Never Fabricate, Before/After, Expert-First, Early Bird Soft)
2. **Create matching graphics for Week 2 posts** using mood map assignments
3. **After March 28:** Update all templates and command to $150, remove "early bird" language

---

## Post File Format

```
[Platform] | [Date] | [Time] PT
GRAPHIC: [mood class] [bold if applicable] | [format]

---

[Post copy + hashtags]

---

FIRST COMMENT — Post immediately:
[Registration link, pricing, payment, contact]

SECOND COMMENT — Post 30-60 min later: (Instagram only)
[Engagement question]
```

## Key Rules (Quick Reference)

- No em-dashes. No banned AI vocabulary. Max 1 exclamation mark.
- One CTA per post. Never fabricate.
- QR + contact on content side, never on photos.
- Every graphic must mention "AI" somewhere visible.
- Confident about experience, never about perfection or guaranteed outcomes.

## Session Start Prompts

**For credibility portfolio work:**
```
Read ~/Projects/amplify-workshop-assets/HANDOFF.md.
I'm building the credibility portfolio for Every. Here are my project extractions:
[PASTE EXTRACTIONS]
Build context/credibility-portfolio.md and .claude/commands/credibility.md per the HANDOFF instructions.
```

**For content pipeline work:**
```
Read ~/Projects/amplify-workshop-assets/HANDOFF.md.
Check context/mood-map.md and output/cron-schedule.md for next posts to generate.
```
