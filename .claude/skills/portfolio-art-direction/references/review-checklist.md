# Review Checklist

Use this when critiquing rendered UI — after implementing a milestone, or when asked
whether something looks right. It consolidates the audits that would otherwise require
loading `visual-language.md` and `interaction-language.md` in full.

Review the **running site**, not the source. Most of what fails here is invisible in
code and obvious on screen.

## Contents

- [Before You Start](#before-you-start)
- [Generic-AI Audit](#generic-ai-audit)
- [Visual Quality Standard](#visual-quality-standard)
- [Interaction Quality Audit](#interaction-quality-audit)
- [Browser Verification Pass](#browser-verification-pass)
- [Reporting Findings](#reporting-findings)

## Before You Start

```bash
npm run dev    # http://localhost:5173
```

Open it with the `claude-in-chrome` tools. Look at the actual composition before
forming an opinion from the markup.

## Generic-AI Audit

Actively hunt for these. They are the failure mode this portfolio exists to avoid, and
they creep in one component at a time:

* purple gradients
* glowing cards
* repetitive card grids
* oversized pills
* generic dashboard styling
* overused glass
* default iconography
* generic hero layouts
* giant round avatars
* meaningless floating blobs
* fake terminal windows
* too much center alignment
* every section having the same structure

The summary test: **if the interface could plausibly belong to any software engineer,
it is not specific enough.**

## Visual Quality Standard

Ask directly, and answer honestly rather than charitably:

* does this look authored?
* is the composition memorable?
* does typography have personality?
* does the world feel coherent?
* is there enough whitespace?
* is any section too template-like?
* do the colors feel intentional?
* are the playful details meaningful?
* would a founder still understand the work quickly?

Also check the things that are easy to miss at a glance: line length, optical balance,
rhythm, title wrapping, letter spacing, hierarchy, and contrast.

If the answer to any of these is weak, refine before moving on.

## Interaction Quality Audit

For each interaction on the page:

* does this interaction communicate something?
* does it make the page easier or more enjoyable?
* is it subtle enough?
* can I still skim the page?
* does it work with keyboard and touch?
* does it feel coherent with the rest of the world?
* would removing it improve clarity?

**If removing it improves the design, remove it.** Every interaction should reveal
information, create narrative progression, reinforce the world metaphor, make an object
feel tactile, reward exploration, establish hierarchy, or communicate relationships. An
interaction serving none of those is decoration, and decoration accumulates into the
"collection of animation demos" feel the brief rejects.

Also confirm the layered structure still holds:

* Layer 1 — a recruiter can skim quickly
* Layer 2 — an interested visitor can open projects
* Layer 3 — a curious visitor discovers interactive details
* Layer 4 — a visitor who reaches the end learns something personal

No deeper layer may be required to use the one above it.

## Browser Verification Pass

Do not assume an animation works because the code is logically correct.

1. run the site
2. test with mouse
3. test keyboard navigation
4. test a mobile viewport
5. inspect scroll behavior — no hijacking, no forced snap, no frozen sections
6. test project open/close
7. test cards
8. test reduced motion
9. check for animation jitter
10. check for layout shift

### Reduced motion

Under `prefers-reduced-motion: reduce`, confirm parallax is disabled, large camera
movement is gone, card tilt is off, fades are shortened — and **all information is still
present**. The site must remain visually good without animation, not merely functional.

### Mobile

Confirm mobile was designed rather than compressed: reduced parallax, simplified world
movement, vertical chapter transitions, swipe/tap equivalents for anything drag- or
hover-dependent, and no tiny map targets.

## Reporting Findings

Lead with the most damaging problem rather than the easiest to describe. For each
finding, name the specific element, say which principle it violates, and propose the
concrete fix — "the Projects grid is three identical rounded cards, which is
Bento-grid-as-identity; break the rhythm by making RadPilot a full-width landmark with
the other two asymmetric beneath it" is useful in a way that "spacing feels off" is not.

Then fix what you found and verify again.
