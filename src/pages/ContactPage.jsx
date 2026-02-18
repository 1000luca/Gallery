import { motion } from 'motion/react'
import { Mail, Instagram } from 'lucide-react'
import styles from './ContactPage.module.css'

const CONTACT_ITEMS = [
  {
    label: '이메일',
    value: 'kmspha@gmail.com',
    href: 'mailto:kmspha@gmail.com',
    icon: Mail,
  },
  {
    label: '인스타그램',
    value: '@myungsoonkang',
    href: 'https://www.instagram.com/myungsoonkang/',
    icon: Instagram,
  },
]

export default function ContactPage() {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.section}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.title}>연락처</h1>
        <p className={styles.description}>
          전시 문의, 협업 제안, 작품 관련 연락은 아래 채널로 부탁드립니다.
        </p>

        <ul className={styles.list}>
          {CONTACT_ITEMS.map(({ label, value, href, icon: Icon }) => (
            <li key={label} className={styles.item}>
              <span className={styles.iconWrap} aria-hidden="true">
                <Icon size={20} />
              </span>
              <div className={styles.content}>
                <p className={styles.label}>{label}</p>
                <a
                  className={styles.link}
                  href={href}
                  target={label === '인스타그램' ? '_blank' : undefined}
                  rel={label === '인스타그램' ? 'noreferrer noopener' : undefined}
                >
                  {value}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  )
}
