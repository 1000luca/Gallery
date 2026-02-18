import { motion } from 'motion/react'
import { Mail, Instagram } from 'lucide-react'
import pageStyles from './CareerPage.module.css'
import careerStyles from '../components/CareerSection/CareerSection.module.css'
import styles from './ContactPage.module.css'

const CONTACT_ITEMS = [
  {
    label: '이메일',
    value: 'kmspha@gmail.com',
    href: 'mailto:kmspha@gmail.com',
    icon: Mail,
    note: '전시 및 협업 문의',
  },
  {
    label: '인스타그램',
    value: '@myungsoonkang',
    href: 'https://www.instagram.com/myungsoonkang/',
    icon: Instagram,
    note: '작업 소식 및 근황',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

function SectionHeader({ ko, en }) {
  return (
    <div className={careerStyles.sectionHeader}>
      <div className={careerStyles.titleWrap}>
        <div className={careerStyles.titleLine} />
        <h3 className={careerStyles.sectionTitle}>{ko}</h3>
        <div className={careerStyles.titleLine} />
      </div>
      <p className={careerStyles.sectionSubtitle}>{en}</p>
    </div>
  )
}

export default function ContactPage() {
  return (
    <motion.div
      className={pageStyles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className={careerStyles.section}>
        <div className={careerStyles.inner}>
          <SectionHeader ko="연락처" en="Contact" />
          <div className={[careerStyles.exhibGrid, styles.contactGrid].join(' ')}>
            {CONTACT_ITEMS.map(({ label, value, href, icon: Icon, note }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label === '인스타그램' ? '_blank' : undefined}
                rel={label === '인스타그램' ? 'noreferrer noopener' : undefined}
                className={[careerStyles.exhibCard, styles.contactCard].join(' ')}
                {...fadeUp(i * 0.06)}
              >
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon size={20} />
                </span>
                <div className={styles.cardContent}>
                  <p className={careerStyles.exhibYear}>{label}</p>
                  <p className={[careerStyles.exhibTitle, styles.contactValue].join(' ')}>
                    {value}
                  </p>
                  <p className={careerStyles.exhibVenue}>{note}</p>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.p
            className={styles.helperText}
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-xl)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-caption)',
              color: 'var(--color-text-muted)',
              letterSpacing: 'var(--tracking-wide)',
            }}
            {...fadeUp(0.2)}
          >
            가격 문의는 위 연락처로 부탁드립니다.
          </motion.p>
        </div>
      </section>
    </motion.div>
  )
}
