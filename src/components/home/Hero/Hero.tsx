import styles from "./Hero.module.css";
import { ChevronDown, MapPin, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoBackground}>
        <iframe
          src="https://www.youtube.com/embed/lOt0TjkiS5E?autoplay=1&mute=1&loop=1&playlist=lOt0TjkiS5E&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.heroOverlay} />
      <div className={styles.heroGlow} />
      
      <div className={styles.heroContent}>
        <div className={styles.companyName}>
          <span className={styles.line}></span>
          SANUR INDAH TRAVEL
          <span className={styles.line}></span>
        </div>
        
        <h1 className={styles.tagline}>
          Ibadah Mudah <span className={styles.accentText}>Sesuai Syariah</span>
        </h1>

        <div className={styles.heroDescription}>
          Temukan kedamaian batin dalam perjalanan suci Anda bersama agen travel tepercaya. Pelayanan bintang 5 dengan bimbingan ibadah yang khusyuk.
        </div>

        <div className={styles.heroActions}>
          <button className={styles.primaryBtn}>Mulai Perjalanan</button>
          <button className={styles.outlineBtn}>Tentang Kami</button>
        </div>

        <div className={styles.trustStrip}>
          <div className={styles.trustLogo}>
            <ShieldCheck size={20} />
            <span>Resmi Kemenag RI</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustLogo}>
            <Star size={20} />
            <span>Fasilitas Bintang 5</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustLogo}>
            <MapPin size={20} />
            <span>Pilihan Hotel Terbaik</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Gulir Kebawah</span>
        <ChevronDown size={20} />
      </div>
      
    </section>
  );
}
