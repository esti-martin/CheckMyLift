import { useParams } from 'react-router-dom';
import { useStations } from "../hooks/useStations";
import BackButton from '../components/buttons/BackButton';
import WarningMessage from '../components/warnings/Warning';
import styles from "./ElevatorInfo.module.css";
import stationInfo from "../assets/data/stationInfo.json";
import { LuAccessibility } from "react-icons/lu";
import { TbStairs } from "react-icons/tb";
import useIssues from '../hooks/useIssues';

const ElevatorInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { stations, loading } = useStations();
    const { issues, error } = useIssues();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar avisos</p>;

    const station = stations.find(s => s.code === id);

    if (!station) return <p>No se ha encontrado la estación con id: {id}</p>;

    // Busca la info extra en el JSON
    const extraInfo = stationInfo.stations.find((info: any) => info.code === station.code);

    // Filtra los avisos de la estación actual
    const stationIssues = issues.filter(issue => 
    issue.estacion && issue.estacion.toLowerCase() === station.name.toLowerCase()
  );

    return (
        <section className={styles.elevatorContent}>
            <BackButton />
            
            <section className={styles.elevatorInfo}>
                <h2>{station.name}</h2>
                <WarningMessage type={station.issues ? "negative" : "positive"} />
                <p className={styles.line}><span>{station.line}</span></p>
                
                {/* Avisos de avería */}
                {stationIssues.length > 0 && (
                    <section>
                        <h3>Avisos de avería</h3>
                        <ul>
                            {stationIssues.map((issue, idx) => (
                                <li key={idx}>
                                    <strong>{issue.installation_issue?.title || "Sin título"}</strong>
                                    <br />
                                    <span>
                                        <b>Creado:</b> {issue.createdAt ? new Date(issue.createdAt).toLocaleString() : "Desconocido"}
                                    </span>
                                    <br />
                                    <span>
                                        <b>Resuelto:</b> {issue.resoluteAt ? new Date(issue.resoluteAt).toLocaleString() : "Pendiente"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </section>

            {/* Entradas/accesos */}
            {extraInfo && extraInfo.exits && extraInfo.exits.length > 0 && (
                <section>
                    <h3>Entradas</h3>
                    <ul>
                        {extraInfo.exits.map((entrance: any, idx: number) => (
                            <li key={idx}>
                                {entrance.wheelchairAccessible ? (
                                    <LuAccessibility className={styles.accessibilityIcon} />
                                ) : (
                                    <TbStairs className={styles.accessibilityIcon} />
                                )}
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