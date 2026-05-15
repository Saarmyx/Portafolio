export function Stack() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-row reveal">
          <div className="section-label">Stack</div>
          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-category">Frontend</div>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind</span>
                {/* <span className="skill-tag">Vue.js</span>  */}
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-category">Backend</div>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                {/* //
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">GraphQL</span>
                     */}
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-category">Base de datos</div>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                {/* <span className="skill-tag">Redis</span>
                <span className="skill-tag">Prisma</span> */}
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-category">DevOps</div>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-category">Testing</div>
              <div className="skill-tags">
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">Cypress</span>
                <span className="skill-tag">Vitest</span>
                <span className="skill-tag">Testing Library</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-category">Herramientas</div>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Automation</span>
                {/* <!--  <span className="skill-tag">Scrum</span> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
