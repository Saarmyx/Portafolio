export function SkillCard({ group }) {
  const getClassName = (skill) => {
    switch (skill) {
      case 'React':
        return 'react'

      case 'Next.js':
        return 'next'

      case 'TypeScript':
        return 'ts'

      case 'JavaScript':
        return 'js'

      case 'Node.js':
        return 'node'

      case 'Python':
        return 'py'

      case 'PostgreSQL':
        return 'postgres'

      case 'MongoDB':
        return 'mongo'

      case 'Docker':
        return 'docker'

      case 'AWS':
        return 'aws'

      case 'Git':
        return 'git'

      case 'Linux':
        return 'linux'

      case 'Figma':
        return 'figma'

      case 'Adobe Illustrator':
        return 'illustator'

      case 'Adobe Premiere Pro':
        return 'premiere'

      default:
        return ''
    }
  }

  return (
    <div className="skill-item">
      <div className="skill-category">{group.category}</div>

      <div className="skill-tags">
        {group.skills.map((skill) => (
          <span key={skill} className={`skill-tag ${getClassName(skill)}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
