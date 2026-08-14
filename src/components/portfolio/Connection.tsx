import { useEffect, useRef, useState } from "react";

/**
 * The pull-back.
 *
 * Having walked all three plates, the visitor sees them as one sheet with
 * routes running between them. The routes draw in when the section arrives —
 * the one place in the site where an animation is carrying the argument
 * rather than decorating it, because the claim is literally about connection.
 */

/* Three territories, three crossings — the routes are drawn first so the
   blocks occlude them, which is what makes the paths read as running through
   the terrain rather than floating over it. */
const BLOCKS = [
  { cx: 132, cy: 158, ink: "var(--color-forest)", label: "I" },
  { cx: 296, cy: 104, ink: "var(--color-federal)", label: "II" },
  { cx: 424, cy: 206, ink: "var(--color-madder)", label: "III" },
];

const ROUTES = [
  "M132 158C182 100 240 86 296 104",
  "M296 104C356 124 398 162 424 206",
  /* This one bows below the blocks so it stays visible — a route hidden
     behind the terrain would undercut the whole claim of the section. */
  "M424 240C360 300 190 296 118 190",
];

const S = 62; // half-width of a block's top face
const H = 26; // half-depth of the top face
const D = 30; // wall height

function blockFaces(cx: number, cy: number) {
  return {
    top: `${cx - S},${cy} ${cx},${cy - H} ${cx + S},${cy} ${cx},${cy + H}`,
    left: `${cx - S},${cy} ${cx},${cy + H} ${cx},${cy + H + D} ${cx - S},${cy + D}`,
    right: `${cx},${cy + H} ${cx + S},${cy} ${cx + S},${cy + D} ${cx},${cy + H + D}`,
  };
}

export function Connection() {
  const ref = useRef<HTMLElement>(null);

  /* Reduced-motion readers start at the finished state rather than being
     animated into it, so the routes are simply already drawn. Resolved in
     the initialiser so no effect has to write state on mount. */
  const [drawn, setDrawn] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || drawn) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [drawn]);

  return (
    <section
      id="connection"
      ref={ref}
      className="paper-grain relative border-t border-[var(--color-rule)] bg-[var(--color-paper-2)] py-24 md:py-32"
    >
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="lg:w-[42%]">
            <p className="marginalia">The whole sheet</p>
            <h2 className="font-display mt-6 text-[2.2rem] leading-[1.12] text-[var(--color-ink)] md:text-[2.9rem]">
              The interesting problems usually live between the islands.
            </h2>
            <p className="mt-7 max-w-[30rem] text-[1rem] leading-[1.68] text-[var(--color-ink-2)]">
              The agent-memory research became a retrieval system someone had to
              operate. The radiology capture tool only works because the
              inference pipeline and the interface were designed against each
              other. The rewards engine in Ada is a research question wearing a
              product's clothes.
            </p>
            <p className="mt-5 max-w-[30rem] text-[1rem] leading-[1.68] text-[var(--color-ink-2)]">
              I'm most useful where those meet.
            </p>
          </div>

          <div className="w-full lg:w-[58%]">
            <svg
              viewBox="0 0 540 290"
              className="h-auto w-full"
              role="img"
              aria-label="The three territories — Builder, Research and Creativity — joined by routes running between them."
            >
              {/* routes first, so the blocks occlude them */}
              <g stroke="var(--color-ink)" strokeWidth="1.4" fill="none">
                {ROUTES.map((d, i) => (
                  <path
                    key={d}
                    d={d}
                    opacity="0.7"
                    style={{
                      strokeDasharray: 560,
                      strokeDashoffset: drawn ? 0 : 560,
                      transition: `stroke-dashoffset 1200ms cubic-bezier(0.22,1,0.36,1) ${i * 260}ms`,
                    }}
                  />
                ))}
              </g>

              {BLOCKS.map((block) => {
                const f = blockFaces(block.cx, block.cy);
                return (
                  <g key={block.label}>
                    {/* ochre, out of register */}
                    <g className="ink" transform="translate(-6 5)" opacity="0.6">
                      <polygon points={f.top} fill="var(--color-ochre)" />
                      <polygon points={f.left} fill="var(--color-ochre)" />
                      <polygon points={f.right} fill="var(--color-ochre)" />
                    </g>
                    {/* territory ink */}
                    <g className="ink">
                      <polygon points={f.left} fill={block.ink} opacity="0.92" />
                      <polygon points={f.right} fill={block.ink} opacity="0.8" />
                      <polygon points={f.top} fill={block.ink} opacity="0.6" />
                    </g>
                    <g
                      stroke="var(--color-ink)"
                      strokeWidth="1.3"
                      fill="none"
                      opacity="0.75"
                    >
                      <polygon points={f.top} />
                      <polygon points={f.left} />
                      <polygon points={f.right} />
                    </g>
                    <text
                      x={block.cx}
                      y={block.cy + 5}
                      textAnchor="middle"
                      fill="var(--color-paper)"
                      fontFamily="var(--font-mono)"
                      fontSize="15"
                      letterSpacing="1.5"
                    >
                      {block.label}
                    </text>
                  </g>
                );
              })}

              {/* survey stations where the routes meet the ground */}
              <g fill="var(--color-madder)">
                {BLOCKS.map((block) => (
                  <circle
                    key={block.label}
                    cx={block.cx}
                    cy={block.cy - H}
                    r="3.5"
                    opacity={drawn ? 1 : 0}
                    style={{ transition: "opacity 500ms ease 900ms" }}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
