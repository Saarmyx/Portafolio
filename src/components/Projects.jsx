import '../styles/sections/projects.css'

const projects = [
  {
    id: '01',
    name: 'AutoCleaner',
    description:
      'Sistema automatizado que limpia archivos innecesarios y optimiza el almacenamiento en segundo plano.',

    tech: ['Python', 'System Optimization', 'Automation'],

    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Saarmyx/AutoCleaner',
      },
    ],
  },

  {
    id: '02',
    name: 'FileOrganizer',
    description:
      'Organizador inteligente de archivos que clasifica automáticamente por tipo, nombre o reglas personalizadas.',

    tech: ['Python', 'File Management', 'Rule-Based Logic'],

    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Saarmyx/FileOrganizer',
      },
    ],
  },

  {
    id: '03',
    name: 'AlgorithmVisualizer',
    description:
      'Visualizador interactivo de algoritmos que permite entender estructuras y procesos paso a paso.',

    tech: ['JavaScript', 'Algorithms', 'Visualization'],

    links: [
      {
        label: 'Demo',
        href: 'https://algorithmvisualizer-saarmyx.netlify.app/',
      },

      {
        label: 'GitHub',
        href: 'https://github.com/Saarmyx/AlgorithmVisualizer',
      },
    ],
  },

  {
    id: '04',
    name: 'SmartExpenseAnalyzer',
    description:
      'Herramienta para analizar gastos personales, detectar patrones y mejorar la toma de decisiones financieras.',

    tech: ['JavaScript', 'Data Analysis', 'Finance'],

    links: [
      {
        label: 'Demo',
        href: 'https://smartexpenseanalyzer-saarmyx.netlify.app/',
      },

      {
        label: 'GitHub',
        href: 'https://github.com/Saarmyx/SmartExpenseAnalyzer',
      },
    ],
  },
]

export function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-row">
          <div className="section-label">Proyectos</div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-item reveal" key={project.id}>
                <div className="project-content">
                  <div className="project-num">{project.id}</div>

                  <h3 className="project-name">{project.name}</h3>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech-row">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`project-tech-tag ${
                          tech === 'Python' ? 'py' : tech === 'JavaScript' ? 'js' : ''
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
