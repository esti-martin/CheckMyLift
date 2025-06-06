import styles from "./Warning.module.css";
import { LuMapPinCheckInside, LuTriangleAlert } from "react-icons/lu";

type WarningType = "positive" | "negative";

type WarningMessageProps = {
  type: WarningType; // "positive" o "negative"
  className?: string;
};

const icons = {
  positive: (
    <LuMapPinCheckInside />
  ),
  negative: (
    <LuTriangleAlert />
  ),
};

const TEXTS: Record<WarningType, string> = {
  positive: "Todo funciona correctamente.",
  negative: "Existe una avería.",
};

const WarningMessage: React.FC<WarningMessageProps> = ({
  type,
  className = "",
}) => (
  <div className={`${styles.warning} ${styles[type]} ${className}`}>
    {icons[type]}
    <span className={styles.text}>{TEXTS[type]}</span>
  </div>
);

export default WarningMessage;