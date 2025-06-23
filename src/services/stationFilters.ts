import type { Station } from "../hooks/useStations";


export function filterStationByName(stations: Station[], name: string) {
    return stations.filter(station =>
        station.name.toLowerCase().includes(name.toLowerCase())
    )
}
