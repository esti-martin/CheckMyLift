import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import MapView from './pages/MapView';
import FilterSearch from './pages/FilterSearch';
import Favs from './pages/Favs';
import "./styles/global.css"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />        
        <Route path="vista-mapa" element={<MapView />} />
        <Route path="filtros" element={<FilterSearch />} />
        <Route path="favoritos" element={<Favs />} />
      </Route>
    </Routes>
  );
}

export default App
