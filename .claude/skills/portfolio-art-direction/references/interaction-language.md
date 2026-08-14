# Interaction Language

## Contents

- [Core Principle](#core-principle)
- [Scroll Storytelling](#scroll-storytelling)
- [World Entry](#world-entry)
- [Island Navigation](#island-navigation)
- [Landmark Interaction](#landmark-interaction)
- [Card Interaction](#card-interaction)
- [Connection Animation](#connection-animation)
- [Parallax](#parallax)
- [Micro-Interactions](#micro-interactions)
- [Environmental Animation](#environmental-animation)
- [Project Transitions](#project-transitions)
- [Mobile Interaction](#mobile-interaction)
- [Reduced Motion](#reduced-motion)
- [Performance](#performance)

For verifying interactions in the browser and auditing them, see `review-checklist.md`.

---

Motion and interaction should create storytelling, tactility, and curiosity.

The site should not feel like a collection of animation demos.

Every interaction should serve at least one of these purposes:

* reveal information
* create narrative progression
* reinforce the world metaphor
* make an object feel tactile
* reward exploration
* establish hierarchy
* communicate relationships

If an interaction serves none of these purposes, remove it.

## Core Principle

The site should work in layers.

Layer 1:
A recruiter can skim quickly.

Layer 2:
An interested visitor can open projects.

Layer 3:
A curious visitor discovers interactive details.

Layer 4:
A visitor who reaches the end understands more about Zaynab personally.

No deeper layer should be required to use the previous one.

## Scroll Storytelling

Scrolling is the primary narrative mechanism.

Use it to:

* transition from hero into the world
* reveal islands
* shift focus between territories
* create parallax
* draw connections
* reveal project landmarks
* bring cards into view
* eventually pull back to show the whole system

Do not hijack scrolling.

Avoid:

* forced snap scrolling
* long frozen scroll sections
* excessive pinned sections
* motion that makes reading difficult
* scroll velocity tricks

The user should always feel in control.

## World Entry

The transition from hero into the world is one of the most important interactions.

Possible sequence:

1. hero text remains stable
2. subtle world details appear near the fold
3. as user scrolls, environment expands
4. typography shifts upward or fades
5. world gains depth
6. user arrives at the first island

This should feel cinematic but fast.

Do not create a long intro animation before the user can interact.

## Island Navigation

The site may use:

* scroll progression
* clickable landmarks
* subtle map navigation
* section links
* visual bridges

The user must always have conventional navigation available.

Do not require free-roam dragging around a map.

The world is a storytelling layer, not the sole navigation system.

## Landmark Interaction

Projects represented as landmarks can respond to hover or focus.

Possible interactions:

* subtle lift
* light pulse
* small environmental movement
* name label appears
* nearby object animates
* shadow changes
* scale changes by a few percent

Clicking should open:

* a case-study overlay
* slide-over
* modal
* or dedicated page

The transition should visually connect the landmark to the detailed project.

Do not use distracting hover effects on every decorative object.

## Card Interaction

Cards should feel tactile.

Potential behaviors:

* cursor tilt
* slight lift on hover
* drag within a controlled region
* flip
* stack
* fan
* slide into place on scroll
* reveal hidden content

Use one or two core card behaviors consistently.

Do not implement every possible card mechanic.

### Card Tilt

Keep tilt subtle.

Avoid extreme 3D perspective.

The goal is physicality, not spectacle.

### Dragging

If cards are draggable:

* constrain movement
* make drag optional
* preserve normal click behavior
* reset or settle gracefully
* support touch
* do not hide content behind drag

### Flip

Flip should reveal meaningful secondary information.

Examples:

Front:
Builder

Back:
short idea about making systems real

or:

Front:
project visual

Back:
decision / lesson / personal note

Do not flip cards just because flipping is fun.

## Connection Animation

When showing the relationship between islands, consider drawing:

* paths
* bridges
* signals
* lines
* routes

The animation can build progressively as the user reaches the connection section.

This should reinforce:

"The interesting problems usually live between the islands."

Prefer SVG path animation or subtle reveal.

Avoid neon network effects.

## Parallax

Use parallax lightly.

Good candidates:

* foreground foliage
* island layers
* clouds
* cards
* background textures
* atmospheric objects

Do not make text parallax excessively.

Keep movement small.

Too much depth movement will make the experience feel like a demo.

## Micro-Interactions

Useful micro-interactions:

* nav underline movement
* button press
* card lift
* landmark response
* image reveal
* diagram line drawing
* subtle icon transition
* tiny environmental animation

Avoid constant ambient movement everywhere.

The world should occasionally be still.

Stillness helps the moving elements matter more.

## Environmental Animation

Potential small environmental motion:

* rotating antenna
* blinking tiny light
* moving signal
* smoke puff
* page flutter
* tiny conveyor
* drifting cloud
* telescope movement
* card edge shifting

Keep these slow and restrained.

Never animate enough elements that the page feels restless.

## Project Transitions

Opening a project should feel connected to the world.

Possible methods:

* landmark expands into case-study image
* panel grows from project location
* card becomes project header
* illustration fades into technical diagram

The detailed project view should quickly become readable and calm.

Do not preserve heavy world animation inside long-form technical content.

## Mobile Interaction

On mobile:

* reduce parallax
* simplify world movement
* use vertical chapter transitions
* convert draggable cards to swipeable or tappable interactions
* ensure hover-dependent content has tap/focus equivalents
* avoid tiny map targets

Mobile should feel intentional.

Do not reproduce desktop interaction complexity at smaller scale.

## Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Provide a coherent version of the site without major transitions.

Reduced motion should:

* disable parallax
* remove large camera movement
* remove card tilt
* shorten fades
* preserve all information

The site must remain visually good without animation.

## Performance

Prefer animation of:

* transform
* opacity
* SVG stroke
* masks

Avoid frequently animating:

* layout
* width
* height
* expensive filters
* giant blurs

Do not use WebGL unless it materially improves the storytelling.

If CSS/SVG can produce the same emotional effect, prefer them.

## Verifying the Result

Browser verification steps and the interaction quality audit now live in
`review-checklist.md`, alongside the visual audits, so that a review pass can load one
file instead of three. Read it after implementing meaningful interaction — and do not
assume an animation works because the code is logically correct.
