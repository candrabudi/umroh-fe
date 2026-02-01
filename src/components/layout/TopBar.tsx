import { Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topBar} suppressHydrationWarning>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <a href="tel:+6281234567890" className={styles.topLink}>
            <Phone size={14} />
            <span>+62 812 3456 7890</span>
          </a>
          <div className={styles.divider} />
          <a href="mailto:info@sanurindahtravel.com" className={styles.topLink}>
            <Mail size={14} />
            <span>info@sanurindahtravel.com</span>
          </a>
        </div>

        <div className={styles.socialInfo}>
          <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={14} /></a>
          <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={14} /></a>
          <a href="#" className={styles.socialLink} aria-label="Youtube"><Youtube size={14} /></a>
        </div>
      </div>
    </div>
  );
}
