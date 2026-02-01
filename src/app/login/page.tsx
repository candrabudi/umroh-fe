'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowLeft, Eye, EyeOff, User } from 'lucide-react';
import styles from './Login.module.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.backgroundDecor} />
      
      <Link href="/" className={styles.backHome}>
        <ArrowLeft size={18} />
        Kembali ke Beranda
      </Link>

      <div className={styles.loginCard}>
        <div className={styles.header}>
          <img src="/logo-light.png" alt="SANUR INDAH TRAVEL" className={styles.logoImage} />
          <h1 className={styles.title}>Selamat Datang</h1>
          <p className={styles.subtitle}>Akses portal keagenan dan sistem jamaah Anda dalam satu pintu yang aman.</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label>ID Agen / Email</label>
            <div className={styles.inputWrapper}>
              <User size={20} />
              <input type="text" placeholder="Masukkan ID atau Email" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Kata Sandi</label>
            <div className={styles.inputWrapper}>
              <Lock size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeButton}
                aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Link href="/forgot-password" className={styles.forgotPass}>
            Lupa Kata Sandi?
          </Link>

          <button type="submit" className={styles.btnLogin}>
            Masuk Sekarang
          </button>
        </form>

        <div className={styles.footer}>
          Belum punya akun? <Link href="/register">Daftar Keagenan</Link>
        </div>
      </div>
    </main>
  );
}
