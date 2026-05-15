import { useReveal } from './hooks/useReveal'
import { useCustomCursor } from './hooks/useCustomCursor'

// Componentes
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Estilos
import './styles/global.css'
import './styles/themes.css'
import './styles/layout.css'
import './styles/utilities.css'

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <Stack />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

// useReveal()
// useCustomCursor()
export default App
