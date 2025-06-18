 import { useState } from 'react';
import ElevatorCard from '../components/cards/ElevatorCard';
import { useStations } from "../hooks/useStations";
import SearchBar from '../components/search/SearchBar';
import styles from "./Home.module.css";


const FilterSearch: React.FC = () => {
    const { stations, loading } = useStations();
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) return <p>Cargando...</p>;

    const filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <section className='containerHome'>
            <section className={styles.buscador}>
                <SearchBar onSearch={handleSearch} />
            </section>
            <section className={styles.cardContainer}>
                {filteredStations.length === 0 ? (
                    <p className={styles.noResults}>No hay estaciones que coincidan con "{searchTerm}"</p>
                ) : (
                    filteredStations.map(station => (
                        <ElevatorCard
                            key={station.code}
                            code={station.code}
                            title={station.name}
                            line={station.line}
                            warningType={station.issues ? "negative" : "positive"}
                        />
                    ))
                )}
            </section>
        </section>
    );
}

export default FilterSearch;