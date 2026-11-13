/** CSS px per mm (CSS defines 96 px per inch) */
export const PX = 96 / 25.4;

/** A4 size in CSS px */
export const A4_W = 210 * PX;
export const A4_H = 297 * PX;

/** Elements that are never cut between two pages */
export const ATOMIC = 'img,svg,canvas,video,picture,figure,tr,[data-no-split]';
