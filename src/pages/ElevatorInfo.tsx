import { useParams } from 'react-router-dom';
import { useStations } from "../hooks/useStations";
import BackButton from '../components/buttons/BackButton';
import WarningMessage from '../components/warnings/Warning';
import styles from "./ElevatorInfo.module.css";
import stationInfo from "../assets/data/stationInfo.json";

const ElevatorInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { stations, loading } = useStations();

    if (loading) return <p>Cargando...</p>;

    const station = stations.find(s => s.code === id);

    if (!station) return <p>No se ha encontrado la estación con id: {id}</p>;

    // Busca la info extra en el JSON
    const extraInfo = stationInfo.stations.find((info: any) => info.code === station.code);

    return (
        <section className={styles.elevatorContent}>
            <BackButton />
            <section className={styles.elevatorInfo}>
                {/* Usa el id para cargar datos del ascensor */}
                <h2>{station.name}</h2>
                <WarningMessage type={station.issues ? "negative" : "positive"} />
                <p className={styles.line}><span>{station.line}</span></p>
            </section>
            {/* Mostrar entradas/accesos si existen */}
            {extraInfo && extraInfo.exits && extraInfo.exits.length > 0 && (
                <section>
                    <h3>Entradas</h3>
                    <ul>
                        {extraInfo.exits.map((entrance: any, idx: number) => (
                            <li key={idx}>
                                <strong>{entrance.name}:</strong> {entrance.address}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            </section>
    );

};

export default ElevatorInfo;