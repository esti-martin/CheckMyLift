import { describe, it, expect } from 'vitest';

describe('Filtrado de avisos de estación', () => {
  // Datos de ejemplo
  const issues = [
    { estacion: 'San Mamés', aviso: 'Avería en ascensor' },
    { estacion: 'Abando', aviso: 'Todo correcto' },
  ];

  const station = { name: 'San Mamés' };

  it('debería filtrar los avisos de la estación correcta', () => {
    const stationIssues = issues.filter(issue =>
      issue.estacion && issue.estacion === station.name
    );
    expect(stationIssues.length).toBe(1);
    expect(stationIssues[0].aviso).toBe('Avería en ascensor');
  });

  it('debería devolver un array vacío si no hay avisos para la estación', () => {
    const station2 = { name: 'Casco Viejo' };
    const stationIssues = issues.filter(issue =>
      issue.estacion && issue.estacion === station2.name
    );
    expect(stationIssues.length).toBe(0);
  });
});
