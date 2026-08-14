import { useEffect, useRef } from "react";
import type { Landmark } from "@/content/work";

/**
 * The opened plate.
 *
 * A landmark is a small plate pinned to the terrain; opening it lifts that
 * plate off the sheet and enlarges it. The panel keeps the printed frame and
 * marginalia so it reads as the same object, not a generic modal — but the
 * content inside turns calm and structured, because the brief is explicit
 * that a visitor should never have to decode the metaphor to read the work.
 */

interface CaseStudyProps {
  landmark: Landmark | null;
  ink: string;
  onClose: () => void;
}

export function CaseStudy({ landmark, ink, onClose }: CaseStudyProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Focus moves into the panel on open and the page behind stops scrolling.
     Escape closes. Without this the plate metaphor would cost keyboard users
     their place on the map. */
  useEffect(() => {
    if (!landmark) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [landmark, onClose]);

  if (!landmark) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* The sheet behind dims to ink rather than black — the panel is lit
          paper on a table, not a dialog floating in a void. */}
      <button
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[var(--color-ink)]/35"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="paper-grain relative flex h-full w-full max-w-[46rem] flex-col overflow-y-auto border-l-2 border-[var(--color-ink)] bg-[var(--color-paper)] shadow-[-24px_0_60px_rgba(23,20,15,0.22)]"
      >
        {/* printed header band, in the territory ink */}
        <div
          className="ink sticky top-0 z-10 flex items-center justify-between px-7 py-4 md:px-10"
          style={{ backgroundColor: ink }}
        >
          <p
            className="marginalia !text-[var(--color-paper)]"
            style={{ opacity: 0.85 }}
          >
            {landmark.org} · {landmark.year}
          </p>
          <button
            ref={closeRef}
            onClick={onClose}
            className="marginalia !text-[var(--color-paper)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Close
          </button>
        </div>

        <div className="px-7 pb-20 pt-9 md:px-10">
          <p className="marginalia">{landmark.role}</p>

          <h2
            id="case-study-title"
            className="font-display mt-4 text-[2.1rem] leading-[1.08] text-[var(--color-ink)] md:text-[2.7rem]"
          >
            {landmark.name}
          </h2>

          <p className="mt-5 max-w-[38rem] text-[1.0625rem] leading-[1.6] text-[var(--color-ink-2)]">
            {landmark.summary}
          </p>

          <div className="rule-h my-9" />

          <section>
            <h3 className="marginalia">What it is</h3>
            <p className="mt-4 max-w-[40rem] text-[0.9875rem] leading-[1.72] text-[var(--color-ink-2)]">
              {landmark.detail}
            </p>
          </section>

          <section className="mt-10">
            <h3 className="marginalia">What shipped</h3>
            <ul className="mt-5 space-y-3.5">
              {landmark.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="ink mt-[0.45rem] h-[7px] w-[7px] shrink-0"
                    style={{ backgroundColor: ink }}
                  />
                  <span className="text-[0.9375rem] leading-[1.6] text-[var(--color-ink-2)]">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h3 className="marginalia">Built with</h3>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {landmark.stack.map((tech) => (
                <li
                  key={tech}
                  className="font-mono text-[0.75rem] tracking-[0.04em] text-[var(--color-ink-muted)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {landmark.publication ? (
            <a
              href={landmark.publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-baseline gap-2 border-b border-[var(--color-madder)] pb-1 text-[0.9375rem] font-medium text-[var(--color-madder)] transition-opacity hover:opacity-70"
            >
              {landmark.publication.title}
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
