---
title: "feat: Claude Project Integration — Cycle 1 (Operational Setup)"
type: feat
status: completed
date: 2026-03-15
origin: docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md
feed_forward:
  risk: "P2 org outreach may get deferred past March 28 early bird deadline"
  verify_first: false
---

# Claude Project Integration — Cycle 1 (Operational Setup)

## Overview

Create the operational foundation for integrating legacy Claude Project content into the Amplify Workshop Claude Code project. This cycle focuses exclusively on what can be done with repo-available data: building the consolidated action backlog, updating leads with follow-up actions, adding a Heather endorsement placeholder, and bringing HANDOFF.md current.

Cycles 2 (facilitation prep) and 3 (lead import + outreach drafts) are out of scope. They depend on missing source inputs documented in the brainstorm.

## Problem Statement

The project has a working content pipeline but no consolidated view of all pending actions. Workshop prep items live in `docs/workshop-tweaks-runbook-feel.md`. Content pipeline status lives in `HANDOFF.md`. Venue logistics, org outreach, lead outreach, and intake form planning exist only in conversation context. There is no single place to see what needs to happen before March 28 (early bird deadline) and April 25 (workshop day).

Meanwhile, `HANDOFF.md` is stale (dated March 13, says 7 posts when there are 9), `leads.md` has no follow-up actions for its 2 existing leads, and `brand-voice.md` references Heather's shorter quotes but not the extended endorsement.

## Missing Inputs (Blocks Cycle 3)

The following source materials exist only in conversation context from the 7 legacy batch transfers. They are **not in the repo**. Blocked rows in the action backlog below reference these items explicitly. Cycle 3 cannot start until they are imported.

| Missing Input | Legacy Batch | Blocks |
|---------------|-------------|--------|
| 8 network lead profiles (Mike Myrdal, Heather Hilton, Jane Hare, Priscilla Norris, Thelma C. Rufolo, Tony Cox, Agustin El Moro, Dean LeCrone) — names, backgrounds, relationship context, lead temperature, engagement history | Batch 1 | Actions #1, #5, #8-13 and leads.md full import |
| Heather Hilton's full endorsement quote ("Being a creative and having a business mind is a gift...") | Batch 1 | brand-voice.md Social Proof update |
| Org outreach drafts and contact details (Floyd Smith, Blanca, Amanda, SD & Imperial WBC, NAWBO, NLBWA, Hera Hub) | Batches 4 & 6 | Actions #14-20 message content |
| Facilitation content (talking points, participant archetypes, QA Gate 9 checks, demo pipeline architecture, strategic context) | Batches 2, 3, 5, 7 | Cycle 2 context files |
| Revenue projections ($2,400-$3,900 net range) | Batch 6 | Included in actions.md from conversation context (safe — numbers are simple facts) |
| Pre-workshop intake design (3 reconnaissance questions) | Batch 6 | Actions #34 detail |

See also: brainstorm [Missing Inputs section](docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md).

---

## Proposed Solution

Four focused file changes. Each is independent — no change depends on another.

### Step 1: Create `docs/actions.md`

**What exactly changes:** New file created.

**What must not change:** Nothing — new file, no existing dependencies.

**File structure:**

