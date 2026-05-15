import '../styles/sections/skills.css'

const stack = [
  {
    category: 'Frontend',

    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },

  {
    category: 'Backend',

    skills: ['Node.js', 'Express', 'Python'],
  },

  {
    category: 'Base de datos',

    skills: ['PostgreSQL', 'MongoDB'],
  },

  {
    category: 'DevOps',

    skills: ['Docker', 'AWS', 'GitHub Actions', 'Vercel'],
  },

  {
    category: 'Testing',

    skills: ['Jest', 'Cypress', 'Vitest', 'Testing Library'],
  },

  {
    category: 'Herramientas',

    skills: ['Git', 'Linux', 'Figma', 'Automation'],
  },
]

export function Stack() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-row reveal">
          <div className="section-label">Stack</div>

          <div className="skills-list">
            {stack.map((group) => (
              <div className="skill-item" key={group.category}>
                <div className="skill-category">{group.category}</div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
