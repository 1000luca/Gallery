import { motion } from 'motion/react'
import styles from './ArtworkCard.module.css'

export default function ArtworkCard({ artwork, onClick, index }) {
  return (
    <motion.article
      className={styles.card}
      onClick={() => onClick(artwork)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      layout
      role="button"
      tabIndex={0}
      aria-label={`${artwork.title} — ${artwork.year} 작품 상세 보기`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(artwork)}
    >
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={artwork.image}
          alt={`${artwork.title} — ${artwork.year}`}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.hoverOverlay}>
          <p className={styles.hoverTitle}>{artwork.title}</p>
          <p className={styles.hoverYear}>{artwork.year}</p>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{artwork.title}</h3>
        <p className={styles.meta}>{artwork.year} · {artwork.medium}</p>
      </div>
    </motion.article>
  )
}
