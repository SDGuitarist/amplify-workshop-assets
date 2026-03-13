# Credibility Portfolio Generator

Generate a tailored credibility document for Alex Guillen based on audience type.

**Audience:** $ARGUMENTS (one of: educator, publication, business, speaking, general)

## Instructions

1. Read `context/credibility-portfolio.md` for source material.
2. Read `context/brand-voice.md` for voice rules. Follow every rule. No em-dashes. No banned vocabulary.
3. Generate a document tailored to the audience:

### Audience Profiles

**educator** — They care about: teaching methodology, curriculum design, frameworks that transfer, student outcomes, the "AI Anxiety to AI Agency" arc, the workshop-safe constraint set, the Done by you / Done with you / Done for you model. Lead with the 13 original frameworks and the workshop curriculum. Emphasize that Alex teaches from lived practice, not theory.

**publication** — They care about: unique angle, original thinking, proof of depth, transferable value for their readers. Lead with the AI Dual Literacy thesis and the two-era story (2+ years of framework development, 40 days of shipped code). Emphasize what makes this different from standard "I used ChatGPT" stories. Highlight the compound engineering methodology and the 103 solution docs as evidence of real learning.

**business** — They care about: practical results, revenue impact, time savings, operational systems. Lead with the measurable results (confidence 30 to 90, response time 103s to 39s, $200 consulting engagement, zero-defect review cycle). Emphasize the lead pipeline, mesh architecture, and custom skills inventory. Show that this is running a real business, not a demo.

**speaking** — They care about: stage presence, audience engagement, unique talk angle, credibility markers. Lead with 30+ years / 2,500+ events as a performer, the Wedge positioning, and the workshop as proof of delivery. Emphasize the emotional arc design and the counter-narrative. Alex already reads rooms for a living.

**general** — Balanced overview. Lead with the one-liner: "A musician who built production software in 40 days using AI, then started teaching the methodology." Hit all five layers briefly.

## Output Format

```
# Alex Guillen — [Audience-Specific Title]

[2-3 sentence hook tailored to this audience]

---

[Body: 500-800 words, pulling from the relevant layers of the portfolio]

---

## Quick Stats
- 30+ years performing, 2,500+ events
- 10 software projects, 1,301 commits in 40 days
- 103 solution documents (compound learning)
- 2+ years of AI framework development
- 40+ original frameworks across sales, teaching, operations, accessibility
- 22 custom AI skills
- 10 Claude Projects (Era 1) + 10 code repos (Era 2)
- [2-3 audience-specific stats]

## Contact
- alex@alexguillenmusic.com
- 619-755-3246
- Workshop: https://tinyurl.com/Amplify-AI
```

## Rules

- Sound like Alex talking to a peer. Not a marketing department.
- Confident about experience. Never about perfection or guaranteed outcomes.
- Every claim must come from the portfolio. Never fabricate.
- No em-dashes. No banned vocabulary. Max one exclamation mark (zero is better).
- If audience type is not recognized, default to "general."
