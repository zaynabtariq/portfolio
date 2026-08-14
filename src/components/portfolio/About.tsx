/**
 * Where the card motif stops being geometry and becomes the point.
 *
 * Every plate in this site is card-shaped — same proportions, same printed
 * border, same corner marks. Nothing has said why until here. The brief is
 * firm that this stays human and does not overreach into
 * "card games taught me everything about business", so the connection to
 * engineering is made once, lightly, and then dropped.
 */

const CARDS = [
  { ink: "var(--color-forest)", rotate: -14, x: -104, label: "I" },
  { ink: "var(--color-federal)", rotate: -1, x: 0, label: "II" },
  { ink: "var(--color-madder)", rotate: 13, x: 104, label: "III" },
];

export function About() {
  return (
    <section
      id="about"
      className="paper-grain relative border-t border-[var(--color-rule)] py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          <div className="lg:w-[52%]">
            <p className="marginalia">Away from the keyboard</p>

            <h2 className="font-display mt-6 text-[2.1rem] leading-[1.14] text-[var(--color-ink)] md:text-[2.7rem]">
              I grew up playing cards with my family.
            </h2>

            <div className="mt-7 max-w-[32rem] space-y-5 text-[1rem] leading-[1.7] text-[var(--color-ink-2)]">
              <p>
                Not for the winning, particularly. For the part where you can
                see maybe half of what matters, everyone at the table knows
                something you don't, and you have to commit anyway — and then
                find out.
              </p>
              <p>
                It's the closest thing I know to how the good engineering
                problems actually feel. The requirements are half-written, the
                constraint you didn't ask about is the one that decides it, and
                waiting for certainty is its own kind of answer.
              </p>
              <p>
                The games came from home, and they're still the fastest way back
                to it.
              </p>
            </div>

            <p className="marginalia mt-9">
              Every plate on this site is a card. That's why.
            </p>
          </div>

          {/* The hand. Same geometry as the survey plates — printed border,
              corner marks, plate numeral — so the rhyme lands visually before
              the text confirms it. */}
          <div className="w-full lg:w-[48%]">
            <svg
              viewBox="0 0 460 330"
              className="h-auto w-full max-w-[30rem]"
              role="img"
              aria-label="Three cards fanned out, printed in the same three inks as the three territory plates."
            >
              {CARDS.map((card) => (
                <g
                  key={card.label}
                  transform={`translate(${230 + card.x} 175) rotate(${card.rotate})`}
                >
                  {/* ochre plate, out of register */}
                  <rect
                    className="ink"
                    x="-63"
                    y="-101"
                    width="126"
                    height="196"
                    fill="var(--color-ochre)"
                    opacity="0.5"
                  />
                  {/* card face */}
                  <rect
                    x="-68"
                    y="-105"
                    width="126"
                    height="196"
                    fill="var(--color-paper)"
                    stroke="var(--color-ink)"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="-60"
                    y="-97"
                    width="110"
                    height="180"
                    stroke="var(--color-rule-strong)"
                    strokeWidth="1"
                    fill="none"
                  />
                  {/* the territory's contour, reduced to a single mark */}
                  <path
                    className="ink"
                    d="M-38 10c0-24 16-42 43-44 27-2 47 16 48 42 1 26-17 46-45 47-28 1-46-19-46-45Z"
                    fill={card.ink}
                    opacity="0.82"
                  />
                  <path
                    className="ink"
                    d="M-24 8c0-15 11-26 28-27 17-1 30 10 31 26 1 16-11 29-28 30-17 1-31-13-31-29Z"
                    stroke="var(--color-paper)"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <text
                    x="-52"
                    y="-78"
                    fill="var(--color-ink-2)"
                    fontFamily="var(--font-mono)"
                    fontSize="13"
                    letterSpacing="1.6"
                  >
                    {card.label}
                  </text>
                  {/* corner registration, same as the plates */}
                  <g stroke="var(--color-ink-faint)" strokeWidth="0.9">
                    <line x1="38" y1="76" x2="46" y2="76" />
                    <line x1="42" y1="72" x2="42" y2="80" />
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
