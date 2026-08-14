import { PROFILE } from "@/content/work";
import { TerrainPlate } from "./art/TerrainPlate";

/**
 * Calm and professional, but not colourless.
 *
 * The world is not presented here — only its corner, cropped by the right
 * edge, printed in full ink so the page has chromatic weight from the first
 * viewport. The visitor should register that something is out there before
 * being asked to care about it.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative min-h-[100svh] overflow-hidden"
    >
      {/* Desktop: the block bleeds off the right edge, cropped by the
          viewport. On narrow screens that same treatment lands directly
          behind the headline and destroys it, so mobile gets the plate in
          normal flow underneath the text instead — a different composition
          for a different shape of screen, not a squeezed one. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[14%] top-[6%] hidden w-[58%] rotate-[-6deg] lg:block"
      >
        <TerrainPlate
          ink="var(--color-forest)"
          label="BUILDER"
          numeral="PLATE I"
          className="h-auto w-full drop-shadow-[0_20px_44px_rgba(23,20,15,0.15)]"
        />
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-6 pb-32 pt-32 md:px-12">
        <div className="max-w-[33rem] lg:max-w-[37rem]">
          <div className="flex items-center gap-4">
            <span className="marginalia !text-[var(--color-ink)]">
              {PROFILE.name}
            </span>
            <span className="rule-h w-10" />
            <span className="marginalia">Colby College {PROFILE.gradYear}</span>
          </div>

          <h1 className="font-display mt-8 text-[2.55rem] font-normal leading-[1.05] text-[var(--color-ink)] sm:text-[3.3rem] lg:text-[4rem]">
            I build products at the intersection of{" "}
            <span className="ink" style={{ color: "var(--color-forest)" }}>
              software
            </span>
            ,{" "}
            <span className="ink" style={{ color: "var(--color-federal)" }}>
              AI
            </span>
            , and{" "}
            <span className="ink" style={{ color: "var(--color-madder)" }}>
              good decisions
            </span>
            .
          </h1>

          <p className="mt-7 max-w-[29rem] text-[1.0625rem] leading-[1.66] text-[var(--color-ink-2)]">
            Founding engineer at an AI radiology startup. Before that, payments
            infrastructure at L.L.Bean and agent-memory research at the Davis
            Institute. I like the problems that need both.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#builder"
              className="group ink inline-flex items-baseline gap-2 border-b-2 pb-1 text-[0.9375rem] font-medium transition-opacity hover:opacity-70"
              style={{
                color: "var(--color-madder)",
                borderColor: "var(--color-madder)",
              }}
            >
              See the work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[0.9375rem] text-[var(--color-ink-muted)] underline decoration-[var(--color-rule-strong)] underline-offset-[5px] transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-ink)]"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        {/* mobile-only plate, in flow */}
        <div aria-hidden="true" className="mt-14 -mr-10 lg:hidden">
          <TerrainPlate
            ink="var(--color-forest)"
            label="BUILDER"
            numeral="PLATE I"
            className="h-auto w-full"
          />
        </div>

        <div className="absolute inset-x-6 bottom-8 flex items-end justify-between md:inset-x-12">
          <p className="marginalia">
            Surveyed 2023—2026 · {PROFILE.location}
          </p>
          <p className="marginalia hidden sm:block">Three territories ↓</p>
        </div>
      </div>
    </section>
  );
}
