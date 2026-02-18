import { useState } from 'react'
import { motion } from 'motion/react'
import {
  awards,
  soloExhibitions,
  groupExhibitions,
  collections,
  memberships,
  otherCareer,
} from '../../data/career'
import styles from './CareerSection.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

function SectionHeader({ ko, en }) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.titleWrap}>
        <div className={styles.titleLine} />
        <h3 className={styles.sectionTitle}>{ko}</h3>
        <div className={styles.titleLine} />
      </div>
      <p className={styles.sectionSubtitle}>{en}</p>
    </div>
  )
}

/* ─── 수상경력 타임라인 ─── */
function Awards() {
  const MAX = 10
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? awards : awards.slice(0, MAX)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader ko="수상경력" en="Awards & Recognition" />
        <div className={styles.timeline}>
          {visible.map((a, i) => (
            <motion.div key={i} className={styles.timelineItem} {...fadeUp(i * 0.04)}>
              <span className={styles.timelineYear}>{a.year}</span>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <p className={styles.timelineTitle}>{a.title}</p>
                {a.venue && <p className={styles.timelineVenue}>{a.venue}</p>}
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && awards.length > MAX && (
          <motion.div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }} {...fadeUp(0.3)}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-caption)',
                color: 'var(--color-accent)',
                background: 'none',
                border: '1px solid var(--color-accent)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 24px',
                cursor: 'pointer',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              전체 수상경력 보기 ({awards.length}개)
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

/* ─── 전시경력 ─── */
function Exhibitions() {
  const [tab, setTab] = useState('solo')
  const list = tab === 'solo' ? soloExhibitions : groupExhibitions

  return (
    <section className={`${styles.section} ${styles.altBg}`}>
      <div className={styles.inner}>
        <SectionHeader ko="전시경력" en="Exhibition History" />

        <div className={styles.tabs}>
          <button
            className={[styles.tab, tab === 'solo' ? styles.tabActive : ''].join(' ')}
            onClick={() => setTab('solo')}
          >
            개인전 ({soloExhibitions.length})
          </button>
          <button
            className={[styles.tab, tab === 'group' ? styles.tabActive : ''].join(' ')}
            onClick={() => setTab('group')}
          >
            단체전 주요경력
          </button>
        </div>

        <div className={styles.exhibGrid}>
          {list.map((ex, i) => (
            <motion.div key={i} className={styles.exhibCard} {...fadeUp(i * 0.03)}>
              <p className={styles.exhibYear}>{ex.year}</p>
              <p className={styles.exhibTitle}>{ex.title}</p>
              <p className={styles.exhibVenue}>{ex.venue}{ex.city ? ` · ${ex.city}` : ''}</p>
            </motion.div>
          ))}
        </div>
        {tab === 'group' && (
          <motion.p
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-xl)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-caption)',
              color: 'var(--color-text-muted)',
              letterSpacing: 'var(--tracking-wide)',
            }}
            {...fadeUp(0.3)}
          >
            그 외 단체전 440여 회
          </motion.p>
        )}
      </div>
    </section>
  )
}

/* ─── 소장처 & 소속 ─── */
function CollectionsMemberships() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.twoCol}>
          <motion.div className={styles.listBlock} {...fadeUp(0)}>
            <p className={styles.listBlockTitle}>작품소장처</p>
            {collections.map((c, i) => (
              <motion.p key={i} className={styles.listItem} {...fadeUp(i * 0.05)}>
                {c}
              </motion.p>
            ))}
          </motion.div>
          <motion.div className={styles.listBlock} {...fadeUp(0.1)}>
            <p className={styles.listBlockTitle}>소속단체</p>
            {memberships.map((m, i) => (
              <motion.p key={i} className={styles.listItem} {...fadeUp(i * 0.05)}>
                {m}
              </motion.p>
            ))}
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p className={styles.listBlockTitle}>기타경력</p>
              {otherCareer.map((o, i) => (
                <motion.div key={i} className={styles.otherItem} {...fadeUp(i * 0.05)}>
                  <span className={styles.otherYear}>{o.year}</span>
                  <span className={styles.otherText}>{o.content}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function CareerSection() {
  return (
    <>
      <Awards />
      <Exhibitions />
      <CollectionsMemberships />
    </>
  )
}
