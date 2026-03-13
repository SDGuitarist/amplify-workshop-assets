# /promo-post — Generate a Single Workshop Promo Post

Generate one social media post for the Amplify workshop.

## Input: $ARGUMENTS

Expects: `[platform] [date or theme]`

Examples:
- `/promo-post instagram mar-20`
- `/promo-post linkedin three-questions`
- `/promo-post facebook early-bird-deadline`
- `/promo-post instagram who-is-this-for`

If no arguments provided, ask for:
1. Platform (instagram, facebook, or linkedin)
2. Either a date from the calendar OR a theme/framework to feature

## Steps

### 1. Load Voice Rules (MANDATORY)

Read `context/brand-voice.md`. This is non-negotiable for every post.

### 2. Find the Calendar Entry

Read `context/content-calendar.md`. Find the matching date or theme.

Extract:
- The scheduled hook line
- The content theme
- The posting time
- Any urgency triggers active for that date

If the date isn't in the calendar, use the Content Bank framework hooks to build a post around the requested theme. Follow the same voice and platform rules.

### 3. Check if Workshop Arc Content Is Needed

If the post references a specific framework (Three Questions, Expert-First Method, Slop Hook, 5 I's, Dual Literacy, The Mirror, Floor and Ceiling, etc.), read the relevant section from `context/workshop-arc-v2.md`.

Pull the actual language from the arc. Don't paraphrase from memory.

If the post is a general urgency or announcement post, skip this step.

### 4. Draft the Post

Write one post for the specified platform. Follow the platform voice adjustments from brand-voice.md:

**Instagram:** Hook-first opening line. Conversational, punchy. Short paragraphs. Hashtags at end (not in body). Close with CTA.

**Facebook:** Personal narrative voice. Can be longer. Storytelling. End with share ask or soft CTA.

**LinkedIn:** Thought leadership angle. Lead with insight, not announcement. Professional but still Alex. No links in body (mention "link in comments" if needed).

### 5. Voice Check (MANDATORY)

Before presenting the post, verify:
- [ ] No em-dashes anywhere
- [ ] No banned vocabulary (check against the full list in brand-voice.md)
- [ ] Maximum one exclamation mark (zero is better)
- [ ] One CTA only, not multiple asks stacked
- [ ] No fabricated numbers or testimonials
- [ ] Reads like Alex talking to a peer, not a marketing department
- [ ] Platform-appropriate length and tone

If any check fails, fix it before showing the post.

### 6. Save the Post

Save the final post as a clean text file to `output/` with this naming convention:
`output/YYYY-MM-DD-[platform]-[theme-slug].txt`

Example: `output/2026-03-13-linkedin-launch.txt`

File format (ready to copy-paste):

```
[Platform] | [Month Day, Year] | [Time] PT

---

[THE POST COPY]

---

[HASHTAGS per platform rules below]
```

**Hashtag rules (from brand-voice.md):**
- **LinkedIn:** 3-5 max. Professional, discoverable. Too many looks spammy.
- **Instagram:** 15-20. Mix broad discovery, niche, and branded (#AmplifyWorkshop).
- **Facebook:** No hashtags. They don't drive discovery on Facebook.

### 7. Show QA Summary

After saving, show a brief QA summary to the user (not in the file):

```
SAVED: output/[filename].txt
VOICE CHECK: Passed/Failed
NOTES: [Any context about choices made or flags to review]
```

## Rules Reminder

- Read brand-voice.md every single time. No shortcuts.
- One post per run. Never batch.
- If the user says "that doesn't sound like me," ask what feels off and adjust. Don't defend the draft.
- If you're unsure about a claim or number, flag it. Never guess.
