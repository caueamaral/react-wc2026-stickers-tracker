import { useState } from 'react'

import { Header } from './components/Header'
import { Main } from './components/Main'
import './css/styles.css'

function App() {
  const [searchTeam, setSearchTeam] = useState<string>('')

  return (
    <div className="py-10 mx-auto">
      <Header searchTeam={searchTeam} setSearchTeam={setSearchTeam} />
      <Main searchTeam={searchTeam} />
    </div>
  )
}

export default App
