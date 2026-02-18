import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, Menu } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navigation.module.css'

const NAV_LINKS = [
  { label: '작품', to: '/works' },
  { label: '경력', to: '/career' },
  { label: '연락처', to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isLanding = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setScrolled(window.scrollY > 50)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navClass = [
    styles.nav,
    !isLanding || scrolled ? styles.navScrolled : styles.navOnHero,
  ].join(' ')

  return (
    <>
      <header className={navClass}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo} aria-label="홈으로">
            <span className={styles.logoKr}>강명순</span>
            <span className={styles.logoEn}>Kang Myung Soon</span>
          </NavLink>

          <nav aria-label="주 메뉴">
            <ul className={styles.menu}>
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      [styles.menuLink, isActive ? styles.menuLinkActive : ''].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} color="inherit" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className={styles.mobileClose}
              onClick={() => setMobileOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X size={28} />
            </button>
            <motion.button
              className={styles.mobileMenuLink}
              onClick={() => { navigate('/'); setMobileOpen(false) }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
            >
              홈
            </motion.button>
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.button
                key={to}
                className={styles.mobileMenuLink}
                onClick={() => { navigate(to); setMobileOpen(false) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.4 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
