import { ATOMIC, PAD } from './PageA4.const';
import type { Band, Cut, Measured, PageRange } from './PageA4.types';

export const collect = (root: HTMLElement): Measured => {
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
};

export const clusterLines = (lines: Band[]): Band[] => {
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
};

export const computeRanges = ({ lines, atoms, marks, total }: Measured, H: number, topSpacing: number): PageRange[] => {
  const rows = clusterLines(lines);
  const tops = [...rows.map((r) => r.top), ...atoms.map((a) => a.top)].sort((a, b) => a - b);
  const inside = (y: number) => atoms.some((a) => y > a.top + 1 && y < a.bottom - 1);

  /** Where a page that continues after y should start. */
  const resumeAfter = (y: number): number => {
    const t = tops.find((v) => v >= y - 0.5);
    return t === undefined ? y : Math.max(y, t - PAD);
  };

  const cands: Cut[] = [];
  // between two text lines
  for (let i = 0; i < rows.length - 1; i++) {
    const a = rows[i];
    const b = rows[i + 1];
    // end the page right under the line, so a following line is never left out by accident;
    // if two lines overlap, cut in the middle of the overlap
    const cut = Math.min(a.bottom + 1, (a.bottom + b.top) / 2);
    cands.push({ cut, resume: Math.max(cut, b.top - PAD) });
  }
  // around images, table rows, <NoSplit> blocks...
  for (const a of atoms) {
    cands.push({ cut: a.top, resume: a.top });
    cands.push({ cut: a.bottom, resume: resumeAfter(a.bottom) });
  }
  const valid = cands.filter((c) => !inside(c.cut)).sort((a, b) => a.cut - b.cut);
  const forced = marks.slice().sort((a, b) => a - b);

  const out: PageRange[] = [];
  let s = 0;
  for (let guard = 0; guard < 1000; guard++) {
    // pages after the first start lower, because of topSpacing
    const cap = out.length === 0 ? H : H - topSpacing;
    const limit = s + cap;
    const mark = forced.find((m) => m > s + 1 && m <= limit + 0.5);
    let end: number;
    let resume: number;
    if (mark !== undefined) {
      end = mark;
      resume = resumeAfter(mark);
    } else if (total - s <= cap + 0.5) {
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
    // whole pixels, so screen and print slice at the same spot
    out.push([Math.floor(s), Math.round(end)]);
    if (end >= total - 0.5) break;
    s = resume;
  }
  return out;
};

export const rangesKey = (r: PageRange[]): string => JSON.stringify(r.map((p) => p.map(Math.round)));
