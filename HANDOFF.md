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

## REMAINING FIXES — Must Do Next Session (P1)

### 1. BTS Facebook: Background is still dark — body text invisible
**File:** `output/graphics/2026-03-14-facebook-bts.html`
**Problem:** The body text was changed to dark brown (for cream background), but the inline `<style>` sets `background: var(--gradient-hero)` (dark) on the `.card` element. The `mood-bts` class in `styles-shared.css` tries to override with a cream gradient, but inline styles have higher specificity.
**Result:** Dark brown text on dark brown background = unreadable.
**Fix:** Remove `background: var(--gradient-hero);` from the inline `.card` style block in the file, so the `mood-bts` class in the shared CSS can take effect. Or replace it with the BTS background directly:
```css
background: linear-gradient(135deg, #f8f0e3 0%, #faf3e8 40%, #f5ebe0 70%, #f8f0e3 100%);
```

### 2. Trust Sample: No "AI" mention anywhere visible
**File:** `output/graphics/sample-trust-bold.html`
**Problem:** "AI" only appears buried in body quote text. Not scannable at a glance.
**Fix:** Change subtitle from `"Less threatening, more useful."` to `"AI that assists, not replaces."` (approved tagline from brand-voice.md). This keeps the testimonial feel while making AI immediately visible.

### 3. Trust Sample: "Register" label above $150 is unreadable
**File:** `output/graphics/sample-trust-bold.html`
**Problem:** White text on light cream background. The price badge label fix (white + shadow) only works on dark moods.
**Fix:** Add overrides for light-background moods. In `styles-shared.css`:
```css
.mood-trust .price-highlight .d-label,
.mood-bts .price-highlight .d-label {
  color: rgba(42,24,16,0.85);
  text-shadow: none;
}
.mood-trust .price-highlight small,
.mood-bts .price-highlight small {
  color: rgba(42,24,16,0.6);
  text-shadow: none;
}
```
Also apply this in the inline styles of any existing BTS/Trust graphic files (inline styles override shared CSS).

### 4. Trust Sample: Shows $150, not $100
**File:** `output/graphics/sample-trust-bold.html`
**Status:** Intentionally $150 (post-March 28 use). Has HTML comment noting this.
**Action:** Before March 28, if Trust mood graphics are needed, create them with $100 pricing. After March 28, this template is correct.

### 5. Urgency Bold: "Today Only" label still hard to read
**File:** `output/graphics/sample-urgency-bold.html`
**Problem:** Label text washes out on the gradient early-bird badge.
**Fix:** Increase contrast — try `font-size: 14px; font-weight: 800; text-shadow: 0 2px 6px rgba(0,0,0,0.4);` on the label. Or add a dark semi-transparent bar behind the label text.

### 6. Global: Price badge on ALL light-background moods
**Problem:** Every future graphic using mood-bts or mood-trust will have the same unreadable price badge label.
**Fix:** Handle this at the shared CSS level (see fix #3 above) so it's automatic.

### 7. Global rule: Every graphic must mention "AI"
**Action:** Add to `/promo-post` command Step 5 (mood assignment): "After assigning mood, verify 'AI' appears in at least one of: question line, subtitle, or description. If not, adjust subtitle to include 'Human-Led AI' or 'AI Workshop'."

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

1. **Fix the 7 remaining issues above** (P1 items 1-7)
2. **Generate Week 2 posts before Mar 20** — 6 posts (Three Questions x2, Never Fabricate, Before/After, Expert-First, Early Bird Soft)
3. **Create matching graphics for Week 2 posts** using mood map assignments
4. **After March 28:** Update all templates and command to $150, remove "early bird" language

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

## Session Start Prompt

```
Read ~/Projects/amplify-workshop-assets/HANDOFF.md.
Fix the remaining P1 issues listed under REMAINING FIXES.
Then check context/mood-map.md and output/cron-schedule.md for next posts to generate.
```
