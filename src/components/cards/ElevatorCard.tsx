import { Link } from "react-router-dom";
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
};

const ElevatorCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  warningType,
  onPrimaryClick,
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
                <Link to={`/elevator/${id}`} className={styles.myLink}>
                    <Button variant="btn-second-s">
                        Más información
                    </Button>
                </Link>
            </section>
        </section>
    </article>
);

export default ElevatorCard;