import { useEffect, useState } from 'react'
import '../styles/components/hero.css'

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 150)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero">
      <h1 className={`hero-name ${visible ? 'visible' : ''}`}>
        Santiago
        <br />
        Sarmiento
      </h1>

      <div className={`hero-bottom ${visible ? 'visible' : ''}`}>
        <div className="hero-role">Desarrollador Fullstack · Colombiano</div>

        <p className="hero-desc">
          Construyo sistemas eficientes, automatización y herramientas reales que optimizan procesos
          con precisión, velocidad y diseño funcional.
        </p>
      </div>
    </section>
  )
}
