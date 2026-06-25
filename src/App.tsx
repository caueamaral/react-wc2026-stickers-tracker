import { Stickers } from './pages/Stickers'
import { Missing } from './pages/Missing'
import { Statistics } from './pages/Statistics'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { useCurrentPageStore } from './stores/currentPageStore'

import './css/styles.css'

function App() {
  const currentPage = useCurrentPageStore(state => state.currentPage)

  return (
    <div className="pt-10 pb-30 mx-auto">
      <Header />

      {currentPage === 'stickers' && (
        <Stickers />
      )}

      {currentPage === 'missing' && (
        <Missing />
      )}

      {currentPage === 'statistics' && (
        <Statistics />
      )}
      
      <Footer />
    </div>
  )
}

export default App
