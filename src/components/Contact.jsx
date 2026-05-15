import '../styles/sections/contact.css'

const links = [
  {
    label: 'Email',
    value: 'saarmyx@gmail.com',
    href: 'mailto:saarmyx@gmail.com',
  },

  {
    label: 'GitHub',
    value: 'github.com/Saarmyx',
    href: 'https://github.com/Saarmyx',
  },

  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/santiagosarmiento',
    href: 'https://linkedin.com/in/santiagosarmiento',
  },
]

export function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-row reveal">
          <div className="section-label">Contacto</div>

          <div className="contact-content">
            <div>
              <h2 className="contact-heading">¿Tienes un proyecto en mente?</h2>

              <p className="contact-note">
                Disponible para proyectos freelance, colaboraciones y oportunidades remotas.
                Cuéntame qué estás construyendo.
              </p>

              <div className="contact-links">
                {links.map((link) => (
                  <div key={link.label} className="contact-link-item">
                    <span className="contact-link-label">{link.label}</span>

                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="contact-link-val"
                    >
                      {link.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="name" className="form-field-label">
                  Nombre
                </label>

                <input id="name" type="text" placeholder="Tu nombre" />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-field-label">
                  Email
                </label>

                <input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-field-label">
                  Mensaje
                </label>

                <textarea id="message" placeholder="Cuéntame sobre tu proyecto..." />
              </div>

              <button type="submit" className="form-submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
