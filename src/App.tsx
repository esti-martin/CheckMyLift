import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/buttons/Button'
import MobileNavbar from './components/navbars/MobileNavbar'
import "./styles/global.css"
import WarningMessage from './components/warnings/Warning'
import HeartIcon from './components/icons/Icon'
import BackButton from './components/buttons/BackButton'
import ElevatorCard from './components/cards/ElevatorCard'

function App() {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <>

        

        <ElevatorCard
          id=""
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          title="Tarjeta completa"
          description="Esta tarjeta contiene todos los elementos que pediste."
          warningType="negative"
          onPrimaryClick={() => alert("Acción principal")}
          onSecondaryClick={() => alert("Acción secundaria")}
        />


      <MobileNavbar />
    </>
  )
}

export default App
