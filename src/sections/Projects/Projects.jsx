import './projects.css'

import { useEffect, useState } from 'react'

import { getProjects } from '../../services/github'

import { ProjectCard } from './ProjectCard'

export function Projects() {
  const [projects, setProjects] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects()

      setProjects(data)

      setLoading(false)
    }

    loadProjects()
  }, [])

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-row">
          <div className="section-label">Proyectos</div>

          <div className="projects-list">
            {loading ? (
              <p className="projects-loading">Cargando proyectos...</p>
            ) : (
              projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
