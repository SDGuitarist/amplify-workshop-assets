---
title: "feat: Lead Import + Outreach Messages (Cycle 2)"
type: feat
status: completed
date: 2026-03-16
origin: docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md
feed_forward:
  risk: "Personalized messages must pass brand-voice.md voice check — expanded banned word list (5 tiers) since Cycle 1"
  verify_first: true
---

# Lead Import + Outreach Messages (Cycle 2)

## Overview

Import 8 network lead profiles from `docs/legacy-batch-imports.md` into `leads.md`, generate personalized ready-to-send outreach messages for each lead, replace the Heather endorsement placeholder with the full quote in `brand-voice.md`, and update all BLOCKED actions in `docs/actions.md` to reflect unblocked status. This completes the lead pipeline that has been blocked since Cycle 1.

Early bird deadline is March 28 (12 days away). Every message should reference the $100 early bird pricing.

## Problem Statement

8 network leads (3 firm, 3 warm, 2 soft) have profiles saved in `docs/legacy-batch-imports.md` but are not yet in `leads.md`. Actions #1, #5, and #8-13 in `docs/actions.md` are BLOCKED waiting for this import. No personalized outreach messages exist — the old drafts from the Claude Project are outdated (referenced "late Feb or March" and lacked the April 25 date, venue, and registration URL).

## Proposed Solution

5 steps, executed sequentially (each depends on the prior).

### Step 1: Import 8 Lead Profiles into `leads.md`

**What exactly changes:** Replace the "Pending Import" table (8 rows with PENDING IMPORT status) with full lead entries in the main Leads table. Add Engagement Log entries for each lead. Update segment counts in Summary.

