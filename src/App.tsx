import Picasso from '@toptal/picasso-provider'
import { Page } from '@toptal/picasso'

import './App.css'
import RickNMorty from './components/RickNMorty'

function App() {
  return (
    <Picasso>
      <Page>
        <Page.Content>
          <RickNMorty />
        </Page.Content>
        <Page.Footer />
      </Page>
    </Picasso>
  )
}

export default App
