import { useEffect, useRef } from 'react'

const ANIM_DURATION = 850
const EDGE_TOLERANCE = 4
const MIN_DELTA = 5
const MIN_SWIPE = 30

export default function useSnapScroll() {
  const animatingRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const smoothTo = (targetY) => {
      const startY = window.scrollY
      const distance = targetY - startY
      if (Math.abs(distance) < 1) return
      const startTime = performance.now()
      animatingRef.current = true

      const step = (now) => {
        const t = Math.min((now - startTime) / ANIM_DURATION, 1)
        window.scrollTo(0, startY + distance * easeInOutCubic(t))
        if (t < 1) {
          requestAnimationFrame(step)
        } else {
          animatingRef.current = false
        }
      }
      requestAnimationFrame(step)
    }

    const getSections = () =>
      Array.from(document.querySelectorAll('main > section'))

    const findCurrentIndex = (sections, scrollY) => {
      for (let i = 0; i < sections.length; i++) {
        const top = sections[i].offsetTop
        const bottom = top + sections[i].offsetHeight
        if (scrollY + 1 < bottom) return i
      }
      return sections.length - 1
    }

    const trySnap = (direction) => {
      const sections = getSections()
      if (sections.length === 0) return false

      const scrollY = window.scrollY
      const vh = window.innerHeight
      const idx = findCurrentIndex(sections, scrollY)
      const cur = sections[idx]
      const curTop = cur.offsetTop
      const curBottom = curTop + cur.offsetHeight

      if (cur.offsetHeight > vh) {
        if (direction > 0 && scrollY + vh < curBottom - EDGE_TOLERANCE) return false
        if (direction < 0 && scrollY > curTop + EDGE_TOLERANCE) return false
      }

      const targetIdx = idx + direction
      if (targetIdx < 0 || targetIdx >= sections.length) return false

      smoothTo(sections[targetIdx].offsetTop)
      return true
    }

    const onWheel = (e) => {
      if (animatingRef.current) {
        e.preventDefault()
        return
      }
      if (Math.abs(e.deltaY) < MIN_DELTA) return

      const direction = e.deltaY > 0 ? 1 : -1
      const sections = getSections()
      if (sections.length === 0) return

      const scrollY = window.scrollY
      const vh = window.innerHeight
      const idx = findCurrentIndex(sections, scrollY)
      const cur = sections[idx]
      const curTop = cur.offsetTop
      const curBottom = curTop + cur.offsetHeight

      if (cur.offsetHeight > vh) {
        if (direction > 0 && scrollY + vh < curBottom - EDGE_TOLERANCE) return
        if (direction < 0 && scrollY > curTop + EDGE_TOLERANCE) return
      }

      e.preventDefault()
      trySnap(direction)
    }

    let touchStartY = null
    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return
      touchStartY = e.touches[0].clientY
    }
    const onTouchMove = (e) => {
      if (animatingRef.current) e.preventDefault()
    }
    const onTouchEnd = (e) => {
      if (touchStartY === null || animatingRef.current) {
        touchStartY = null
        return
      }
      const dy = touchStartY - e.changedTouches[0].clientY
      touchStartY = null
      if (Math.abs(dy) < MIN_SWIPE) return
      trySnap(dy > 0 ? 1 : -1)
    }

    const onKeyDown = (e) => {
      if (animatingRef.current) return
      const map = { PageDown: 1, PageUp: -1, ArrowDown: 1, ArrowUp: -1, ' ': 1 }
      const dir = map[e.key]
      if (!dir) return
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (trySnap(dir)) e.preventDefault()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
