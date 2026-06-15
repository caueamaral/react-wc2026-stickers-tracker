import { useState } from 'react'

import { Lock } from './components/Lock'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './css/styles.css'

function App() {
  const [areStickersLocked, setAreStickersLocked] = useState<boolean>(true)
  const [searchTeam, setSearchTeam] = useState<string>('')

  return (
    <div className="py-10 mx-auto">
      <Lock
        areStickersLocked={areStickersLocked}
        setAreStickersLocked={setAreStickersLocked}
      />
      <Header
        searchTeam={searchTeam}
        setSearchTeam={setSearchTeam}
      />
      <Main
        areStickersLocked={areStickersLocked}
        searchTeam={searchTeam}
      />
    </div>
  )
}

export default App