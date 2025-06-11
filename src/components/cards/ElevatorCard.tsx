import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import WarningMessage from "../warnings/Warning";
import HeartIcon from "../icons/Icon";
import styles from "./ElevatorCard.module.css"

type CardProps = {
  code: string;
  title: string;
  line: string;
  timeToNextStation: string;
  warningType: "positive" | "negative";
  onPrimaryClick?: () => void;
};

const ElevatorCard: React.FC<CardProps> = ({
  code,
  title,
  line,
  timeToNextStation,
  warningType,
}) => (
    <article className={styles.card}>
        <section className={styles.imageWrapper}>
            <img 
                src={`assets/stations/${code}.jpg`} 
                alt={title} 
                className={styles.image} 
                //El atributo onError permite mostrar una imagen por defecto si no existe la del code
                onError={(e) => { e.currentTarget.src = '/assets/stations/empty-box.svg'; }}
            />
            <section className={styles.favorite}>
                <HeartIcon id={code} />
            </section>
        </section>
        <section className={styles.content}>
            <WarningMessage type={warningType} />
            <h2 className={styles.title}>{title}</h2>
            <section className={styles.lineTime}>
                <p className={styles.line}><span>{line}</span></p>
                <p className={styles.time}><span>{timeToNextStation}'</span></p>
            </section>
            <section className={styles.actions}>
                <Button 
                    variant="btn-princ-s" 
                    onClick={() => {
                        window.open(
                        `https://www.google.es/maps?hl=es&q=estacion+metro+${encodeURIComponent(title)}`,
                        '_blank'
                        );
                    }}
                >
                    Cómo llegar
                </Button>
                <Link to={`/elevator/${code}`} className={styles.myLink}>
                    <Button variant="btn-second-s">
                        Más información
                    </Button>
                </Link>
            </section>
        </section>
    </article>
);

export default ElevatorCard;