import styles from './PackageCard.module.css';

interface PackageCardProps {
  title: string;
  date: string;
  airline: string;
  price: string;
  imageColor: string; // Gradient string
  badge?: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function PackageCard({ title, date, airline, price, imageColor, badge, subtitle }: PackageCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImage} style={{ background: imageColor }} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <div className={styles.cardContent}>
        {subtitle && <div className="text-xs font-bold text-[var(--accent)] mb-1">{subtitle}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardMeta}>
          <span>📅 {date}</span>
          <span>✈️ {airline}</span>
        </div>
        <div className={styles.divider} />
        <div className="flex justify-between items-end mt-auto">
          <div>
            <span className="text-xs text-[var(--text-muted)]">Mulai dari</span>
            <div className="text-xl font-bold text-[var(--primary)]">{price}</div>
          </div>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Detail</button>
        </div>
      </div>
    </div>
  );
}
