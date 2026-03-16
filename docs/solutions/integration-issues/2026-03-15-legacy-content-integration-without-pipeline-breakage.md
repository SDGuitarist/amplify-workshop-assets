---
title: "Legacy Content Integration Without Pipeline Breakage"
date: 2026-03-15
category: integration-issues
tags:
  - content-pipeline
  - legacy-migration
  - cross-reference-drift
  - missing-inputs
  - staging-file
severity: P2
module: amplify-workshop-assets
problem_type: "Data consolidation with operational constraints"
root_cause: "Content accumulated in older Claude Project with no structured handoff to Claude Code project. Source text lived in conversation context, not in repo files."
resolution_time: "1 session (brainstorm + plan + work + review + compound)"
related_files:
  - docs/actions.md
  - docs/legacy-batch-imports.md
  - docs/brainstorms/2026-03-15-claude-project-integration-brainstorm.md
  - docs/plans/2026-03-15-feat-claude-project-integration-cycle-1-plan.md
  - leads.md
  - HANDOFF.md
  - context/brand-voice.md
---

# Legacy Content Integration Without Pipeline Breakage

## Problem

7 batches of content from an older Claude Project (web) needed integration into a working Claude Code project. The content included 8 network leads, facilitation talking points, curriculum depth, target audience analysis, technical demo pipeline docs, logistics/action items, and strategic positioning.

**Constraints that made this non-trivial:**
- Content pipeline was already live (48 cron jobs, 9 posts generated, `/promo-post` command operational)
- Some batch content was outdated (draft responses referenced "late Feb or March")
- Some content conflicted with existing docs (app count discrepancy: "six" vs "five")
- Source text lived only in conversation context, not in repo files
- Early bird deadline (March 28) created urgency for lead outreach
- Multiple files would need to track overlapping status, creating drift risk

**Symptoms:**
- 8 network leads with no outreach sent
- Org partnerships drafted but never contacted
- Venue logistics untracked
- HANDOFF.md stale (dated March 13, said 7 posts when there were 9)
- No consolidated view of all pending actions

## Root Cause

The Claude Project and Claude Code project were developed independently over weeks. Content accumulated in the web project but was never formalized into the Code project's file structure. No structured handoff existed between the two environments. When the time came to consolidate, the source text existed only in conversation context — not in any repo file.

## Solution

### Pattern: Triage Before Integration

Read all 7 batches without touching the repo. Run a brainstorm phase to make explicit decisions about what to keep, discard, and reconcile. This prevented "dump everything in" — the highest-risk approach.

**8 key decisions made during brainstorm:**
1. Operational first (leads before facilitation prep)
2. Keep "five AI-powered business systems" (resolved the 5 vs 6 discrepancy)
3. Full lead profiles + ready-to-send messages (but blocked until source imported)
4. Both outreach channels prioritized (P1 network, P2 org with anti-deferral)
5. Track logistics in project (single location)
6. Multiple separate facilitation files (not one mega-file)
7. Explicit discard list (outdated drafts, enterprise topics, duplicates)
8. Email addresses were already correct (Zelle payment vs contact email — no fix needed)

### Pattern: Staging File as Session Boundary Checkpoint

Created `docs/legacy-batch-imports.md` to preserve all 7 batch transfers as a persistent file. This was the single most important risk mitigation — without it, losing conversation context would permanently block Cycle 3.

**Rule:** If source data exists only in conversation, save it to a repo file in the first 30 minutes. Don't wait until end of session.

### Pattern: Missing Inputs Inventory

