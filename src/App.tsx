import './App.css'
import MobileNavbar from './components/navbars/MobileNavbar'
import "./styles/global.css"
import ElevatorCard from './components/cards/ElevatorCard'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Link href="/">
          <img src="./src/assets/Logo.svg" alt="Logo CheckMyLift" className='logo' />
        </Link>
      </header>
        
      <main>
        <section className='cardContainer'>
          <ElevatorCard
          id=""
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          title="Tarjeta completa"
          description="Esta tarjeta contiene todos los elementos que pediste."
          warningType="negative"
          onPrimaryClick={() => alert("Acción principal")}
          onSecondaryClick={() => alert("Acción secundaria")}
        />

        <ElevatorCard
          id=""
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          title="Tarjeta completa"
          description="Esta tarjeta contiene todos los elementos que pediste."
          warningType="negative"
          onPrimaryClick={() => alert("Acción principal")}
          onSecondaryClick={() => alert("Acción secundaria")}
        />
        </section>
        
      </main>
        


      <MobileNavbar />
    </>
  )
}

export default App
