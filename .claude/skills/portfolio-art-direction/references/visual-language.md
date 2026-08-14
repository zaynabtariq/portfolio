# Visual Language

## Contents

- [Visual Personality](#visual-personality)
- [Professional-to-Playful Ratio](#professional-to-playful-ratio)
- [Color](#color)
- [Typography](#typography)
- [Layout](#layout)
- [Cards](#cards)
- [Project Case Studies](#project-case-studies)
- [Illustrations](#illustrations)
- [Texture](#texture)
- [Borders and Radius](#borders-and-radius)
- [Shadows](#shadows)
- [Screenshots and Product UI](#screenshots-and-product-ui)
- [Technical Visuals](#technical-visuals)
- [Humor and Microcopy](#humor-and-microcopy)

For auditing finished UI, see `review-checklist.md`.

---

The portfolio should feel creative, technical, warm, sophisticated, and unmistakably designed.

The visual identity should sit somewhere between:

* editorial illustration
* product design
* technical documentation
* a miniature personal world
* a beautifully designed strategy game artifact

It should not look like a generic developer portfolio.

## Visual Personality

Desired feeling:

* thoughtful
* intelligent
* warm
* detailed
* playful
* slightly whimsical
* controlled
* polished
* curious
* personal

The design should feel handcrafted without looking messy.

## Professional-to-Playful Ratio

Target:

65% professional
35% playful

The top of the site should skew more professional.

The middle can become more exploratory.

The bottom can become more personal.

Do not distribute whimsy evenly across the page.

## Color

Start with a warm, restrained palette.

Suggested family:

* warm ivory / cream
* near-black
* deep wine / burgundy
* forest green
* muted blue
* warm ochre / terracotta
* taupe / gray-brown

Example starting tokens:

```css
--background: #F7F3EB;
--surface: #EFE8DC;
--text: #181714;
--muted: #756F66;
--wine: #7B3045;
--forest: #365241;
--blue: #547082;
--ochre: #B87943;
```

These are not mandatory exact values.

Refine them based on the actual composition.

Rules:

* do not use every accent color equally
* establish a dominant neutral system
* use island colors as contextual accents
* keep saturation restrained
* avoid rainbow aesthetics
* avoid generic purple gradients
* avoid large gradient blobs unless extremely subtle and intentional

Possible mapping:

* Builder: forest / warm industrial neutrals
* Research: muted blue / cool gray
* Creativity: wine / ochre / terracotta

The overall universe should still feel cohesive.

## Typography

Typography should do significant emotional work.

Use:

* one expressive editorial serif
* one highly readable contemporary sans-serif
* optional monospace only for small technical metadata

The serif should be used for:

* storytelling headlines
* emotional statements
* section intros
* key ideas

The sans-serif should be used for:

* body text
* project descriptions
* navigation
* technical content
* buttons
* UI

Monospace may be used for:

* labels
* dates
* technical tags
* metadata

Do not overuse monospace.

Avoid obvious default developer-font combinations.

Do not automatically choose Inter just because it is safe.

Typography should feel selected, not inherited.

Pay attention to:

* line length
* optical balance
* rhythm
* spacing
* title wrapping
* letter spacing
* hierarchy
* contrast

Avoid giant headlines purely for trendiness.

Large type should serve the composition.

## Layout

Use a mix of:

* strong whitespace
* asymmetrical composition
* full-width storytelling sections
* editorial layouts
* irregular illustration placement
* structured technical content

Avoid making every section a centered container with three cards.

Do not rely on one repeated component pattern for the whole site.

The world sections can feel organic.

The case-study sections should become more structured.

This contrast is useful.

## Cards

Cards should feel like physical artifacts rather than SaaS rectangles.

Possible qualities:

* subtle paper texture
* printed borders
* restrained shadows
* custom symbols
* editorial typography
* tactile spacing
* layered illustrations
* slightly varied orientation

Do not create standard poker cards as the main identity.

Do not use casino styling.

Do not make every piece of content a card.

Cards should be special enough that they retain meaning.

## Project Case Studies

When opening a project, shift toward clarity.

The case study may be visually simpler than the island.

Use:

* strong typography
* screenshots
* diagrams
* restrained annotation
* clear impact statements
* architecture visuals where useful

The user should never have to decipher the metaphor to understand the work.

## Illustrations

Illustration should feel:

* original
* editorial
* slightly imperfect
* detailed enough to reward inspection
* simple enough to load quickly

Prefer:

* SVG
* layered vector shapes
* CSS
* textured geometric shapes
* linework
* restrained gradients
* soft shadow

Avoid:

* random stock art
* corporate flat illustration
* obvious AI-generated fantasy art
* character-heavy scenes
* generic coding imagery
* glossy 3D renders

## Texture

Use texture carefully.

Possible techniques:

* very subtle paper grain
* fine noise
* tiny line patterns
* map-like marks
* ink-like edges
* restrained hand-drawn details

Texture should provide atmosphere, not reduce readability.

## Borders and Radius

Avoid excessive rounded rectangles.

Not everything should have:

```css
border-radius: 24px;
```

Use different treatments intentionally:

* sharp editorial containers
* small-radius technical panels
* custom card edges
* irregular illustration masks

Do not use "soft rounded SaaS UI" as the default.

## Shadows

Use shadows to communicate physical depth.

Prefer:

* soft ambient shadows
* layered depth
* subtle object shadows
* card lift

Avoid:

* giant blurry glowing shadows
* neon halos
* shadow on every container

## Screenshots and Product UI

Project screenshots should feel integrated into the composition.

Do not just drop screenshots into generic browser mockups.

Possible treatments:

* crop into world landmark
* pin like an artifact
* show alongside annotation
* layer against diagrams
* reveal in case-study transition

Use browser chrome only where it adds context.

## Technical Visuals

Technical diagrams should feel native to the site.

Use:

* clean SVG
* restrained color
* minimal labels
* crisp hierarchy
* clear arrows
* map-like or research-like layouts

Avoid generic diagram libraries if they clash with the visual language.

## Humor and Microcopy

Humor should be subtle.

Good tone:

* dry
* understated
* self-aware
* specific

Example level:

* "this looked simpler on the whiteboard"
* "the edge cases had opinions"

Do not make every project joke-y.

One or two human moments per major section is enough.

## Reviewing the Result

The generic-AI audit and the visual quality standard now live in `review-checklist.md`,
alongside the interaction audit and browser verification steps, so that a review pass
can load one file instead of three. Read it after implementing a visual milestone.
