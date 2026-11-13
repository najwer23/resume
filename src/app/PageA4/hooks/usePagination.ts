import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { PageRange } from '../PageA4.types';
import { collect, computeRanges, rangesKey } from '../PageA4.utils';

export const usePagination = (pageHeight: number) => {
  const measRef = useRef<HTMLDivElement>(null);
  const [ranges, setRanges] = useState<PageRange[]>([[0, pageHeight]]);

  const measure = useCallback(() => {
    const el = measRef.current;
    if (!el || el.offsetHeight === 0) return; // hidden (print layout) -> nothing to measure
    const next = computeRanges(collect(el), pageHeight);
    setRanges((prev) => (rangesKey(prev) === rangesKey(next) ? prev : next));
  }, [pageHeight]);

  // re-measure after every render (state is only set when the result changed)
  useLayoutEffect(() => {
    measure();
  });

  // re-measure when content size changes, images load, fonts arrive
  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    if (measRef.current) ro.observe(measRef.current);
    if (document.fonts && document.fonts.ready) void document.fonts.ready.then(measure);
    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('load', measure);
    };
  }, [measure]);

  return { measRef, ranges };
};
