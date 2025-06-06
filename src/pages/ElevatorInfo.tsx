import { useParams } from 'react-router-dom';
import { useStations } from "../hooks/useStations";
import BackButton from '../components/buttons/BackButton';
import WarningMessage from '../components/warnings/Warning';
import styles from "./ElevatorInfo.module.css"


const ElevatorInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { stations, loading } = useStations();

    if (loading) return <p>Cargando...</p>;

    const station = stations.find(s => s.code === id);

    if (!station) return <p>No se ha encontrado la estación con id: {id}</p>;

    return (
        <section className='main'>
            <BackButton />
            <section className={styles.elevatorInfo}>
                {/* Usa el id para cargar datos del ascensor */}
                <h2>{station.name}</h2>
                <WarningMessage type={station.issues ? "negative" : "positive"} />
            </section>
        </section>
    );

};

export default ElevatorInfo;