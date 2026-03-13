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

### 5. Assign Mood Variant

Based on the post's content theme, assign a mood and intensity for the accompanying graphic. Use this mapping:

| Content Theme | Mood Class | When to Use Bold |
|---|---|---|
| Launch, announcements, "one week away," "what to expect" | (default — no class) | Major milestones, all-platform pushes |
| Framework tease, teaching concepts, The Wedge, Three Questions, Expert-First, The Mirror | `mood-framework` | When the framework is the entire focus of the post |
| Behind-the-scenes, prep, personal stories, casual | `mood-bts` | When paired with a real photo |
| Deadline, countdown, seat scarcity, price going up | `mood-urgency` | Deadline day, final 24 hours, last seats |
| Testimonials, "who is this for," FAQ, social proof | `mood-trust` | Heather quote, direct testimonials |

Add a `GRAPHIC` line at the top of the saved file, right after the platform/date/time header:

```
GRAPHIC: mood-[variant] [bold if applicable] | [instagram-square / instagram-story / linkedin]
```

Examples:
- `GRAPHIC: mood-framework | instagram-square`
- `GRAPHIC: mood-urgency mood-bold | instagram-square`
- `GRAPHIC: (default) | linkedin`

This tells you which CSS classes to apply when generating the graphic for this post.

After assigning mood, verify "AI" appears in at least one of: question line, subtitle, or description. If not, adjust the subtitle to include "Human-Led AI" or "AI Workshop" so "AI" is immediately visible at a glance.

### 6. Voice Check (MANDATORY)

Before presenting the post, verify:
- [ ] No em-dashes anywhere
- [ ] No banned vocabulary (check against the full list in brand-voice.md)
- [ ] Maximum one exclamation mark (zero is better)
- [ ] One CTA only, not multiple asks stacked
- [ ] No fabricated numbers or testimonials
- [ ] Reads like Alex talking to a peer, not a marketing department
- [ ] Platform-appropriate length and tone

If any check fails, fix it before showing the post.

### 7. Save the Post

Save the final post as a clean text file to `output/` with this naming convention:
`output/YYYY-MM-DD-[platform]-[theme-slug].txt`

Example: `output/2026-03-13-linkedin-launch.txt`

File format (ready to copy-paste, with comment section):

```
[Platform] | [Month Day, Year] | [Time] PT

---

[THE POST COPY]

[HASHTAGS — if applicable, per platform rules below]

---

FIRST COMMENT — Post immediately:

[Platform-specific first comment, see templates below]

SECOND COMMENT — Post 30-60 min later:  (Instagram only)

[Engagement question relevant to the post theme]
```

**Hashtag rules (from brand-voice.md):**
- **LinkedIn:** 3-5 max. Professional, discoverable. Too many looks spammy.
- **Instagram:** 15-20. Mix broad discovery, niche, and branded (#AmplifyWorkshop).
- **Facebook:** No hashtags. They don't drive discovery on Facebook.

**First comment templates by platform:**

**LinkedIn:**
```
Registration and details: https://tinyurl.com/Amplify-AI

30 seats. $100 early bird through March 28. $150 after.
Venmo @Alex-Guillen-Music | Zelle alex.guillen.music@gmail.com
619-755-3246 | alex@alexguillenmusic.com

Happy to answer any questions.
```

**Facebook:**
```
Register here: https://tinyurl.com/Amplify-AI

$100 early bird through March 28. $150 after.
Venmo @Alex-Guillen-Music | Zelle alex.guillen.music@gmail.com
619-755-3246 | alex@alexguillenmusic.com

Know someone who'd benefit? Tag them or send this their way.
```

**Instagram:**
```
Register: https://tinyurl.com/Amplify-AI
30 seats, $100 early bird through March 28.
Venmo @Alex-Guillen-Music | Zelle alex.guillen.music@gmail.com
619-755-3246 | alex@alexguillenmusic.com
DM me if you're thinking about it.
```

**IMPORTANT:** After March 28, update all comment templates: remove "early bird" language, change price to $150. The registration link, payment methods, and contact info stay the same.

### 8. Show QA Summary

After saving, show a brief QA summary to the user (not in the file):

```
SAVED: output/[filename].txt
VOICE CHECK: Passed/Failed
MOOD: [mood class] [bold if applicable]
NOTES: [Any context about choices made or flags to review]
```

## Rules Reminder

- Read brand-voice.md every single time. No shortcuts.
- One post per run. Never batch.
- If the user says "that doesn't sound like me," ask what feels off and adjust. Don't defend the draft.
- If you're unsure about a claim or number, flag it. Never guess.
