import { useLayoutEffect, useRef, useState } from 'react';
import { A4_W } from '../PageA4.const';

export const useFitScale = (sidePadding: number) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth - 2 * sidePadding;
      if (w > 0) setScale(Math.min(1, w / A4_W));
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sidePadding]);

  return { ref, scale };
};
