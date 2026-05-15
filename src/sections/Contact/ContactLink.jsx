// sections/Contact/ContactLink.jsx

export function ContactLink({ link }) {
  return (
    <div className="contact-link-item">
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
  )
}
