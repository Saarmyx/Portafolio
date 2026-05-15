import React from 'react'
// import '../styles/components/navbar.css'

export function NavBar() {
  return (
    <nav>
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
        <button className="theme-toggle" id="theme-toggle" aria-label="Cambiar modo">
          <svg
            className="theme-toggle-icon"
            id="theme-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <span id="theme-label">Oscuro</span>
        </button>
      </div>
    </nav>
  )
}
