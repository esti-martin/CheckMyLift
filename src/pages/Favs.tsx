import ElevatorCard from '../components/cards/ElevatorCard';

const Favs: React.FC = () => (
    <section className='cardContainer'>
        <h2>Favs</h2>
        <ElevatorCard
        id=""
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        title="Tarjeta completa"
        description="Esta tarjeta contiene todos los elementos que pediste."
        warningType="negative"
        onPrimaryClick={() => alert("Acción principal")}
        />

        <ElevatorCard
            id=""
            imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            title="Tarjeta completa"
            description="Esta tarjeta contiene todos los elementos que pediste."
            warningType="negative"
            onPrimaryClick={() => alert("Acción principal")}
        />
    </section> 
);

export default Favs;