'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowLeft, Eye, EyeOff, User, Fingerprint } from 'lucide-react';
import styles from './Login.module.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login for now
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className={styles.page}>
      <div className={styles.backgroundDecor} />
      
      <Link href="/" className={styles.backHome}>
        <ArrowLeft size={18} />
        <span className={styles.backText}>Kembali ke Beranda</span>
      </Link>

      <div className={styles.loginCard}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <img src="/logo-light.png" alt="SANUR INDAH TRAVEL" className={styles.logoImage} />
          </div>
          <h1 className={styles.title}>Selamat Datang Kembali</h1>
          <p className={styles.subtitle}>Akses portal keagenan eksklusif Anda.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="identity">ID Agen / Email</label>
            <div className={styles.inputWrapper}>
              <User size={20} className={styles.inputIcon} />
              <input 
                id="identity"
                type="text" 
                placeholder="Masukkan ID Agen atau Email" 
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Kata Sandi</label>
            <div className={styles.inputWrapper}>
              <Lock size={20} className={styles.inputIcon} />
              <input 
                id="password"
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className={styles.input}
                required
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

          <div className={styles.formActions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              <span>Ingat Saya</span>
            </label>
            <Link href="/forgot-password" className={styles.forgotPass}>
              Lupa Kata Sandi?
            </Link>
          </div>

          <button type="submit" className={styles.btnLogin} disabled={isLoading}>
            {isLoading ? (
              <span className={styles.loadingSpinner} />
            ) : (
              <>
                <span>Masuk Sekarang</span>
                <Fingerprint size={20} />
              </>
            )}
          </button>
        </form>

        <div className={styles.divider}>
          <span>Atau akses cepat</span>
        </div>

        <div className={styles.footer}>
          Belum menjadi mitra kami? <Link href="/register" className={styles.registerLink}>Daftar Sekarang</Link>
        </div>
      </div>
    </main>
  );
}
