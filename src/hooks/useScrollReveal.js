// src/hooks/useScrollReveal.js
// Custom hook: attaches IntersectionObserver to animate elements into view
import { useEffect } from 'react'

/**
 * Finds all elements with class `.reveal` within the document
 * and adds `.visible` when they enter the viewport.
 * Call once per page/component mount.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/**
 * Animates a number from 0 to target over ~1800ms.
 * Call once when counter enters viewport.
 */
export function animateCounter(el) {
  const target = parseInt(el.dataset.target)
  const suffix = el.dataset.suffix || ''
  const duration = 1800
  const step = target / (duration / 16)
  let current = 0
  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    el.textContent = Math.floor(current) + suffix
  }, 16)
}

/**
 * Hook to animate counters on scroll into view.
 */
export function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-target]')
    if (!counters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted')
            animateCounter(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])
}
