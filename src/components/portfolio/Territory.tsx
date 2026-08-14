import { useState } from "react";
import type { Landmark, Territory as TerritoryData } from "@/content/work";
import { TerrainPlate } from "./art/TerrainPlate";
import { projectToPercent } from "./art/projection";
import { LandmarkMark } from "./art/LandmarkMark";
import { CaseStudy } from "./CaseStudy";

const INK: Record<string, string> = {
  builder: "var(--color-forest)",
  research: "var(--color-federal)",
  creativity: "var(--color-madder)",
};

interface TerritoryProps {
  data: TerritoryData;
  /** Flips the composition so consecutive territories don't repeat a rhythm. */
  mirrored?: boolean;
}

export function Territory({ data, mirrored = false }: TerritoryProps) {
  const [open, setOpen] = useState<Landmark | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const ink = INK[data.id];

  return (
    <section
      id={data.id}
      className="paper-grain relative border-t border-[var(--color-rule)] py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div
          className={`flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20 ${
            mirrored ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* ---------- the written half ---------- */}
          <div className="lg:w-[38%]">
            <div className="flex items-baseline gap-4">
              <span
                className="ink font-mono text-[0.8125rem] tracking-[0.18em]"
                style={{ color: ink }}
              >
                PLATE {data.plate}
              </span>
              <span className="rule-h w-12" />
              <span className="marginalia">{data.name}</span>
            </div>

            <h2 className="font-display mt-6 text-[2.3rem] leading-[1.08] text-[var(--color-ink)] md:text-[3rem]">
              {data.statement}
            </h2>

            <p className="mt-6 max-w-[30rem] text-[1rem] leading-[1.68] text-[var(--color-ink-2)]">
              {data.blurb}
            </p>

            {/* An index of what is on the plate. This is the accessible,
                skimmable route to the same content the map offers — a
                recruiter never has to touch the illustration. */}
            {/* The legend. Numbers key this list to the pins on the block —
                a map key, which is both the honest convention and the reason
                the pins don't need to carry colliding name labels. */}
            <ul className="mt-9 border-t border-[var(--color-rule)]">
              {data.landmarks.map((landmark, i) => {
                const isActive = hovered === landmark.slug;
                return (
                  <li key={landmark.slug}>
                    <button
                      onClick={() => setOpen(landmark)}
                      onMouseEnter={() => setHovered(landmark.slug)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(landmark.slug)}
                      onBlur={() => setHovered(null)}
                      className="group flex w-full items-baseline gap-4 border-b border-[var(--color-rule)] py-4 text-left transition-colors hover:bg-[var(--color-paper-2)]"
                    >
                      <span
                        aria-hidden="true"
                        className="ink mt-0.5 flex h-[1.375rem] w-[1.375rem] shrink-0 items-center justify-center font-mono text-[0.6875rem] transition-colors"
                        style={{
                          backgroundColor: isActive ? ink : "transparent",
                          color: isActive ? "var(--color-paper)" : ink,
                          border: `1px solid ${ink}`,
                        }}
                      >
                        {i + 1}
                      </span>

                      <span className="flex-1">
                        <span
                          className="block text-[1.0625rem] leading-tight text-[var(--color-ink)] transition-colors"
                          style={{ color: isActive ? ink : undefined }}
                        >
                          {landmark.name}
                        </span>
                        <span className="mt-1 block text-[0.8125rem] text-[var(--color-ink-muted)]">
                          {landmark.org}
                        </span>
                      </span>

                      <span className="marginalia shrink-0">{landmark.year}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-[var(--color-ink-faint)] transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: isActive ? ink : undefined }}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- the surveyed half ---------- */}
          <div className="relative lg:w-[62%]">
            <div className="relative">
              <TerrainPlate
                ink={ink}
                label={data.name.toUpperCase()}
                numeral={`PLATE ${data.plate}`}
                className="h-auto w-full drop-shadow-[0_16px_36px_rgba(23,20,15,0.13)]"
              />

              {/* Landmarks sit in percentage space over the plate so they
                  track the illustration at every width. */}
              {data.landmarks.map((landmark, i) => {
                const isActive = hovered === landmark.slug;
                const { left, top } = projectToPercent(landmark.x, landmark.y);
                return (
                  <button
                    key={landmark.slug}
                    onClick={() => setOpen(landmark)}
                    onMouseEnter={() => setHovered(landmark.slug)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(landmark.slug)}
                    onBlur={() => setHovered(null)}
                    aria-label={`${landmark.name}, ${landmark.org} — open case study`}
                    className="absolute hidden flex-col items-center gap-1 sm:flex"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: `translate(-50%, -100%) scale(${isActive ? 1.06 : 1})`,
                      transition: "transform 260ms cubic-bezier(0.22,1,0.36,1)",
                      zIndex: isActive ? 3 : 2,
                    }}
                  >
                    {/* The name rides above the pin only while it is the
                        active one, so five pins can share a small plateau
                        without their labels colliding. The numbered legend
                        beside the block is the always-available route to
                        the same names. */}
                    <span
                      className="pointer-events-none absolute bottom-full mb-1 whitespace-nowrap px-1.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] transition-opacity duration-200"
                      style={{
                        opacity: isActive ? 1 : 0,
                        backgroundColor: "var(--color-ink)",
                        color: "var(--color-paper)",
                      }}
                    >
                      {landmark.name}
                    </span>

                    <svg
                      viewBox="0 0 48 48"
                      className="h-10 w-10 md:h-12 md:w-12"
                      aria-hidden="true"
                    >
                      <LandmarkMark
                        form={landmark.form}
                        ink={ink}
                        active={isActive}
                      />
                    </svg>

                    <span
                      aria-hidden="true"
                      className="ink flex h-[1.25rem] w-[1.25rem] items-center justify-center font-mono text-[0.625rem] transition-colors"
                      style={{
                        backgroundColor: isActive
                          ? "var(--color-madder)"
                          : "var(--color-paper)",
                        color: isActive ? "var(--color-paper)" : ink,
                        border: `1px solid ${isActive ? "var(--color-madder)" : ink}`,
                      }}
                    >
                      {i + 1}
                    </span>
                  </button>
                );
              })}

              {/* One ambient element per plate, sited on the block itself so
                  it reads as a survey marker rather than a stray dot. */}
              <span
                aria-hidden="true"
                className="beacon absolute h-1.5 w-1.5 rounded-full"
                style={{
                  ...(() => {
                    const p = projectToPercent(96, 6);
                    return { left: `${p.left}%`, top: `${p.top}%` };
                  })(),
                  backgroundColor: "var(--color-madder)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CaseStudy landmark={open} ink={ink} onClose={() => setOpen(null)} />
    </section>
  );
}
