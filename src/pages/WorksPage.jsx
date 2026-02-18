import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Gallery from '../components/Gallery/Gallery'
import ArtworkModal from '../components/ArtworkModal/ArtworkModal'
import styles from './WorksPage.module.css'

export default function WorksPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [activeYear, setActiveYear] = useState(null)

  return (
    <>
      <motion.div
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Gallery
          onSelectArtwork={setSelectedArtwork}
          activeYear={activeYear}
          onYearChange={setActiveYear}
        />
      </motion.div>

      <AnimatePresence>
        {selectedArtwork && (
          <ArtworkModal
            artwork={selectedArtwork}
            activeYear={activeYear}
            onClose={() => setSelectedArtwork(null)}
            onNavigate={setSelectedArtwork}
          />
        )}
      </AnimatePresence>
    </>
  )
}
