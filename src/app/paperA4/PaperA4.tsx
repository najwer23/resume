import styles from './PaperA4.module.css';

export const PaperA4: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <div className={styles.paperA4}>{children}</div>;
};
