import { useTheme } from '../hooks/useTheme'
import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.css'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        Saarmyx
      </a>

      <ul className="nav-links">
        <li>
          <a href="#skills">Stack</a>
        </li>

        <li>
          <a href="#projects">Proyectos</a>
        </li>

        <li>
          <a href="#about">Sobre mí</a>
        </li>

        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="nav-right">
        <div className="nav-status">
          <div className="status-dot"></div>
          Disponible
        </div>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          <svg
            className="theme-toggle-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {theme === 'dark' ? (
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />

                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </>
            )}
          </svg>

          <span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
        </button>
      </div>
    </nav>
  )
}
