import { useEffect, useState } from "react";

export type Station = {
  code: string;    // ID único de la estación
  name: string;    // Nombre de la estación
  zone: string;    // Zona a la que pertenece la estación
  line: string;    // Línea a la que pertenece la estación
  timeToNextStation: string; // Tiempo de espera
  issues: boolean; // Si la estación tiene incidencias
  // Añadir más datos si son necesarios.
};

const API_URL_L1 = "https://api.metrobilbao.eus/metro/line-with-issues/l1/1";
const API_URL_L2 = "https://api.metrobilbao.eus/metro/line-with-issues/l2/1";

export function useStations() {
  // 1. Estado para los datos
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect para pedir los datos al montar el componente
  useEffect(() => {
    //hace las dos peticiones a la vez y esperar a que ambas terminen.
    Promise.all ([
      fetch(API_URL_L1).then(res => res.json()),
      fetch(API_URL_L2).then(res => res.json())
    ])
      // data es un array de zonas, cada una con stations
      // Queremos juntar todas las estaciones en un solo array
      .then(([dataL1, dataL2]) => {
        /*convierte el objeto en array antes de flatMap y junta todas las estaciones*/
        const allStations = [
        ...Object.values(dataL1).flatMap((zone: any) => zone.stations),
        ...Object.values(dataL2).flatMap((zone: any) => zone.stations)
      ];
        
      // Elimina duplicados usando code
      const seen = new Set();
      const uniqueStations = allStations.filter(station => {
        if (seen.has(station.code)) return false;
        seen.add(station.code);
        return true;
      });

      setStations(uniqueStations);
      setLoading(false);
      })
      .catch(err => {
        console.error("Error al pedir datos", err);
        setLoading(false);
      });
  }, []); // El array vacío hace que solo se ejecute al montar

  return { stations, loading }
}
