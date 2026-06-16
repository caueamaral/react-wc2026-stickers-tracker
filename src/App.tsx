import { useState } from 'react'

import { Lock } from './components/Lock'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

import type { Page } from './types/page'

import './css/styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('stickers')
  const [areStickersLocked, setAreStickersLocked] = useState<boolean>(true)
  const [searchTeam, setSearchTeam] = useState<string>('')

  function toggleStickersLock() {
    setAreStickersLocked(current => !current)
  }

  return (
    <div className="pt-10 pb-30 mx-auto">
      <Lock
        areStickersLocked={areStickersLocked}
        onToggle={toggleStickersLock}
      />
      <Header />
      <Search
        searchTeam={searchTeam}
        setSearchTeam={setSearchTeam}
      />
      <Main
        currentPage={currentPage}
        areStickersLocked={areStickersLocked}
        searchTeam={searchTeam}
      />
      <Footer
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </div>
  )
}

export default App