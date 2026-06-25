import { useState } from 'react'

import { Stickers } from './pages/Stickers'
import { Missing } from './pages/Missing'
import { Statistics } from './pages/Statistics'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import type { Page } from './types/page'

import './css/styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('stickers')
  const [areStickersLocked, setAreStickersLocked] = useState<boolean>(true)

  function toggleStickersLock() {
    setAreStickersLocked(current => !current)
  }

  return (
    <div className="pt-10 pb-30 mx-auto">
      <Header />

      {currentPage === 'stickers' && (
        <Stickers
          areStickersLocked={areStickersLocked}
          toggleStickersLock={toggleStickersLock}
        />
      )}

      {currentPage === 'missing' && (
        <Missing
          areStickersLocked={areStickersLocked}
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