The plan's "Missing Inputs" section explicitly listed what was blocked and why, with specific batch references and the actions each input unblocked. This prevented:
- Building on invented data (no lead profiles → can't write personalized messages)
- Silent deferrals (blocked items are visible, not quietly skipped)
- Confusion about what's actionable now vs. what needs source text first

**Format used:**
```markdown
| Missing Input | Legacy Batch | Blocks |
|---------------|-------------|--------|
| 8 network lead profiles | Batch 1 | Actions #1, #5, #8-13 |
```

### Pattern: Anti-Deferral Checkpoint

P2 items (org outreach to 4 women-focused organizations) had a concrete revisit date: **March 22**. If not sent by then, a decision is forced: escalate to P1 or explicitly accept the miss. This prevents P2 items from becoming zombie deferrals that nobody notices until the deadline passes.

### Pattern: Scoped Cycles with Explicit Boundaries

Work was split into 3 cycles, each with clear scope:
- **Cycle 1 (this session):** Repo-available data only. Create action backlog, update leads, add placeholders, refresh HANDOFF.
- **Cycle 2 (next session):** Facilitation prep. Create 5 new context files from batch content.
- **Cycle 3 (after source import):** Import 8 lead profiles, generate personalized messages, add Heather's full endorsement.

The plan explicitly stated what was NOT in Cycle 1: no changes to `.claude/CLAUDE.md`, no email standardization (already correct), no facilitation files.

## What Was Delivered (Cycle 1)

| File | Change |
|------|--------|
| `docs/actions.md` | New — 27 items across P1/P2/prep with revenue projections and March 22 checkpoint |
| `leads.md` | Pending Import section (8 leads), Lynn/Miriam follow-up actions, summary update |
| `context/brand-voice.md` | Heather extended endorsement placeholder (pending import) |
| `HANDOFF.md` | Date to Mar 15, post count to 9, Mar 14-15 session summaries, P1 lead outreach |
| `docs/legacy-batch-imports.md` | All 7 batch transfers preserved as staging file |

## Prevention Strategies

### 1. Cross-Reference Drift

When 5+ files track overlapping status, updating one without the others creates stale references.

**Practice:** When updating a lead or action status:
1. Update the source file first (leads.md for lead status, actions.md for action status)
2. Grep for the name/item across dependent files: `grep -r "Lynn" HANDOFF.md actions.md leads.md`
3. Update all references in the same commit
4. Include cross-reference verification in commit message

### 2. Session Boundary Data Loss

If operational data exists only in conversation context, the next session is orphaned.

**Practice:** Save source data to a persistent file within the first 30 minutes. Create staging files as operational artifacts, not drafts. Include a "Data Files" note in HANDOFF.md listing any files created this session.

### 3. Scope Creep in Integration

Integration work has natural "while we're here" temptation.

**Practice:** One cycle per session. Plan must name the specific cycle target and answer: what's changing, what's NOT changing, how do we know it's done. If the plan says "Cycles 1-3," reject it.

### 4. Missing Inputs vs. Vague TODOs

"TODO: fill in content" stays vague for weeks. "BLOCKED: source data for lead profiles (Batch 1, docs/legacy-batch-imports.md)" gets resolved because you know exactly what's needed and where to find it.

**Practice:** Every blocked item must cite: what's missing, which file/batch has it, and which actions it unblocks. Use "BLOCKED" status (not "TODO") for items that depend on missing source data.

## Risk Resolution

**Feed-forward risk from brainstorm:** "Whether the org outreach (women-focused orgs, hub contacts) will actually get sent before March 28."

**What happened:** March 22 anti-deferral checkpoint was built into `docs/actions.md` (line 64) and `HANDOFF.md` (P1 item 7). The structural mechanism is in place. Whether the outreach actually gets sent depends on Alex taking action before March 22 — but the system will surface the decision point rather than letting it silently pass.

**Review findings:** No P1 issues. P2 cross-reference drift risk is structural (5 files with overlapping status). P3 items deferred (HANDOFF inventory, claude-projects-handoff.md staleness). The cross-reference drift risk is the one to watch in Cycle 3 when leads are actually imported and statuses change across multiple files simultaneously.

## Lesson

When legacy content meets an operational system, the integration order matters more than the integration speed. Triage first (brainstorm), scope tightly (one cycle), preserve source text early (staging file), and make blockers visible (Missing Inputs + anti-deferral checkpoints). The cost of a 30-minute brainstorm is far less than the cost of a broken content pipeline or lost source data.