```markdown
# Amplify Workshop — Action Backlog

**Last updated:** 2026-03-15
**Early bird deadline:** March 28, 2026
**Workshop day:** April 25, 2026

---

## Revenue Projections

At 30 seats:
- All early bird: $3,000
- All regular: $4,500
- Mixed (15 early/15 regular): $3,750
- Estimated costs: ~$600 (venue ~$300 + food ~$300)
- Net range: $2,400 to $3,900

---

## P1 Actions (Before March 22)

| # | Action | Status | Next Step | Due |
|---|--------|--------|-----------|-----|
| 1 | Send updated messages to 8 network leads | BLOCKED | Import lead profiles from legacy batch (see Missing Inputs in brainstorm) | Mar 22 |
| 2 | Confirm Heather Hilton attendance via DM | TODO | DM Heather: attending or just championing? | Mar 18 |
| 3 | Follow up with Lynn Gahman | TODO | Waiting on her response to "#1 goal for AI" question (asked Mar 14) | Mar 18 |
| 4 | Follow up with Miriam Aguilar Escobar | TODO | She commented "checking my calendar...interested." Send registration details via DM if she follows up. | Mar 18 |
| 5 | Send Jane Hare the April 25 details | BLOCKED | Import lead profile first. She asked for the date — this is a simple close. | Mar 18 |
| 6 | Read fine print on Tish's venue contract and rental agreement | TODO | Do this week. If something needs negotiation, you want time. | Mar 18 |
| 7 | Sign and return contract, rental agreement, and COI to Tish | TODO | Blocked by #6 | Mar 22 |

---

## P2 Actions (Before March 28)

### Network Leads (Blocked — Awaiting Source Profiles)

| # | Lead | Temperature | Segment | Status | Next Step |
|---|------|------------|---------|--------|-----------|
| 8 | Mike Myrdal | Firm | Performers & Creatives | BLOCKED | Import profile, rewrite draft with current details |
| 9 | Priscilla Norris | Warm | Performers & Creatives | BLOCKED | Import profile, rewrite draft with current details |
| 10 | Thelma C. Rufolo | Warm | Consultants & Service Providers | BLOCKED | Import profile, rewrite draft with current details |
| 11 | Tony Cox | Warm | Performers & Creatives | BLOCKED | Import profile, rewrite draft with current details |
| 12 | Agustin El Moro | Soft | Performers & Creatives | BLOCKED | Import profile, rewrite draft with current details |
| 13 | Dean LeCrone | Soft | Unknown | BLOCKED | Get context from Alex — worth pursuing or let it ride? |

### Promotional Hub Contacts

| # | Contact | Network | Status | Next Step |
|---|---------|---------|--------|-----------|
| 14 | Floyd Smith | Business owners, AI-interested | TODO | Send workshop details + ask to share with network |
| 15 | Blanca | Nonprofit for artists/wellness | TODO | Send workshop details + partnership angle |
| 16 | Amanda | Photographer/photography business | TODO | Send workshop details + photography persona angle |

### Women-Focused Organizations

| # | Organization | Status | Next Step |
|---|-------------|--------|-----------|
| 17 | SD & Imperial Women's Business Center | TODO | Send outreach draft (programming partnership angle, Randstad AI gender gap hook) |
| 18 | NAWBO San Diego | TODO | Send outreach draft (peer credibility angle) |
| 19 | NLBWA San Diego | TODO | Send outreach draft (Spanish open + cultural alignment angle) |
| 20 | Hera Hub | TODO | Send outreach draft (Business Booster strategy + direct workshop pitch) |

**Anti-deferral checkpoint: March 22.** If P2 org outreach (#17-20) is not sent by March 22, decision required: escalate to P1 or accept the miss with a post-early-bird plan at $150 pricing.

---

## Pre-Workshop Prep (Before April 25)

These items already exist in `docs/workshop-tweaks-runbook-feel.md` (7 items, ~2.5 hrs). Listed here for consolidated visibility. Do not duplicate the detail — reference the source.

| # | Prep Item | Source | Effort | Status |
|---|-----------|--------|--------|--------|
| 21 | Anonymize 2-3 real leads for live demo | workshop-tweaks #1 | 30 min | TODO |
| 22 | Prepare QA-fail and QA-pass leads | workshop-tweaks #2 | 15 min | TODO |
| 23 | Set up pipeline access during session | workshop-tweaks #3 | 30 min | TODO |
| 24 | Find 1 real pipeline failure + screenshot | workshop-tweaks #4 | 20 min | TODO |
| 25 | Write iteration story (2-3 min) | workshop-tweaks #5 | 15 min | TODO |
| 26 | Write own Three Questions answers | workshop-tweaks #6 | 15 min | TODO |
| 27 | Practice Phase 6 reveal | workshop-tweaks #7 | 15 min | TODO |

*Additional pre-workshop items from legacy batches (#28-46: take-home handout, intake form, rescue project, domain examples, food/logistics, post-workshop debrief) are deferred to Cycle 2/3. They depend on facilitation content and source text not yet in the repo.*
```

### Step 2: Update `leads.md`

**What exactly changes:** Add follow-up action notes to Lynn and Miriam's Engagement Log entries. Add a new section "Pending Import" below the Leads table flagging the 8 network leads. Update Summary counts if needed.

**What must not change:** Existing lead table structure, segment definitions, segment-specific messaging templates.

**Specific edits:**

1. After the Leads table (line 28), add:

```markdown
### Pending Import (From Legacy Claude Project)

8 additional leads from Alex's direct network need profiles imported. Details are in conversation context from Batch 1 transfer (see brainstorm: docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md, "Missing Inputs" section).

| # | Name | Temperature | Status |
|---|------|------------|--------|
| 3 | Mike Myrdal | Firm | PENDING IMPORT |
| 4 | Heather Hilton | Firm | PENDING IMPORT |
| 5 | Jane Hare | Firm | PENDING IMPORT |
| 6 | Priscilla Norris | Warm | PENDING IMPORT |
| 7 | Thelma C. Rufolo | Warm | PENDING IMPORT |
| 8 | Tony Cox | Warm | PENDING IMPORT |
| 9 | Agustin El Moro | Soft | PENDING IMPORT |
| 10 | Dean LeCrone | Soft | PENDING IMPORT |
```

2. In the Engagement Log, update Lynn's `**Waiting on:**` entry and Miriam's `**Next:**` entry to reflect current follow-up actions from `docs/actions.md`.

