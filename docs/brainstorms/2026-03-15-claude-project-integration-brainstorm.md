# Brainstorm: Claude Project Content Integration

**Date:** 2026-03-15
**Status:** Complete
**Origin:** 7 batches of content from older Amplify Claude Project need triage and integration into Claude Code project

---

## What We're Building

A structured integration of legacy Claude Project content into the working Claude Code project. The goal is to bring in valuable leads, outreach channels, facilitation materials, logistics tracking, and strategic context without breaking the content pipeline that's already operational.

---

## Why This Matters

The Claude Code project has a fully operational content pipeline (48 cron jobs, 9 posts generated, `/promo-post` command working) but is missing critical operational data: 8 network leads with no outreach sent, org partnerships drafted but not contacted, venue logistics untracked, and facilitation prep materials needed for April 25. The early bird deadline is March 28 — 13 days away. Every day without lead outreach is a missed conversion opportunity.

---

## Missing Inputs

The following source materials were discussed in this brainstorm session but **do not exist as files in the repo today**. They live only in conversation context from the 7 legacy batch transfers. Any integration step that depends on them is blocked until the source text is added to the project.

- **8 network lead profiles** (Mike Myrdal, Heather Hilton, Jane Hare, Priscilla Norris, Thelma C. Rufolo, Tony Cox, Agustin El Moro, Dean LeCrone) — names, backgrounds, relationship context, lead temperature, and engagement history from Batch 1
- **Heather Hilton's full endorsement quote** — the extended quote from Batch 1 (beginning "Being a creative and having a business mind is a gift..."). `brand-voice.md` currently has shorter excerpts only.
- **Org outreach contact details** — Floyd Smith, Blanca, Amanda (hub contacts) and SD & Imperial WBC, NAWBO, NLBWA, Hera Hub (women-focused orgs) from Batches 4 and 6. Drafts were written in the Claude Project but never saved to Code.
- **Facilitation content** — talking points, participant archetypes, QA Gate 9 checks, demo pipeline architecture, and strategic context from Batches 2, 3, 5, and 7. None of this exists in the repo.
- **Revenue projections** ($2,400-$3,900 net range at 30 seats) from Batch 6
- **Pre-workshop intake design** (3 reconnaissance questions) from Batch 6

Until these are imported as source files or pasted into the relevant docs, the integration steps below that reference them cannot be completed.

---

## Key Decisions

### 1. Priority: Operational First
**Decision:** Lead outreach and marketing channels are P1. Facilitation prep is P2 for subsequent cycles.
**Why:** Early bird deadline (March 28) creates real urgency. The 8 network leads have been sitting without updated messaging. Org outreach drafts are written but not sent. Content pipeline is already working — facilitation prep has 6 weeks of runway.

### 2. App Count: Five
**Decision:** Keep saying "five AI-powered business systems" in all marketing.
**Why:** The 5 core Pacific Flow apps (Lead Responder, PF-Intel, Research Agent, GigPrep, LiveRequest) are the ones Alex uses to run the business. The other 7 projects (AI Literacy Game, Pacific Flow Hub, Amplify Workshop Assets, Every Outreach, SoundRip, alexguillenmusic.com, WedMix) are real but not part of the Pacific Flow operations story.

### 3. Lead Integration: Full Profiles + Ready-to-Send Messages
**Decision:** Add all 8 network leads to `leads.md` with profiles, AND generate personalized draft messages updated with current details (April 25, early bird, registration URL).
**Why:** Alex wants to send these immediately. Drafts must be tailored by relationship type, lead temperature (firm/warm/soft), segment, and background.
**Blocked by:** Missing Inputs — the 8 lead profiles are not yet in the repo.

### 4. Outreach Channels: Both, Prioritized
**Decision:** Include both personal network leads (P1) and org/hub outreach (P2).
- **P1 (send this week):** Mike, Jane, Priscilla, Thelma, Tony, Agustin, Dean + Lynn/Miriam follow-ups. Confirm Heather's attendance via DM (attending or just championing?).
- **P2 (capture in Cycle 1, send before March 28):** Floyd Smith, Blanca, Amanda (hub contacts), SD & Imperial WBC, NAWBO, NLBWA, Hera Hub (women-focused orgs). See anti-deferral step in Cycle 1.

### 5. Logistics: Track in Project
**Decision:** Create a logistics/actions file in the project. Venue contract, intake form, pizza order, helper recruitment — all tracked here.
**Why:** Everything in one place. No split tracking across systems. Some workshop prep items already exist in `docs/workshop-tweaks-runbook-feel.md` (7 items, ~2.5 hours, all TODO), but operational logistics (venue contract, food, intake form, outreach) are not consolidated anywhere.

