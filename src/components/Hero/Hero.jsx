import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const bgRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const y = window.scrollY * 0.3
      bgRef.current.style.transform = `translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavigate = (path) => navigate(path)

  return (
    <section className={styles.hero} aria-label="히어로 섹션">
      <div ref={bgRef} className={styles.bg} role="img" aria-label="강명순 대표작" />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.h1 className={styles.nameKr} {...fadeUp(0)}>
          강 명 순
        </motion.h1>

        <motion.p className={styles.nameEn} {...fadeUp(0.2)}>
          Kang Myung Soon
        </motion.p>

        <motion.p className={styles.quote} {...fadeUp(0.4)}>
          "자연의 숨결을 캔버스에 담다"
        </motion.p>

        <motion.div className={styles.ctaGroup} {...fadeUp(0.6)}>
          <motion.button
            className={styles.cta}
            onClick={() => handleNavigate('/works')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            작품 보기
          </motion.button>
          <motion.button
            className={styles.cta}
            onClick={() => handleNavigate('/career')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            작가 소개
          </motion.button>
          <motion.button
            className={styles.cta}
            onClick={() => handleNavigate('/contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            연락처
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
