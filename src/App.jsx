// App.jsx
import './styles/global.css'
import './styles/layout.css'
import './styles/themes.css'
import './styles/utilities.css'

import { useCustomCursor } from './hooks/useCustomCursor'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import { Hero } from './sections/Hero/Hero'
import { Stack } from './sections/Stack/Stack'
import { Projects } from './sections/Projects/Projects'
import { About } from './sections/About/About'
import { Contact } from './sections/Contact/Contact'

function App() {
  useCustomCursor()
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

export default App
