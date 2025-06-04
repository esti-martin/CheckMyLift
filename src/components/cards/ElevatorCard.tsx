import Button from "../buttons/Button";
import WarningMessage from "../warnings/Warning";
import HeartIcon from "../icons/Icon";
import styles from "./ElevatorCard.module.css"

type CardProps = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  warningType: "positive" | "negative";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

const ElevatorCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  warningType,
  onPrimaryClick,
  onSecondaryClick,
}) => (
    <article className={styles.card}>
        <section className={styles.imageWrapper}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <section className={styles.favorite}>
                <HeartIcon id={id} />
            </section>
        </section>
        <section className={styles.content}>
            <WarningMessage type={warningType} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <section className={styles.actions}>
                <Button variant="btn-princ-s" onClick={onPrimaryClick}>
                    Cómo llegar
                </Button>
                <Button variant="btn-second-s" onClick={onSecondaryClick}>
                    Más información
                </Button>
            </section>
        </section>
    </article>
);

export default ElevatorCard;