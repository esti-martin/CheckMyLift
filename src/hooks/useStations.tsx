import { useEffect, useState } from "react";

export type Station = {
  code: string;    // ID único de la estación
  name: string;    // Nombre de la estación
  zone: string;    // Zona a la que pertenece la estación
  line: string;    // Línea a la que pertenece la estación
  timeToNextStation: string; // Tiempo de espera
  issues: boolean; // Si la estación tiene incidencias
};

const API_URL_L1 = "https://api.metrobilbao.eus/metro/line-with-issues/l1/1";
const API_URL_L2 = "https://api.metrobilbao.eus/metro/line-with-issues/l2/1";

export function useStations() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStations = async () => {
    try {
      const [dataL1, dataL2] = await Promise.all([
        fetch(API_URL_L1).then(res => res.json()),
        fetch(API_URL_L2).then(res => res.json())
      ]);
      const allStations = [
        ...Object.values(dataL1).flatMap((zone: any) => zone.stations),
        ...Object.values(dataL2).flatMap((zone: any) => zone.stations)
      ];
      const seen = new Set();
      const uniqueStations = allStations.filter(station => {
        if (seen.has(station.code)) return false;
        seen.add(station.code);
        return true;
      });
      setStations(uniqueStations);
      setLoading(false);
    } catch (err) {
      console.error("Error al pedir datos", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStations(); // Consulta inicial
    const intervalId = setInterval(fetchStations, 30000); // Consulta cada 30 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return { stations, loading };
}