3. Update Summary:
   - Total interested: 2 (unchanged — pending imports are not yet "interested")
   - Add a note: "8 additional leads pending import from legacy project"

### Step 3: Update `brand-voice.md` Social Proof Section

**What exactly changes:** Add a placeholder note for the extended Heather Hilton endorsement below the existing short quotes.

**What must not change:** The existing 3 short quotes. The "Do not invent additional testimonials" warning. The section heading.

**Specific edit:** After the existing Heather quotes and before the "Do not invent" warning, add:

```markdown
**Extended endorsement (pending import):** Heather wrote a longer public endorsement beginning "Being a creative and having a business mind is a gift..." that covers Alex's credibility as both tech-savvy and a working creative, the "AI that assists, not replaces" positioning, and her personal excitement about the workshop. Full text needs to be imported from legacy Claude Project Batch 1. Do not paraphrase until the actual quote is added.
```

### Step 4: Update `HANDOFF.md`

**What exactly changes:** Update date, current state paragraph, and add new session summary.

**What must not change:** The Done inventory structure, Post File Format spec, Key Rules, Session Start Prompts.

**Specific edits:**

1. Update header: Date → 2026-03-15, Phase → "Operational setup (Cycle 1 of Claude Project integration)", Last session → "Landing page conversion optimizations, Claude Project integration brainstorm"

2. Update Current State paragraph: "Content pipeline fully operational. 48 cron jobs installed. 9 posts generated and formatted (Mar 13 launch x3, Mar 14 x3, Mar 17 x2, Apr 5 x1). Mood variant system built. Landing page updated with 10 conversion optimizations. Claude Project integration brainstorm complete — Cycle 1 operational setup in progress."

3. Add new "What Was Done" section for Mar 15 session covering: landing page optimizations, brainstorm, actions backlog creation.

4. Update P1 Next Actions: Add "Import 8 network lead profiles (blocked — source text needed)" and "Send org outreach by March 22 checkpoint."

---

## Acceptance Criteria

- [x] `docs/actions.md` exists with P1 actions (#1-7), P2 actions (#8-20), and workshop-tweaks references (#21-27)
- [x] P2 org outreach items (#17-20) have March 22 anti-deferral checkpoint noted
- [x] Revenue projections included in actions file
- [x] Workshop-tweaks prep items (#21-27) reference the source file, not duplicate detail
- [x] `leads.md` has "Pending Import" section with 8 names, temperatures, and PENDING IMPORT status
- [x] `leads.md` Lynn and Miriam engagement logs have updated follow-up actions
- [x] `brand-voice.md` has Heather extended endorsement placeholder with "pending import" flag
- [x] `brand-voice.md` preserves "Do not invent additional testimonials" warning
- [x] `HANDOFF.md` date updated to 2026-03-15
- [x] `HANDOFF.md` says 9 posts (not 7)
- [x] `.claude/CLAUDE.md` is NOT modified (no new context files this cycle)
- [x] Blocked steps clearly reference which missing inputs they need (see Missing Inputs section)

## How We'll Know It Worked

1. `docs/actions.md` is the single place to see everything pending before March 28 and April 25
2. `leads.md` accurately reflects 2 active leads + 8 pending imports
3. The brainstorm's "Missing Inputs" section matches what's still actually missing after this cycle
4. HANDOFF.md is accurate enough that a new session can start by reading it

## What Is Most Likely Wrong About This Plan

The `docs/actions.md` structure starts with 27 items in Cycle 1 and will grow when Cycle 2/3 items are added. If all deferred items (#28-46) land at once, the file reaches ~46 items. For a 30-seat workshop with a 6-week pipeline this is manageable — the action count is finite and will shrink after April 25, not grow.

---

## Dependencies & Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Source text from batch transfers is lost before Cycle 3 | 8 lead profiles and Heather quote are unrecoverable | Flag in this session: save batch text to a staging file before conversation ends |
| P2 org outreach deferred past March 28 | Miss early bird pricing as a hook for organizational partnerships | March 22 anti-deferral checkpoint forces a decision |
| HANDOFF.md gets stale again quickly | Next session starts with wrong context | Keep HANDOFF updates as the last step of every session |

## Sources & References

- **Origin brainstorm:** [docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md](docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md) — Key decisions: operational first, five apps, full profiles + messages (blocked), both channels prioritized, logistics in project, multiple facilitation files
- **Linked expectations pattern:** From `gigprep/docs/solutions/process-patterns/` and `gig-lead-responder/docs/solutions/workflow/` — when changing leads.md, also update Summary counts. When updating HANDOFF.md, verify post count matches reality.
- **Existing prep items:** `docs/workshop-tweaks-runbook-feel.md` (7 items, ~2.5 hours, all TODO)
- **Brand voice source of truth:** `context/brand-voice.md` lines 204-212 (Social Proof section)
- **HANDOFF structure:** `HANDOFF.md` (dated Mar 13, needs update to Mar 15)
