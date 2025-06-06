import { useEffect, useState } from "react";

export type Station = {
  code: string;    // ID único de la estación
  name: string;    // Nombre de la estación
  zone: string;    // Zona a la que pertenece la estación
  line: string;    // Línea a la que pertenece la estación
  issues: boolean; // Si la estación tiene incidencias
  // Añadir más datos si son necesarios.
};

const API_URL = "https://api.metrobilbao.eus/metro/line-with-issues/l1/1";

export function useStations() {
  // 1. Estado para los datos
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect para pedir los datos al montar el componente
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      // data es un array de zonas, cada una con stations
      // Queremos juntar todas las estaciones en un solo array
      .then(data => {
        /*convierte el objeto en array antes de flatMap*/
        const allStations = Object.values(data).flatMap((zone: any) => zone.stations);
        setStations(allStations);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al pedir datos", err);
        setLoading(false);
      });
  }, []); // El array vacío hace que solo se ejecute al montar

  return { stations, loading }
}
