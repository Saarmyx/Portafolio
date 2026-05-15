import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const cursor = document.createElement('div')

    cursor.className = 'cursor'

    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', moveCursor)

    const targets = document.querySelectorAll('a, button, .skill-item, .project-item')

    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))

      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)

      cursor.remove()
    }
  }, [])
}
