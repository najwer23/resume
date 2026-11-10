/**
 * <PageA4> – put ANY React components inside; the content flows across A4 sheets.
 * Text is split between pages at line boundaries, so a paragraph can start on one
 * page and continue on the next. No dependencies except React.
 *
 * USAGE
 *   import PageA4, { PageBreak, NoSplit } from "./PageA4";
 *
 *   <button className="no-print" onClick={() => window.print()}>Print</button>
 *   <PageA4 margin={20}>
 *     <MyHeader />
 *     <MyLongArticle />
 *     <PageBreak />                     // force a new page here
 *     <NoSplit><MyTable /></NoSplit>    // never cut through this block
 *     <img src="..." />                 // images, svg, canvas, tr are never cut
 *   </PageA4>
 *
 * IMPORTANT: children are rendered once per page (each page shows a clipped
 * window of the same content), so keep them presentational. Local state inside
 * them is not shared between pages; lift state up and pass it as props.
 * Anything outside the sheets that should not be printed: className="no-print"
 * (a global class defined in PageA4.module.css).
 */
import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './PageA4.module.css';

export interface PageA4Props {
  children?: ReactNode;
  /** Page margin in mm (default 20) */
  margin?: number;
  /** "auto" fits the screen width (good for mobile); a number is a fixed zoom (1 = real size) */
  scale?: 'auto' | number;
  /** Show "1 / 3" under each page (default true) */
  showPageNumbers?: boolean;
  /** Space between sheets on screen, in px (default 16) */
  gap?: number;
  /** Style for the text area (font, size, color...) */
  contentStyle?: CSSProperties;
  /** Class for the outer wrapper */
  className?: string;
  /** Called when the number of pages changes */
  onPagesChange?: (count: number) => void;
}

/** Vertical band [start, end] of the content shown on one page, in px */
type PageRange = [start: number, end: number];

interface Band {
  top: number;
  bottom: number;
}

interface Measured {
  lines: Band[];
  atoms: Band[];
  marks: number[];
  total: number;
}

const PX = 96 / 25.4; // CSS px per mm
const A4_W = 210 * PX;
const A4_H = 297 * PX;
const ATOMIC = 'img,svg,canvas,video,picture,figure,tr,[data-no-split]';

/** Forces a new page at this point. */
export function PageBreak() {
  return <div data-page-break="" style={{ height: 0 }} />;
}

/** Content inside is never cut between two pages. */
export function NoSplit({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-no-split="" {...rest}>
      {children}
    </div>
  );
}

/** Read line boxes, unsplittable blocks and forced breaks from the hidden copy. */
function collect(root: HTMLElement): Measured {
  const base = root.getBoundingClientRect().top;
  const rel = (r: DOMRect): Band => ({ top: r.top - base, bottom: r.bottom - base });
  const lines: Band[] = [];
  const atoms: Band[] = [];
  const marks: number[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.nodeValue || !node.nodeValue.trim()) continue;
    range.selectNodeContents(node);
    for (const r of Array.from(range.getClientRects())) {
      if (r.height > 0) lines.push(rel(r));
    }
  }
  root.querySelectorAll(ATOMIC).forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.height > 0) atoms.push(rel(r));
  });
  root.querySelectorAll('[data-page-break]').forEach((el) => {
    marks.push(el.getBoundingClientRect().top - base);
  });
  return { lines, atoms, marks, total: root.getBoundingClientRect().height };
}

/** Px kept above the first line of a page so accents and ascenders are never clipped. */
const PAD = 4;

interface Cut {
  cut: number; // where the previous page ends
  resume: number; // where the next page starts
}

/** Merge glyph rectangles that sit on the same visual line into one band. */
function clusterLines(lines: Band[]): Band[] {
  const sorted = lines.slice().sort((a, b) => a.top - b.top || a.bottom - b.bottom);
  const out: Band[] = [];
  for (const l of sorted) {
    const cur = out[out.length - 1];
    if (cur && (l.top + l.bottom) / 2 < cur.bottom) {
      cur.top = Math.min(cur.top, l.top);
      cur.bottom = Math.max(cur.bottom, l.bottom);
    } else {
      out.push({ top: l.top, bottom: l.bottom });
    }
  }
  return out;
}

