/**
 * A territory drawn as a geological block diagram.
 *
 * Field geology represents ground as an oblique block cut out of the earth:
 * a plateau surface you look down onto, plus the two near side walls showing
 * the strata underneath. It is a real scientific convention, it gives genuine
 * 2.5D depth with nothing but flat polygons, and — unlike a top-down island —
 * it reads as a *place* rather than a shape. It also cannot be mistaken for a
 * floating game island, which the brief rules out.
 *
 * The riso logic sits on top: the block prints in ochre first, then in the
 * territory ink slightly out of register, both multiplying into the paper.
 *
 * All geometry derives from one origin and two axis vectors, so landmarks
 * can be positioned in surface coordinates and projected to screen space by
 * the same maths the drawing uses.
 */

import { VB, DEPTH, project, poly, drop } from "./projection";

const A = project(0, 0);
const B = project(100, 0);
const C = project(100, 100);
const D = project(0, 100);

const TOP = poly([A, B, C, D]);
const FACE_LEFT = poly([A, D, drop(D), drop(A)]);
const FACE_RIGHT = poly([D, C, drop(C), drop(D)]);

/* Elevation rings on the plateau, defined in surface coords so they always
   lie flat on the block no matter how the projection is tuned. */
const RINGS: [number, number][][] = [
  [
    [18, 30],
    [34, 18],
    [55, 16],
    [72, 26],
    [82, 44],
    [78, 64],
    [60, 78],
    [40, 80],
    [24, 68],
    [16, 48],
  ],
  [
    [28, 36],
    [40, 28],
    [56, 26],
    [68, 36],
    [74, 50],
    [70, 64],
    [56, 72],
    [42, 72],
    [32, 62],
    [26, 48],
  ],
  [
    [38, 42],
    [48, 36],
    [58, 36],
    [65, 44],
    [66, 55],
    [58, 63],
    [47, 64],
    [39, 57],
    [36, 49],
  ],
  [
    [46, 47],
    [54, 45],
    [59, 50],
    [57, 57],
    [50, 58],
    [45, 53],
  ],
];

const ringPath = (ring: [number, number][]) =>
  poly(ring.map(([a, b]) => project(a, b)));

/* --- component -------------------------------------------------------- */

interface TerrainPlateProps {
  ink: string;
  className?: string;
  label?: string;
  numeral?: string;
  children?: React.ReactNode;
}

export function TerrainPlate({
  ink,
  className,
  label,
  numeral,
  children,
}: TerrainPlateProps) {
  return (
    <svg
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* survey grid on the sheet behind the block */}
      <g stroke="var(--color-rule)" strokeWidth="0.75" opacity="0.8">
        {[80, 180, 280, 380, 480, 580].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="500" />
        ))}
        {[80, 160, 240, 320, 400, 480].map((y) => (
          <line key={`h${y}`} x1="20" y1={y} x2="620" y2={y} />
        ))}
      </g>

      {/* --- ink layer 1: ochre, out of register --- */}
      <g className="ink" transform="translate(-10 8)" opacity="0.62">
        <polygon points={TOP} fill="var(--color-ochre)" />
        <polygon points={FACE_LEFT} fill="var(--color-ochre)" />
        <polygon points={FACE_RIGHT} fill="var(--color-ochre)" />
      </g>

      {/* --- ink layer 2: territory ink, in register --- */}
      <g className="ink">
        {/* the two walls sit darker than the lit plateau */}
        <polygon points={FACE_LEFT} fill={ink} opacity="0.92" />
        <polygon points={FACE_RIGHT} fill={ink} opacity="0.8" />
        {/* The plateau carries more ink than the walls so the territory
            colour survives the ochre underneath it — at lower opacity the
            overprint turns every territory olive and they stop reading
            as different places. */}
        <polygon points={TOP} fill={ink} opacity="0.74" />
      </g>

      {/* --- strata in the cut faces: the layers under the ground --- */}
      <g opacity="0.5">
        {[30, 58].map((d) => (
          <g key={d} stroke="var(--color-paper)" strokeWidth="1.2">
            <line x1={A.x} y1={A.y + d} x2={D.x} y2={D.y + d} />
            <line x1={D.x} y1={D.y + d} x2={C.x} y2={C.y + d} />
          </g>
        ))}
      </g>

      {/* --- elevation rings on the plateau --- */}
      <g stroke="var(--color-paper)" strokeWidth="1.3" fill="none">
        {RINGS.map((ring, i) => (
          <polygon
            key={i}
            points={ringPath(ring)}
            opacity={0.42 + i * 0.13}
          />
        ))}
      </g>

      {/* --- block edges, redrawn crisp over both ink layers --- */}
      <g stroke="var(--color-ink)" strokeWidth="1.5" fill="none" opacity="0.75">
        <polygon points={TOP} />
        <polygon points={FACE_LEFT} />
        <polygon points={FACE_RIGHT} />
      </g>

      {/* --- depth ticks along the cut, madder for bite --- */}
      <g
        className="ink"
        stroke="var(--color-madder)"
        strokeWidth="1.6"
        opacity="0.55"
      >
        {[0.25, 0.5, 0.75].map((t) => {
          const x = D.x + (C.x - D.x) * t;
          const y = D.y + (C.y - D.y) * t;
          return <line key={t} x1={x} y1={y + DEPTH} x2={x} y2={y + DEPTH + 16} />;
        })}
      </g>

      {label ? (
        <text
          x="20"
          y="500"
          fill="var(--color-ink-2)"
          fontFamily="var(--font-mono)"
          fontSize="13"
          letterSpacing="2.6"
        >
          {label}
        </text>
      ) : null}
      {numeral ? (
        <text
          x="620"
          y="500"
          textAnchor="end"
          fill="var(--color-ink-2)"
          fontFamily="var(--font-mono)"
          fontSize="13"
          letterSpacing="2.6"
        >
          {numeral}
        </text>
      ) : null}

      {children}
    </svg>
  );
}
