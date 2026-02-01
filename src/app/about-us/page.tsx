import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Shield, Target, Heart, Users, Award, BookOpen, Fingerprint } from 'lucide-react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Modern Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Spiritual Journey" 
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Our Story</span>
          <h1 className={styles.heroTitle}>
            Wujudkan Perjalanan Suci <br />
            <span className={styles.accent}>Sesuai Sunnah</span>
          </h1>
        </div>
      </section>

      {/* Brand Identity / Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.storyContent}>
              <div className={styles.heroBadge}>Independence & Trust</div>
              <h2>Melayani Lebih Dari Sekedar <span className={styles.accent}>Perjalanan</span></h2>
              <div className={styles.storyText}>
                <p>
                  <strong>Sanur Indah Travel</strong> lahir dari visi sederhana: mengembalikan esensi perjalanan ibadah kepada ketulusan dan kepatuhan syariat (Sunnah). Kami bukan sekadar agen perjalanan; kami adalah mitra spiritual Anda.
                </p>
                <div className={styles.highlightCard}>
                  "Kekhusyukan Anda adalah prioritas kami. Setiap detail perjalanan dikurasi untuk kenyamanan fisik dan ketenangan jiwa."
                </div>
                <p style={{ marginTop: '2rem' }}>
                  Dengan pengalaman bertahun-tahun melayani ribuan jamaah, kami memahami bahwa setiap perjalanan adalah unik. Itulah mengapa kami mengutamakan bimbingan personal dan fasilitas premium di setiap langkah Anda.
                </p>
              </div>

              <div className={styles.statsSection}>
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Years Experience</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>15k+</span>
                    <span className={styles.statLabel}>Happy Pilgrims</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Success Rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.showcase}>
              <div className={styles.imageOverlay} />
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sanur Indah Experience" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <div className={styles.heroBadge}>Core Principles</div>
            <h2>Fondasi Layanan <span className={styles.accent}>Kami</span></h2>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Fingerprint size={32} /></div>
              <h3>Indetitas Syar'i</h3>
              <p>Seluruh program perjalanan dipandu oleh Ustadz berpengalaman yang memastikan setiap rukun ibadah sesuai dengan Al-Qur'an dan Sunnah.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Shield size={32} /></div>
              <h3>Keamanan Finansial</h3>
              <p>Transparansi penuh mulai dari pembayaran hingga keberangkatan. Dana Anda aman karena kami memiliki legalitas resmi PPIU & PIHK.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Award size={32} /></div>
              <h3>Layanan Premium</h3>
              <p>Pilihan hotel terdekat dengan Masjidil Haram dan Masjid Nabawi, serta transportasi yang nyaman untuk kenyamanan ibadah Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership Section */}
      <section className={styles.partnersSection}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <div className={styles.heroBadge}>Legacy</div>
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--primary)' }}>Bekerja Sama Dengan <span className={styles.accent}>Terbaik</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Kami menjalin kemitraan strategis dengan maskapai penerbangan internasional dan jaringan hotel bintang 5 di Arab Saudi untuk menjamin kualitas layanan yang tak tertandingi.
          </p>
          
          <div className={styles.partnersGrid}>
            <span className={styles.partnerLogo}>SAUDIA</span>
            <span className={styles.partnerLogo}>GARUDA</span>
            <span className={styles.partnerLogo}>HILTON</span>
            <span className={styles.partnerLogo}>MARRIOTT</span>
            <span className={styles.partnerLogo}>ACCOR</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