/** Decide where each page starts and ends (in px of the content). */
function computeRanges({ lines, atoms, marks, total }: Measured, H: number): PageRange[] {
  const rows = clusterLines(lines);
  const tops = [...rows.map((r) => r.top), ...atoms.map((a) => a.top)].sort((a, b) => a - b);
  const inside = (y: number) => atoms.some((a) => y > a.top + 1 && y < a.bottom - 1);

  /** Where a page that continues after y should start. */
  const resumeAfter = (y: number): number => {
    const t = tops.find((v) => v >= y - 0.5);
    return t === undefined ? y : Math.max(y, t - PAD);
  };

  const cands: Cut[] = [];
  // between two text lines: cut in the middle of the gap, so neither line is clipped
  for (let i = 0; i < rows.length - 1; i++) {
    const mid = (rows[i].bottom + rows[i + 1].top) / 2;
    cands.push({ cut: mid, resume: Math.max(mid, rows[i + 1].top - PAD) });
  }
  // around images, tables rows, <NoSplit> blocks...
  for (const a of atoms) {
    cands.push({ cut: a.top, resume: a.top });
    cands.push({ cut: a.bottom, resume: resumeAfter(a.bottom) });
  }
  const valid = cands.filter((c) => !inside(c.cut)).sort((a, b) => a.cut - b.cut);
  const forced = marks.slice().sort((a, b) => a - b);

  const out: PageRange[] = [];
  let s = 0;
  for (let guard = 0; guard < 1000; guard++) {
    const limit = s + H;
    const mark = forced.find((m) => m > s + 1 && m <= limit + 0.5);
    let end: number;
    let resume: number;
    if (mark !== undefined) {
      end = mark;
      resume = resumeAfter(mark);
    } else if (total - s <= H + 0.5) {
      end = total;
      resume = total;
    } else {
      end = limit; // fallback: hard cut (e.g. a huge unsplittable block)
      resume = limit;
      for (let i = valid.length - 1; i >= 0; i--) {
        if (valid[i].cut <= limit + 0.5 && valid[i].cut > s + 4) {
          end = valid[i].cut;
          resume = valid[i].resume;
          break;
        }
      }
    }
    out.push([s, end]);
    if (end >= total - 0.5) break;
    s = resume;
  }
  return out;
}

const keyOf = (r: PageRange[]): string => JSON.stringify(r.map((p) => p.map(Math.round)));

export default function PageA4({
  children,
  margin = 10,
  scale = 'auto',
  showPageNumbers = true,
  gap = 16,
  contentStyle,
  className = '',
  onPagesChange,
}: PageA4Props) {
  const outer = useRef<HTMLDivElement>(null);
  const meas = useRef<HTMLDivElement>(null);
  const H = (297 - 2 * margin) * PX;
  const W = (210 - 2 * margin) * PX;
  const [ranges, setRanges] = useState<PageRange[]>([[0, H]]);
  const [auto, setAuto] = useState<number>(1);

  const measure = useCallback(() => {
    if (!meas.current) return;
    const next = computeRanges(collect(meas.current), H);
    setRanges((prev) => (keyOf(prev) === keyOf(next) ? prev : next));
  }, [H]);

  // re-measure after every render (state is only set when the result changed)
  useLayoutEffect(() => {
    measure();
  });

  // re-measure when content size changes, images load, fonts arrive
  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    if (meas.current) ro.observe(meas.current);
    if (document.fonts && document.fonts.ready) void document.fonts.ready.then(measure);
    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('load', measure);
    };
  }, [measure]);

  // fit sheets to the available width (mobile)
  useLayoutEffect(() => {
    const el = outer.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth;
      if (w > 0) setAuto(Math.min(1, w / A4_W));
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    onPagesChange?.(ranges.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ranges.length]);

  const sc = scale === 'auto' ? auto : scale;

  return (
    <div ref={outer} className={`${styles.root} ${className}`.trim()} style={{ gap }}>
      {/* hidden copy used only for measuring */}
      <div className={styles.measure} aria-hidden="true" style={{ width: W }}>
        <div ref={meas} className={styles.content} style={{ width: W, ...contentStyle }}>
          {children}
        </div>
      </div>

      {ranges.map(([s, e], i) => (
        <div key={i} className={styles.box} style={{ width: A4_W * sc, height: A4_H * sc }}>
          <div className={styles.sheet} style={{ transform: `scale(${sc})` }}>
            <div
              className={styles.clip}
              style={{ left: `${margin}mm`, top: `${margin}mm`, width: W, height: Math.max(0, e - s) }}
            >
              <div className={styles.content} style={{ width: W, transform: `translateY(${-s}px)`, ...contentStyle }}>
                {children}
              </div>
            </div>
            {showPageNumbers && (
              <div className={styles.num} style={{ bottom: `calc(${margin}mm / 2 - 2mm)` }}>
                {i + 1} / {ranges.length}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
