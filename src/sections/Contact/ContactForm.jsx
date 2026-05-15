// sections/Contact/ContactForm.jsx

import { useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = form.name.trim() && form.email.trim() && form.message.trim()

    if (!isValid) return

    setSent(true)

    setTimeout(() => {
      setSent(false)

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 2500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name" className="form-field-label">
          Nombre
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email" className="form-field-label">
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message" className="form-field-label">
          Mensaje
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`}>
        {sent ? 'Enviado ✓' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
