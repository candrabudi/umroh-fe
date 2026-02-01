import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className="section" style={{ background: 'white', padding: '2rem 0' }}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15k+</span>
            <span className={styles.statLabel}>Jamaah Terlayani</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Destinasi Wisata</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>A</span>
            <span className={styles.statLabel}>Akreditasi Kemenag</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support Tim</span>
          </div>
        </div>
      </div>
    </section>
  );
}
