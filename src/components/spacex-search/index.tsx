import React from 'react';
import { useQuery, gql } from '@apollo/client'

const SearchQuery = gql`
query QueryLaunches($page: Int, $missionName: String, $rocketName: String, launchYear: String) {
  queryLaunches(query: {page: $page, missionName: $missionName, rocketName: rocketName, launchYear: $launchYear}) {
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