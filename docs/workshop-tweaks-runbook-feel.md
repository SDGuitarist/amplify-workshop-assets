# Workshop Tweaks: "Runbook Feel" Implementation

**Principle:** The workshop should make people feel like they're peeking into the runbooks of a high-output operator. Not attending a class. Not watching slides. Seeing how a real business actually runs on AI.

**Source:** Sugumaran Balasubramaniyan's recap of the Claude Cowork for Operators event (Every Inc. + Anthropic, Paris, March 2026). The event worked because it was "two hours of live demos, not theory" with builders showing real systems. Alex's workshop already does this in Phase 4 — the goal is to push that feeling across all 7 phases.

---

## Current Assessment (March 15, 2026)

| Phase | Runbook Feel | Score |
|-------|-------------|:-----:|
| 1. Open | Strong — Slop Hook is live, Pacific Flow story is real | 8/10 |
| 2. Diagnose | Moderate — participant-focused (intentionally), earns the right to show systems later | 6/10 |
| 3. Orient | Strong — Assistants vs. Agents is insider knowledge, Expert-First is the real move | 8/10 |
| 4. Demonstrate | Strongest — live pipeline IS the runbook | 9/10 |
| 5. Experience | Moderate — applying the method, but circulating questions are the runbook moments | 6/10 |
| 6. Integrate | Low — framework naming feels like teaching, not showing | 4/10 |
| 7. Close | Strong — Mirror and compound tracker are from real experience | 8/10 |

**Overall: 70% runbook, 30% traditional workshop.**

---

## Tweaks to Implement

### Phase 4 — Show Real Data (9/10 → 10/10)

**What to change:** Use your actual lead pipeline with real (anonymized) data on screen during the live demo. Not a sanitized sample. Real leads, real QA flags, real classification decisions.

**Why:** People can feel the difference between a demo account and a live system. Anonymized real data has texture — weird edge cases, partial information, actual pricing logic. That's the runbook.

**Prep needed:**
- [ ] Export 2-3 real leads from the system (anonymize client names/contact info)
- [ ] Keep the pricing logic, classification tier, and QA flags visible
- [ ] Have one lead that triggers a QA failure so people see what a flag looks like
- [ ] Have one lead that passes cleanly so people see the contrast

---

### Phase 5 — "Here's What the System Flagged on Yours" (6/10 → 8/10)

**What to change:** When circulating during the hands-on exercise, instead of only asking questions, briefly show one participant your actual QA report applied to their lead. Run their scenario through the real system (or a simplified version) and show the output.

**Why:** This turns "try the exercise" into "watch the operator run your data through the real machine." It's the moment where the runbook becomes personal.

**Prep needed:**
- [ ] Have the pipeline accessible during the session (laptop or projected)
- [ ] Prepare a quick way to run a participant's lead through at least the Extractor + QA stages
- [ ] Pick 1-2 participants whose industries will produce interesting QA results (photographer, consultant)
- [ ] Time-box to 3-4 min per participant demo — don't let this eat the whole phase

---

### Phase 6 — Iteration Log Instead of Framework Lecture (4/10 → 7/10)

**What to change:** Before naming the 5 I's, show a real example of a time the pipeline gave you a bad output and what you changed. Pull up an actual screenshot or log entry. Then reveal the 5 I's as the framework that explains WHY you made those changes.

**Why:** "Here's what broke and how I fixed it" is a runbook story. "Here are five principles" is a lecture. The reveal lands harder when they've just seen the real iteration in action.

**Prep needed:**
- [ ] Find 1 real example of a pipeline failure (bad QA score, wrong classification, voice mismatch)
- [ ] Screenshot the before output and the after output
- [ ] Prepare a 2-3 min story: "This lead came in. The system wrote this. I looked at it and knew it was wrong because [specific reason]. I changed [specific thing in the prompt/system]. Here's what it produced after."
- [ ] THEN reveal: "What I just did was Intent, Identity, Inference, Iteration, Integrity — in that order."
- [ ] The 5 I's become a description of what they watched, not an abstraction

---

### Phase 2 — Small Tweak (6/10 → 7/10)

**What to change:** After the Three Questions exercise, briefly show how YOUR answers to those same questions led to the systems they're about to see. "Here's what I wrote when I asked myself these questions. Question 2 — where am I just doing tasks — that answer became the Lead Responder."

**Why:** Connects the reflective exercise directly to a real operational decision. The exercise isn't hypothetical — it's the same diagnostic Alex used to build his business.

**Prep needed:**
- [ ] Write out your own answers to the Three Questions (honest, specific)
- [ ] Map each answer to a specific app: Q1 → what you still do yourself, Q2 → what became an app, Q3 → what you got back
- [ ] Keep this to 2 min — a bridge, not a monologue

---

## Summary: What to Build Before April 25

| # | Prep Item | For Phase | Effort |
|---|-----------|-----------|--------|
| 1 | Anonymize 2-3 real leads for live demo | 4 | 30 min |
| 2 | Prepare one QA-fail lead and one QA-pass lead | 4 | 15 min |
| 3 | Set up pipeline access during session (laptop/projected) | 5 | 30 min |
| 4 | Find 1 real pipeline failure + screenshot before/after | 6 | 20 min |
| 5 | Write 2-3 min iteration story connecting failure to fix | 6 | 15 min |
| 6 | Write your own Three Questions answers + map to apps | 2 | 15 min |
| 7 | Practice the Phase 6 reveal: story first, framework second | 6 | 15 min |

**Total estimated prep: ~2.5 hours**

---

## The Test

Before April 25, run this check on every phase: "If a participant described this moment to a friend, would they say 'he showed us how his actual business works' or 'he taught us a framework'?" The first answer is the runbook feel. The second is a workshop. Both are fine — but lean toward the first wherever possible.
