import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Runs on every route change. If the URL has a hash (e.g. /#courses),
// scrolls that section into view once it's mounted; otherwise scrolls
// to the top of the new page. Keeps in-page anchor nav and cross-page
// nav (e.g. from a Course Detail page back to Home) both working.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // wait a tick for the target page to render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window.scrollTo ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}
