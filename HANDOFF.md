# Amplify Workshop — Content Pipeline Handoff

## What This Is

A context-engineered content pipeline for promoting the Amplify workshop (April 25, 2026). Built March 12-13 across one session. The system generates platform-specific social media posts in Alex's voice, with scheduled auto-open reminders and HTML graphic templates.

## Current State

### Done
- `.claude/CLAUDE.md` — behavioral file, loaded every session
- `.claude/commands/promo-post.md` — `/promo-post [platform] [date-or-theme]` command
- `context/workshop-arc-v2.md` — full 7-phase workshop curriculum (source of truth for all frameworks)
- `context/brand-voice.md` — voice DNA, 7 samples, platform rules, banned words, confidence calibration
- `context/content-calendar.md` — 6-week posting schedule (Mar 13 to Apr 30), 48 posts mapped
- `context/voice-reference-extracts.md` — Pacific Flow persuasion system + AI Literacy Game patterns (read-only reference, does not override brand-voice.md)
- `templates/instagram-square.html` — 1080x1080, 3 variants: default, framework, persona
- `templates/instagram-story.html` — 1080x1920, 2 variants: default, bigtext
- `templates/linkedin-card.html` — 1200x628, 2 variants: default, framework
- `output/2026-03-13-linkedin-launch.txt` — DONE, reviewed, voice-checked
- `output/2026-03-13-facebook-launch.txt` — DONE, reviewed, voice-checked
- `output/2026-03-13-instagram-launch.txt` — DONE, reviewed, voice-checked
- `output/cron-schedule.md` — reference for all 48 cron jobs
- 48 cron jobs installed (`crontab -l` to verify), auto-open 15 min before each posting time
- `sudo pmset -c sleep 0` needs to be run manually to keep Mac awake while plugged in

### Not Done — Next Actions (Priority Order)

1. **Generate remaining Week 1 posts (Mar 14, Mar 17)**
   - Mar 14 Facebook behind-the-scenes (`output/2026-03-14-facebook-bts.txt`)
   - Mar 14 IG Story reminder (`output/2026-03-14-instagram-bts-story.txt`)
   - Mar 17 Instagram "Why I built this" carousel (`output/2026-03-17-instagram-why-i-built-this.txt`)
   - Mar 17 LinkedIn market gap (`output/2026-03-17-linkedin-market-gap.txt`)

2. **Generate graphics for posts that need them**
   - Use `/gemini-imagegen` or `/frontend-design` for unique visuals
   - Use `templates/` for structured graphics (swap text, screenshot)
   - Priority graphics: Mar 17 IG carousel slides, Mar 24 before/after demo

3. **Generate Week 2 posts before Mar 20**
   - Three Questions (LI + IG), Never Fabricate (FB), Before/After (IG), Expert-First (LI), Early Bird soft (FB)

4. **Build remaining weeks incrementally**
   - Generate each week's posts 2-3 days before they're needed
   - Don't batch all 48 at once (voice drift risk, context window waste)

5. **Post-March 28: Update price in all templates and future posts**
   - Early bird ends March 28. All posts after that date show $150 not $100.
   - Update templates: instagram-square.html, instagram-story.html, linkedin-card.html

6. **After April 30: Clean up cron**
   - Run `crontab -r` to remove all scheduled jobs

## How to Generate a Post

From the project directory:
```
/promo-post linkedin mar-20
/promo-post instagram three-questions
/promo-post facebook early-bird-deadline
```

The command reads brand-voice.md every time, checks the calendar, pulls from the workshop arc if needed, runs a voice check, and saves to `output/`.

## How to Generate a Graphic

1. Copy the relevant template from `templates/`
2. Swap the SWAP-marked content sections
3. Add variant class if needed (`.framework`, `.persona`, `.bigtext`, `.urgency`)
4. Open in browser, screenshot at native resolution
5. Save to `output/graphics/`

Or use `/gemini-imagegen` for unique AI-generated visuals (behind-the-scenes, conceptual imagery, atmospheric shots).

## Key Voice Rules (Quick Reference)

- No em-dashes. Ever.
- No banned AI vocabulary (full list in brand-voice.md)
- Max 1 exclamation mark per post. Zero is better.
- Confident about experience. Never confident about perfection.
- One CTA per post. Direct close: "Interested?" / "You in?" / "Link in bio."
- Never fabricate stats, testimonials, or seat counts.
- Hashtags: LinkedIn 3-5, Instagram 15-20, Facebook none.

## File Hierarchy (What Overrides What)

1. `brand-voice.md` — always wins
2. `content-calendar.md` — posting schedule and hooks
3. `voice-reference-extracts.md` — informs tone, never overrides brand-voice.md
4. `workshop-arc-v2.md` — source of truth for framework content

## Session Start Prompt

```
Read ~/Projects/amplify-workshop-assets/HANDOFF.md.
Check output/cron-schedule.md for the next posts that need generating.
Generate the next batch using /promo-post. Relevant files are in context/ and templates/.
```
