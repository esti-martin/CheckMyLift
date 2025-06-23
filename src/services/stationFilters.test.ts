import { describe, it, expect } from 'vitest';
import { filterStationByName } from './stationFilters'
import type { Station } from '../hooks/useStations';


describe('Filtrado de estaciones', () => {
  // Datos de ejemplo
  const stations: Station[] = [{
      code: '', 
      name: 'San Mamés', 
      zone: '1', 
      line: 'L1', 
      timeToNextStation: '10:00', 
      issues: true, 
    }, {
      code: '', 
      name: 'Abando', 
      zone: '1', 
      line: 'L1', 
      timeToNextStation: '12:00', 
      issues: true, 
    }
  ];

  const filter: string = 'San Mamés';

  it('debería filtrar los avisos de la estación correcta', () => {
    const filteredStations = filterStationByName(stations, filter)
    expect(filteredStations.length).toBe(1);
    expect(filteredStations[0].name).toBe(filter);
  });

});
