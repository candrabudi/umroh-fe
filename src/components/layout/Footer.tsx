import { MapPin, Phone, Smartphone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <div className={styles.footerLogoContainer}>
              <img src="/logo-light.png" alt="SANUR INDAH TRAVEL" style={{ height: '70px', width: 'auto' }} />
              <div className={styles.footerLogoText}>
                SANUR<br/>INDAH TRAVEL
              </div>
            </div>
            <p className={styles.footerDesc}>
              PT. Sanur Indah Wisata<br/>
              Izin Kemenag No. 123 Tahun 2019
            </p>
            <p className={styles.footerTagline}>
              Menemani langkah suci Anda menuju Baitullah dengan pelayanan prima dan sepenuh hati.
            </p>
            
            {/* Social Media */}
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Layanan</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/packages">Paket Umroh</Link></li>
              <li><Link href="/packages">Haji Furoda</Link></li>
              <li><Link href="/packages">Wisata Halal</Link></li>
              <li><Link href="/contact">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Hubungi Kami</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} />
                <span>Jl. Kayu Putih Utara I No.55 12, Pulo Gadung, Jakarta Timur</span>
              </li>
              <li>
                <Phone size={16} />
                <span>021-4712411</span>
              </li>
              <li>
                <Smartphone size={16} />
                <span>0812 8056 7000 (WA)</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@sanurindahtravel.com</span>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Lokasi Kantor Pusat</h4>
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5298822927284!2d106.878585!3d-6.193593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4ec2838933b%3A0x6305a468e83344d!2sJl.%20Kayu%20Putih%20Utara%20I%2C%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2026 Sanur Indah Travel. All rights reserved.</p>
          <div className={styles.copyrightLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
