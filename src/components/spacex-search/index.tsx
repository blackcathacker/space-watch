import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client'
import {
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow,
    TableHead,
    Paper
} from '@material-ui/core'
import { ApolloQueryResponse, Query, Launch } from '../../types/launches'

const SearchQuery = gql`
    query QueryLaunches($page: Int, $missionName: String, $rocketName: String, $launchYear: Int) {
        queryLaunches(query: {page: $page, missionName: $missionName, rocketName: $rocketName, launchYear: $launchYear}) {
            launches{
            id
            flightNumber
            name
            rocketId
            rocketName
            launchDate
            webcastUrl
            }
            totalLaunches
            totalPages
        }
    }
`

export default function SpaceXSearch() {
    const [missionName, setMissionName] = useState("")
    const [rocketName, setRocketName] = useState("")
    const [launchYear, setLaunchYear] = useState<number>()
    const { data: { queryLaunches } = {} } = useQuery<ApolloQueryResponse, Query>(SearchQuery,
        { variables: { missionName, rocketName, launchYear } }
    )
    return (
        <>
            <form>
                <TextField label="Mission Name" onChange={e => setMissionName(e.target.value)} value={missionName} />
                <TextField label="Rocket Name" onChange={e => setRocketName(e.target.value)} value={rocketName} />
                <TextField label="Launch Year" type="number" onChange={e => setLaunchYear(Number(e.target.value))} value={launchYear} />
            </form>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Flight Number</TableCell>
                            <TableCell>Mission Name</TableCell>
                            <TableCell>Rocket Name</TableCell>
                            <TableCell>Launch Date</TableCell>
                            <TableCell>Webcast</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {queryLaunches?.launches?.map(l => <SpaceXResult launch={l} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

type SpaceXResultProps = {
    launch: Launch
}
function SpaceXResult({ launch }: SpaceXResultProps) {
    return (
        <TableRow>
            <TableCell>{launch.flightNumber}</TableCell>
            <TableCell>{launch.name}</TableCell>
            <TableCell>{launch.rocketName}</TableCell>
            <TableCell>{launch.launchDate}</TableCell>
            <TableCell>{launch.webcastUrl && <a target="_blank" rel="noopener noreferrer" href={launch.webcastUrl}>Launch Webcast</a>}</TableCell>
        </TableRow>
    )
}