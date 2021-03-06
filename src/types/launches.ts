export interface Launch {
    id: string,
    name: string,
    flightNumber: number,
    rocketId: string,
    rocketName: string
    launchDate: string,
    webcastUrl?: string
}

export interface QueryResponse {
    launches: Launch[],
    totalLaunches: number,
    page: number,
    totalPages: number
}

export interface ApolloQueryResponse {
    queryLaunches: QueryResponse
}

export interface Query {
    missionName?: string,
    rocketName?: string,
    launchYear?: number,
    page?: number,
    rowsPerPage?: number
}

export interface LaunchApi {
    id: string,
    name: string,
    flight_number: number,
    rocket: string,
    date_utc: string,
    links: { webcast: string }
}

export interface RocketApi {
    id: string,
    name: string
}

export interface RocketApiMapped {
    [key: string]: RocketApi
}