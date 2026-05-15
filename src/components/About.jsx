import '../styles/sections/about.css'

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
        <div className="section-row reveal">
          <div className="section-label">Sobre mí</div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-bio">
                Desarrollo herramientas y sistemas enfocados en automatización, optimización y
                experiencia funcional.
                <br />
                <br />
                Me interesa construir soluciones que sean rápidas, útiles y técnicamente sólidas,
                combinando lógica, diseño y eficiencia en cada detalle.
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <div className="tl-item" key={`${item.year}-${item.role}`}>
                  <div className="tl-year">{item.year}</div>

                  <div>
                    <div className="tl-role">{item.role}</div>

                    <div className="tl-company">{item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
