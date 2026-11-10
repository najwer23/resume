import { type CSSProperties, type ReactNode, useEffect } from 'react';
import { useElementHeight } from './hooks/useElementHeight';
import { useFitScale } from './hooks/useFitScale';
import { usePagination } from './hooks/usePagination';
import { A4_H, A4_W, PX } from './PageA4.const';
import styles from './PageA4.module.css';

interface PageA4Props {
  children?: ReactNode;
  /** Page margin in mm, on screen and as the printer @page margin (default 10) */
  margin?: number;
  /** "auto" fits the screen width (good for mobile); a number is a fixed zoom (1 = real size) */
  scale?: 'auto' | number;
  /** Extra empty space (px) above the first line of every page after the first, on screen only (default 10) */
  topSpacing?: number;
  /** Space (px) left and right of the paper on screen, so it never touches the screen edge (default 10) */
  sidePadding?: number;
  /** Space between sheets on screen, in px (default 16) */
  gap?: number;
  /** Style for the text area (font, size, color...) */
  contentStyle?: CSSProperties;
  /** Shown above the first sheet on screen only (not printed). Scales together with the paper. */
  toolbar?: ReactNode;
  /** Class for the outer wrapper */
  className?: string;
  /** Called when the number of pages changes */
  onPagesChange?: (count: number) => void;
}

export const PageA4: React.FC<PageA4Props> = ({
  children,
  margin = 10,
  scale = 'auto',
  topSpacing = 10,
  sidePadding = 10,
  gap = 16,
  contentStyle,
  toolbar,
  className = '',
  onPagesChange,
}) => {
  const H = (297 - 2 * margin) * PX; // printable height of one page
  const W = (210 - 2 * margin) * PX; // printable width of one page

  const { measRef, ranges } = usePagination(H, topSpacing);
  const { ref: outerRef, scale: autoScale } = useFitScale(sidePadding);
  const hasToolbar = Boolean(toolbar);
  const { ref: toolbarRef, height: toolbarHeight } = useElementHeight(hasToolbar);

  useEffect(() => {
    onPagesChange?.(ranges.length);
  }, [ranges.length]);

  const sc = scale === 'auto' ? autoScale : scale;
  const rootStyle = { gap, paddingInline: sidePadding, '--pa4-m': `${margin}mm` } as CSSProperties;

  return (
    <div ref={outerRef} className={`${styles.root} ${className}`.trim()} style={rootStyle}>
      {/* printer page size + margin; the browser draws its header/footer inside this margin */}
      <style>{`@page{size:A4;margin:${margin}mm}`}</style>

      <div className={styles.measure} aria-hidden="true" style={{ width: W }}>
        <div ref={measRef} className={styles.content} style={{ width: W, ...contentStyle }}>
          {children}
        </div>
      </div>

      {hasToolbar && (
        <div className={styles.toolbarFrame} style={{ width: A4_W * sc, height: toolbarHeight * sc }}>
          <div ref={toolbarRef} className={styles.toolbar} style={{ transform: `scale(${sc})` }}>
            {toolbar}
          </div>
        </div>
      )}

      {ranges.map(([s, e], i) => (
        <div key={i} className={styles.box} style={{ width: A4_W * sc, height: A4_H * sc }}>
          <div className={styles.sheet} style={{ transform: `scale(${sc})` }}>
            <div
              className={styles.clip}
              style={
                {
                  left: `${margin}mm`,
                  top: i === 0 ? `${margin}mm` : `calc(${margin}mm + ${topSpacing}px)`,
                  width: W,
                  height: Math.max(0, e - s),
                } as CSSProperties
              }
            >
              <div className={styles.content} style={{ width: W, transform: `translateY(${-s}px)`, ...contentStyle }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.printFlow} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};
