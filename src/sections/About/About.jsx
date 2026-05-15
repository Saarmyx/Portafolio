// sections/About/About.jsx

import './about.css'

import { TimelineItem } from './TimelineItem'

const timeline = [
  {
    year: '2026 – 2027',
    role: 'Técnico en Sistemas',
    company: 'SENA',
  },

  {
    year: '2026',
    role: 'Calidad de Software',
    company: 'SENA',
  },

  {
    year: '2024 – Actual',
    role: 'Desarrollador',
    company: 'Proyectos propios',
  },
]

export function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-row">
          <div className="section-label">Sobre mí</div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-bio">
                Desarrollo herramientas y sistemas enfocados en automatización, optimización y
                experiencia funcional.
                <br />
                <br />
                Me interesa construir soluciones rápidas, útiles y técnicamente sólidas, combinando
                lógica, diseño y eficiencia en cada detalle.
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <TimelineItem key={`${item.year}-${item.role}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
