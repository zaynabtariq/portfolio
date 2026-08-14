---
name: portfolio-art-direction
description: >-
  Canonical art direction, visual language, motion/interaction rules, and content
  structure for Zaynab Tariq's personal portfolio — an illustrated three-island world
  (Builder, Research, Creativity) with a subtle card-game motif. Use this skill for any
  work on this portfolio's UI: building or restyling sections (hero, projects, case
  studies, experience, about, contact), choosing color, type, spacing, borders, or
  layout, writing headlines and microcopy, designing illustrations, SVG, or diagrams,
  adding scroll, parallax, hover, or card interactions, doing responsive/mobile or
  reduced-motion work, and reviewing or critiquing how the site looks. Use it even when
  the request sounds purely technical — "fix the spacing", "add a section", "make the
  hero better", "clean up this component", "why does this look off" — because every
  visual decision in this repo is an art-direction decision, and the defaults Claude
  would otherwise reach for are specifically what this portfolio is trying not to be.
---

# Portfolio Art Direction

This is the canonical design brief for Zaynab Tariq's portfolio. Treat it as a fixed
specification: read it before UI work, and do not edit these files to match code you
have already written. If implementation reveals a genuine conflict with the brief,
raise it in conversation and let Zaynab decide.

The portfolio should feel like a small, beautifully art-directed world built
specifically around her. It must establish technical credibility immediately, then
become progressively more personal, playful, and exploratory as the visitor scrolls.

**Target balance: 65% polished/professional, 35% playful/personal** — distributed
unevenly on purpose. Top of the site skews professional. Middle becomes exploratory.
Bottom becomes personal. Do not spread whimsy evenly down the page.

**Audience:** startup founders, engineering leaders, startup recruiters, early-stage
teams, technically sophisticated people.

**Desired impression:** creative, technical, product-minded, smart, warm, thoughtful,
ambitious, detail-oriented, slightly funny.

## Core Concept

The portfolio represents how Zaynab thinks as an explorable illustrated world with
three territories:

1. **Builder Island** — making things real
2. **Research Island** — understanding why things work
3. **Creativity Island** — asking "what if?"

These are dimensions of personality and work, **not skill categories**. Never create
"React Island", "Python Island", or "Machine Learning Island" — that collapses the
whole metaphor back into a tech list, which is exactly what the site is avoiding.

The central thematic idea:

> The interesting problems usually live between the islands.

This is why the connective tissue — bridges, paths, signals, the central strategy
area — carries as much meaning as the islands themselves. The site should communicate
that Zaynab's strongest work comes from combining engineering, research, product
judgment, and creativity.

## Secondary Motif: Cards and Strategy

Cards recur subtly because card games are personally meaningful to Zaynab. They stand
for strategy, competition, pattern recognition, deciding with incomplete information,
adapting to uncertainty, and family.

Cards should appear as elegant artifacts, transitions, interactive elements, or visual
metaphors — never as poker, gambling, casino, or card-game-app styling. The meaning
should be discovered gradually rather than explained up front; stating it early turns
a personal detail into a gimmick.

## Design Principles

1. Professional clarity comes before whimsy.
2. The metaphor should reveal something real about Zaynab.
3. The visual world should feel illustrated and authored, not like a 3D demo.
4. The site should reward exploration without requiring it.
5. The deeper the visitor scrolls, the more personal the experience can become.
6. Product and engineering judgment matter more than technology lists.
7. Every playful interaction must preserve usability.
8. Avoid generic AI-generated frontend aesthetics.
9. Mobile must be intentionally designed, not merely compressed.
10. Visual verification is required after meaningful UI changes.

## Non-Negotiables

These apply to every task, even a small one, and even if you read no reference file.
They exist because they are the defaults a model reaches for by reflex, and each one
would make the site look like any other engineer's portfolio:

* no purple or blue neon gradients, no glowing cards, no neon halos
* no glassmorphism as a system
* no giant border radii, no soft-rounded-SaaS as the default container
* no Bento-grid-as-identity, no repeating card grid for every section
* no developer-terminal aesthetics, matrix effects, fake terminal windows
* no typing intros or "Hello World" intros
* no tech-logo walls, no skill progress bars
* no floating 3D islands that read as a game demo, no unnecessary WebGL
* no excessive animation, no micro-interactions without narrative purpose
* no centered-container-with-three-cards as the answer to every section

Two positive rules that are equally non-negotiable: **respect
`prefers-reduced-motion`**, and **never let the metaphor obscure a project's name or
purpose** — a founder skimming for 30 seconds must still understand the work.

If the interface could plausibly belong to any software engineer, it is not specific
enough yet.

## Which Reference To Read

Load only what the task needs. Each file is long; reading all four by reflex wastes
context you will want for the actual design work.

| If you are working on | Read |
| --- | --- |
| Color, type, spacing, borders, shadows, texture, cards-as-objects, screenshots, technical diagrams, illustration style | `references/visual-language.md` |
| Islands, landmarks, the world reveal, the connection moment, the personal layer, what a territory contains | `references/world.md` |
| Motion, scroll storytelling, parallax, hover/focus, card behavior, project transitions, mobile interaction, reduced motion | `references/interaction-language.md` |
| What a section says, section order, project framing, case-study structure, navigation, copy and microcopy | `references/content-map.md` |
| Reviewing, critiquing, or auditing finished UI | `references/review-checklist.md` |

Most substantial tasks need two: usually `visual-language.md` plus whichever of
`world.md`, `interaction-language.md`, or `content-map.md` matches the work. Building a
new island section, for instance, needs visual + world + content; adding a hover state
to an existing landmark needs only interaction.

## Working Method

1. Inspect the existing UI before changing it.
2. Identify which part of the story this section belongs to.
3. Read the relevant reference files (see the table above).
4. Make deliberate design choices — decide, then justify, rather than defaulting.
5. Implement one coherent visual milestone at a time.
6. Run the site and look at it.
7. Critique the rendered result against `references/review-checklist.md`.
8. Fix what you find, then verify again.

Do not stop because the code compiles. Compiling is not the standard; the standard is
whether the result looks authored, memorable, and specific to Zaynab.

### Running and verifying

This is a **Vite + React 19 + TypeScript + Tailwind v4** project using **npm**.

```bash
npm run dev      # dev server, http://localhost:5173
npm run build    # tsc -b && vite build — catches type errors
npm run lint
```

Inspect the running site with the `claude-in-chrome` browser tools rather than assuming
a change worked. Check desktop and a mobile viewport, and check reduced motion when the
change involves animation. Interaction and animation bugs are close to invisible in
source and obvious on screen — which is the whole reason this step is mandatory.

## Where This Repo Currently Stands

The existing code was scaffolded from shadcn/ui plus magicui and does **not** yet
reflect this brief. You will encounter, in `src/`:

* `components/magicui/` — `typing-animation`, `shimmer-button`, `particles`,
  `border-beam`, `sparkles`, `grid-pattern`. These are on the avoid list above.
* `src/index.css` — a "vibrant modern palette" with a blue-violet secondary
  (`oklch(0.55 0.15 260)`), cyan accent, `--color-glass*` tokens, and shimmer/float
  animations. None of the warm ivory/wine/forest/ochre system exists yet.

Treat these as the starting point being replaced, not as house style to match. When you
touch a component that depends on them, migrate it toward this brief rather than
extending the existing pattern.
