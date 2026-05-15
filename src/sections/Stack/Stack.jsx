import './stack.css'

import { SkillCard } from './SkillCard'

const stack = [
  {
    category: 'Frontend',

    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },

  {
    category: 'Backend',

    skills: ['Python', 'Node.js', 'Express'],
  },

  // {
  //   category: 'Base de datos',

  //   skills: ['PostgreSQL', 'MongoDB'],
  // },

  // {
  //   category: 'DevOps',

  //   skills: ['Docker', 'AWS', 'Netlify'],
  // },

  // {
  //   category: 'Testing',

  //   skills: ['Jest', 'Cypress', 'Vitest', 'Testing Library'],
  // },

  {
    category: 'Herramientas',

    skills: ['Git', 'Github', 'Linux', 'Figma', 'Adobe Illustrator', 'Adobe Premiere Pro'],
  },
]

export function Stack() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-row">
          <div className="section-label">Stack</div>

          <div className="skills-list">
            {stack.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
