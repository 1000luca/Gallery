import { useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { getByYear } from '../../data/artworks'
import { artworks } from '../../data/artworks'
import styles from './ArtworkModal.module.css'

export default function ArtworkModal({ artwork, activeYear, onClose, onNavigate }) {
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  const currentList = getByYear(artworks, activeYear)
  const currentIndex = currentList.findIndex(a => a.id === artwork.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < currentList.length - 1

  const handlePrev = useCallback(() => {
    if (hasPrev) onNavigate(currentList[currentIndex - 1])
  }, [hasPrev, currentIndex, currentList, onNavigate])

  const handleNext = useCallback(() => {
    if (hasNext) onNavigate(currentList[currentIndex + 1])
  }, [hasNext, currentIndex, currentList, onNavigate])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, handlePrev, handleNext])

  // Focus trap
  useEffect(() => {
    const modal = document.getElementById('artwork-modal')
    if (!modal) return
    const focusable = modal.querySelectorAll('button, [tabindex]:not([tabindex="-1"])')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const trap = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    modal.addEventListener('keydown', trap)
    return () => modal.removeEventListener('keydown', trap)
  }, [artwork])

  return (
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        id="artwork-modal"
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.imageSection}>
          <img
            className={styles.image}
            src={artwork.image}
            alt={`${artwork.title} — ${artwork.year}`}
            decoding="async"
          />
        </div>

        <div className={styles.infoSection}>
          <button
            ref={closeRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="모달 닫기"
          >
            <X size={18} />
          </button>

          <div>
            <h2 id="modal-title" className={styles.title}>{artwork.title}</h2>
            <p className={styles.titleEn}>{artwork.titleEn}</p>
          </div>

          <div className={styles.yearDivider}>
            <div className={styles.yearLine} />
            <span className={styles.year}>{artwork.year}</span>
            <div className={styles.yearLine} />
          </div>

          <div className={styles.metaList}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>크기</span>
              <span className={styles.metaValue}>{artwork.dimensions}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>매체</span>
              <span className={styles.metaValue}>{artwork.medium}</span>
            </div>
          </div>

          <p className={styles.description}>{artwork.description}</p>

          <div className={styles.navigation}>
            <button
              className={styles.navBtn}
              onClick={handlePrev}
              disabled={!hasPrev}
              aria-label="이전 작품"
            >
              <ChevronLeft size={16} />
              이전 작품
            </button>
            <button
              className={styles.navBtn}
              onClick={handleNext}
              disabled={!hasNext}
              aria-label="다음 작품"
            >
              다음 작품
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
