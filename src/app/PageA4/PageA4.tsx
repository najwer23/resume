import { type CSSProperties, type ReactNode } from 'react';
import { useElementHeight } from './hooks/useElementHeight';
import { useFitScale } from './hooks/useFitScale';
import { usePagination } from './hooks/usePagination';
import { A4_H, A4_W, PX } from './PageA4.const';
import styles from './PageA4.module.css';

interface PageA4Props {
  children?: ReactNode;
  margin?: number;
  sidePadding?: number;
  gap?: number;
  toolbar?: ReactNode;
}

export const PageA4: React.FC<PageA4Props> = ({ children, margin = 10, sidePadding = 10, gap = 16, toolbar }) => {
  const hasToolbar = Boolean(toolbar);
  const { ref: toolbarRef, height: toolbarHeight } = useElementHeight(hasToolbar);

  const H = (297 - 2 * margin) * PX; // printable height of one page
  const W = (210 - 2 * margin) * PX; // printable width of one page

  const { measRef, ranges } = usePagination(H);

  const { ref: outerRef, scale: autoScale } = useFitScale(sidePadding);

  const rootStyle = { gap, paddingInline: sidePadding, '--pa4-m': `${margin}mm` } as CSSProperties;

  return (
    <div ref={outerRef} className={`${styles.root}`} style={rootStyle}>
      <style>{`
          @page {
            size: A4;
            margin: ${margin}mm ${margin}mm ${margin + 3}mm ${margin}mm;
          }
      `}</style>

      <div className={styles.measure} aria-hidden="true" style={{ width: W }}>
        <div ref={measRef} className={styles.content} style={{ width: W }}>
          {children}
        </div>
      </div>

      {hasToolbar && (
        <div className={styles.toolbarFrame} style={{ width: A4_W * autoScale, height: toolbarHeight * autoScale }}>
          <div ref={toolbarRef} className={styles.toolbar} style={{ transform: `scale(${autoScale})` }}>
            {toolbar}
          </div>
        </div>
      )}

      {ranges.map(([s, e], i) => (
        <div key={i} className={styles.box} style={{ width: A4_W * autoScale, height: A4_H * autoScale }}>
          <div className={styles.sheet} style={{ transform: `scale(${autoScale})` }}>
            <div
              className={styles.clip}
              style={
                {
                  left: `${margin}mm`,
                  top: `${margin}mm`,
                  width: W,
                  height: Math.max(0, e - s),
                } as CSSProperties
              }
            >
              <div className={styles.content} style={{ width: W, transform: `translateY(${-s}px)` }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.printFlow}>{children}</div>
    </div>
  );
};
