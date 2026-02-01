'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Update scrolled state for styling
          setIsScrolled(currentScrollY > 40);
          
          // Always stay visible
          setIsVisible(true);
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            <img 
              src={isScrolled ? "/logo-dark.png" : "/logo-light.png"} 
              alt="SANUR INDAH TRAVEL" 
              style={{ height: isScrolled ? '40px' : '56px', width: 'auto', transition: 'all 0.3s ease' }} 
              onError={(e) => {
                // Fallback if logo-dark doesn't exist
                if (isScrolled) (e.target as HTMLImageElement).style.filter = 'brightness(0) saturate(100%) invert(15%) sepia(15%) grow(0.5)';
              }}
            />
            <span className={styles.logoText}>
              SANUR<br/>INDAH TRAVEL
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Beranda</Link>
            <Link href="#packages" className={styles.navLink}>Paket</Link>
            <Link href="#halal-tour" className={styles.navLink}>Wisata</Link>
            <Link href="/about-us" className={styles.navLink}>Tentang</Link>
            <Link href="/keagenan" className={styles.navLink}>Keagenan</Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.loginBtn}>
              <User size={18} />
              <span>MASUK</span>
            </Link>
            
            <button 
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavHeader}>
          <span className={styles.logoText} style={{ color: 'white' }}>MENU</span>
          <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className={styles.mobileLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
          <Link href="#packages" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Paket Umroh</Link>
          <Link href="#halal-tour" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Wisata Halal</Link>
          <Link href="/about-us" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
          <Link href="/keagenan" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Keagenan</Link>
          <Link href="#contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Kontak</Link>
        </div>
      </div>
      
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}
