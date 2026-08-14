/**
 * Oblique projection for the territory block diagrams.
 *
 * Lives apart from the component so both the SVG drawing and the DOM
 * landmarks can position themselves with identical maths — a landmark placed
 * at surface coordinate (40, 60) lands exactly where the drawing puts that
 * point on the plateau.
 */

export const VB = { w: 640, h: 520 };

const O = { x: 110, y: 235 }; // near-left corner of the plateau
const U = { x: 340, y: -72 }; // surface "east"
const V = { x: 150, y: 120 }; // surface "south"

export const DEPTH = 86;

export interface Pt {
  x: number;
  y: number;
}

/** Surface coords (0–100, 0–100) to a point on the plateau. */
export function project(a: number, b: number): Pt {
  const s = a / 100;
  const t = b / 100;
  return {
    x: O.x + U.x * s + V.x * t,
    y: O.y + U.y * s + V.y * t,
  };
}

/** Surface coords to CSS percentages, for positioning DOM landmarks. */
export function projectToPercent(a: number, b: number) {
  const p = project(a, b);
  return { left: (p.x / VB.w) * 100, top: (p.y / VB.h) * 100 };
}

export const poly = (pts: Pt[]) =>
  pts.map((p) => `${Math.round(p.x)},${Math.round(p.y)}`).join(" ");

export const drop = (p: Pt, d = DEPTH): Pt => ({ x: p.x, y: p.y + d });
