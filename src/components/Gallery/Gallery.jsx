import { AnimatePresence, motion } from 'motion/react'
import { artworks, getYears, getByYear } from '../../data/artworks'
import ArtworkCard from '../ArtworkCard/ArtworkCard'
import styles from './Gallery.module.css'

export default function Gallery({ onSelectArtwork, activeYear, onYearChange }) {
  const setActiveYear = onYearChange
  const years = getYears(artworks)
  const filtered = getByYear(artworks, activeYear)

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.titleWrap}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>작 품</h2>
            <div className={styles.titleLine} />
          </div>
          <p className={styles.subtitle}>Works by Kang Myung Soon</p>
        </header>

        {/* 년도 필터 */}
        <div className={styles.filters} role="tablist" aria-label="년도 필터">
          <button
            className={[styles.filterBtn, activeYear === null ? styles.filterBtnActive : ''].join(' ')}
            onClick={() => setActiveYear(null)}
            role="tab"
            aria-selected={activeYear === null}
          >
            전체
            {activeYear === null && (
              <motion.div
                className={styles.filterUnderline}
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
          {years.map(year => (
            <button
              key={year}
              className={[styles.filterBtn, activeYear === year ? styles.filterBtnActive : ''].join(' ')}
              onClick={() => setActiveYear(year)}
              role="tab"
              aria-selected={activeYear === year}
            >
              {year}
              {activeYear === year && (
                <motion.div
                  className={styles.filterUnderline}
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 작품 그리드 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear ?? 'all'}
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.length === 0 ? (
              <p className={styles.empty}>해당 년도의 작품이 없습니다</p>
            ) : (
              filtered.map((artwork, i) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={onSelectArtwork}
                  index={i}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
