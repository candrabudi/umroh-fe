'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, Home, Package, BookOpen, Users, Info, 
  Phone as PhoneIcon, Instagram, Facebook, Youtube, X, Menu
} from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
      
      // Optional: Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: <Home size={22} /> },
    { href: '/packages', label: 'Paket Umroh', icon: <Package size={22} /> },
    { href: '/blog', label: 'Artikel', icon: <BookOpen size={22} /> },
    { href: '/partnership', label: 'Partnership', icon: <Users size={22} /> },
    { href: '/about-us', label: 'Tentang', icon: <Info size={22} /> },
    { href: '/contact', label: 'Kontak', icon: <PhoneIcon size={22} /> },
  ];

  return (
    <>
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}
        suppressHydrationWarning
      >
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoWrapper}>
              <img 
                src={isScrolled ? "/logo-dark.png" : "/logo-light.png"} 
                alt="SANUR INDAH TRAVEL" 
                className={styles.logoImg}
              />
            </div>
            <div className={styles.logoBrand}>
              <span className={styles.brandMain}>SANUR</span>
              <span className={styles.brandSub}>INDAH TRAVEL</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/login" className={styles.loginBtn}>
              <User size={18} />
              <span>MASUK</span>
            </Link>
            
            <button 
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`} 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} color={isScrolled ? "var(--primary)" : "white"} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavCard}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.mobileLogoInside}>
              <span className={styles.brandMain}>SANUR</span>
              <span className={styles.brandSub}>INDAH TRAVEL</span>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={styles.mobileNavLink} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={styles.mobileLinkIcon}>{link.icon}</div>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className={styles.mobileNavFooter}>
            <div className={styles.mobileContactBox}>
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
      </div>
      
      {/* Overlay Background */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
