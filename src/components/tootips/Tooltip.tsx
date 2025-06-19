import styles from './Tooltip.module.css';

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.tooltip}>{text}</div>
    </div>
  );
};

export default Tooltip;
