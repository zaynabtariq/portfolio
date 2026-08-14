import { EXPERIENCE, PROFILE } from "@/content/work";

/**
 * The scannable view. No metaphor, no illustration — the brief is explicit
 * that this section exists for a recruiter reading quickly, and that it
 * should not repeat the case-study content.
 */
export function Experience() {
  return (
    <section
      id="experience"
      className="paper-grain relative border-t border-[var(--color-rule)] py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-[2rem] text-[var(--color-ink)] md:text-[2.5rem]">
            Experience
          </h2>
          <p className="marginalia">
            {PROFILE.study} &amp; Economics · GPA 4.0
          </p>
        </div>

        <div className="mt-12 border-t border-[var(--color-ink)]">
          {EXPERIENCE.map((role) => (
            <article
              key={`${role.org}-${role.title}`}
              className="grid max-w-[62rem] gap-4 border-b border-[var(--color-rule)] py-8 md:grid-cols-[13rem_1fr] md:gap-10 md:py-10"
            >
              <div>
                <p className="marginalia">{role.dates}</p>
                <p className="mt-2 text-[0.875rem] text-[var(--color-ink-muted)]">
                  {role.location}
                </p>
              </div>

              <div>
                <h3 className="text-[1.1875rem] leading-snug text-[var(--color-ink)]">
                  {role.title}
                </h3>
                <p
                  className="ink mt-1 text-[0.9375rem]"
                  style={{ color: "var(--color-forest)" }}
                >
                  {role.org}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="ink mt-[0.5rem] h-[5px] w-[5px] shrink-0"
                        style={{ backgroundColor: "var(--color-ochre)" }}
                      />
                      <span className="text-[0.9375rem] leading-[1.62] text-[var(--color-ink-2)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
