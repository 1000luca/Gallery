import { motion } from 'motion/react'
import About from '../components/About/About'
import CareerSection from '../components/CareerSection/CareerSection'
import styles from './CareerPage.module.css'

export default function CareerPage() {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <About />
      <CareerSection />
    </motion.div>
  )
}
