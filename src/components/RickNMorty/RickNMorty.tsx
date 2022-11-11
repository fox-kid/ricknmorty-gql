import { Button, Container, Page, Typography } from '@toptal/picasso'
import { useQuery, gql } from '@apollo/client'
import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
} from '../../data/get-values'
import { useState } from 'react'

interface Character {
  id: string
  name: string
  gender: string
  created: string
  location: { id: string; name: string }
}

interface Location {
  id: string
  name: string
  type: string
  dimension: string
}

interface Episode {
  id: string
  episode: string
  name: string
  air_date: string
}

const RickNMorty = () => {
  const { data: characters } = useQuery(GET_CHARACTERS)
  const { data: locations } = useQuery(GET_LOCATIONS)
  const { data: episodes } = useQuery(GET_EPISODES)

  const [showCharacters, setShowCharacters] = useState(false)
  const [showLocations, setShowLocations] = useState(false)
  const [showEpisodes, setShowEpisodes] = useState(false)

  const handleCharacters = () => {
    setShowCharacters(!showCharacters)
  }

  const handleLocations = () => {
    setShowLocations(!showLocations)
  }

  const handleEpisodes = () => {
    setShowEpisodes(!showEpisodes)
  }

  return (
    <Container>
      <Page.TopBar title='Rick and Morty' />
      <Page.Content>
        <Container
          flex
          alignItems='center'
          direction='column'
          style={{ width: '100vw' }}
        >
          <Typography align='center' variant='heading' size='xlarge'>
            Get Rick and Morty data
          </Typography>
          <Button onClick={handleCharacters} style={{ marginBlockEnd: '20px' }}>
            Get characters
          </Button>
          <Container flex style={{ flexWrap: 'wrap' }} left='medium'>
            {showCharacters &&
              characters.characters.results.map((char: Character) => (
                <Container
                  key={char.id}
                  bordered
                  rounded
                  padded='medium'
                  top='medium'
                  right='medium'
                >
                  <Typography>Name: {char.name}</Typography>
                  <Typography>Gender: {char.gender}</Typography>
                  <Typography>Location: {char.location.name}</Typography>
                  <Typography>Created: {char.created}</Typography>
                </Container>
              ))}
          </Container>
          <Button onClick={handleLocations} style={{ marginBlockEnd: '20px' }}>
            Get locations
          </Button>
          <Container flex style={{ flexWrap: 'wrap' }} left='medium'>
            {showLocations &&
              locations.locations.results.map((loc: Location) => (
                <Container
                  key={loc.id}
                  bordered
                  rounded
                  padded='medium'
                  top='medium'
                  right='medium'
                >
                  <Typography>Name: {loc.name}</Typography>
                  <Typography>Type: {loc.type}</Typography>
                  <Typography>Dimension: {loc.dimension}</Typography>
                </Container>
              ))}
          </Container>
          <Button onClick={handleEpisodes}>Get episodes</Button>
          <Container flex style={{ flexWrap: 'wrap' }} left='medium'>
            {showEpisodes &&
              episodes.episodes.results.map((ep: Episode) => (
                <Container
                  key={ep.id}
                  bordered
                  rounded
                  padded='medium'
                  top='medium'
                  right='medium'
                >
                  <Typography>Episode: {ep.episode}</Typography>
                  <Typography>Name: {ep.name}</Typography>
                  <Typography>Air date: {ep.air_date}</Typography>
                </Container>
              ))}
          </Container>
        </Container>
      </Page.Content>
    </Container>
  )
}

export default RickNMorty