**What must not change:** Lynn (#1) and Miriam (#2) entries. Segment definitions. Messaging templates. The "Do not invent additional testimonials" rule.

**Source data:** `docs/legacy-batch-imports.md`, Batch 1 "Lead Profiles" section.

**Lead-to-segment mapping:**

| # | Name | Temperature | Segment | Rationale |
|---|------|------------|---------|-----------|
| 3 | Mike Myrdal | Firm | Performers & Creatives | Fellow guitarist, regular gigs |
| 4 | Heather Hilton | Firm | Consultants & Service Providers | Creative businesswoman, advocate |
| 5 | Jane Hare | Firm | Consultants & Service Providers | Came via Heather's share |
| 6 | Priscilla Norris | Warm | Performers & Creatives | Classical cellist, quartet |
| 7 | Thelma C. Rufolo | Warm | Consultants & Service Providers | Entrepreneur, large network |
| 8 | Tony Cox | Warm | Consultants & Service Providers | Sales background, gig work, acting |
| 9 | Agustin El Moro | Soft | Performers & Creatives | Fellow musician, former AI student |
| 10 | Dean LeCrone | Soft | Unknown | No context — needs Alex's input |

**Engagement Log entries:** Each lead gets an H3 section with their initial expression of interest and a **Next:** line pointing to the outreach message.

**Summary updates:**
- Total interested: 5 (Lynn, Miriam, Mike, Heather, Jane are firm or expressed interest)
- Total pipeline: 10 (includes warm + soft who haven't confirmed interest yet)
- Remove "Pending import" line
- Remove the "Pending Import" section entirely (replaced by full entries)

### Step 2: Generate Personalized Outreach Messages

**What exactly changes:** Add a new "## Outreach Messages (Ready to Send)" section in `leads.md` after the Engagement Log, with one message per lead tailored to their relationship, temperature, segment, and background.

**What must not change:** The message must pass the brand-voice.md voice check (all 5 tiers of banned words, banned structural patterns, self-check protocol). Must follow the drafting principles from Batch 1.

**Message requirements per lead:**

| Lead | Temperature | Key Approach | Close Style |
|------|------------|-------------|-------------|
| Mike Myrdal | Firm | Peer musician, casual. He said yes — confirm and send details. Don't re-sell. | "I'll save you a spot" |
| Heather Hilton | Firm | DM to confirm attendance vs. championing. She's the strongest advocate. | "Are you coming or just spreading the word? Either way I appreciate you" |
| Jane Hare | Firm | Simple close. She asked for the date. Send details. | "Here are the details you asked about" |
| Priscilla Norris | Warm | Encouraging, inclusive. Connect to quartet business. Don't call her a beginner. | "You're exactly who I had in mind" |
| Thelma C. Rufolo | Warm | Entrepreneur peer, practical. She knows she's underutilizing AI. | "Practical stuff you can actually apply" |
| Tony Cox | Warm | Friend in transition, supportive. Connect to sales + gig work. | "Same principles apply" |
| Agustin El Moro | Soft | Former AI student, casual. Reference their history. | "Next level of the stuff we messed around with before" |
| Dean LeCrone | Soft | Minimal — no context available. Flag for Alex to customize or skip. | Placeholder only |

**All messages must include:**
- Saturday, April 25, 10 AM to 2 PM
- Expressive Arts San Diego
- $100 early bird through March 28 / $150 after
- Registration: https://tinyurl.com/Amplify-AI
- Venmo @Alex-Guillen-Music or Zelle alex.guillen.music@gmail.com
- Contact: alex@alexguillenmusic.com / 619-755-3246

**Voice check (VERIFY FIRST):** brand-voice.md was expanded since Cycle 1 with 5 tiers of banned words, banned structural patterns, and a self-check protocol. Every message must be checked against this expanded list before being marked as ready.

### Step 3: Replace Heather Endorsement Placeholder in `brand-voice.md`

**What exactly changes:** Replace the "Extended endorsement (pending import)" placeholder paragraph with the actual full quote from `docs/legacy-batch-imports.md` (Batch 1, "Key Social Proof: Heather Hilton's Full Endorsement" section).

**What must not change:** The 3 existing short quotes. The "Do not invent additional testimonials" warning. The section heading.

**The full quote to import:**

> "Being a creative and having a business mind is a gift. Alex Guillen is offering a valuable workshop to learn a helpful approach to learn how to navigate using AI for a good tool, to help creatives thrive. If you or a friend is interested in learning more about how to have AI assist (not replace), you on your creative journey, Alex is a safe bet. Alex himself is not only 'tech savvy', but a very talented creative. His music presentations are as authentic as they get. I don't know about my other, entrepreneur friends.. but I can say for myself that this offering is going add so much value for my business. I'm excited to learn more."

### Step 4: Update `docs/actions.md` — Unblock Completed Actions

**What exactly changes:** Update Status column for all lead-related BLOCKED actions to reflect completion. Update "Last updated" date. Keep non-lead actions unchanged.

**Specific status changes:**

| Action # | Old Status | New Status | Notes |
|----------|-----------|------------|-------|
| 1 | BLOCKED | DONE | Profiles imported, messages generated |
| 5 | BLOCKED | DONE | Jane's details sent (message ready) |
| 8-12 | BLOCKED | DONE | Profiles imported, messages generated |
| 13 (Dean) | BLOCKED | NEEDS CONTEXT | Alex must decide: pursue or skip |

**What must not change:** P2 org/hub outreach items (#14-20) — those are separate from lead import. Anti-deferral checkpoint. Revenue projections. Workshop-tweaks references.

### Step 5: Update `HANDOFF.md` and Cross-Reference Audit

**What exactly changes:** Update date, current state, add session summary. Run cross-reference audit per Cycle 1 solution doc pattern.

**Cross-reference audit checklist:**
- [ ] leads.md lead count matches actions.md references
- [ ] HANDOFF.md "Total pipeline" matches leads.md Summary
- [ ] brand-voice.md Heather quote matches legacy-batch-imports.md source
- [ ] All formerly-BLOCKED actions in actions.md now show DONE
- [ ] No file says "pending import" after import is complete

---

## Acceptance Criteria

- [x] `leads.md` has 10 leads in the main table (Lynn, Miriam + 8 imported)
- [x] "Pending Import" section removed from `leads.md`
- [x] Each imported lead has an Engagement Log entry with **Next:** action
- [x] leads.md Summary updated (interested count, pipeline count, segment breakdown)
- [x] 8 personalized outreach messages in leads.md (7 ready-to-send + 1 Dean placeholder)
- [x] Every message includes April 25 date, venue, early bird pricing, and registration URL
- [x] Every message passes brand-voice.md voice check (5 tiers + structural patterns + self-check)
- [x] brand-voice.md has Heather's full endorsement quote (not placeholder)
- [x] "Do not invent additional testimonials" warning preserved
- [x] actions.md: #1, #5, #8-12 updated to DONE; #13 to NEEDS CONTEXT
- [x] actions.md "Last updated" date is 2026-03-16
- [x] HANDOFF.md updated with Cycle 2 session summary
- [x] Cross-reference audit passes (no stale references across files)
- [x] `.claude/CLAUDE.md` is NOT modified

## How We'll Know It Worked

1. Alex can copy-paste any of the 7 ready messages and send them immediately
2. leads.md is the single source of truth for all 10 leads
3. No file in the project says "PENDING IMPORT" or "pending import" after this cycle
4. Cross-reference audit shows zero drift between actions.md, leads.md, and HANDOFF.md

## What Is Most Likely Wrong About This Plan

The segment assignments for the 8 leads are based on limited context from Batch 1 profiles. Some leads could fit multiple segments (e.g., Heather is both a creative and a businesswoman — assigned to Consultants & Service Providers based on her business focus). Alex may want to adjust these. Dean LeCrone has no context at all — the message is a placeholder that Alex must customize or decide to skip.

---

## Dependencies & Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Messages don't sound like Alex | Leads get a generic pitch instead of personal outreach | Voice check against expanded brand-voice.md (5 tiers). Match voice samples. Read aloud test. |
| Segment assignments wrong | Messages miss the mark for specific leads | Flag in messages: "Alex — verify this feels right before sending" |
| Dean LeCrone has no context | Can't write a real message | Placeholder message flagged for Alex to customize |
| Cross-reference drift after updates | Stale status in one file | Run audit checklist (Step 5) before committing |
| brand-voice.md expanded since Cycle 1 | Messages might use newly-banned words | VERIFY FIRST: run self-check protocol on every message |

## Sources & References

- **Origin brainstorm:** [docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md](docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md) — Cycle 3 scope (now Cycle 2): import leads, generate messages, add Heather quote
- **Cycle 1 plan:** [docs/plans/2026-03-15-feat-claude-project-integration-cycle-1-plan.md](docs/plans/2026-03-15-feat-claude-project-integration-cycle-1-plan.md) — established patterns for file changes, cross-reference audit
- **Solution doc:** [docs/solutions/integration-issues/2026-03-15-legacy-content-integration-without-pipeline-breakage.md](docs/solutions/integration-issues/2026-03-15-legacy-content-integration-without-pipeline-breakage.md) — cross-reference drift prevention, staging file pattern
- **Source data:** [docs/legacy-batch-imports.md](docs/legacy-batch-imports.md) — Batch 1 lead profiles and Heather endorsement
- **Voice rules:** [context/brand-voice.md](context/brand-voice.md) — expanded with 5 tiers of banned words, structural patterns, self-check protocol
- **Current leads:** [leads.md](leads.md) — 2 active leads + 8 PENDING IMPORT
- **Action backlog:** [docs/actions.md](docs/actions.md) — BLOCKED actions #1, #5, #8-13 to unblock
