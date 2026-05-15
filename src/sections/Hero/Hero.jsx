// sections/Hero/Hero.jsx

import './hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          Santiago
          <br />
          Sarmiento
        </h1>

        <div className="hero-bottom">
          <div className="hero-role">Desarrollador Fullstack · Colombiano</div>

          <p className="hero-desc">
            Construyo sistemas eficientes, automatización y herramientas reales que optimizan
            procesos.
          </p>
        </div>
      </div>
    </section>
  )
}
