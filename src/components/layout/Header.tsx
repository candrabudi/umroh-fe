'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, Home, Package, BookOpen, Users, Info, 
  Phone as PhoneIcon, Mail, Instagram, Facebook, Youtube, X 
} from 'lucide-react';
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
            <Link href="/packages" className={styles.navLink}>Paket</Link>
            <Link href="/blog" className={styles.navLink}>Artikel</Link>
            <Link href="/keagenan" className={styles.navLink}>Keagenan</Link>
            <Link href="/about-us" className={styles.navLink}>Tentang</Link>
            <Link href="/contact" className={styles.navLink}>Kontak</Link>
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
          <span className={styles.logoText} style={{ color: 'white' }}>MENU UTAMA</span>
          <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.mobileLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><Home size={22} /></div>
            <span>Beranda</span>
          </Link>
          <Link href="/packages" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><Package size={22} /></div>
            <span>Paket Umroh</span>
          </Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><BookOpen size={22} /></div>
            <span>Artikel Islami</span>
          </Link>
          <Link href="/keagenan" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><Users size={22} /></div>
            <span>Kemitraan Agen</span>
          </Link>
          <Link href="/about-us" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><Info size={22} /></div>
            <span>Tentang Kami</span>
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
            <div className={styles.mobileLinkIcon}><PhoneIcon size={22} /></div>
            <span>Hubungi Kami</span>
          </Link>
        </div>

        <div className={styles.mobileNavFooter}>
          <div className={styles.mobileContactInfo}>
            <p>Konsultasi 24/7:</p>
            <a href="tel:+6281234567890" className={styles.mobilePhone}>+62 812 3456 7890</a>
          </div>
          <div className={styles.mobileSocials}>
            <Link href="#" className={styles.socialIcon}><Instagram size={20} /></Link>
            <Link href="#" className={styles.socialIcon}><Facebook size={20} /></Link>
            <Link href="#" className={styles.socialIcon}><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}
