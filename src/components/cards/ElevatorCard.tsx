import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import WarningMessage from "../warnings/Warning";
import HeartIcon from "../icons/Icon";
import styles from "./ElevatorCard.module.css";
import useModal from "../../hooks/useModal";
import IssueModal from "../modals/IssueModal";
import ReportIcon from "../icons/ReportIcon";

type CardProps = {
  code: string;
  title: string;
  line: string;
  //timeToNextStation: string;
  warningType: "positive" | "negative";
  onPrimaryClick?: () => void;
};

const ElevatorCard: React.FC<CardProps> = ({
  code,
  title,
  line,
  //timeToNextStation,
  warningType,
}) => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <article className={styles.card}>
            <section className={styles.imageWrapper}>
                <img 
                    src={`${import.meta.env.BASE_URL}/assets/stations/${code}.jpg`} 
                    alt={title} 
                    className={styles.image} 
                    //El atributo onError permite mostrar una imagen por defecto si no existe la del code
                    onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}/assets/stations/empty-box.svg`; }}
                />
                <section className={styles.favorite}>
                    <HeartIcon id={code} />
                </section> 
            </section>
            <section className={styles.content}>
                <WarningMessage type={warningType} />
                <section className={styles.titleAdvert}>
                    <h2 className={styles.title}>{title}</h2>
                    <ReportIcon onClick={openModal} />
                </section>
                <section className={styles.lineTime}>
                    <p className={styles.line}><span>{line}</span></p>
                    {/*<p className={styles.time}><span>{timeToNextStation}'</span></p>*/}
                </section>
                <section className={styles.actions}>

                    <Link to={`/elevator/${code}`} className={styles.myLink}>
                        <Button variant="btn-second-s">
                            Más información
                        </Button>
                    </Link>
                    {/* Botón avisar de una avería
                    <Button 
                        variant="btn-second-s" 
                        onClick={openModal}
                    >
                        Avisar de una avería
                    </Button>
                    */}
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

                </section>
                <IssueModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title={title}
                />
            </section>
        </article>
    );
};

export default ElevatorCard;