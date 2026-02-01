'use client';

import Link from 'next/link';
import { 
  UserPlus, ShieldCheck, TrendingUp, DollarSign, 
  ArrowLeft, Mail, Phone, MapPin, User, Building2, Briefcase
} from 'lucide-react';
import styles from './Register.module.css';

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Left Side: Info - Dark & Premium */}
        <div className={styles.infoSide}>
          <div className={styles.infoContent}>
            <div className={styles.badge}>Partnership Program</div>
            <h1 className={styles.title}>Gabung Menjadi Mitra Strategis Kami</h1>
            <p className={styles.description}>
              Jelajahi potensi bisnis travel umroh dengan dukungan ekosistem digital terbaik dan bagi hasil yang transparan.
            </p>
            
            <div className={styles.benefits}>
              <div className={styles.benefitItem}>
                <div className={styles.iconBox}><DollarSign size={22} /></div>
                <div className={styles.benefitText}>
                  <b>Komisi Kompetitif</b>
                  <span>Dapatkan bagi hasil terbaik untuk setiap jamaah yang Anda daftarkan.</span>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.iconBox}><TrendingUp size={22} /></div>
                <div className={styles.benefitText}>
                  <b>Bimbingan Intensif</b>
                  <span>Training produk, digital marketing, dan strategi closing gratis.</span>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.iconBox}><ShieldCheck size={22} /></div>
                <div className={styles.benefitText}>
                  <b>Legalitas Resmi</b>
                  <span>Aman dan terpercaya. Bekerja sama langsung dengan PPIU resmi Kemenag RI.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            © 2026 PT. SANUR INDAH WISATA
          </div>
        </div>

        {/* Right Side: Form - Clean & Minimalist */}
        <div className={styles.formSide}>
          <Link href="/login" className={styles.backLink}>
            <ArrowLeft size={18} /> Kembali ke Login
          </Link>

          <div className={styles.formHeader}>
            <h2>Registrasi Agen</h2>
            <p>Lengkapi formulir di bawah untuk memulai langkah sukses Anda.</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label>Nama Lengkap</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input type="text" placeholder="Sesuai KTP" className={styles.input} />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Pekerjaan</label>
              <div className={styles.inputWrapper}>
                <Briefcase size={18} className={styles.inputIcon} />
                <input type="text" placeholder="Pekerjaan saat ini" className={styles.input} />
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Email Aktif</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input type="email" placeholder="nama@email.com" className={styles.input} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Nomor WhatsApp</label>
              <div className={styles.inputWrapper}>
                <Phone size={18} className={styles.inputIcon} />
                <input type="tel" placeholder="0812..." className={styles.input} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Domisili</label>
              <div className={styles.inputWrapper}>
                <select defaultValue="" className={styles.select}>
                  <option value="" disabled>Pilih Provinsi</option>
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                  <option>Jawa Tengah</option>
                  <option>Jawa Timur</option>
                  <option>Luar Jawa</option>
                </select>
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Alamat Lengkap</label>
              <div className={styles.inputWrapper}>
                <MapPin size={18} className={styles.inputIcon} />
                <input type="text" placeholder="Nama jalan, nomor rumah, RT/RW, Kel/Kec" className={styles.input} />
              </div>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Daftar Sebagai Agen <UserPlus size={20} />
            </button>

            <p className={styles.loginPrompt}>
              Sudah memiliki akun? <Link href="/login" className={styles.loginLink}>Masuk di sini</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
