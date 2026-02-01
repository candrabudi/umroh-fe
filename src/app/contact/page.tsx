'use client';

import Header from '@/components/layout/Header';
import TopBar from '@/components/layout/TopBar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <TopBar />
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Hubungi Kami</span>
          <h1 className={styles.heroTitle}>Kontak <span style={{ color: 'var(--accent)' }}>Sanur</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Siap melayani pertanyaan dan konsultasi perjalanan ibadah Anda.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          {/* Left: Info */}
          <div className={styles.infoSide}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapPin size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Kantor Pusat</h3>
                <p>Jl. Kayu Putih Utara I No.55 12, Pulo Gadung,<br />Jakarta Timur, DKI Jakarta 13210</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Phone size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Telepon & WhatsApp</h3>
                <p>Pusat Layanan: +62 812 3456 7890<br />WhatsApp 24/7: +62 812 9876 5432</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Mail size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Email Resmi</h3>
                <p>info@sanurindahtravel.com<br />support@sanurindahtravel.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Clock size={24} /></div>
              <div className={styles.infoContent}>
                <h3>Jam Operasional</h3>
                <p>Senin - Jumat: 08:30 - 17:00<br />Sabtu: 08:30 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formBox}>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Kirim Pesan</h2>
              <p style={{ color: 'var(--text-muted)' }}>Isi formulir di bawah ini, tim kami akan menghubungi Anda segera.</p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" />
                </div>
                <div className={styles.formGroup}>
                  <label>Alamat Email</label>
                  <input type="email" placeholder="nama@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label>Nomor Telepon</label>
                  <input type="tel" placeholder="0812..." />
                </div>
                <div className={styles.formGroup}>
                  <label>Subjek</label>
                  <input type="text" placeholder="Topik pertanyaan" />
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label>Pesan Anda</label>
                  <textarea rows={5} placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."></textarea>
                </div>
              </div>
              <button type="submit" className={styles.btnSubmit}>
                Kirim Pesan Sekarang <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.627365242676!2d106.89422019999999!3d-6.180604799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c692345d03%3A0x9e7141e34c6562de!2sSANUR%20INDAH%20TRAVEL!5e0!3m2!1sid!2sid!4v1769967253075!5m2!1sid!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
