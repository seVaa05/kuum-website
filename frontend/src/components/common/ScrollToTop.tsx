import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const previousScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }

    const frame = window.requestAnimationFrame(scrollToTop)
    const timeout = window.setTimeout(() => {
      scrollToTop()
      document.documentElement.style.scrollBehavior = previousScrollBehavior
    }, 50)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
      document.documentElement.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname])

  return null
}
