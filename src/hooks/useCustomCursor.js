import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    if (window.innerWidth <= 768) return

    const cursor = document.createElement('div')

    cursor.className = 'cursor'

    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', moveCursor)

    const hoverTargets = document.querySelectorAll('a, button, .skill-item, .project-item')

    const addHover = () => cursor.classList.add('hovering')

    const removeHover = () => cursor.classList.remove('hovering')

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', addHover)

      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)

      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)

        el.removeEventListener('mouseleave', removeHover)
      })

      cursor.remove()
    }
  }, [])
}
