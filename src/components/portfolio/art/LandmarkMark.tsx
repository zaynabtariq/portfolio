import type { LandmarkForm } from "@/content/work";

/**
 * Structures drawn into the terrain. The form encodes what the work is,
 * so the metaphor carries information instead of decorating:
 *
 *   workshop — a building where something is made end to end
 *   relay    — a mast moving state between systems
 *   tower    — an instrument that watches and predicts
 *   signal   — a station reading something already in the world
 *
 * Drawn in a 48x48 box, origin top-left, so callers can place them
 * on the plate by translating.
 */

interface LandmarkMarkProps {
  form: LandmarkForm;
  ink: string;
  /** Raised state: hover/focus of the parent landmark button. */
  active?: boolean;
}

export function LandmarkMark({ form, ink, active = false }: LandmarkMarkProps) {
  const stroke = active ? "var(--color-madder)" : ink;
  const w = active ? 2.4 : 1.9;

  return (
    <g
      className="ink"
      stroke={stroke}
      strokeWidth={w}
      strokeLinecap="square"
      fill="none"
      style={{ transition: "stroke 220ms ease, stroke-width 220ms ease" }}
    >
      {/* ground shadow — every structure sits on something */}
      <line
        x1="6"
        y1="42"
        x2="42"
        y2="42"
        stroke="var(--color-ink-faint)"
        strokeWidth="1.2"
        opacity="0.7"
      />

      {form === "workshop" ? (
        <>
          <path d="M10 42V22l14-10 14 10v20" />
          <path d="M18 42V30h12v12" />
          <line x1="24" y1="12" x2="24" y2="4" />
          <circle cx="24" cy="3" r="2" fill={stroke} stroke="none" />
        </>
      ) : null}

      {form === "relay" ? (
        <>
          <path d="M24 42V10" />
          <path d="M14 42l10-32 10 32" />
          <path d="M16 26h16" />
          {/* transmission arcs — the thing it actually does */}
          <path d="M31 10a9 9 0 016 6" opacity="0.85" />
          <path d="M35 5a15 15 0 0110 10" opacity="0.5" />
        </>
      ) : null}

      {form === "tower" ? (
        <>
          <path d="M16 42V18h16v24" />
          <path d="M12 18h24" />
          <path d="M20 42V32h8v10" />
          {/* the lens, aimed off-plate */}
          <path d="M32 14l10-6" />
          <circle cx="43" cy="7" r="3" fill={stroke} stroke="none" />
        </>
      ) : null}

      {form === "signal" ? (
        <>
          <path d="M24 42V16" />
          <circle cx="24" cy="12" r="4" />
          <path d="M12 42h24" />
          {/* readings coming back in */}
          <path d="M8 24l8 4" opacity="0.8" />
          <path d="M40 24l-8 4" opacity="0.8" />
          <path d="M6 32l10 2" opacity="0.45" />
        </>
      ) : null}
    </g>
  );
}
