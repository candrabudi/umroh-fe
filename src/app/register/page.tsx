'use client';

import Link from 'next/link';
import { 
  UserPlus, ShieldCheck, TrendingUp, DollarSign, 
  ArrowLeft, Mail, Phone, MapPin, User
} from 'lucide-react';
import styles from './Register.module.css';

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <Link href="/login" className="flex items-center gap-2 absolute top-8 left-8 text-slate-400 hover:text-primary transition-colors font-semibold" style={{ textDecoration: 'none' }}>
        <ArrowLeft size={18} /> Kembali Login
      </Link>

      <div className={styles.container}>
        {/* Left Side: Info */}
        <div className={styles.infoSide}>
          <span className={styles.badge}>Partnership Program</span>
          <h1 className={styles.title}>Gabung Menjadi Mitra Strategis Kami</h1>
          
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.iconBox}><DollarSign size={20} /></div>
              <div>
                <b className="block">Komisi Kompetitif</b>
                <span className="text-sm opacity-60">Dapatkan bagi hasil terbaik untuk setiap jamaah.</span>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconBox}><TrendingUp size={20} /></div>
              <div>
                <b className="block">Bimbingan Intensif</b>
                <span className="text-sm opacity-60">Training produk dan strategi marketing gratis.</span>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconBox}><ShieldCheck size={20} /></div>
              <div>
                <b className="block">Legalitas Resmi</b>
                <span className="text-sm opacity-60">Bekerja dengan PPIU resmi Kemenag RI.</span>
              </div>
            </div>
          </div>

          <div className="mt-auto opacity-40 text-xs">
            © 2026 PT. SANUR INDAH WISATA
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formSide}>
          <div className={styles.formHeader}>
            <h2>Registrasi Agen</h2>
            <p>Lengkapi data diri Anda untuk memulai kemitraan.</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Sesuai KTP" />
            </div>
            <div className={styles.formGroup}>
              <label>Pekerjaan</label>
              <input type="text" placeholder="Pekerjaan saat ini" />
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Email Aktif</label>
              <input type="email" placeholder="nama@email.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Nomor WhatsApp</label>
              <input type="tel" placeholder="0812..." />
            </div>
            <div className={styles.formGroup}>
              <label>Provinsi</label>
              <select defaultValue="">
                <option value="" disabled>Pilih Provinsi</option>
                <option>DKI Jakarta</option>
                <option>Jawa Barat</option>
                <option>Jawa Tengah</option>
                <option>Jawa Timur</option>
              </select>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Alamat Lengkap</label>
              <input type="text" placeholder="Nama jalan, nomor rumah, RT/RW" />
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Daftar Sebagai Agen
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-slate-500">
            Sudah terdaftar? <Link href="/login" className="text-primary font-bold">Masuk di sini</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