### 6. Facilitation Content: Multiple Separate Files
**Decision:** Create separate context files by topic rather than one mega-file or merging into the arc.
**Files to create:**
- `context/talking-points.md` — Research-backed stats, facilitation one-liners, mindset calibration
- `context/participant-types.md` — 5 archetypes, crochet pivot story, reading-the-room guidance, plus target audience depth (Top 10 business types, deprioritize list, non-inbound translation)
- `context/qa-gate-9-checks.md` — The 9 QA checks (referenced in arc but never spelled out in Code)
- `context/demo-pipeline.md` — Technical system architecture, Skills manifest, governance, pre-workshop QA checklist
- `context/strategy.md` — Market gap, ethical cornerstone, transformation statement, counter-narrative depth, credibility block
**Why:** Granular files are easier to find specific info. Follows the existing pattern where `.claude/CLAUDE.md` specifies when to read each context file.
**Note:** `.claude/CLAUDE.md` context table only needs updating when these files are actually created (Cycle 2), not before.

### 7. What to Discard
- **Outdated draft responses** from Batch 1 (reference "late Feb or March") — rewrite from scratch with current details
- **Bandwidth protection rule** — references "Elyse email, Lomas materials drop, Victoria meeting" which are external to this project
- **Enterprise security/compliance/IT topics** from Batch 2 (explicitly flagged as irrelevant for this audience)
- **Duplicate content** — drafting principles, invisible architecture, close sequence already in `context/workshop-arc-v2.md` and `context/brand-voice.md`
- **Backup venues list** — useful reference but not integration priority

### 8. What to Reconcile
- **Heather's endorsement:** Batch 1 has the full quote. `brand-voice.md` currently has shorter excerpts. Add full quote to `brand-voice.md` once source text is imported.
- **Revenue projections:** New info ($2,400-$3,900 net range). Not in Code. Add to `docs/actions.md`.
- **Pre-workshop intake design:** 3 questions for reconnaissance + pair assignments. Not built. Add to `docs/actions.md`.
- **Email addresses:** No discrepancy exists in the repo. `alex.guillen.music@gmail.com` is the **Zelle payment address**. `alex@alexguillenmusic.com` is the **contact email**. Both are correct and intentionally different. `.claude/CLAUDE.md`, `content-calendar.md`, and `promo-post.md` already list both correctly (Payment vs. Contact). No changes needed.

---

## Integration Plan (High Level)

### Cycle 1: Operational Setup (This Session)

Scoped to what can be done with repo-available data. Does not depend on missing inputs.

1. **Create `docs/actions.md`** — consolidated action backlog with P1/P2 priorities, statuses, and owners. De-duplicate against existing prep items in `docs/workshop-tweaks-runbook-feel.md`. Include:
   - P1 network lead outreach items (blocked: awaiting source profiles)
   - P2 org/hub outreach contacts with status, next step, and revisit date of **March 22** (anti-deferral: if not sent by March 22, escalate to P1 or explicitly accept the miss)
   - Venue logistics (contract, setup, food)
   - Pre-workshop intake form
   - Revenue projections
2. **Update `leads.md`** — add Lynn/Miriam follow-up actions (these two already have profiles in the repo). Flag the 8 network leads as pending import.
3. **Note Heather's full endorsement** — add a placeholder in `brand-voice.md` Social Proof section referencing the extended quote, to be filled when source text is imported.
4. **Update `HANDOFF.md`** — reflect current state (9 posts generated, brainstorm complete, Cycle 1 actions created).

**Not in Cycle 1:** No changes to `.claude/CLAUDE.md` context table (no new context files are created this cycle). No email standardization needed (repo is already correct).

### Cycle 2: Facilitation Prep (Next Session)
5. Create `context/talking-points.md`
6. Create `context/participant-types.md` — includes target audience depth (Top 10 business types, deprioritize list, non-inbound translation) alongside the 5 archetypes
7. Create `context/qa-gate-9-checks.md`
8. Create `context/demo-pipeline.md`
9. Create `context/strategy.md`
10. Update `.claude/CLAUDE.md` context table — register new files with "When to Read" rules

### Cycle 3: Lead Import + Outreach (After Source Text Added)
11. Import 8 network lead profiles into `leads.md` with full details
12. Generate personalized draft messages for each lead
13. Add Heather's full endorsement quote to `brand-voice.md`
14. Add org/hub outreach details to `docs/actions.md` or a dedicated outreach section

---

## Open Questions

None — all resolved through dialogue.

---

## Feed-Forward

- **Hardest decision:** Whether to integrate everything in one pass or prioritize. Chose operational-first because the early bird deadline creates real urgency that facilitation prep doesn't have.
- **Rejected alternatives:** (1) One mega facilitation file — too hard to find specific info. (2) Merging into workshop-arc-v2.md — would bloat a file that's already 33K and optimized for content generation, not facilitation. (3) Profiles-only for leads — Alex needs ready-to-send messages NOW, not later.
- **Least confident:** Whether the org outreach (women-focused orgs, hub contacts) will actually get sent before March 28 given that personal network leads are the clear priority. **Mitigation:** Cycle 1 captures all P2 org contacts in `docs/actions.md` with a revisit date of March 22. If not sent by then, decision is forced: escalate to P1 or accept the miss with a post-early-bird outreach plan at $150 pricing.
