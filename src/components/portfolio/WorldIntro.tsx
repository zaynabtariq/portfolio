import { TERRITORIES } from "@/content/work";

const INK: Record<string, string> = {
  builder: "var(--color-forest)",
  research: "var(--color-federal)",
  creativity: "var(--color-madder)",
};

/**
 * The handoff from résumé-legible identity into the world.
 *
 * Deliberately short. The brief warns against explaining every island in a
 * paragraph, so this establishes only that the work is surveyed in three
 * territories and lets the plates themselves do the rest.
 */
export function WorldIntro() {
  return (
    <section className="paper-grain relative border-t border-[var(--color-rule)] py-20 md:py-28">
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="max-w-[42rem]">
          <p className="marginalia">The survey</p>
          <p className="font-display mt-6 text-[1.75rem] leading-[1.35] text-[var(--color-ink)] md:text-[2.15rem]">
            I've never been only an engineer, only a researcher, or only a
            product person. The work sorts into three territories — and the
            parts I'm proudest of sit on the routes between them.
          </p>
        </div>

        <ol className="mt-14 grid gap-px border border-[var(--color-rule-strong)] bg-[var(--color-rule-strong)] sm:grid-cols-3">
          {TERRITORIES.map((territory) => (
            <li
              key={territory.id}
              className="bg-[var(--color-paper)] p-6 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="ink font-mono text-[0.8125rem] tracking-[0.18em]"
                  style={{ color: INK[territory.id] }}
                >
                  {territory.plate}
                </span>
                <h3 className="font-display text-[1.4rem] text-[var(--color-ink)]">
                  {territory.name}
                </h3>
              </div>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-[var(--color-ink-2)]">
                {territory.statement}
              </p>
              <a
                href={`#${territory.id}`}
                className="marginalia mt-5 inline-block underline underline-offset-4 transition-colors hover:!text-[var(--color-madder)]"
              >
                {territory.landmarks.length} landmarks →
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
