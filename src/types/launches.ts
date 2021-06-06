export interface Launch {
    id: string,
    flightNumber: number
}

export interface QueryResponse {
    launches: [Launch?],
    totalLaunches: number,
    page: number,
    totalPages: number
}

export interface Query {
    missionName?: string,
    rocketName?: string,
    launchYear?: number,
    page?: number
}