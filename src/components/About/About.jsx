import { motion } from 'motion/react'
import styles from './About.module.css'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.titleWrap}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>소개</h2>
            <div className={styles.titleLine} />
          </div>
          <p className={styles.subtitle}>About the Artist</p>
        </header>

        <div className={styles.content}>
          <motion.div
            className={styles.profileWrap}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className={styles.profilePlaceholder} aria-hidden="true">
              <span className={styles.profileInitials}>강</span>
            </div>
          </motion.div>

          <div className={styles.textContent}>
            <motion.h3
              className={styles.name}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.15}
              viewport={{ once: true, margin: '-80px' }}
            >
              <span className={styles.nameKo}>강명순</span>
              <span className={styles.nameEn}>(Kang Myung Soon)</span>
            </motion.h3>

            <motion.p
              className={styles.bio}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true, margin: '-80px' }}
            >
              혼합매체를 통해 자연과 생명의 순환을 표현하는 작가. 한지, 아크릴, 오일파스텔 등 다양한 재료를 겹겹이 쌓아 올리며 꽃과 자연의 아름다움을 캔버스에 담아낸다. 1986년부터 현재까지 '기억의 정원' 시리즈를 통해 자연의 숨결과 시간의 흔적을 탐구해왔다.
            </motion.p>

            <motion.blockquote
              className={styles.quote}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.45}
              viewport={{ once: true, margin: '-80px' }}
            >
              "모든 꽃잎에는 시간이 깃들어 있고, 모든 색에는 감정이 스며있다."
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
