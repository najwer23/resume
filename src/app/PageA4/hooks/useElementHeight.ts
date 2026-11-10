import { useLayoutEffect, useRef, useState } from 'react';

export const useElementHeight = (enabled: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => setHeight(el.offsetHeight);
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [enabled]);

  return { ref, height };
};
