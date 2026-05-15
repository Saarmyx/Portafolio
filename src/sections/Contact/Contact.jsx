// sections/Contact/Contact.jsx

import './contact.css'

import { ContactLink } from './ContactLink'
import { ContactForm } from './ContactForm'

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
        <div className="section-row">
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
                  <ContactLink key={link.label} link={link} />
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
