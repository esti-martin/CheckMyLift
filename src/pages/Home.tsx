import ElevatorCard from '../components/cards/ElevatorCard';
import { useStations } from "../hooks/useStations"
import styles from "./Home.module.css"

const Home: React.FC = () => {
    const { stations, loading } = useStations();

    if (loading) return <p>Cargando...</p>;

    return (
        <section className='main'>
            <p className={styles.filtro}><span>Filtros: </span>Aquí van un montón de filtros</p>
            <section className={styles.cardContainer}>
                {stations.map(station => (
                    <ElevatorCard
                        key={station.code}
                        id={station.code}
                        title={station.name}
                        description=""
                        imageUrl=""
                        warningType="positive"
                    />
                ))}
            </section> 
        </section>
    );
}

export default Home;