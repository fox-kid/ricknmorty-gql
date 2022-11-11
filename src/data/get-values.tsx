import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        gender
        created
        location {
          id
          name
        }
      }
    }
  }
`

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`

export const GET_EPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        episode
        name
        air_date
      }
    }
  }
`
