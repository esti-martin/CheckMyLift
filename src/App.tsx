import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/components/buttons/Button'
import MobileNavbar from './assets/components/navbars/MobileNavbar'
import "./assets/styles/global.css"
import WarningMessage from './assets/components/warnings/Warning'
import HeartIcon from './assets/components/icons/Icon'
import BackButton from './assets/components/buttons/BackButton'

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Button 
          variant="btn-princ-s"
          onClick={() => alert('Hola!')}
          type='button'>Botón primario
        </Button>

        <Button 
          variant="btn-second-s"
          onClick={() => alert('Hola!')}
          type='button'>Botón secundario
        </Button>

        <Button 
          variant="btn-princ-l"
          onClick={() => alert('Hola!')}
          type='button'>Botón secundario
        </Button>

        <MobileNavbar />

        <WarningMessage type="positive">
          ¡Todo ha salido bien!
        </WarningMessage>

        <WarningMessage type="negative">
          Ha ocurrido un error. Inténtalo de nuevo.
        </WarningMessage>

        <HeartIcon
        active={isActive}
        onToggle={() => setIsActive((prev) => !prev)}
        />

        <BackButton />

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
