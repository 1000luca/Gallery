import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import ArtworkModal from '../components/ArtworkModal/ArtworkModal'

export default function LandingPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [activeYear, setActiveYear] = useState(null)

  return (
    <>
      <Hero />
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
