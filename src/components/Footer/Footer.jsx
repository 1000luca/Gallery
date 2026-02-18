import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.logoKr}>강명순 갤러리</p>
          <p className={styles.logoEn}>Kang Myung Soon Gallery</p>
        </div>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          © 2026 Kang Myung Soon. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
