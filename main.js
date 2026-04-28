/* ─── THEME TOGGLE ─── */
const html = document.documentElement
const toggleBtn = document.getElementById('theme-toggle')
const themeIcon = document.getElementById('theme-icon')
const themeLabel = document.getElementById('theme-label')

const DARK_ICON = `<circle cx="12" cy="12" r="5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>`
const LIGHT_ICON = `<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>`

function applyTheme(dark) {
  html.setAttribute('data-theme', dark ? 'dark' : 'light')
  themeIcon.innerHTML = dark ? LIGHT_ICON : DARK_ICON
  themeLabel.textContent = dark ? 'Claro' : 'Oscuro'
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = savedTheme ? savedTheme === 'dark' : prefersDark
applyTheme(isDark)

toggleBtn?.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') !== 'dark')
})

/* ─── CURSOR PERSONALIZADO ─── */
const cursor = document.createElement('div')
cursor.className = 'cursor'
document.body.appendChild(cursor)

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})

const hoverTargets = 'a, button, .skill-item, .project-item'
document.querySelectorAll(hoverTargets).forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))
  el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
})

/* ─── HERO ENTRADA ─── */
window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.querySelector('.hero-name')?.classList.add('visible')
    document.querySelector('.hero-bottom')?.classList.add('visible')
  })
})

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

/* ─── NAV: borde al hacer scroll ─── */
const nav = document.querySelector('nav')
window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 20)
  },
  { passive: true },
)

/* ─── NAV: enlace activo según sección ─── */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')
const sections = document.querySelectorAll('section[id]')

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  },
  { rootMargin: '-40% 0px -55% 0px' },
)

sections.forEach((s) => sectionObserver.observe(s))

/* ─── FORMULARIO ─── */
const form = document.querySelector('.contact-form')
const submitBtn = form?.querySelector('.form-submit')

submitBtn?.addEventListener('click', () => {
  const inputs = form.querySelectorAll('input, textarea')
  const allFilled = [...inputs].every((i) => i.value.trim() !== '')

  if (!allFilled) {
    inputs.forEach((i) => {
      if (!i.value.trim()) {
        i.closest('.form-field').style.borderColor = '#c0392b'
        i.addEventListener('input', function fix() {
          i.closest('.form-field').style.borderColor = ''
          i.removeEventListener('input', fix)
        })
      }
    })
    return
  }

  submitBtn.textContent = 'Enviado ✓'
  submitBtn.classList.add('sent')

  setTimeout(() => {
    submitBtn.textContent = 'Enviar'
    submitBtn.classList.remove('sent')
    inputs.forEach((i) => (i.value = ''))
  }, 3000)
})
