import { useEffect, useState } from "react";

const useIssues = () => {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchIssues = async () => {
    try {
      const response = await fetch("https://api.metrobilbao.eus/metro_page/es/avisos");
      const data = await response.json();
      setIssues(data.avisos || []);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues(); // Llamada inicial
    const intervalId = setInterval(fetchIssues, 30000); // Consulta cada 30 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return { issues, loading, error };
};

export default useIssues;
