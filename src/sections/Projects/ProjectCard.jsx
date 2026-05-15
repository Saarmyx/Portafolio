export function ProjectCard({ project, index }) {
  const getTechClass = (tech) => {
    switch (tech) {
      case 'HTML':
        return 'html'

      case 'CSS':
        return 'css'

      case 'React':
        return 'tsx'

      case 'JavaScript':
        return 'js'

      case 'TypeScript':
        return 'ts'

      case 'Python':
        return 'py'

      default:
        return ''
    }
  }

  return (
    <article className="project-item">
      <div className="project-content">
        <div className="project-top">
          <div className="project-num">{String(index + 1).padStart(2, '0')}</div>

          <div className="project-stars">★ {project.stars}</div>
        </div>

        <h3 className="project-name">{project.name}</h3>

        <p className="project-desc">{project.description}</p>

        <div className="project-tech-row">
          {project.tech.map((tech) => (
            <span key={tech} className={`project-tech-tag ${getTechClass(tech)}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
            Demo →
          </a>
        )}

        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
          GitHub →
        </a>
      </div>
    </article>
  )
}
