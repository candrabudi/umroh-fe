import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Shield, Target, Heart, Users, Award, BookOpen, Fingerprint, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Modern Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Spiritual Journey" 
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Indah • Aman • Terpercaya</span>
          <h1 className={styles.heroTitle}>
            Mendampingi Perjalanan <br />
            <span className={styles.accent}>Menuju Ridho-Nya</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Berdedikasi memberikan pelayanan Umroh dan Haji terbaik dengan bimbingan 
            ibadah yang sesuai tuntunan Sunnah Rasulullah ﷺ.
          </p>
        </div>
      </section>

      {/* Brand Identity / Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.storyContent}>
              <div className={styles.heroBadge} style={{ background: 'rgba(26, 35, 39, 0.05)', color: 'var(--primary)', borderColor: 'rgba(0,0,0,0.1)' }}>Our History</div>
              <h2>Melayani Lebih Dari Sekedar <span className={styles.accent} style={{ display: 'block' }}>Perjalanan Wisata</span></h2>
              <div className={styles.storyText}>
                <p>
                  <strong>Sanur Indah Travel</strong> berdiri dengan satu komitmen utama: Mengembalikan esensi ibadah kepada kenyamanan dan kepatuhan syariat. Kami percaya setiap jamaah adalah tamu Allah yang berhak mendapatkan kemuliaan dalam pelayanannya.
                </p>
                <div className={styles.highlightCard}>
                  <Quote size={40} className="absolute top-8 left-8 opacity-10" />
                  Kepercayaan yang diberikan ribuan jamaah setiap tahunnya adalah amanah yang kami jaga dengan integritas dan profesionalitas tinggi.
                </div>
                <p>
                  Dengan bimbingan para asatidz yang berkompeten, kami memastikan setiap tahapan manasik hingga pelaksanaan ibadah di tanah suci berjalan sesuai dengan dalil yang shahih, demi mengejar Umroh yang Maqbula dan Haji yang Mabrur.
                </p>
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

          {/* Floating Stats */}
          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Tahun Melayani</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15K+</span>
                <span className={styles.statLabel}>Jamaah Puas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Resmi Kemenag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Dark Theme Transition */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <div className={styles.heroBadge} style={{ marginBottom: '2rem' }}>Prinsip Utama</div>
            <h2>Mengapa Pilih <span className={styles.accent}>Sanur Travel?</span></h2>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Fingerprint size={40} /></div>
              <h3>Bimbingan Syar'i</h3>
              <p>Setiap program dikurasi ketat oleh dewan syariah kami untuk memastikan seluruh rukun dan wajib ibadah sesuai Sunnah.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Shield size={40} /></div>
              <h3>Aman & Legal</h3>
              <p>Memiliki izin PPIU dan PIHK resmi dari Kementerian Agama RI. Keamanan dana dan keberangkatan Anda terjamin secara hukum.</p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Sparkles size={40} /></div>
              <h3>Layanan Premium</h3>
              <p>Akomodasi hotel bintang 5 dengan jarak tempuh ke Masjidil Haram yang minimalis, demi menjaga stamina ibadah Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership Section */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.heroBadge} style={{ background: 'rgba(26, 35, 39, 0.05)', color: 'var(--primary)' }}>Kemitraan Strategis</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', margin: '2rem 0', color: 'var(--primary)' }}>
            Standar Kualitas <span className={styles.accent}>Global</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            Kami bekerjasama dengan ekosistem travel internasional terbaik untuk memastikan kenyamanan Anda dari tanah air hingga tanah suci.
          </p>
          
          <div className={styles.partnersGrid}>
            <span className={styles.partnerLogo}>SAUDIA</span>
            <span className={styles.partnerLogo}>GARUDA</span>
            <span className={styles.partnerLogo}>HILTON</span>
            <span className={styles.partnerLogo}>MARRIOTT</span>
            <span className={styles.partnerLogo}>ACCOR</span>
            <span className={styles.partnerLogo}>ANAS</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
