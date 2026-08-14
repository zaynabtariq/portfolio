import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/content/work";

const LINKS = [
  { label: "Work", href: "#builder" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
] as const;

/**
 * A title block rather than a floating pill. It sits on the paper, separated
 * by a printed hairline that only appears once you've left the hero — so the
 * first viewport stays completely uninterrupted.
 */
export function Nav() {
  const [departed, setDeparted] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setDeparted(window.scrollY > 120);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        departed
          ? "border-b border-[var(--color-rule)] bg-[var(--color-paper)]/92 backdrop-blur-[2px]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-baseline justify-between gap-4 px-6 py-5 md:px-12">
        <a
          href="#top"
          className="marginalia shrink-0 !text-[var(--color-ink)] transition-colors hover:!text-[var(--color-ochre)]"
        >
          {/* The full name needs room the 390px viewport doesn't have. */}
          <span className="hidden sm:inline">Z. Tariq</span>
          <span className="sm:hidden">ZT</span>
        </a>

        <div className="flex items-baseline gap-4 sm:gap-9">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="marginalia !text-[var(--color-ink-muted)] transition-colors hover:!text-[var(--color-ochre)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="marginalia !text-[var(--color-ochre)] underline decoration-[var(--color-ochre)]/35 underline-offset-[5px] transition-colors hover:decoration-[var(--color-ochre)]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
