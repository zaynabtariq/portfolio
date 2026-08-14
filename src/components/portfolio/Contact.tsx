import { PROFILE } from "@/content/work";

const LINKS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "GitHub", value: "github.com/zaynabtariq", href: PROFILE.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zaynabtariq",
    href: PROFILE.linkedin,
  },
] as const;

/**
 * Simple by instruction. The brief asks the last section to be plain and to
 * offer the four ways in — no form, because a form is one more thing between
 * a founder and an email they were already willing to send.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="paper-grain relative border-t-2 border-[var(--color-ink)] py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="marginalia">Last plate</p>
            <h2 className="font-display mt-6 max-w-[20ch] text-[2.3rem] leading-[1.1] text-[var(--color-ink)] md:text-[3.1rem]">
              Want to build something interesting?
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1rem] leading-[1.68] text-[var(--color-ink-2)]">
              I'm finishing at Colby in May 2026 and looking for engineering
              work where the product questions and the technical ones are the
              same question. {PROFILE.location}, or elsewhere.
            </p>
          </div>

          <ul className="w-full shrink-0 lg:w-[26rem]">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-baseline justify-between gap-6 border-b border-[var(--color-rule)] py-4 transition-colors hover:bg-[var(--color-paper-2)]"
                >
                  <span className="marginalia">{link.label}</span>
                  <span className="flex items-baseline gap-2 text-[0.9375rem] text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-madder)]">
                    {link.value}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-rule)] pt-6">
          <p className="marginalia">
            {PROFILE.name} · Surveyed {new Date().getFullYear()}
          </p>
          <p className="marginalia">Fraunces · Instrument Sans · IBM Plex Mono</p>
        </div>
      </div>
    </section>
  );
}
