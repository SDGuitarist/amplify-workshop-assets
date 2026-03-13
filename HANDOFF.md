# Amplify Workshop — Content Pipeline Handoff

**Date:** 2026-03-13
**Branch:** main
**Phase:** Content generation (Week 1 complete, Week 2 next)

## Current State

Content pipeline fully operational. 48 cron jobs installed. 7 posts generated and formatted (Mar 13 launch x3, Mar 14 x2, Mar 17 x2). All marketing graphics updated with QR codes + contact info blocks. `/promo-post` command updated to auto-generate comment sections.

### Done
- `.claude/CLAUDE.md` — behavioral file, loaded every session
- `.claude/commands/promo-post.md` — updated with post + comment section format and platform templates
- `context/workshop-arc-v2.md` — full 7-phase workshop curriculum (source of truth for all frameworks)
- `context/brand-voice.md` — voice DNA, 7 samples, platform rules, banned words, confidence calibration
- `context/content-calendar.md` — 6-week posting schedule (Mar 13 to Apr 30), 48 posts mapped
- `context/voice-reference-extracts.md` — Pacific Flow persuasion system + AI Literacy Game patterns (read-only reference, does not override brand-voice.md)
- `templates/instagram-square.html` — 1080x1080, 3 variants: default, framework, persona
- `templates/instagram-story.html` — 1080x1920, 2 variants: default, bigtext
- `templates/linkedin-card.html` — 1200x628, 2 variants: default, framework
- All 6 social/marketing graphics updated: QR code (landing page) + contact block (email, phone, Venmo)
- `output/2026-03-13-linkedin-launch.txt` — DONE, with comment section
- `output/2026-03-13-facebook-launch.txt` — DONE, with comment section
- `output/2026-03-13-instagram-launch.txt` — DONE, with comment section
- `output/2026-03-14-facebook-bts.txt` — DONE, with comment section
- `output/2026-03-14-instagram-bts-story.txt` — DONE (reminder format)
- `output/2026-03-17-instagram-why-i-built-this.txt` — DONE, with comment section
- `output/2026-03-17-linkedin-market-gap.txt` — DONE, with comment section
- `output/cron-schedule.md` — reference for all 48 cron jobs
- 48 cron jobs installed (`crontab -l` to verify), auto-open 15 min before each posting time
- `sudo pmset -c sleep 0` needs to be run manually to keep Mac awake while plugged in

### Not Done — Next Actions (Priority Order)

1. **Generate Week 2 posts before Mar 20**
   - Mar 20 LinkedIn "Three Questions" (`output/2026-03-20-linkedin-three-questions.txt`)
   - Mar 20 Instagram "Three Questions" carousel (`output/2026-03-20-instagram-three-questions.txt`)
   - Mar 24 Facebook "never fabricate" (`output/2026-03-24-facebook-never-fabricate.txt`)
   - Mar 24 Instagram before/after (`output/2026-03-24-instagram-before-after.txt`)
   - Mar 26 LinkedIn Expert-First (`output/2026-03-26-linkedin-expert-first.txt`)
   - Mar 26 Facebook early bird soft (`output/2026-03-26-facebook-early-bird-soft.txt`)

2. **Generate graphics for posts that need them**
   - Use `/gemini-imagegen` or `/frontend-design` for unique visuals
   - Use `templates/` for structured graphics (swap text, screenshot)
   - Priority graphics: Mar 17 IG carousel slides, Mar 24 before/after demo

3. **Build remaining weeks incrementally**
   - Generate each week's posts 2-3 days before they're needed
   - Don't batch all 48 at once (voice drift risk, context window waste)

4. **Post-March 28: Update price in all templates and future posts**
   - Early bird ends March 28. All posts after that date show $150 not $100.
   - Update templates: instagram-square.html, instagram-story.html, linkedin-card.html
   - Update `/promo-post` command comment templates

5. **Add cron jobs for graphics as they're generated**
   - Only text posts have auto-open cron jobs right now. Graphics do not.
   - As graphics are saved to `output/graphics/`, add matching cron entries to auto-open them alongside the text posts.

6. **After April 30: Clean up cron**
   - Run `crontab -r` to remove all scheduled jobs

## Post File Format

```
[Platform] | [Date] | [Time] PT
---
[Post copy + hashtags]
---
FIRST COMMENT — Post immediately:
[Registration link, pricing, payment, contact]

SECOND COMMENT — Post 30-60 min later: (Instagram only)
[Engagement question]
```

## Key Voice Rules (Quick Reference)

- No em-dashes. Ever.
- No banned AI vocabulary (full list in brand-voice.md)
- Max 1 exclamation mark per post. Zero is better.
- One CTA per post. Direct close.
- Never fabricate stats, testimonials, or seat counts.
- QR codes on content side, never on photos.

## Design Rule

QR + contact info grouped as a bottom-bar on the content side of any graphic. QR left, contact stacked right. Photos stay clean (only name/role badge allowed).

## Session Start Prompt

```
Read ~/Projects/amplify-workshop-assets/HANDOFF.md.
Check output/cron-schedule.md for the next posts that need generating.
Generate the next batch using /promo-post. Relevant files are in context/ and templates/.
```
