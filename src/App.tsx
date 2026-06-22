import { useState } from 'react'

import { Stickers } from './pages/Stickers'
import { MissingStickers } from './pages/MissingStickers'
import { Statistics } from './pages/Statistics'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import type { Page } from './types/page'

import './css/styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('all-stickers')
  const [areStickersLocked, setAreStickersLocked] = useState<boolean>(true)
  const [searchTeam, setSearchTeam] = useState<string>('')

  function toggleStickersLock() {
    setAreStickersLocked(current => !current)
  }

  return (
    <div className="pt-10 pb-30 mx-auto">
      <Header />

      {currentPage === 'all-stickers' && (
        <Stickers
          areStickersLocked={areStickersLocked}
          searchTeam={searchTeam}
          setSearchTeam={setSearchTeam}
          toggleStickersLock={toggleStickersLock}
        />
      )}

      {currentPage === 'missing-stickers' && (
        <MissingStickers
          areStickersLocked={areStickersLocked}
          searchTeam={searchTeam}
          toggleStickersLock={toggleStickersLock}
        />
      )}

      {currentPage === 'statistics' && (
        <Statistics />
      )}
      
      <Footer
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </div>
  )
}

export default App